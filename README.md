<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">FastVM</h3>

  <p align="center">
    A cloud virtualization platform that allows users to launch and control personal virtual machines directly from Discord Activity.
    <br />
    <a href="https://github.com/ProgramerPro-arch/fastvm"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ProgramerPro-arch/fastvm/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/ProgramerPro-arch/fastvm/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

FastVM is an open-source cloud virtualization platform designed to bridge the gap between cloud computing and social communication. By leveraging the Discord Embedded App SDK, FastVM allows users to launch and control personal virtual machines (VMs) as a native Discord Activity.

Our goal is to make personal cloud desktops accessible to everyone, eliminating the need for complex remote desktop software and dedicated client installations.

### Key Features
* 🔐 **Discord Authentication:** Seamless login using Discord OAuth.
* 🖥️ **Interactive Remote Desktop:** Low-latency VNC integration powered by noVNC.
* ⌨️ **Full Control:** Precise keyboard and mouse input mapping.
* ⚡ **Real-time Streaming:** Smooth screen capture and display.
* 💾 **Persistent Storage:** Personal VMs that retain state across sessions.
* 🏗️ **Extensible:** Designed to integrate with enterprise hypervisors.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Vite][Vite-badge]][Vite-url]
* [![React][React-badge]][React-url]
* [![Node.js][Node-badge]][Node-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Follow these steps to get a local copy of FastVM up and running.

### Prerequisites

* Node.js v18+
* A running virtualization host (VMware/Proxmox)
* Discord Developer Portal application credentials

### Installation

1. Clone the repo
   ```sh
   git clone [https://github.com/ProgramerPro-arch/fastvm.git](https://github.com/ProgramerPro-arch/fastvm.git)
