# Images for Forel-huset Website

This folder contains all images used on the website. Upload your images here and reference them in the content files.

## Folder Structure:

- `gallery/` - Main photo gallery images
- `house/` - House exterior and interior photos  
- `activities/` - Activity and fishing photos
- `testimonials/` - Guest profile photos
- `hero/` - Hero section background images

## Image Guidelines:

- **Format**: JPG or PNG
- **Size**: Recommended 800x600px for gallery, 1920x1080px for hero
- **Quality**: High quality but web-optimized
- **Naming**: Use descriptive names like `exterior-view.jpg`, `fishing-jetty.jpg`

## How to Add Images:

1. Upload images to the appropriate folder
2. Update the image paths in `src/content/siteContent.ts`
3. Use format: `/images/folder/filename.jpg`

Example:
```typescript
src: "/images/gallery/house-exterior.jpg"
```