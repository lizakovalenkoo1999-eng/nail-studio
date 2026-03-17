# CLAUDE.md

серф и весь веб тоько через mcp

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Nail Studio** website - a static single-page website for a nail salon in Moscow, Russia. It is built with vanilla HTML, CSS, and JavaScript (no frameworks).

## Project Structure

```
Nails Project/
├── index.html          # Main HTML file with all sections
├── css/style.css       # Complete CSS with custom properties
├── js/main.js          # JavaScript module with IIFE pattern
├── images/             # Static images (gallery, masters, salon)
├── favicon.svg        # Site favicon
├── RESEARCH.md        # Industry research document
├── PRD.md             # Product Requirements Document
└── assets/            # Empty folder (reserved for future use)
```

## How to View the Site

Open `index.html` directly in a browser, or serve it with a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## Key Architecture Decisions

### JavaScript Pattern
The JS uses the **IIFE (Immediately Invoked Function Expression)** pattern wrapped in a `NailStudio` namespace:
- All functions are private within the module
- Public API exposed via `return` object
- Data stored in separate arrays (`servicesData`, `mastersData`, `reviewsData`, `galleryData`)

### CSS Architecture
- **CSS Custom Properties** (variables) defined in `:root` for theming
- **Mobile-first** responsive approach with media queries
- BEM-like class naming convention
- Breakpoints: 1200px, 992px, 768px, 480px

### External Dependencies (CDN)
- Google Fonts: Playfair Display, Montserrat
- Leaflet.js: OpenStreetMap integration for contact map

### Features Implemented
- Preloader with animation
- Responsive header with burger menu
- Hero section with floating shapes animation
- Services tabs (manicure, pedicure, extension, design)
- Gallery with category filters and lightbox
- About section with animated counters
- Masters section
- Reviews slider
- FAQ accordion
- Booking form with validation
- Leaflet map integration
- Floating messenger buttons (Telegram/WhatsApp)
- Scroll-triggered animations (Intersection Observer)
- Accessibility support (ARIA, focus states, reduced motion)

## Modifying Data

To change site content, edit these arrays in `js/main.js`:
- `servicesData` - Services with prices (lines 11-41)
- `mastersData` - Master information (lines 43-48)
- `reviewsData` - Client testimonials (lines 50-76)
- `galleryData` - Portfolio images (lines 78-87)

## Configuration

- **Map coordinates**: Edit `initMap()` function in `js/main.js` (around line 888)
- **Telegram bot**: Edit `sendToTelegram()` function for form submissions (requires BOT_TOKEN and CHAT_ID)
- **SEO meta**: Edit `<head>` section in `index.html`

## No Build Process

This is a static website - no build, compilation, or testing commands needed. Simply edit the files and refresh the browser.
