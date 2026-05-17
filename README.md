# Rattan Furniture Website

A static landing page for a rattan furniture business. The page is split into separate HTML, CSS, and JavaScript files so the content, styling, data, and behavior are easier to maintain.

## Project Structure

```text
rattan/
+-- rattan-furniture.html
+-- css/
|   +-- styles.css
+-- js/
|   +-- data.js
|   +-- app.js
+-- images/
    +-- product and gallery images
```

## Files

- `rattan-furniture.html` contains the page markup and links to the CSS and JavaScript files.
- `css/styles.css` contains all visual styling and responsive layout rules.
- `js/data.js` contains product and gallery data.
- `js/app.js` contains rendering, filtering, lightbox, mobile menu, cursor, and form behavior.
- `images/` contains the local furniture images used by the page.

## Running Locally

Open `rattan-furniture.html` directly in a browser.

No build step is required. The page uses local assets plus Google Fonts, so the custom fonts require an internet connection.

## Editing

To add or update products, edit the `products` array in `js/data.js`.

To add or update gallery items, edit the `galleryItems` array in `js/data.js`.

To change layout, colors, spacing, or responsive behavior, edit `css/styles.css`.
