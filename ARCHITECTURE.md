# Architecture & Design Overview

## Site Structure

```
Double Service Website
│
├── HOME (/) ─── Typography-Focused Hero
│   ├── Section 1: Hero
│   │   └── "Double Service" + "Since 2005" + CTA
│   ├── Section 2: Collections
│   │   └── 6 Category Cards
│   ├── Section 3: Featured Products
│   │   └── 4 Featured Product Cards
│   ├── Section 4: Brand Story
│   │   ├── Brand Narrative
│   │   └── Visit Us / Store Info
│   └── Section 5: Navigation/Footer
│
├── COLLECTION (/collection)
│   ├── All Categories View
│   │   └── 6 Category Browse Cards
│   ├── All Products Grid
│   │   └── Filterable, Sortable Products
│   └── Sorting Options
│       ├── Featured
│       ├── New Arrivals
│       ├── Price: Low to High
│       └── Price: High to Low
│
├── COLLECTION BY CATEGORY (/collection/:categoryId)
│   ├── Category Header
│   ├── Filter & Sort
│   └── Products Grid
│       └── Only products from selected category
│
├── PRODUCT DETAIL (/product/:id)
│   ├── Breadcrumb Navigation
│   ├── Product Image
│   ├── Product Details
│   │   ├── Name, Price, Color
│   │   ├── Description & Details
│   │   ├── Size Selection
│   │   ├── Quantity Selection
│   │   └── Add to Cart / Contact
│   └── Related Products
│       └── Other items in same category
│
├── ABOUT (/about)
│   ├── Page Header
│   ├── Our Story (Since 2005)
│   ├── Our Values (3 pillars)
│   ├── Collections Overview
│   ├── Wholesale & Retail Info
│   └── CTA Section
│
└── CONTACT (/contact)
    ├── Page Header
    ├── Contact Information (Left)
    │   ├── Address
    │   ├── Hours
    │   ├── Phone
    │   ├── Email
    │   └── Get Directions
    ├── Contact Form (Right)
    │   ├── Name
    │   ├── Email
    │   ├── Inquiry Type
    │   ├── Subject
    │   ├── Message
    │   └── Submit
    └── FAQ Section
        └── 6 Common Questions
```

---

## Data Flow

```
┌─────────────────────────────────────────────────────┐
│              JSON Data Files                         │
│  ┌──────────────────┐  ┌──────────────────────┐    │
│  │  products.json   │  │  categories.json     │    │
│  │  (16 products)   │  │  (6 categories)      │    │
│  └────────┬─────────┘  └──────────┬───────────┘    │
│           │                       │                 │
└───────────┼───────────────────────┼─────────────────┘
            │                       │
            ├───────────┬───────────┤
            │           │           │
    ┌───────▼──────┐  ┌─▼───────────┴──────┐
    │ Components   │  │ Pages              │
    │ ────────────   │ ────────           │
    │ Navbar       │  │ Home               │
    │ Hero         │  │ Collection         │
    │ ProductCard  │  │ ProductDetail      │
    │ CategoryCard │  │ About              │
    │ etc...       │  │ Contact            │
    └──────┬───────┘  └─────────┬──────────┘
           │                    │
           └────────┬───────────┘
                    │
                    ▼
        ┌──────────────────────┐
        │   React Router       │
        │   (Client-side Nav)  │
        └──────────────────────┘
```

---

## Component Hierarchy

```
App.jsx (with React Router)
│
├─ Navbar
│  ├─ Brand Logo (Link to /)
│  ├─ Desktop Nav Links
│  └─ Mobile Hamburger Menu
│
├─ Routes
│  ├─ Home/
│  │  ├─ Hero
│  │  ├─ CollectionSection
│  │  │  └─ CategoryCard × 6
│  │  ├─ FeaturedProducts
│  │  │  └─ ProductCard × 4
│  │  └─ BrandStory
│  │
│  ├─ Collection/
│  │  ├─ Category Browse
│  │  │  └─ CategoryCard × 6
│  │  └─ Products Grid
│  │     └─ ProductCard × many
│  │
│  ├─ ProductDetail/:id
│  │  ├─ Product Image
│  │  ├─ Product Info
│  │  └─ Related Products
│  │     └─ ProductCard × 4
│  │
│  ├─ About
│  │  ├─ Story
│  │  ├─ Values
│  │  ├─ Collections
│  │  └─ CTA
│  │
│  └─ Contact
│     ├─ Contact Info
│     ├─ Form
│     └─ FAQ
│
└─ Footer
   ├─ Brand Info
   ├─ Navigation Links
   ├─ Contact Info
   ├─ Social Links
   └─ Copyright
```

---

## Design System

### Color Tokens
```css
--color-white: #FFFFFF
--color-black: #111111
--color-dark-grey: #555555
--color-light-grey: #F5F5F5
```

### Typography Scale
```
Hero/Titles:     Light 48-80px  (font-light)
Section Heads:   Light 32-48px  (font-light)
Body/Normal:     Normal 16-18px (font-normal)
Labels/Small:    Medium 12px    (font-medium, uppercase)
```

