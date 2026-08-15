# Double Service — Premium Men's Fashion Website

A modern, fully responsive static website for Double Service, a premium men's fashion brand built with React.js and Tailwind CSS.

## Project Overview

- **Brand**: Double Service
- **Founded**: 2005
- **Focus**: Premium men's fashion (wholesale & retail)
- **Tech Stack**: React.js, React Router, Tailwind CSS, Vite
- **Type**: Static website (no backend, no API, no database)

## Features

- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Minimal Premium Design**: Inspired by Apple's design philosophy
- **Multiple Pages**: Home, Collection, Product Detail, About, Contact
- **Category Navigation**: Browse products by category
- **Product Details**: View detailed product information with sizes and pricing
- **Static Data**: All products and categories loaded from JSON files
- **Clean Navigation**: Minimal navbar with mobile hamburger menu
- **Professional Footer**: Complete with links, contact info, and social media

## Project Structure

```
double-service/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── CategoryCard.jsx
│   │   ├── CollectionSection.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── BrandStory.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Collection.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── products.json
│   │   └── categories.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
│   └── favicon.svg
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Navigate to the project directory:
```bash
cd double-service
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for testing.

## Data Management

All product and category data is stored in JSON files under `src/data/`:

### categories.json
Contains all product categories with:
- `id`: Unique category identifier
- `name`: Display name
- `description`: Category description
- `image`: Path to category image
- `itemCount`: Number of items in category

### products.json
Contains all products with:
- `id`: Unique product identifier
- `name`: Product name
- `category`: Category ID
- `categoryName`: Category display name
- `price`: Display price
- `priceValue`: Numeric price for sorting
- `description`: Short product description
- `details`: Detailed product information
- `image`: Path to product image
- `sizes`: Available sizes array
- `color`: Product color
- `featured`: Boolean for featured section
- `new`: Boolean for new product badge

## Routing

The website uses React Router for client-side navigation:

- `/` — Home page
- `/collection` — All products and categories
- `/collection/:categoryId` — Category-specific products
- `/product/:id` — Individual product detail page
- `/about` — About Double Service
- `/contact` — Contact form and information

## Design System

### Color Palette
- **White**: #FFFFFF
- **Black**: #111111
- **Dark Grey**: #555555
- **Light Grey**: #F5F5F5

### Typography
- **Font**: Inter (system fonts fallback)
- **Weights**: 300 (Light), 400 (Normal), 500 (Medium), 600 (Semibold)

### Spacing & Layout
- **Max Container Width**: 1280px
- **Responsive Breakpoints**: sm (640px), md (768px), lg (1024px)
- **Generous Whitespace**: Premium, editorial feel

## Responsive Design

The site is fully responsive with specific adaptations:

### Desktop (1024px+)
- Full navigation in header
- Multi-column product grids
- Side-by-side content layouts
- Larger typography

### Tablet (768px - 1023px)
- Optimized spacing and padding
- 2-3 column grids
- Stacked layouts where appropriate
- Medium typography

### Mobile (< 768px)
- Hamburger menu navigation
- Single column layouts
- Touch-friendly buttons
- Optimized typography
- Adequate padding for mobile devices

## Customization

### Adding Products
Edit `src/data/products.json` and add new product objects following the existing structure.

### Adding Categories
Edit `src/data/categories.json` and add new category objects.

### Updating Brand Information
- Contact details: `src/components/BrandStory.jsx` and `src/components/Footer.jsx`
- Store hours: `src/pages/Contact.jsx`
- Brand story: `src/pages/About.jsx`

### Changing Colors
Update the color values in `src/index.css` and `tailwind.config.js`.

## Images

Currently, the site uses placeholder image paths. To add actual images:

1. Create folders in `public/images/`:
   - `products/` — Product images
   - `categories/` — Category images
   - `brand/` — Brand/store images

2. Replace placeholder paths in JSON files and components with actual image paths.

3. Use `.webp` format for optimal performance.

## Performance

- Vite for fast build and HMR
- Tailwind CSS for optimized styling
- React Router for efficient client-side routing
- Minimal dependencies (no animation libraries)
- Static data (no API calls)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2005-2026 Double Service. All rights reserved.

## Notes

- This is a static website with no backend requirements
- All data is client-side (no API calls)
- Forms are UI-only (no backend submission)
- No authentication or user accounts
- No cart functionality (product view only)

---

For questions or support, contact: hello@doubleservice.com
