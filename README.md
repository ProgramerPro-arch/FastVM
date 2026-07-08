<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastVM - Cloud Virtualization for Discord</title>
    <style>
        :root {
            --bg-color: #0d1117;
            --text-color: #c9d1d9;
            --accent-color: #58a6ff;
            --border-color: #30363d;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            margin: 0;
            padding: 20px;
        }
        .container { max-width: 800px; margin: 0 auto; }
        header { text-align: center; padding: 50px 0; border-bottom: 1px solid var(--border-color); }
        h1 { color: #fff; font-size: 2.5rem; margin-bottom: 0.5rem; }
        .tagline { font-size: 1.2rem; color: #8b949e; }
        section { margin: 40px 0; }
        h2 { border-bottom: 1px solid var(--border-color); padding-bottom: 10px; margin-top: 30px; color: #fff; }
        .features-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px; }
        .feature-card { background: #161b22; padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); }
        code { background: #161b22; padding: 2px 5px; border-radius: 4px; color: #ff7b72; font-family: monospace; }
        pre { background: #161b22; padding: 15px; border-radius: 8px; overflow-x: auto; border: 1px solid var(--border-color); }
        footer { text-align: center; font-size: 0.9rem; color: #8b949e; margin-top: 50px; }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>FastVM</h1>
        <p class="tagline">Your personal cloud desktop, integrated directly into Discord.</p>
    </header>

    <section id="about">
        <h2>About The Project</h2>
        <p>FastVM is an open-source cloud virtualization platform designed to bridge the gap between cloud computing and social communication. By leveraging the Discord Embedded App SDK, FastVM allows users to launch and control personal virtual machines (VMs) as a native Discord Activity.</p>
    </section>

    <section id="features">
        <h2>Key Features</h2>
        <div class="features-grid">
            <div class="feature-card">🔐 <b>Discord Auth</b>: Seamless login via OAuth.</div>
            <div class="feature-card">🖥️ <b>Remote Desktop</b>: Low-latency VNC powered by noVNC.</div>
            <div class="feature-card">⌨️ <b>Full Control</b>: Precise keyboard and mouse input mapping.</div>
            <div class="feature-card">💾 <b>Persistence</b>: VMs that retain state across sessions.</div>
        </div>
    </section>

    <section id="tech-stack">
        <h2>Technology Stack</h2>
        <ul>
            <li><b>Frontend</b>: Vite, React, noVNC</li>
            <li><b>Integration</b>: Discord Embedded App SDK</li>
            <li><b>Middleware</b>: Node.js, Websockify</li>
            <li><b>Virtualization</b>: VMware ESXi (Current), Proxmox (Planned)</li>
        </ul>
    </section>

    <section id="installation">
        <h2>Installation</h2>
        <pre><code>git clone https://github.com/yourusername/fastvm.git
cd fastvm
npm install
node bridge.js
npm run dev</code></pre>
    </section>

    <section id="license">
        <h2>License</h2>
        <p>This project is licensed under the <b>GNU Affero General Public License v3.0</b>.</p>
    </section>

    <footer>
        <p>Built for the future of cloud computing on Discord.</p>
    </footer>
</div>

</body>
</html>
