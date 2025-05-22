# File Migration Instructions

This document outlines the steps needed to complete the file reorganization.

## Assets Migration Required

Due to API limitations, the following files need to be manually moved:

### Fonts (from `assets/fonts/` to `src/assets/fonts/`)
- `DMSans-VariableFont_opsz,wght.ttf`
- `DMSans-Italic-VariableFont_opsz,wght.ttf`
- `OFL.txt`
- `README.txt`
- `static/` directory (entire folder)

### Images (from `assets/images/` to `src/assets/images/`)
- `favicon-32x32.png`
- `illustration-ai-content.webp`
- `illustration-audience-growth.webp`
- `illustration-consistent-schedule.webp`
- `illustration-create-post.webp`
- `illustration-five-stars.webp`
- `illustration-grow-followers.webp`
- `illustration-multiple-platforms.webp`
- `illustration-schedule-posts.webp`

## Manual Steps

1. Create the directory structure:
   ```bash
   mkdir -p src/assets/fonts src/assets/images
   ```

2. Copy fonts:
   ```bash
   cp -r assets/fonts/* src/assets/fonts/
   ```

3. Copy images:
   ```bash
   cp -r assets/images/* src/assets/images/
   ```

4. After copying, you can remove the old assets directory:
   ```bash
   rm -rf assets/
   ```

5. Remove the old files from the root directory:
   ```bash
   rm index.html style.css
   ```

## Verification

After completing the migration:

1. Run `npm run dev` to test the development server
2. Check that all images load correctly
3. Verify that fonts are displaying properly
4. Ensure no console errors appear

## Files Already Moved

✅ `vite.config.js` - Created with optimized configuration
✅ `public/index.html` - Moved with updated paths
✅ `src/css/styles.css` - Moved with corrected font paths
✅ `src/css/components/bento-grid.css` - New component styles
✅ `src/js/main.js` - Created for future functionality
✅ `package.json` - Updated with enhanced metadata
✅ `README.md` - Updated with new structure documentation
