# Image Setup Guide

## Current State
The website currently uses placeholder image paths. These need to be replaced with actual images.

## Image Locations

Create these folders in the `public/` directory:

```
public/
├── images/
│   ├── products/
│   │   ├── tshirt-1.webp
│   │   ├── tshirt-2.webp
│   │   ├── tshirt-3.webp
│   │   ├── polo-1.webp
│   │   ├── polo-2.webp
│   │   ├── polo-3.webp
│   │   ├── shirt-1.webp
│   │   ├── shirt-2.webp
│   │   ├── shirt-3.webp
│   │   ├── chino-1.webp
│   │   ├── chino-2.webp
│   │   ├── trouser-1.webp
│   │   ├── trouser-2.webp
│   │   ├── trouser-3.webp
│   │   ├── jacket-1.webp
│   │   └── jacket-2.webp
│   │
│   ├── categories/
│   │   ├── tshirts.webp
│   │   ├── shirts.webp
│   │   ├── trousers.webp
│   │   ├── jackets.webp
│   │   ├── chinos.webp
│   │   └── polos.webp
│   │
│   └── brand/
│       └── about-1.webp
```

## Image Specifications

### Product Images
- **Format**: WebP (for best performance)
- **Dimensions**: Square (1000×1000px or larger)
- **Aspect Ratio**: 1:1
- **Size**: 100-300 KB per image
- **Content**: Clean product shots on neutral background
- **Used For**: Product cards, featured section, detail page

### Category Images
- **Format**: WebP
- **Dimensions**: Square (1000×1000px or larger)
- **Aspect Ratio**: 1:1
- **Size**: 100-300 KB per image
- **Content**: Category-representative product or lifestyle shot
- **Used For**: Category cards on homepage and collection page

### Brand Images
- **Format**: WebP
- **Dimensions**: Square (1000×1000px)
- **Aspect Ratio**: 1:1
- **Size**: 100-300 KB per image
- **Content**: Store/brand photography
- **Used For**: About page, brand story section

## Quick Setup Steps

### 1. Create Folder Structure
```bash
# From project root
mkdir -p public/images/products
mkdir -p public/images/categories
mkdir -p public/images/brand
```

### 2. Add Your Images
- Place product images in `public/images/products/`
- Place category images in `public/images/categories/`
- Place brand images in `public/images/brand/`

### 3. File Naming
Match the filenames to the paths in:
- `src/data/products.json` (image field)
- `src/data/categories.json` (image field)

Example: If `products.json` has:
```json
{
  "image": "/images/products/tshirt-1.webp"
}
```

Then create: `public/images/products/tshirt-1.webp`

## File Format Recommendations

### Use WebP for Best Performance
```
Original Format        WebP Benefits
────────────────────────────────────
JPEG (1000×1000)      Smaller file size (50-60% reduction)
PNG (1000×1000)       Better compression
                      Faster loading
                      Better for web
```

### Conversion Tools
- **Online**: TinyWebP, CloudConvert, iLoveIMG
- **CLI**: ImageMagick (`convert image.jpg image.webp`)
- **Desktop**: XnConvert (free), Adobe Lightroom

## Image Path References

All image paths in the project:

### products.json
```json
"image": "/images/products/{filename}.webp"
```

### categories.json
```json
"image": "/images/categories/{filename}.webp"
```

### pages/About.jsx
```jsx
src="/images/brand/about-1.webp"
```

## Quick Upload Process

1. **Prepare Images**
   - Take/gather product photos
   - Convert to WebP format
   - Name files consistently

2. **Create Folders**
   ```bash
   mkdir -p public/images/{products,categories,brand}
   ```

3. **Copy Images**
   ```bash
   # Copy product images
   cp your-images/products/* public/images/products/
   
   # Copy category images
   cp your-images/categories/* public/images/categories/
   
   # Copy brand images
   cp your-images/brand/* public/images/brand/
   ```

4. **Verify**
   ```bash
   npm run dev
   # Visit http://localhost:5173
   # Images should now display
   ```

## Image Count Required

To use all current product/category data:

- **Product Images**: 16 files
- **Category Images**: 6 files
- **Brand Images**: 1 file
- **Total**: 23 images minimum

## Alternative: Placeholder Service

If you don't have images yet, you can use placeholder services:

### Option 1: PlaceHolder.com
```
https://via.placeholder.com/1000x1000?text=Product
```

### Option 2: DiceBear
```
https://api.dicebear.com/7.x/avataaars/svg?seed=product-1
```

### Option 3: Lorem Picsum
```
https://picsum.photos/1000/1000?random=1
```

**Note**: These are for development only. Replace with real images before production.

## Update JSON Example

If using temporary placeholder URLs:

```json
{
  "id": 1,
  "name": "Essential Cotton T-Shirt",
  "image": "https://via.placeholder.com/1000x1000?text=Tshirt-1",
  // ... other fields
}
```

Change to:
```json
{
  "id": 1,
  "name": "Essential Cotton T-Shirt",
  "image": "/images/products/tshirt-1.webp",
  // ... other fields
}
```

## Image Optimization Best Practices

1. **Use WebP Format** — 25-35% smaller than JPEG
2. **Optimize Size** — 100-300 KB per image
3. **Consistent Naming** — Easy to manage and track
4. **Square Format** — Best for grid layouts
5. **Consistent Style** — Professional, cohesive look

## Troubleshooting

### Images Not Loading
1. Check file path matches exactly
2. Verify file exists in public folder
3. Check browser console for 404 errors
4. Try hard refresh (Ctrl+Shift+R)

### Wrong Image Format
- Ensure `.webp` extension in path
- Convert images if needed

### Image Stretching
- Ensure images are square (1:1 aspect ratio)
- Check CSS uses `object-cover`

## Performance Impact

```
Image Type          File Size    Impact
─────────────────────────────────────────
Full Images (16)    ~3.5 MB      Slow loading
Optimized WebP      ~1.8 MB      Good loading
Lazy Loading        ~1.8 MB      Best performance
```

All images are currently set to lazy-load via browser optimization.

---

## Summary

1. Create `public/images/{products,categories,brand}` folders
2. Add your product/category images (`.webp` format recommended)
3. Ensure filenames match paths in JSON files
4. Test in browser at `npm run dev`
5. Deploy with optimized images

**Image setup is straightforward — just add files to the right folder!**
