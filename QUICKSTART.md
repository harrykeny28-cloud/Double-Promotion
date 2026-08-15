# Quick Start Guide — Double Service Website

## 🚀 Get Running in 30 Seconds

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Go to: **http://localhost:5173**

That's it! The site is now live and will auto-reload when you make changes.

---

## 📂 Project Structure Overview

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Header with navigation
│   ├── Hero.jsx        # Hero section
│   ├── ProductCard.jsx # Product display card
│   ├── CategoryCard.jsx # Category card
│   ├── FeaturedProducts.jsx
│   ├── CollectionSection.jsx
│   ├── BrandStory.jsx
│   └── Footer.jsx
├── pages/              # Full page components
│   ├── Home.jsx        # Homepage
│   ├── Collection.jsx  # Products by category
│   ├── ProductDetail.jsx # Individual product
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── data/               # JSON data files
│   ├── products.json   # All products
│   └── categories.json # All categories
├── App.jsx             # Main app with routing
├── main.jsx            # Entry point
└── index.css          # Global styles & Tailwind
```

---

## 🎯 Common Tasks

### View the Website
```bash
npm run dev
```
Then open http://localhost:5173

### Add a New Product
1. Open `src/data/products.json`
2. Add a new product object following the existing format
3. Save — the page will auto-reload

### Add a New Category
1. Open `src/data/categories.json`
2. Add a new category object
3. Save and refresh

### Update Store Information
- **Hours**: Edit `src/pages/Contact.jsx`
- **Address**: Edit `src/components/BrandStory.jsx` and `src/pages/Contact.jsx`
- **Phone/Email**: Edit `src/components/Footer.jsx`

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder ready to deploy.

### Deploy the Built Site
The `dist/` folder can be deployed to:
- **Vercel** (recommended) — automatic from GitHub
- **Netlify** — drag & drop or git integration
- **GitHub Pages** — static hosting
- **Any static host** — just upload the `dist/` folder

---

## 🎨 Design Notes

- **Color System**: Only 4 colors (white, black, dark grey, light grey)
- **No Animations**: Clean, simple interactions only
- **Responsive**: Works perfectly on mobile, tablet, desktop
- **Minimal**: No unnecessary features or bloat

---

## 📝 Key Files to Know

| File | Purpose |
|------|---------|
| `src/data/products.json` | All product data |
| `src/data/categories.json` | All categories |
| `src/components/Navbar.jsx` | Header navigation |
| `src/App.jsx` | Main app & routing |
| `tailwind.config.js` | Tailwind configuration |
| `index.css` | Global styles |

---

## 🆘 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Changes not showing?
1. Check browser console for errors
2. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
3. Restart dev server (stop and run `npm run dev` again)

### Build fails?
```bash
npm install
npm run build
```

---

## 📊 Quick Stats

- **Pages**: 5 (Home, Collection, Product Detail, About, Contact)
- **Components**: 8
- **Products**: 16 (in sample data)
- **Categories**: 6
- **Colors**: 4
- **Responsive Breakpoints**: 3 (mobile, tablet, desktop)

---

## 🔗 Useful Links

- **React**: https://react.dev
- **React Router**: https://reactrouter.com
- **Tailwind CSS**: https://tailwindcss.com
- **Vite**: https://vitejs.dev

---

**Ready to build? Start with `npm run dev`!**
