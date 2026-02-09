# Placeholder Images - Quick Setup

Use these URLs temporarily while you gather your real images. Replace the `src` attributes in index.html with these URLs.

## 📷 Hero & Main Sections

```html
<!-- Hero Video (already configured) -->
<source src="https://demo.awaikenthemes.com/assets/videos/seabud-video.mp4" type="video/mp4">

<!-- About Us Images -->
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop" alt="About Us 1">
<img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=700&fit=crop" alt="About Us 2">

<!-- History Images -->
<img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop" alt="History 1971">
<img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop" alt="History 1985">
<img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop" alt="History 1998">
```

## 🍽️ Menu Item Images

```html
<!-- Starters -->
<img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&h=300&fit=crop" alt="Crispy Calamari">
<img src="https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=300&h=300&fit=crop" alt="Lobster Tail">
<img src="https://images.unsplash.com/photo-1626200418345-993559776bcc?w=300&h=300&fit=crop" alt="Scallops">
<img src="https://images.unsplash.com/photo-1580959375944-aaf623ba5c4b?w=300&h=300&fit=crop" alt="Crab Cakes">
<img src="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&h=300&fit=crop" alt="Shrimp">
<img src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=300&h=300&fit=crop" alt="Oysters">
```

## 🖼️ Gallery Images

```html
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=600&fit=crop" alt="Gallery 1">
<img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=600&fit=crop" alt="Gallery 2">
<img src="https://images.unsplash.com/photo-1580959375944-aaf623ba5c4b?w=500&h=600&fit=crop" alt="Gallery 3">
<img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=500&h=600&fit=crop" alt="Gallery 4">
<img src="https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500&h=600&fit=crop" alt="Gallery 5">
<img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=600&fit=crop" alt="Gallery 6">
```

## 📝 Blog Post Images

```html
<img src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=500&fit=crop" alt="Blog 1">
<img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=500&fit=crop" alt="Blog 2">
<img src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=800&h=500&fit=crop" alt="Blog 3">
```

## 🎪 Other Sections

```html
<!-- Why Choose Us Backgrounds -->
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop" alt="Fresh Ingredients">
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop" alt="Signature Dishes">
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop" alt="Customer Rating">
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=500&fit=crop" alt="Excellence">

<!-- What We Do -->
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop" alt="Service 1">
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop" alt="Service 2">
<img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop" alt="Service 3">

<!-- Testimonials Background -->
<img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1000&h=800&fit=crop" alt="Testimonials">

<!-- Events Section -->
<img src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=700&h=900&fit=crop" alt="Private Events">

<!-- Scrolling Ticker Thumbnails -->
<img src="https://images.unsplash.com/photo-1580959375944-aaf623ba5c4b?w=100&h=100&fit=crop" alt="Ticker 1">
<img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=100&h=100&fit=crop" alt="Ticker 2">
```

## 🎨 Icons & SVG (Use Simple Colored Divs)

For SVG icons, use colored divs temporarily:

```html
<!-- Replace icon SVGs with this -->
<div style="width: 50px; height: 50px; background: #00a8a8; border-radius: 50%;"></div>
```

## 📦 Download All at Once

### Option 1: Use Unsplash API

```javascript
// Seafood photos
https://source.unsplash.com/600x800/?seafood,restaurant
https://source.unsplash.com/600x800/?lobster,food
https://source.unsplash.com/600x800/?fish,dinner
https://source.unsplash.com/600x800/?shrimp,cuisine
```

### Option 2: Bulk Download from Pexels

Search terms:
- "seafood restaurant"
- "seafood platter"
- "lobster dinner"
- "fish dish"
- "restaurant interior"
- "chef cooking"
- "fine dining"

## 🔄 Find & Replace in HTML

Use VS Code or text editor to find and replace:

**Find:**
```
src="images/about-us-image-1.jpg"
```

**Replace with:**
```
src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=800&fit=crop"
```

## 🎯 Recommended Real Image Sizes

When you get real images, optimize them to these sizes:

| Section | Recommended Size | Format |
|---------|-----------------|--------|
| Hero Video | 1920x1080 | MP4 |
| About Images | 600x800px | JPG/WebP |
| History | 400x300px | JPG/WebP |
| Menu Items | 300x300px | PNG/WebP |
| Gallery | 500x600px | JPG/WebP |
| Blog Posts | 800x500px | JPG/WebP |
| Icons | 64x64px | SVG/PNG |
| Logo | 200x50px | SVG/PNG |

## 💡 Pro Tips

1. **Compress before upload:** Use TinyPNG.com
2. **Use WebP format:** Better compression
3. **Lazy load:** Images below fold
4. **Responsive images:** Use srcset attribute
5. **Alt text:** Always describe images

## 🌐 Free Stock Photo Sites

- **Unsplash:** https://unsplash.com/s/photos/seafood-restaurant
- **Pexels:** https://www.pexels.com/search/seafood/
- **Pixabay:** https://pixabay.com/images/search/restaurant/
- **Foodiesfeed:** https://www.foodiesfeed.com/ (Food specific)

## 🎨 Create Simple Placeholder

If you want local placeholders:

```html
<!-- Use SVG placeholder -->
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="#00a8a8"/>
    <text x="50%" y="50%" fill="white" text-anchor="middle" font-size="24" font-family="Arial">Image Placeholder</text>
</svg>
```

---

**Quick Start:** Copy the Unsplash URLs above and use them in your HTML for instant visual results!
