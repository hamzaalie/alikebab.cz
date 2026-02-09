# Seabud - Premium Seafood Restaurant Website

An exact replica of the premium Seabud seafood restaurant template featuring modern animations, video backgrounds, and interactive elements.

## 🎨 Features

### Design & Layout
- **Video Hero Section** with background video and animated text
- **Sticky Navigation** with blur effect on scroll
- **Topbar** with contact information and social links
- **Responsive Design** - Mobile-first approach
- **Dark & Light Sections** with seamless transitions

### Sections Included
1. **Hero Section** - Full-screen video background with working hours card
2. **About Us** - Image collage with floating statistics
3. **Our History** - Timeline layout with milestone cards
4. **Why Choose Us** - Interactive cards with hover effects
5. **Our Menu** - Tabbed menu with 4 categories (Starters, Main Courses, Desserts, Beverages)
6. **What We Do** - Service cards with image reveals
7. **Call to Action** - Parallax section with counter statistics
8. **Gallery** - Grid layout with staggered animations
9. **Scrolling Ticker** - Animated marquee sections
10. **Testimonials** - Swiper slider with customer reviews
11. **Private Events** - Accordion FAQ section
12. **Reserve Table** - Complete booking form with validation
13. **Blog Section** - Latest posts grid
14. **Footer** - Newsletter signup and navigation links

### Animations & Effects
- **WOW.js** - Scroll-triggered fade-in animations
- **GSAP & ScrollTrigger** - Advanced text animations
- **SplitText** - Character-by-character text reveals
- **Parallax Effects** - Multi-layer depth scrolling
- **Counter Animations** - Number counting on scroll
- **Image Reveals** - Clip-path and zoom effects
- **Custom Cursor** - Magic cursor with hover states
- **Swiper Sliders** - Touch-enabled carousels

### Typography
- **Primary Font**: Bricolage Grotesque (Display, Headings)
- **Secondary Font**: Manrope (Body text)
- Modern font pairing for premium aesthetic

## 📦 Required Assets

### CSS Files (Place in `/css/` folder)
- `bootstrap.min.css` - Bootstrap 5.x framework
- `slicknav.min.css` - Mobile navigation
- `swiper-bundle.min.css` - Slider library
- `all.min.css` - Font Awesome icons
- `animate.css` - CSS animations
- `magnific-popup.css` - Lightbox popups
- `mousecursor.css` - Custom cursor styles
- `custom.css` - Main custom styles (create this)

### JavaScript Files (Place in `/js/` folder)
- `magiccursor.js` - Custom cursor functionality
- `SplitText.js` - Text animation library
- `function.js` - Main custom JavaScript

### CDN Libraries (Already Linked)
All major libraries are loaded from CDN:
- jQuery 3.7.1
- Bootstrap 5.3.0
- GSAP 3.12.5 + ScrollTrigger
- Swiper 11.x
- WOW.js 1.1.2
- Counter-Up, Waypoints, Parallaxie
- Magnific Popup, SlickNav

### Images Folder Structure
Create `/images/` folder with these assets:

**Logos & Icons:**
- `logo.svg` - Main logo
- `footer-logo.svg` - Footer logo
- `loader.svg` - Preloader animation
- `favicon.png` - Browser favicon
- `icon-phone-accent.svg`, `icon-mail-accent.svg` - Contact icons
- `icon-clock-white.svg` - Working hours icon
- `icon-menu-tab-1/2/3/4.svg` - Menu category icons
- `icon-what-we-1/2/3.svg` - Service icons
- `icon-cta-counter-1/2/3/4.svg` - CTA counter icons
- `arrow-white.svg`, `arrow-accent.svg` - Arrow icons
- `contact-us-circle.svg` - Rotating circle
- `testimonial-quote.svg` - Quote icon

