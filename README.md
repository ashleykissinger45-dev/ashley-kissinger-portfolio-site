# Portfolio Site

**Minimal | Modern | Professional**

A clean, strong portfolio website built with React.

---

## 🎨 Design Features

- **Ultra Minimal Design**: Maximum white space, clean lines
- **Professional Typography**: Space Grotesk font (bold, tech-forward)
- **Neutral Color Palette**: Black, white, charcoal, light gray
- **Mobile Responsive**: Works perfectly on all devices
- **Sharp & Confident**: No rounded corners, strong hierarchy

---

## 📦 What's Included

✅ Hero section with video pitch placeholder  
✅ About section with professional summary  
✅ Skills & expertise display  
✅ Featured work showcase  
✅ Professional timeline  
✅ Contact form  
✅ GitHub Pages deployment ready

---

## 🚀 Quick Start

### 1. Install Node.js
Download from [nodejs.org](https://nodejs.org) (get the LTS version)

### 2. Open Terminal
Navigate to this folder:
```bash
cd portfolio-site-final
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm start
```

Your site will open at `http://localhost:3000`

---

## ✏️ Customize Your Content

### Update Your Information

**src/components/Hero.jsx**
- Replace "YOUR NAME" with your actual name
- Update the tagline

**src/components/About.jsx**
- Customize professional summary
- Update key differentiators

**src/components/Skills.jsx**
- Modify skill arrays

**src/components/Work.jsx**
- Update featured projects

**src/components/Experience.jsx**
- Add your work experience
- Update certifications

**src/components/Contact.jsx**
- Update email: `your.email@example.com`
- Update LinkedIn URL
- Update GitHub URL

---

## 🎥 Add Your Video

In `src/components/Hero.jsx`, replace the placeholder:

```jsx
// Find this:
<div className="video-placeholder">
  ...
</div>

// Replace with:
<video width="100%" controls>
  <source src="/your-video.mp4" type="video/mp4" />
</video>
```

Put your video file in the `public` folder.

---

## 🖼️ Add Images

1. Put images in the `public` folder
2. Reference them in components:

```jsx
<img src="/your-image.jpg" alt="Description" />
```

---

## 🌍 Deploy to GitHub Pages

### First Time Setup

**1. Create GitHub Repository**
- Go to github.com
- Click "New repository"
- Name it `portfolio-site`
- Don't initialize with README

**2. Update package.json**
Edit line 5 in `package.json`:
```json
"homepage": "https://YOUR-GITHUB-USERNAME.github.io/portfolio-site",
```
Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username

**3. Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio-site.git
git push -u origin main
```

**4. Deploy**
```bash
npm run deploy
```

**5. Enable GitHub Pages**
- Go to your repository on GitHub
- Click "Settings"
- Click "Pages" in left sidebar
- Source should be set to "gh-pages" branch
- Your site will be live at: `https://YOUR-USERNAME.github.io/portfolio-site`

### Future Updates

After making changes:
```bash
git add .
git commit -m "Update content"
git push
npm run deploy
```

---

## 🎨 Customize Colors

Edit `src/App.css` (lines 7-13):

```css
:root {
  --black: #000000;      /* Main text */
  --white: #FFFFFF;      /* Background */
  --charcoal: #1A1A1A;   /* Secondary text */
  --light-gray: #F5F5F5; /* Section backgrounds */
  --medium-gray: #666666;/* Subtle text */
  --accent: #0066CC;     /* Interactive elements */
}
```

---

## 📁 Project Structure

```
portfolio-site-final/
├── public/
│   └── index.html          ← Page title, meta tags
├── src/
│   ├── components/
│   │   ├── Hero.jsx        ← Hero section
│   │   ├── Hero.css
│   │   ├── About.jsx       ← About section
│   │   ├── About.css
│   │   ├── Skills.jsx      ← Skills section
│   │   ├── Skills.css
│   │   ├── Work.jsx        ← Featured work
│   │   ├── Work.css
│   │   ├── Experience.jsx  ← Timeline
│   │   ├── Experience.css
│   │   ├── Contact.jsx     ← Contact form
│   │   └── Contact.css
│   ├── App.jsx             ← Main app component
│   ├── App.css             ← Global styles & colors
│   ├── index.js            ← Entry point
│   └── index.css           ← Reset styles
├── package.json            ← Dependencies & scripts
├── .gitignore              ← Git ignore rules
└── README.md               ← This file
```

---

## 🛠️ Technologies

- **React 18** - Modern UI library
- **CSS3** - Custom styling with CSS variables
- **Space Grotesk** - Google Font
- **GitHub Pages** - Free hosting

---

## 💡 Tips

### Change Font
Update the Google Fonts import in `src/App.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap');
```

Then update `font-family` throughout the CSS files.

### Add More Sections
Create new component files in `src/components/`:
```jsx
// NewSection.jsx
import React from 'react';
import './NewSection.css';

function NewSection() {
  return (
    <section id="new-section">
      <h2>New Section</h2>
    </section>
  );
}

export default NewSection;
```

Import and add to `App.jsx`:
```jsx
import NewSection from './components/NewSection';

// Add to JSX:
<NewSection />
```

---

## 🐛 Troubleshooting

**"npm not found"**  
→ Install Node.js from nodejs.org

**Site not deploying?**  
→ Check `package.json` homepage URL  
→ Make sure repository name matches

**Changes not showing?**  
→ Clear browser cache (Ctrl+Shift+R)  
→ Run `npm run deploy` again

**Port 3000 already in use?**  
→ Kill the process or use a different port:
```bash
PORT=3001 npm start
```

---

## 📄 License

This is YOUR portfolio. Use it, modify it, make it yours.

---

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm start`
3. ✅ Update your name and info
4. ✅ Add your video
5. ✅ Deploy to GitHub Pages

**Your professional portfolio is ready to launch.** 🚀
