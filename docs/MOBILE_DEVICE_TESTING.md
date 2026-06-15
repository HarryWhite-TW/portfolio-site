# Mobile Device Testing

## Why `127.0.0.1` Does Not Work On A Phone

`127.0.0.1` always means "this device."

- On the Windows computer, `127.0.0.1:3000` points to the Vite server running on that computer.
- On an iPhone, `127.0.0.1:3000` points back to the iPhone itself.

A phone therefore cannot open the computer's local site through the computer's `127.0.0.1` address.

## Start Vite For Local Network Access

From the repository root:

```powershell
npm run dev -- --host 0.0.0.0 --port 3000
```

This allows the development server to listen on the computer's local network interfaces.

## Find The Windows Computer IPv4 Address

Open PowerShell or Command Prompt:

```powershell
ipconfig
```

Find the active Wi-Fi or Ethernet adapter and note its IPv4 Address, for example:

```text
192.168.1.23
```

## Open The Site On iPhone

Requirements:

- Windows computer and iPhone must be connected to the same local network.
- Vite must be running with `--host 0.0.0.0`.
- Windows Firewall must allow Node.js on the current trusted/private network.

Open Safari or Chrome on iPhone:

```text
http://192.168.1.23:3000/
```

Replace `192.168.1.23` with the computer's actual IPv4 address.

## Troubleshooting

### Windows Firewall prompt

When Windows asks whether Node.js may communicate through the firewall, allow it on Private networks. Avoid opening the development server broadly on an untrusted public network.

### School or public Wi-Fi isolation

Some school, hotel, and public Wi-Fi networks prevent devices from communicating with each other even when both devices are connected to the same Wi-Fi. In that case:

- use a trusted home network;
- connect both devices through a personal hotspot that permits local communication;
- use Windows Mobile Hotspot and connect the iPhone to the computer's hotspot;
- or deploy the production build to GitHub Pages for public browser access.

### Verify the computer first

On the Windows computer, test both:

```text
http://127.0.0.1:3000/
```

and:

```text
http://<computer-ipv4>:3000/
```

If the IPv4 version does not work on the computer itself, check the Vite host setting and firewall before testing the phone.

## Production Direction

The temporary LAN address is only for device testing. The permanent website should use the production build and a verified public deployment such as GitHub Pages. A custom domain can be connected later without changing the current static site architecture.
