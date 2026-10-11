# Shenbaga Devi C — Portfolio Website

A production-ready creative portfolio website for **Shenbaga Devi C**, highlighting commercial social media graphic designs and data-verified paid digital marketing campaign results across Meta Ads and Google Ads.

Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed for zero-dependency static deployment on **GitHub Pages**.

---

## ?? Key Highlights & Architecture

- **100% Original Client Creatives:** Embedded directly from client presentations into optimized static web assets without external stock photos or placeholders.
- **Verifiable Paid Advertising Results:** Actual Meta Ads Manager and Google Ads account performance screenshots accompanied by transparent audit metrics (leads generated, cost per acquisition, impressions, CTR, conversion rate).
- **Interactive Full-Screen Lightboxes & Campaign Audits:** Responsive modals with keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`) and zoom inspection.
- **Centralized Configuration:** All text content, client project data, campaign metrics, bio, and contact information reside in `src/data/portfolioData.ts`.
- **Free GitHub Pages Ready:** Configured with relative base asset paths (`base: './'`), automated GitHub Actions CI/CD workflow, and SPA 404 redirects.

---

## ?? Project Structure

```text
Portfolio/
+-- .github/
¦   +-- workflows/
¦       +-- deploy.yml            # Automated GitHub Pages deployment workflow
+-- public/
¦   +-- 404.html                  # GitHub Pages SPA redirect fallback
¦   +-- favicon.svg               # Designer monogram branding icon
¦   +-- images/                   # Extracted original portfolio media
¦       +-- aqua-tech/            # Surya Aqua Tech product & RO service creatives
¦       +-- real-estate/          # Hirani Foundations & Hi Living property creatives
¦       +-- siddha-hospital/      # Siddhalaya holistic healthcare creatives
¦       +-- interiors-architecture/ # Architectural & interior design campaign visuals
¦       +-- paid-campaigns/       # Live Meta & Google Ads dashboard audit screenshots
+-- src/
¦   +-- components/
¦   ¦   +-- Navbar.tsx            # Sticky glassmorphism header & mobile navigation
¦   ¦   +-- Hero.tsx              # Designer intro, headlines & key performance stats
¦   ¦   +-- GraphicPortfolio.tsx  # Categorized graphic design gallery with filters
¦   ¦   +-- Lightbox.tsx          # Fullscreen artwork inspection modal
¦   ¦   +-- PaidCampaigns.tsx     # Paid ads project gallery with verified metrics
¦   ¦   +-- CampaignModal.tsx     # In-depth ad account performance audit modal
¦   ¦   +-- About.tsx             # Design & marketing methodology + skills matrix
¦   ¦   +-- Contact.tsx           # Direct WhatsApp & Email dispatch channels
¦   ¦   +-- Footer.tsx            # Navigation links, credits & back-to-top trigger
¦   +-- data/
¦   ¦   +-- portfolioData.ts      # Master configuration for all portfolio content
¦   +-- types/
¦   ¦   +-- index.ts              # TypeScript schemas
¦   +-- App.tsx                   # Main layout container & scroll tracking
¦   +-- index.css                 # Design system tokens, styling & animations
¦   +-- main.tsx                  # React entrypoint
+-- index.html                    # SEO meta tags, Google Fonts & root template
+-- package.json
+-- tsconfig.json
+-- vite.config.ts                # Vite build configuration (base: './')
```

---

## ?? Local Development Setup

### 1. Prerequisites
- **Node.js** v18+ or v20+
- **npm** v9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the live website.

### 4. Build for Production
```bash
npm run build
```
This compiles the application into optimized static assets in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```

---

## ??? How to Customize & Update Information

### Updating Contact Information & Bio
Open `src/data/portfolioData.ts`:
```typescript
export const siteConfig: SiteConfig = {
  name: "Shenbaga Devi C",
  title: "Social Media Graphic Designer & Digital Marketer",
  // Update your contact channels:
  contact: {
    email: "your.real.email@domain.com",
    whatsapp: "+919876543210",
    phone: "+91 98765 43210",
    instagram: "https://instagram.com/your_handle",
    linkedin: "https://linkedin.com/in/your_profile",
    location: "Chennai, Tamil Nadu, India",
    availability: "Available for freelance & full-time roles."
  }
};
```

### Adding New Graphic Design Projects
In `src/data/portfolioData.ts`, add a new object to the `graphicProjects` array and drop your image into `public/images/`:
```typescript
{
  id: "project-slug",
  title: "Project Title",
  category: "aqua-tech", // 'aqua-tech' | 'real-estate' | 'siddha-hospital'
  categoryLabel: "Aqua Tech",
  client: "Client Name",
  image: "./images/aqua-tech/your-image.jpg",
  aspectRatio: "4/5",
  headline: "HEADLINE",
  description: "Brief design description...",
  tags: ["Feed Creative", "Instagram Ad"],
  features: ["Highlight 1", "Highlight 2"]
}
```

---

## ?? Publishing to GitHub Pages (Free Hosting)

### Method 1: Automated Continuous Deployment with GitHub Actions (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Shenbaga Devi portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages via Actions**:
   - Navigate to your repository on GitHub.
   - Click **Settings** ? **Pages** (under "Code and automation" in the left sidebar).
   - Under **Build and deployment** ? **Source**, select **GitHub Actions**.
   - The included workflow `.github/workflows/deploy.yml` will automatically build and publish the site every time you push changes to `main`.
   - Your site will be published at: `https://<your-username>.github.io/Portfolio/`.

### Method 2: Manual Deploy with `gh-pages` Branch

If you prefer building locally and pushing the `dist` folder:
```bash
npm run build
npx gh-pages -d dist
```

---

## ?? Responsive & Accessibility Verification

- Tested across desktop (1920px, 1440px), tablet (768px - 1024px), and mobile viewports (375px - 430px).
- Full keyboard accessibility for modal dialogues (Escape to close, Left/Right arrow keys for navigation).
- WCAG compliant color contrast with dark navy `#0A1128` against warm off-white `#FAF8F5` and bold `#FF6B6B` coral and `#14B8A6` teal accents.
