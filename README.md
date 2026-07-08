FastVM
About The Project
FastVM is an open-source cloud virtualization platform designed to bridge the gap between cloud computing and social communication. By leveraging the Discord Embedded App SDK, FastVM allows users to launch and control personal virtual machines (VMs) as a native Discord Activity.

Our goal is to make personal cloud desktops accessible to everyone, eliminating the need for complex remote desktop software and dedicated client installations.

Key Features
🔐 Discord Authentication: Seamless login using Discord OAuth.

🖥️ Interactive Remote Desktop: Low-latency VNC integration powered by noVNC.

⌨️ Full Control: Precise keyboard and mouse input mapping.

⚡ Real-time Streaming: Smooth screen capture and display.

💾 Persistent Storage: Personal VMs that retain state across sessions.

🏗️ Extensible: Designed to integrate with enterprise hypervisors.

Architecture
The following diagram illustrates how FastVM bridges the gap between the Discord client and your virtualized infrastructure.

Fragment kodu
graph LR
    User[Discord Client] -->|WSS/Websockify| Proxy[FastVM Proxy/Bridge]
    Proxy -->|VNC Protocol| Hypervisor[Hypervisor: VMware/Proxmox]
    DiscordSDK -.->|Auth/Context| User
Technology Stack
Frontend: Vite, React, noVNC

Discord Integration: Discord Embedded App SDK

Middleware: Node.js, Websockify

Virtualization: VMware ESXi (Current), Proxmox VE (Planned)

How It Works
Authentication: The app authenticates the user via Discord OAuth to ensure secure access.

Bridging: The bridge.js middleware acts as a proxy, converting secure WebSockets from the Discord Activity into standard VNC traffic.

Visualization: The noVNC client renders the remote framebuffer within the Discord interface.

Installation
Prerequisites
Node.js v18+

A running virtualization host (VMware/Proxmox)

Discord Developer Portal application credentials

Setup
Bash
# Clone the repository
git clone https://github.com/ProgramerPro-arch/fastvm.git
cd fastvm

# Install dependencies
npm install

# Run the bridge
node bridge.js

# Run the frontend
npm run dev
Configuration
Create a .env file in the root directory:

And create an .env file and fill with that
VITE_DISCORD_CLIENT_ID=your_client_id_here
VNC_HOST=your_local_vnc_ip_machine
VNC_PORT=your_port_default_is_5900
Roadmap
[x] Discord OAuth authentication

[x] Basic VNC rendering via noVNC

[x] Keyboard/Mouse input handling

[ ] Automatic VM provisioning from templates (Planned)

[ ] Audio streaming support (Planned)

[ ] Proxmox VE hypervisor integration (Planned)

Security
FastVM operates on the principle of least privilege. We recommend:

Running the bridge in a restricted network segment.

Enforcing strong VNC passwords.

Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

License
This project is licensed under the GNU Affero General Public License v3.0. See the LICENSE file for details.

Contact
GitHub: ProgramerPro-arch/fastvm
