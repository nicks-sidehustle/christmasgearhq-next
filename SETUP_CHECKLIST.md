# GearHQ Site Setup Checklist

Use this checklist when creating a new site from the template.

## Pre-Setup

- [ ] Read `docs/AUDIENCE.md` and define your target audience
- [ ] Read `docs/CONTENT_GUIDE.md` and plan your content strategy
- [ ] Have 10-20 product ASINs ready for your niche

## Required File Updates

### 1. Site Configuration
- [ ] `src/config/site.ts` - Update ALL values:
  - [ ] `name` - Your site name (e.g., "ChristmasGearHQ")
  - [ ] `tagline` - Short tagline
  - [ ] `description` - Full SEO description
  - [ ] `url` - Your domain
  - [ ] `colors` - Pick appropriate Tailwind colors
  - [ ] `keywords` - 5-8 SEO keywords
  - [ ] `twitter` - Handle if you have one
  - [ ] `categories` - Replace ALL categories for your niche

### 2. Product Data
- [ ] `src/data/products.ts` - Replace ENTIRELY:
  - [ ] Real Amazon ASINs
  - [ ] Real product images from Amazon
  - [ ] Categories matching your site.ts categories
  - [ ] Honest pros/cons and overviews

### 3. Guide Content  
- [ ] `src/data/guides.ts` - Replace ENTIRELY:
  - [ ] Guide images from YOUR products (not another site!)
  - [ ] Content relevant to YOUR audience
  - [ ] Products mentioned should be in YOUR products.ts

### 4. Branding Assets
- [ ] `public/logo.svg` - Your site logo
- [ ] `public/favicon.ico` - Favicon
- [ ] `public/og-image.png` - Social sharing image (optional)

### 5. Documentation
- [ ] `docs/AUDIENCE.md` - Define YOUR audience
- [ ] `docs/CONTENT_GUIDE.md` - YOUR content rules
- [ ] `docs/PROMPTS.md` - YOUR generation prompts

## Deployment

- [ ] Update `package.json` name field
- [ ] Create GitHub repo
- [ ] Connect to Vercel
- [ ] Add custom domain
- [ ] Run `vercel alias set` for both root and www

## Post-Launch

- [ ] Add GA4 tracking ID
- [ ] Submit sitemap to Google Search Console
- [ ] Set up content generation cron (if applicable)
- [ ] Verify all affiliate links work

## Validation Checks

Run these before going live:

```bash
# Check for template placeholders that weren't replaced
grep -r "REPLACE" src/

# Check for wrong-site references (adjust pattern for your source)
grep -ri "deskgear\|desk setup\|office" src/

# Verify images are accessible
# (manually check a few in browser)
```

## Seasonal Sites

For seasonal sites (Christmas, Back-to-School, etc.):

- [ ] Note peak season in AUDIENCE.md
- [ ] Plan content ramp-up schedule
- [ ] Consider off-season strategy (related evergreen content?)
- [ ] Set up seasonal cron schedule
