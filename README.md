# Harry Chan AI Portfolio

A polished personal brand portfolio website for learning AI application development, web development, GitHub Pages, and project-based engineering practice.

## Tech Stack

- Vite
- Tailwind CSS
- Vanilla JavaScript
- Static HTML
- Free hosting target: GitHub Pages

## Local Development

```bash
npm install
npm run dev
npm run dev:host
npm run build
npm run preview
```

## Current Milestone

Milestone 1 built the project foundation and the English homepage:

- Cyber glass visual direction
- Responsive header and mobile menu
- Strong hero section
- Featured project cards
- Homework galaxy
- Learning roadmap
- Latest learning notes
- Footer/contact placeholders

Milestone 1.5 reviewed, polished, and stabilized the homepage before adding more pages:

- Clear placeholder handling in `src/data.js`
- Real GitHub profile link added
- Future Chinese page link marked as coming soon
- Safer responsive project card actions
- Refined cyber glass visual details

Milestone 1.6 upgraded the homepage into a more premium AI/developer landing page:

- Richer layered background depth
- Larger hero command-center visual
- More varied section treatments
- Showcase-style project cards with polished placeholder visuals
- Stronger spacing, hierarchy, and mobile behavior

Milestone 1.7 sharpened the creative direction into an AI Mission Control Portfolio:

- Mission-control hero with active mission, radar, signal, and launch details
- Featured projects presented as launch modules
- Homework shown as orbiting mission signals
- Roadmap styled as a launch sequence
- Learning notes styled as build logs
- Lightweight EN / Chinese homepage language toggle with `localStorage`

Milestone 1.7.1 stabilized the Mission Control homepage:

- Rebuilt Homework Galaxy as a grid/flex mission board
- Kept orbit rings and signal paths as decorative backgrounds only
- Removed fragile absolute positioning from homework content cards
- Improved tablet and mobile stability for the hero and homework sections

Milestone 1.7.2 entered Layout Lock:

- Locked Homework Galaxy into a balanced hub + mission-board layout
- Prevented homework cards from being squeezed into a single desktop row
- Normalized section spacing and CTA breathing room
- Preserved the EN / Chinese toggle and data-driven rendering

Milestone 1.8 redesigned the homepage composition:

- Added a compact proof/status strip after the hero
- Reworked featured projects into a bento showcase with one primary launch module
- Simplified Homework Galaxy into an intentional mission board
- Turned the roadmap into a more connected launch sequence
- Reworked learning notes into an editorial build-log layout
- Tightened CTA and overall vertical rhythm

Milestone 1.9 rebuilt the homepage visual system:

- Reduced repeated dark glass-card treatments across sections
- Shifted projects toward brighter case-study surfaces
- Replaced the forced galaxy feel with a cleaner Homework Mission Board
- Slimmed the roadmap into a launch-sequence stepper
- Made learning notes feel more editorial and less like generic cards
- Kept the hero, language toggle, placeholders, and data-driven rendering intact

Milestone 1.10 fixed screenshot-review polish issues:

- Repositioned the proof strip so it no longer feels cut off below the hero
- Reduced primary featured project height and empty space
- Softened bright panels into integrated cyan/violet/slate surfaces
- Added CSS-only aurora depth and lightweight scroll reveal motion
- Added reduced-motion handling for accessibility

Milestone 1.10.1 refined the interactive polish pass:

- Added an auto-hide header that reveals on scroll-up, top-edge hover, header hover, keyboard focus, and mobile menu open state
- Lightened the header into a premium glass navigation layer
- Softened project card reflection/shine effects
- Integrated the Homework Mission Board hub into the dark cyan/slate command-center style
- Added subtle hover/focus signal feedback to homework, roadmap, note, project, and CTA elements
- Added minor section separators and background washes for more depth without changing the layout

## Phone Preview

To test the site on a phone:

1. Run `npm run dev:host`.
2. In Windows PowerShell, run `ipconfig`.
3. Find the computer's IPv4 address, such as `192.168.1.25`.
4. On the phone, open `http://<IPv4>:5173`, replacing `<IPv4>` with that address.
5. Make sure the phone and computer are on the same Wi-Fi network.
6. If the phone cannot connect, allow Node.js through Windows Firewall and try again.

## Placeholder Content

Some links currently use placeholders in `src/data.js`:

- Email address
- Portfolio URL
- Project live demos
- Project source code
- Project notes
- Blog note pages

Replace these when the real links are ready.

Current real contact link:

- GitHub: <https://github.com/HarryWhite-TW>

## Planned Next Milestones

- Add Portfolio, Blog, About, and Contact pages.
- Add Chinese pages under `/zh/`.
- Add real project screenshots and links.
- Configure and deploy to GitHub Pages.
