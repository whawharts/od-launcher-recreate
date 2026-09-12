# Aion America launcher recreation

This recreation keeps the original launcher canvas at exactly `490 × 330` pixels while translating the supplied dark-fantasy reference into functional HTML and CSS. Full-resolution PNG masters are retained beside optimized JPEG derivatives used by the launcher.

The v4 campaign revision gives Season One, Battle Pass, and Prestige Pack entirely new female-led compositions: a storm-to-sunrise victory arena, an overhead spiral reward vault, and a black-crystal couture masquerade. Marketplace remains on its approved v3 female Shugo artwork, while Online Credits and Streamer Program remain on their approved v2 art.

Prestige Pack now uses the user-supplied v5 Asmodian sorceress artwork, preserved at its original resolution with a crop-safe 768 x 512 launcher derivative.

Open `index.html` directly, or serve the folder with any static file server. The carousel now presents one full-width promotional banner per slide, starts on Season One, auto-advances through all six promotions every five seconds, and supports the ornamental previous/next controls.

The current temporary presentation renders the supplied Aion Overdose welcome banner with three direct actions for the official website, Facebook page, and YouTube channel. The previous promotional carousel and social-icon rail remain excluded.

The five social links use their full-color icons without visible text. All external destinations have been preserved and corrected from Markdown-wrapped URLs to valid HTML links.

The current page has four community links: Website, Facebook, YouTube, and Discord. They use `target="_self"` so Active Anticheat Updater's existing `Navigating` handler can cancel embedded navigation and open the URL through Windows' default browser. Keep the `ActiveAnticheatUpdater` author metadata in the page. Do not change these links to `target="_blank"` or `window.open()`: new-window navigation bypasses that handler and can open Internet Explorer. When viewed in a normal browser, these links navigate in the current tab.

Deploy the updated `index.html` to the hosted launcher page and restart the launcher to verify all four destinations. The local HTML update does not change the hosted page or the launcher executable.