### Spacing Scale
```
Tiny:      4px  (0.25rem)
Small:     8px  (0.5rem)
Base:     16px  (1rem)
Medium:   24px  (1.5rem)
Large:    32px  (2rem)
XL:       48px  (3rem)
2XL:      64px  (4rem)
3XL:      96px  (6rem)
```

### Grid System
```
Desktop:  4-column (lg:)
Tablet:   2-column (md:)
Mobile:   1-column (default)

Container Max: 1280px (max-w-7xl)
```

---

## Responsive Breakpoints

```
Mobile:    < 640px   (sm:)  — Single column, stacked
Tablet:    640-1024px (md:)  — 2-3 columns, optimized
Desktop:   > 1024px  (lg:)  — Full layouts, multi-column

Key Adaptations:
─────────────────
Mobile:
  • Hamburger menu
  • 1-column grids
  • Larger touch targets
  • Reduced padding/margins

Tablet:
  • Full navigation
  • 2-3 column grids
  • Balanced spacing

Desktop:
  • Full navigation
  • 4-6 column grids
  • Generous whitespace
  • Editorial layouts
```

---

## Routing Map

```
/                      → Home.jsx (hero + collections + featured + brand story)
/collection            → Collection.jsx (all categories + all products)
/collection/:categoryId → Collection.jsx (filtered by category)
/product/:id           → ProductDetail.jsx (single product + related)
/about                 → About.jsx (brand story + values + mission)
/contact               → Contact.jsx (contact form + info + faq)
```

---

## Data Structure

### Product Object
```json
{
  "id": 1,
  "name": "Essential Cotton T-Shirt",
  "category": "tshirts",
  "categoryName": "T-Shirts",
  "price": "₹1,499",
  "priceValue": 1499,
  "description": "Pure cotton everyday T-shirt...",
  "details": "100% premium combed cotton...",
  "image": "/images/products/tshirt-1.webp",
  "sizes": ["S", "M", "L", "XL", "XXL"],
  "color": "Black",
  "featured": true,
  "new": false
}
```

### Category Object
```json
{
  "id": "tshirts",
  "name": "T-Shirts",
  "description": "Premium cotton everyday essentials",
  "image": "/images/categories/tshirts.webp",
  "itemCount": 24
}
```

---

## Feature Implementation

### Dynamic Filtering
```
Collection Page
├─ Category Filter
│  └─ useParams(:categoryId)
│     └─ products.filter(p => p.category === categoryId)
│
└─ Sort Filter
   └─ useState(sortBy)
      ├─ featured (default)
      ├─ new (sort by .new)
      ├─ price-low (sort by .priceValue ASC)
      └─ price-high (sort by .priceValue DESC)
```

### Navigation
```
React Router provides:
├─ Client-side routing (no page reloads)
├─ URL parameter handling
├─ Link component (optimized navigation)
└─ Automatic scroll-to-top on route change
```

### Responsive Images
```
All images use:
├─ Responsive object-cover
├─ Fixed aspect ratios (aspect-square)
├─ Placeholder backgrounds
└─ Optimized loading
```

---

## Build & Deployment

```
Development
├─ npm run dev
└─ Vite hot module replacement

Production
├─ npm run build
│  ├─ Minified CSS (~16KB)
│  ├─ Minified JS (~207KB)
│  └─ Optimized HTML
└─ npm run preview
   └─ Test production build locally

Deployment Target
├─ Static hosting (no backend needed)
├─ Vercel (recommended)
├─ Netlify
├─ GitHub Pages
└─ Any CDN
```

---

## Performance Characteristics

```
Metrics                          Value
─────────────────────────────────────
HTML Size                        0.88 KB
CSS Size (gzipped)              3.43 KB
JS Size (gzipped)              61.51 KB
─────────────────────────────────────
Total Gzipped                   ~65 KB
Load Time (good connectivity)  < 1 sec
React Components               8
Pages                          5
Data-driven Products          16
Categories                     6
```

---

## Code Quality

```
✓ React 18.3 best practices
✓ Functional components + hooks
✓ Clean, readable code
✓ Consistent naming conventions
✓ Proper component separation
✓ Reusable components
✓ SEO-friendly structure
✓ Accessible markup (semantic HTML)
✓ No console errors/warnings
✓ Mobile-first responsive design
```

---

## File Organization

```
double-service/
├── src/
│   ├── components/     (8 reusable components)
│   ├── pages/          (5 page components)
│   ├── data/           (2 JSON data files)
│   ├── App.jsx         (main app + routing)
│   ├── main.jsx        (entry point)
│   └── index.css       (global styles)
│
├── public/             (static assets)
│
├── dist/               (production build output)
│
└── Configuration Files
    ├── package.json
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    └── index.html
```

---

This architecture provides:
- **Clean separation of concerns**
- **Scalable component structure**
- **Easy data management**
- **Responsive design**
- **Professional performance**
