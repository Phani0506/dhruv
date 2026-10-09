# Vardy Nexus

Create a bold, high-octane, mobile-first portfolio landing page for an electronic music artist & DJ named "DREW VARDY". 



The vibe must feel like an underground cyber-club meets luxury festival headline stage: dark mode aesthetic (#08080A background), vibrant neon acid accents (electric neon green/cyan `#00FF87` and infrared magenta `#FF0055`), glassmorphism cards, grain overlays, and ultra-smooth micro-interactions.



---



### TECH STACK & DESIGN SYSTEM

- Framework: React (TypeScript) + Vite + Tailwind CSS + Framer Motion + Lucide React.

- Typography: Futuristic, bold sans-serif display headers (e.g., Syne or Clash Display / Space Grotesk) with clean mono/inter body font.

- Theme: Deep obsidian `#08080A`, border stroke `rgba(255, 255, 255, 0.08)`, subtle backdrop-blur glass panels.

- Performance: Must be 100% responsive, optimized for 60fps mobile scroll, using hardware-accelerated transforms (Framer Motion `transform: translate3d`). Audio/video placeholders must lazy-load to prevent network choke.



---



### KEY SECTIONS & ARCHITECTURE



#### 1. Floating Dynamic Navbar

- Glassmorphic pill-shaped navigation dock floating at the top with glowing border.

- Left: Monogram logo "DV // 01".

- Center: Quick anchor links (Sounds, Gigs, Story, Press, Contact).

- Right: "Book DJ" CTA with pulse neon ring + a persistent mini sound visualizer icon.

- Mobile: Elegant bottom-bar or smooth slide-in hamburger drawer with heavy blur and neon glow on active routes.



#### 2. Hero Section (Epic First Impression)

- Ambient layered background: Subtle animated radial mesh gradient with low-opacity noise/grain overlay.

- Central Visual: Stylized showcase mock container for DREW VARDY. Use a high-contrast curated Unsplash DJ/club photo inside a dynamic rounded/curved organic border with an interactive tilt effect (Framer Motion hover/touch tilt).

- Typography: Massive kinetic title: "DREW VARDY" with staggered entrance animation and a secondary glitch/flicker tag: "SONIC ARCHITECT // HYBRID DJ SETS".

- Floating Badges: Pill tags drifting with slight parallax ("128-140 BPM", "Techno / Melodic Bass", "ADE 2024 Performer").

- Quick CTA: "Listen Live Mix" (triggers floating player) + "Tour Dates".



#### 3. Persistent Mini Floating Audio Player

- A bottom floating sticky player bar across mobile and desktop.

- Features: Mock waveform visualizer (animated SVG bars bouncing to beat), Play/Pause state, Track title ("DREW VARDY - Neon Horizon [Original Mix]"), time scrubber, and a direct link to Spotify/SoundCloud.

- Include a 3-track mock selector so users can preview singles instantly.



#### 4. Latest Releases & Singles (Audio / Discography)

- Interactive grid of singles/EPs styled as vinyl sleeves sliding out of neon acrylic jackets.

- Cover art cards with hover tilt, album title, release year, genre tag, and embedded play buttons.

- Quick streaming service pill links (Spotify, Apple Music, Beatport, SoundCloud, YouTube Music).

- High performance: Include mock audio player using lightweight HTML5 Audio elements with fallback visualizer states.



#### 5. Tour Dates & Live Gigs (Interactive Schedule)

- Sleek festival/club date tracker with live status badges ("Sold Out", "Low Tickets", "Headline Set").

- Row format: Date badge (large numbers), Venue name, City/Country (with country flags), Stage name, and dynamic "Get Tickets" / "RSVP" button with hover arrow animations.

- Include a toggle: "Upcoming Shows" vs "Past Highlights".



#### 6. Story & Milestones (About Section)

- Split layout:

  - Left: High-fashion monochrome portrait of Drew Vardy with custom rounded mask curves, overlaid with a subtle neon drop shadow and floating performance stats (e.g., "150+ Sets Played", "1.2M+ Streams", "Global Residency").

  - Right: Editorial bio storytelling Drew's journey from warehouse raves to festival mainstages.

- Credentials & Certifications carousel/pills: Ableton Certified Producer, Audio Engineering Credentials, Resident DJ tags, and press pull-quotes (e.g., "A relentless energy machine" - Electronic Beat Magazine).



#### 7. Media & Reel Vault (Short-form Video Carousel)

- Horizontal swipeable 9:16 vertical video reel cards (mobile TikTok/Instagram Reels mockups).

- Video cards featuring smooth hover/tap play simulation, crowd reaction clips, DJ booth transitions, and live drops with sound-wave badges.

- Optimized with video posters/placeholders for zero initial layout shifts.



#### 8. Booking & Contact Section (High Conversion)

- Clean, high-contrast booking inquiry card.

- Form fields: Name, Email, Event Type (Club Headline, Festival, Private Show, Brand Launch), Date, Budget Range, and Message.

- Floating Management/Direct Agency details card: "Bookings & Management: mgmt@drewvardy.com | Press: press@drewvardy.com".

- Social links dock with hover glow icons: Instagram, TikTok, Soundcloud, YouTube, Spotify, Beatport.



#### 9. Footer

- Ambient signature: "© DREW VARDY. ALL RIGHTS RESERVED. DESIGNED FOR HIGH FREQUENCIES."

- Live local time indicator of Drew's home base (e.g., "BERLIN / 02:40 AM CET").



---



### INTERACTION & POLISH DETAILS

- Implement subtle custom cursor follower on desktop with magnetic snap to interactive buttons.

- Mobile viewport heights handled via `100dvh` to prevent mobile address bar jumping.

- Scroll animations: Cards should fade and slide up sequentially (`viewport: { once: true, margin: "-50px" }`).

- Pre-populate all cards with realistic electronic music titles, dates, and royalty-fre

e dark techno/club Unsplash images with smooth shimmer loading skeletons.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://dhruv-mock-1.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/5cfc7a44-cb44-41e8-9f69-a86b1509baa7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
