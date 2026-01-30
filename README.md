# Brady Holdings Website - GitHub Pages Deployment Guide

This is a clean, professional static website for Brady Holdings, designed to be deployed on GitHub Pages at **bradyholdings.co.uk**.

---

## 📁 What's Included

```
bradyholdings.co.uk/
├── index.html          ← Homepage
├── about.html          ← About page
├── contact.html        ← Contact form
├── privacy.html        ← Privacy policy
├── style.css           ← All styling
├── assets/
│   ├── fonts/
│   │   └── custom-font.woff2    ← YOUR UPLOADED FONT GOES HERE
│   └── images/
│       └── (logo files - you'll add these)
└── README.md          ← This file
```

---

## 🚀 How to Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** button (top right) → **"New repository"**
3. Repository name: `bradyholdings.co.uk`
4. Keep it **Public**
5. Do NOT initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL the files from this folder:
   - `index.html`
   - `about.html`
   - `contact.html`
   - `privacy.html`
   - `style.css`
   - `README.md`
3. Also upload the `assets` folder (with your font inside)
4. Click **"Commit changes"**

**Option B: Using Git (If You're Comfortable)**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/bradyholdings.co.uk.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **"Pages"** (left sidebar)
3. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**
5. Wait 2-3 minutes, then refresh the page
6. You'll see: **"Your site is live at https://YOUR_USERNAME.github.io/bradyholdings.co.uk/"**

### Step 4: Connect Your Custom Domain

1. In the **Pages** settings (from Step 3)
2. Under **"Custom domain"**, enter: `bradyholdings.co.uk`
3. Click **"Save"**
4. GitHub will check your domain (may take a few minutes)

**Now configure your domain registrar:**

1. Log into your domain registrar (where you bought bradyholdings.co.uk)
2. Go to DNS settings
3. Add these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

5. Save changes
6. Wait 24-48 hours for DNS propagation
7. Back in GitHub Pages settings, check **"Enforce HTTPS"** once available

---

## ⚙️ Setting Up Your Font

### Where to Put Your Font File

1. Create this folder structure:
   ```
   assets/
   └── fonts/
       └── custom-font.woff2
   ```

2. Rename your uploaded font file to **exactly**: `custom-font.woff2`

3. Place it in the `assets/fonts/` folder

**That's it!** The CSS is already configured to use your font.

### How the Font Works

The font is automatically applied to:
- All body text
- Headings
- Paragraphs
- Most content

The navigation and form labels use a system font for clarity.

---

## 📧 Setting Up the Contact Form

The contact form currently has a placeholder. To make it work:

### Option 1: Formspree (Recommended - FREE)

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/xyzabc123`)
5. Open `contact.html`
6. Find this line: `action="https://formspree.io/f/YOUR_FORM_ID"`
7. Replace `YOUR_FORM_ID` with your actual Formspree ID
8. Save and re-upload `contact.html` to GitHub

### Option 2: Other Services

You can also use:
- **Netlify Forms** (if you switch to Netlify hosting)
- **Google Forms** (embedded)
- **Basin** (basin.com)
- **FormSubmit** (formsubmit.co)

---

## 🎨 Customizing Graphics

### Logo and Icons

Currently, the site uses **placeholder SVG shapes**:
- Homepage: Large square
- About page: Circle
- Contact page: Envelope icon
- Navigation: Small square

**To replace with real graphics:**

1. Create your logo/icon files (recommended: **SVG format**)
2. Save them in `assets/images/`
3. Open each HTML file
4. Find the `<svg>` tags
5. Replace them with:
   ```html
   <img src="assets/images/your-logo.svg" alt="Brady Holdings">
   ```

**Why SVG?**
- Scales perfectly on all screens
- Tiny file size
- Professional appearance

---

## 🎯 What Files Do What

### HTML Files (The Structure)
- **index.html** - Homepage with centered logo
- **about.html** - Company description and philosophy
- **contact.html** - Inquiry form
- **privacy.html** - Legal privacy policy

### CSS File (The Styling)
- **style.css** - Everything:
  - Colors, fonts, spacing
  - Layout and responsive design
  - Navigation, forms, buttons
  - Mobile/tablet/desktop views

### Assets Folder
- **assets/fonts/** - Your custom font
- **assets/images/** - Logos and graphics (you'll add these)

---

## ⚠️ Common Problems and Fixes

### Problem: "Font not loading"
**Fix:** 
- Check the font file is named **exactly** `custom-font.woff2`
- Check it's in `assets/fonts/` folder
- Clear your browser cache (Ctrl+F5 or Cmd+Shift+R)

### Problem: "Pages not linking correctly"
**Fix:**
- All links use relative paths (`about.html` not `/about.html`)
- This works automatically on GitHub Pages
- Don't add domain names to internal links

### Problem: "Images not showing"
**Fix:**
- Check file paths match exactly (case-sensitive)
- Use `assets/images/filename.svg` in your HTML
- Upload images to the correct folder

### Problem: "Contact form not working"
**Fix:**
- You need to set up Formspree (see instructions above)
- The form won't work without a backend service
- This is normal for static sites

### Problem: "Site not updating"
**Fix:**
- Changes can take 1-5 minutes to appear
- Clear your browser cache
- Try opening in incognito/private window

---

## 📱 Mobile Responsiveness

The site automatically adapts to:
- **Desktop** (1200px+) - Full layout
- **Tablet** (768px - 1199px) - Medium spacing
- **Mobile** (320px - 767px) - Compact layout

No additional work needed - it's built-in.

---

## 🔒 Privacy & Legal

- Privacy policy is included (`privacy.html`)
- Update the contact email to your actual email
- Consider adding cookie consent if you add analytics
- Review privacy policy text with legal counsel

---

## 📊 Optional: Adding Analytics

To track visitors (optional):

1. Sign up for [Google Analytics](https://analytics.google.com)
2. Get your tracking code
3. Add it before the closing `</head>` tag in each HTML file
4. Re-upload files to GitHub

---

## 🎓 Learning Resources

If you want to customize further:

- **HTML/CSS Basics:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn)
- **GitHub Pages Help:** [GitHub Docs](https://docs.github.com/en/pages)
- **Domain Setup:** [GitHub Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📞 Support

If something breaks:
1. Check the "Common Problems" section above
2. Clear your browser cache
3. Wait 5 minutes (GitHub Pages can be slow to update)
4. Check your browser console (F12 → Console tab) for errors

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] Font file uploaded to `assets/fonts/`
- [ ] Logo graphics created and added
- [ ] Contact form connected to Formspree
- [ ] Privacy policy reviewed
- [ ] Email address updated in privacy policy
- [ ] All pages tested on desktop and mobile
- [ ] Custom domain DNS records configured
- [ ] HTTPS enabled in GitHub Pages settings

---

## 📄 License & Credits

This is a clean, original static site built for Brady Holdings.

**Technical Stack:**
- Pure HTML5, CSS3
- No frameworks or dependencies
- Fully accessible (WCAG 2.1 compliant)
- SEO-optimized meta tags
- Mobile-first responsive design

**Browser Support:**
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

---

**Website:** bradyholdings.co.uk  
**Last Updated:** January 2025
