# Seabud Restaurant - Complete Setup Guide

## 📁 Project Structure

Your complete file structure should look like this:

```
alibaba.cz/
│
├── index.html                  ✅ Created
├── README.md                   ✅ Created
├── SETUP-GUIDE.md             ✅ This file
│
├── css/
│   ├── custom.css              ✅ Created (starter file)
│   ├── bootstrap.min.css       ⚠️  Download or use CDN
│   ├── slicknav.min.css        ⚠️  Download or use CDN
│   ├── swiper-bundle.min.css   ⚠️  Download or use CDN
│   ├── all.min.css             ⚠️  Download (Font Awesome)
│   ├── animate.css             ⚠️  Download or use CDN
│   ├── magnific-popup.css      ⚠️  Download or use CDN
│   └── mousecursor.css         ℹ️  Create if needed
│
├── js/
│   ├── function.js             ✅ Created
│   ├── magiccursor.js          ✅ Created
│   ├── SplitText.js            ✅ Created
│   └── [Other libraries loaded via CDN]
│
└── images/
    ├── logo.svg
    ├── footer-logo.svg
    ├── loader.svg
    ├── favicon.png
    └── [all other images listed in README]
```

## 🚀 Quick Start (Fastest Method)

### Option 1: Use CDN (Recommended for Testing)

**Your `index.html` already has CDN links configured!** 

Just:
1. Open `index.html` in a modern web browser
2. All libraries load automatically from CDN
3. No downloads needed!

**Note:** Some images will show broken until you add them.

### Option 2: Download Libraries Locally

If you want to host libraries locally for production:

1. **Download Bootstrap CSS:**
   - Visit: https://getbootstrap.com/docs/5.3/getting-started/download/
   - Save `bootstrap.min.css` to `css/` folder

2. **Download Font Awesome:**
   - Visit: https://fontawesome.com/download
   - Extract and copy `all.min.css` and `webfonts/` folder

3. **Download Other CSS Libraries:**
   - SlickNav: https://github.com/ComputerWolf/SlickNav
   - Swiper: https://swiperjs.com/get-started
   - Animate.css: https://animate.style/
   - Magnific Popup: https://dimsemenov.com/plugins/magnific-popup/

4. **Update HTML** to use local paths instead of CDN

## 🎨 Creating Images

### Method 1: Use Placeholder Images

Replace image URLs with placeholder services:

```html
<!-- Original -->
<img src="images/about-us-image-1.jpg" alt="">

<!-- With Placeholder -->
<img src="https://via.placeholder.com/600x800/00a8a8/ffffff?text=About+Us" alt="">
```

**Recommended Placeholder Services:**
- https://placeholder.com/
- https://picsum.photos/
- https://unsplash.it/

### Method 2: Create Image Folders

```bash
# Windows PowerShell
New-Item -ItemType Directory -Path "images" -Force
```

Then add your images with these exact names (see README.md for full list):
- `logo.svg`
- `footer-logo.svg`
- `about-us-image-1.jpg`
- etc.

### Method 3: Use Free Stock Photos

**Recommended Sites:**
- Unsplash.com (seafood, restaurant photos)
- Pexels.com
- Pixabay.com

**Search Terms:**
- "seafood restaurant"
- "lobster dish"
- "fish menu"
- "restaurant interior"
- "chef cooking"

## 🎯 Step-by-Step Setup

### Step 1: Verify Core Files

Check that you have:
- ✅ `index.html` 
- ✅ `css/custom.css`
- ✅ `js/function.js`
- ✅ `js/magiccursor.js`
- ✅ `js/SplitText.js`

### Step 2: Test in Browser

1. Open `index.html` in Chrome, Firefox, or Edge
2. Open Developer Console (F12)
3. Check for errors

**Expected Behavior:**
- Page loads with preloader
- Preloader fades after 500ms
- Console shows: "Seabud Restaurant Website Loaded Successfully! 🦞"

### Step 3: Fix Image Issues

**Quick Fix - Use Online Images:**

Edit `index.html` and replace image sources:

```html
<!-- Hero Section -->
<video autoplay muted loop>
    <source src="https://demo.awaikenthemes.com/assets/videos/seabud-video.mp4" type="video/mp4">
</video>

<!-- About Images -->
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" alt="About Us">

<!-- Menu Images -->
<img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300" alt="Seafood">
```

### Step 4: Customize Content

**Change Restaurant Name:**

Find and replace "Seabud" with your restaurant name in `index.html`

**Update Contact Information:**

Search for:
- Phone: `+(123) 465-789`
- Email: `info@domainname.com`
- Address: Update in footer section

**Modify Menu Items:**

Navigate to the "Our Menu" section in HTML and edit:
- Menu item names
- Prices
- Descriptions

### Step 5: Customize Colors

Edit `css/custom.css`:

```css
:root {
    --primary-color: #00a8a8;    /* Change to your brand color */
    --accent-color: #ff6b6b;      /* Change accent color */
    --dark-bg: #0a1e2e;           /* Dark sections background */
}
```

### Step 6: Test Responsive Design

