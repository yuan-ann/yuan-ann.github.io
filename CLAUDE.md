# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Greg Veramendi's academic website - a pure static site hosted on GitHub Pages. No build tools, frameworks, or server-side processing.

## Development

**No build process required.** Open any HTML file directly in a browser to test.

**Deployment:** Push to master branch triggers automatic GitHub Pages deployment.

## Architecture

### Pages
- `index.html` - Homepage with profile, research interests, CV link
- `publications.html` - Peer-reviewed publications with paper cards
- `working-papers.html` - Working papers with status indicators (R&R, submitted)
- `research.html` - Papers organized by topic with JavaScript filters
- `teaching.html` - Teaching experience by institution
- `papers/` - Individual paper pages and PDFs

### Styling
- `styles.css` (primary) - Modern responsive stylesheet with CSS variables design system
- `greg.css` - Legacy styles (not actively used)
- `global.css` - Additional color definitions

### JavaScript (`script.js`)
Four features:
1. Mobile hamburger menu toggle (≤768px)
2. Abstract show/hide on paper cards
3. Topic filter buttons on research.html (data-topics attribute)
4. Smooth anchor scrolling

### Design System (in styles.css)
- Colors: Primary `#1a365d`, Secondary `#2b6cb0`, Accent `#3182ce`
- Fonts: Inter (headings), Source Sans Pro (body) via Google Fonts
- Layout: 900px max-width container
- Breakpoints: 768px (tablet), 480px (mobile)

### Content Patterns
- Paper cards use `<article class="paper-card">` with `data-topics` for filtering
- Status badges: `<span class="paper-status status-submitted">R&R</span>`
- Abstracts: `<div class="paper-abstract">` toggled via JavaScript
- Navigation is duplicated in each HTML file (no templating)