**Photos:**
- `about-us-image-1.jpg`, `about-us-image-2.jpg` - About section
- `history-image-1/2/3.jpg` - History timeline
- `why-choose-img-1/2/3/4.png` - Icon overlays
- `why-choose-item-1/2/3/4.jpg` - Background images
- `our-menu-image-1/2/3/4/5/6.png` - Menu item images
- `what-we-img-1/2/3.jpg` - Services section
- `gallery-1/2/3/4/5/6.jpg` - Gallery grid
- `scrolling-ticker-image-1/2.jpg` - Marquee thumbnails
- `testimonials-image.jpg` - Testimonials background
- `events-image.jpg` - Events section
- `post-1/2/3.jpg` - Blog posts

## 🚀 Installation & Setup

### Quick Start (Using CDN - Recommended)
1. Extract all files to your web server directory
2. Open `index.html` in your browser
3. All libraries load from CDN automatically

### Local Development
1. Create folder structure:
```
alibaba.cz/
├── index.html
├── css/
│   ├── bootstrap.min.css
│   ├── custom.css (create this)
│   └── [other CSS files]
├── js/
│   ├── function.js (create this)
│   ├── magiccursor.js (create this)
│   └── SplitText.js (create this)
└── images/
    └── [all image assets]
```

2. Download required CSS files (or use CDN versions)
3. Create placeholder images or use royalty-free alternatives
4. Open `index.html` in a modern browser

### Custom CSS (`custom.css`)
You'll need to create `custom.css` with styles for:
- CSS Variables (colors, fonts, spacing)
- Layout and grid systems
- Component styles
- Responsive breakpoints
- Animation keyframes
- Custom utilities

### Custom JavaScript (`function.js`)
Main functionality includes:
- Preloader
- Sticky header on scroll
- Mobile navigation toggle
- Tab switching
- Form validation
- Counter animations initialization
- WOW.js initialization
- Swiper slider configuration
- Parallax initialization
- Smooth scrolling
- GSAP text animations

## 🎯 Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🔧 Customization Guide

### Change Colors
Edit CSS variables in `custom.css`:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-color;
  --dark-bg: #your-color;
  --light-bg: #your-color;
}
```

### Change Fonts
Update Google Fonts link in `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Modify Content
- Text: Edit directly in HTML
- Images: Replace files in `/images/` folder (keep same filenames)
- Menu Items: Add/remove menu item blocks
- Colors: Update CSS variables

### Add/Remove Sections
Sections are modular - simply copy/paste section blocks or comment them out.

## 📞 Support & Documentation

### Key Dependencies
- **Bootstrap 5** - Layout framework
- **GSAP** - Professional-grade animations
- **Swiper** - Modern touch slider
- **WOW.js** - Scroll animations
- **jQuery** - DOM manipulation

### Performance Tips
- Optimize images (use WebP format)
- Lazy load images below fold
- Minify CSS/JS for production
- Enable GZIP compression
- Use CDN for library files

### Common Issues

**Video not playing:**
- Check video URL/path
- Ensure autoplay attributes are set
- Some browsers block autoplay - add `muted` attribute

**Animations not working:**
- Ensure WOW.js is initialized in `function.js`
- Check that GSAP and ScrollTrigger are loaded
- Verify scroll position triggers

**Form not submitting:**
- Forms require backend integration
- Update action URL in form tags
- Implement server-side handling

## 📄 License & Credits

**Template:** Seabud - Seafood Restaurant HTML Template
**Design:** Modern premium restaurant design
**Fonts:** Google Fonts (Bricolage Grotesque, Manrope)
**Icons:** Font Awesome
**Libraries:** All open-source libraries

## 🎓 Learning Resources

**GSAP Animations:**
- https://greensock.com/docs/

**Swiper Slider:**
- https://swiperjs.com/

**Bootstrap 5:**
- https://getbootstrap.com/docs/5.3/

**WOW.js:**
- https://wowjs.uk/

---

**Built with ❤️ for premium dining experiences**

Last Updated: February 2026