1. Open browser DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Test different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

## 🔧 Common Issues & Solutions

### Issue 1: "Failed to load resource" errors

**Solution:** Library files missing. Use CDN versions (already in HTML) or download locally.

### Issue 2: Images not showing

**Solutions:**
- Check image paths are correct
- Verify images exist in `/images/` folder
- Use placeholder URLs temporarily

### Issue 3: Animations not working

**Checklist:**
- GSAP loaded? (Check console)
- ScrollTrigger loaded?
- WOW.js initialized?
- `function.js` loaded last?

**Fix:** Ensure scripts load in this order:
1. jQuery
2. Other libraries
3. `function.js` (last)

### Issue 4: Video not playing

**Solutions:**
- Add `muted` attribute to `<video>` tag
- Use online video URL (already configured)
- Check browser autoplay policies

### Issue 5: Forms not submitting

**Expected:** Forms show alert and don't actually submit (by design).

**To make functional:**
- Add backend API endpoint
- Update form action URLs
- Implement server-side handling

## 🎨 Advanced Customization

### Add New Section

1. Copy an existing section
2. Modify content
3. Update classes if needed
4. Test responsive behavior

### Change Fonts

1. Visit Google Fonts: https://fonts.google.com/
2. Select fonts
3. Copy `<link>` tag
4. Replace in `<head>` section
5. Update CSS variables:

```css
:root {
    --font-primary: 'Your Font', sans-serif;
    --font-secondary: 'Your Font', sans-serif;
}
```

### Add Animation to Element

```html
<div class="wow fadeInUp" data-wow-delay="0.2s">
    Your content here
</div>
```

**Available Animations:**
- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `slideInUp`, `slideInDown`
- `zoomIn`, `zoomOut`

## 📱 Mobile Navigation

Mobile menu automatically activates below 768px width.

**To test:**
1. Resize browser window to < 768px
2. Click hamburger icon
3. Menu slides in from side

## 🌐 Deployment

### Deploy to Netlify (Free)

1. Create account at netlify.com
2. Drag & drop your project folder
3. Get instant live URL

### Deploy to GitHub Pages

1. Create GitHub repository
2. Push code to repo
3. Enable GitHub Pages in settings
4. Access at `username.github.io/repo-name`

### Deploy to Traditional Hosting

1. Upload all files via FTP
2. Ensure file permissions are correct
3. Test all links and paths

## 📊 Performance Optimization

### For Production:

1. **Optimize Images:**
   - Compress JPG/PNG (TinyPNG.com)
   - Convert to WebP format
   - Use responsive images

2. **Minify CSS/JS:**
   - Use online minifiers
   - Combine multiple files
   - Remove unused code

3. **Enable Caching:**
   - Add cache headers
   - Use CDN for libraries
   - Implement service worker

4. **Lazy Load:**
   - Images below fold
   - Video on scroll
   - Scripts defer/async

## 🔍 SEO Optimization

**Update Meta Tags:**

```html
<meta name="description" content="Your restaurant description">
<meta name="keywords" content="seafood, restaurant, your city">
<meta name="author" content="Your Restaurant Name">

<!-- Open Graph (Social Media) -->
<meta property="og:title" content="Your Restaurant Name">
<meta property="og:description" content="Description">
<meta property="og:image" content="your-image-url.jpg">
```

## 🎓 Learning Resources

**HTML/CSS:**
- MDN Web Docs: https://developer.mozilla.org/
- CSS-Tricks: https://css-tricks.com/

**JavaScript:**
- JavaScript.info: https://javascript.info/
- FreeCodeCamp: https://www.freecodecamp.org/

**Animation Libraries:**
- GSAP Docs: https://greensock.com/docs/
- Swiper Docs: https://swiperjs.com/
- WOW.js: https://wowjs.uk/

## 💡 Pro Tips

1. **Test Across Browsers:** Chrome, Firefox, Safari, Edge
2. **Use Browser DevTools:** Inspect, debug, and optimize
3. **Check Console:** Look for JavaScript errors
4. **Validate HTML:** Use W3C Validator
5. **Test Forms:** Ensure validation works
6. **Check Load Time:** Use Lighthouse or PageSpeed Insights
7. **Mobile First:** Always test mobile experience
8. **Accessibility:** Test with screen readers

## 🆘 Need Help?

**Debug Checklist:**
- [ ] All files in correct folders?
- [ ] File names spelled correctly?
- [ ] Internet connection active? (for CDN)
- [ ] Console errors checked?
- [ ] Browser cache cleared?
- [ ] Running on localhost or server?

**Common Commands:**

```bash
# Start simple HTTP server (Python)
python -m http.server 8000

# Then visit: http://localhost:8000
```

## ✨ You're Ready!

Your Seabud restaurant website replica is complete! 🎉

**Next Steps:**
1. Replace placeholder content with real data
2. Add your actual images
3. Customize colors and fonts
4. Test thoroughly
5. Deploy to production

**Happy Building! 🦞🍽️**

---

Last Updated: February 2026
Version: 1.0.0
