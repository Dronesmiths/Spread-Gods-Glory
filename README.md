# Spread Gods Glory Enterprise Website

This repository contains the high-fidelity, production-ready frontend and serverless edge API for **Spread Gods Glory**, a centralized platform where "sacrifice meets peace of mind." 

The project is built entirely on modern web infrastructure (React + Vite + TypeScript) and is explicitly architected to deploy autonomously via **Cloudflare Pages** and **GitHub CI/CD**, natively integrating with your multi-tenant Master CRM.

---

## 🚀 What We've Built So Far

**1. The Organic Design System**
- Formulated the aesthetic around the "Mellow Yellow Creme," "Blood Red," and "Cross Wood Dark" visual tokens to give the site a grounded, organic feel.
- Hand-crafted resilient, responsive core components including the layout-safe `Hero` typewriter effects and stylized `WoodCard` content wrappers.

**2. Dynamic Disciple Profile CMS (`/:personId`)**
- Engineered an automated routing system that allows SGG administrators to instantaneously publish deeply immersive pages about Biblical figures purely by committing structured JSON objects into the repository timeline array—zero code modifications required.
- Implemented an interactive Google Maps sub-system (ready for API Key binding) visually locked to their historical journey movements.

**3. The Church Finder Discovery Tool**
- Deployed a heavily stylized, interactive filter interface on the homepage allowing users to sort by Faith, Area, and Size.
- Designed a scalable edge architecture in the `functions/api/churches.ts` route, expressly built to query SGG Master CRM infrastructure natively using the pure MongoDB Data API.

**4. The Global AI Voice Prayer Agent**
- Integrated your Master CRM WebRTC infrastructure (`@vapi-ai/web`) directly into the global application shell (`FloatingVoiceWidget.tsx`).
- Engineered a Cloudflare edge POST Webhook (`/api/vapi-webhook`) that actively intercepts the 'end-of-call' payload and dispatches a neatly formatted HTML transcript and recording summary directly to SGG administrators via the Resend REST protocol.
- **Hotfix Deployed**: Resolved immediate Vite minification constraints (`Vapi.default`), assuring the floating microphone connects silently and gracefully on SGG Edge deployments.

---

## 📍 Where We Left Off & Next Steps

The platform is officially staged and fully live at: **[https://spread-gods-glory.pages.dev](https://spread-gods-glory.pages.dev)**

When you are ready to resume work, here are the logical next steps:

1. **The Dedicated Church Directory**
   - You previously suggested building a dedicated `/churches` page routing from the Homepage search. The backend mapping endpoints are conceptually outlined, so we can begin coding the dedicated front-end Maps UI immediately.

2. **Master CRM Data Hookup**
   - Provide the `GOOGLE_MAPS_API_KEY` into SGG Cloudflare production environment variables to animate the Disciple Journey maps.
   - Begin using the Master CRM's GitHub automation to inject live SEO articles and new SGG JSON content natively into this SGG repo!

3. **Expand SGG Profiles**
   - The `/jesus` route serves as the template. We can add more SGG Biblical profiles directly into `src/data/profiles.ts`.
