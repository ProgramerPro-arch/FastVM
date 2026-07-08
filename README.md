# FastVM

FastVM is a cloud virtualization platform that allows users to launch and control personal virtual machines directly from Discord Activity. Users can securely authenticate with their Discord account and access a remote desktop environment through an interactive VNC connection with full keyboard and mouse support.

---

# Synopsis

FastVM provides a simple way to access cloud-based virtual machines without installing traditional remote desktop software.

The platform combines Discord Embedded App SDK, OAuth authentication, WebSocket communication, and the VNC protocol to deliver a complete remote desktop experience directly inside Discord.

The goal of FastVM is to make personal cloud computers accessible, easy to use, and available anywhere.

---

# Motivation

Traditional virtual machines and cloud desktops often require complicated setup, separate accounts, and additional applications.

FastVM was created to simplify this experience by allowing users to:

- Login using their existing Discord account
- Access their own virtual machine instantly
- Control a remote desktop directly inside Discord
- Use cloud computing without complicated configuration

The project aims to create a modern cloud desktop platform that is simple for users while remaining scalable for developers.

---

# Getting Started

These instructions will help you set up FastVM locally for development and testing.

## Prerequisites

Before installing FastVM, make sure you have:

- Node.js 20+
- npm or another package manager
- Discord Developer Application
- Configured Discord Embedded App
- VNC server
- Backend server environment

Example installation:

```bash
git clone https://github.com/yourusername/FastVM.git

cd FastVM

npm install
Installing
1. Clone the repository
git clone https://github.com/yourusername/FastVM.git
cd FastVM
2. Install dependencies
npm install
3. Configure environment variables

Create a .env file:

DISCORD_CLIENT_ID=your_client_id
DISCORD_CLIENT_SECRET=your_client_secret

VNC_HOST=localhost
VNC_PORT=5900

API_URL=http://localhost:3000
4. Start development mode
npm run dev

The application should now be available for testing.

Example Use

After launching FastVM:

Open the Discord Activity.
Authenticate using your Discord account.
Select your virtual machine.
Connect through the integrated VNC desktop.
Control the VM using your keyboard and mouse.

Example workflow:

Discord User
      |
      v
Discord Authentication
      |
      v
FastVM Platform
      |
      v
Virtual Machine
      |
      v
VNC Remote Desktop
API Reference

FastVM provides an API for managing authentication, VM sessions, and remote access.

Planned API features:

POST /api/auth/discord

Authenticate user through Discord.

GET /api/vm/status

Get current virtual machine status.

POST /api/vm/start

Start user virtual machine.

POST /api/vm/stop

Stop user virtual machine.

Running The Tests

Run automated tests:

npm test
End To End Tests

Tests verify:

Discord authentication flow
API communication
VNC connection
VM session management

Example:

npm run test:e2e
Code Style Tests

Code style checks ensure:

Consistent formatting
Clean code structure
Maintainable development practices

Run:

npm run lint
Deployment

FastVM can be deployed using:

Linux servers
Cloud infrastructure
Virtualization hosts

Recommended production architecture:

Users
 |
Discord Activity
 |
FastVM Backend
 |
Virtualization API
 |
VM Cluster

Supported virtualization platforms:

Proxmox Virtual Environment
VMware ESXi / vSphere
Other compatible hypervisors
Built With
Discord Embedded App SDK - Discord integration
noVNC - Browser-based VNC client
WebSocket - Real-time communication
Node.js - Backend services
JavaScript / TypeScript - Application development
Virtualization platforms - VM management
Roadmap
Completed
 Discord OAuth authentication
 Discord Activity integration
 Browser VNC support
 Keyboard and mouse control
Planned
 Automatic VM creation
 VM templates
 Persistent user storage
 Audio streaming
 Clipboard synchronization
 Multi-node infrastructure
 Resource monitoring
 User management dashboard
Contributing

Contributions are welcome.

Please read CONTRIBUTING.md for details about:

Code guidelines
Pull request process
Development rules

Steps:

Fork the repository
Create a feature branch
Commit your changes
Open a Pull Request
Versioning

FastVM uses Semantic Versioning (SemVer).

Available versions can be found in the repository tags.

Example:

v1.0.0
v1.1.0
v2.0.0
Authors
Piotrekos69 - Initial creator and maintainer

See the contributors page for everyone who helped develop FastVM.

License

This project is licensed under the Apache License 2.0.

See the LICENSE file for more information.

Acknowledgments
Discord Embedded App SDK team
noVNC contributors
Open-source virtualization community
Everyone who contributes ideas, code, and feedback
