import { DiscordSDK } from "@discord/embedded-app-sdk";
import RFB from "@novnc/novnc";
import "./style.css";

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);

let auth = null;
window.rfb = null;

// ------------------------
// Discord
// ------------------------

async function setupDiscordSdk() {
    await discordSdk.ready();

    const { code } = await discordSdk.commands.authorize({
        client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
        response_type: "code",
        state: "",
        prompt: "none",
        scope: ["identify", "guilds"],
    });

    const response = await fetch("/api/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
    });

    if (!response.ok) {
        throw new Error("Nie udało się pobrać tokenu.");
    }

    const { access_token } = await response.json();

    auth = await discordSdk.commands.authenticate({
        access_token,
    });

    if (!auth) {
        throw new Error("Błąd autoryzacji Discord.");
    }
}

// ------------------------
// VNC
// ------------------------

function connectVNC() {
    try {
        const container = document.getElementById("vnc-screen");

        if (!container) {
            throw new Error("Nie znaleziono elementu #vnc-screen");
        }

        const wsProtocol =
            window.location.protocol === "https:" ? "wss://" : "ws://";

        const wsUrl = `${wsProtocol}${window.location.host}/websockify`;

        console.log("Łączenie z:", wsUrl);

        window.rfb = new RFB(container, wsUrl, {
            credentials: {
                password: "123",
            },
            wsProtocols: ["binary", "base64"],
        });

        window.rfb.scaleViewport = true;
        window.rfb.resizeSession = true;
        window.rfb.viewOnly = false;

        // Automatyczne wysłanie hasła jeśli serwer o nie poprosi
        window.rfb.addEventListener("credentialsrequired", () => {
            console.log("Serwer poprosił o hasło.");

            window.rfb.sendCredentials({
                password: "123",
            });
        });

        // Połączono
        window.rfb.addEventListener("connect", () => {
            console.log("✅ Połączono z VNC!");

            const info = document.getElementById("discord-info");

            if (info) {
                info.innerText += " | 🟢 Połączono z VNC";
            }

            // Daj chwilę na utworzenie canvasa
            setTimeout(() => {
                const canvas = container.querySelector("canvas");

                if (canvas) {
                    canvas.tabIndex = 0;
                    canvas.focus();
                }

                window.rfb.focus();
            }, 100);
        });

        // Rozłączono
        window.rfb.addEventListener("disconnect", (e) => {
            console.error("Rozłączono:", e.detail);

            const info = document.getElementById("discord-info");

            if (info) {
                info.innerText += " | 🔴 Rozłączono";
            }
        });

        // Błąd bezpieczeństwa
        window.rfb.addEventListener("securityfailure", (e) => {
            console.error("Security failure:", e.detail);
        });

        // Kliknięcie = ponowny fokus
        container.addEventListener("click", () => {
            const canvas = container.querySelector("canvas");

            if (canvas) {
                canvas.focus();
            }

            if (window.rfb) {
                window.rfb.focus();
            }
        });

        // Powrót do zakładki
        window.addEventListener("focus", () => {
            if (!window.rfb) return;

            const canvas = container.querySelector("canvas");

            if (canvas) {
                canvas.focus();
            }

            window.rfb.focus();
        });

        // Zmiana widoczności zakładki
        document.addEventListener("visibilitychange", () => {
            if (!document.hidden && window.rfb) {
                const canvas = container.querySelector("canvas");

                if (canvas) {
                    canvas.focus();
                }

                window.rfb.focus();
            }
        });

    } catch (err) {
        console.error(err);
    }
}

// ------------------------
// Start
// ------------------------

(async () => {
    try {
        await setupDiscordSdk();

        const info = document.getElementById("discord-info");

        if (info) {
            info.innerText = `Zalogowano jako: ${auth.user.username}`;
        }

        connectVNC();

    } catch (err) {
        console.error(err);

        const info = document.getElementById("discord-info");

        if (info) {
            info.innerText = `Błąd: ${err.message}`;
        }
    }
})();