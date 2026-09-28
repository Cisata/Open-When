# Personal Media

Add photos to this folder, then set the matching `media.src` in `src/data/letters.js` to a root-relative path such as `/media/our-memory.jpg`.

Each photo entry also accepts `alt` text and a short `caption`. Leave `src` unset to keep the illustrated mock placeholder. The welcome-page photo is configured in `src/App.jsx` in the `PhotoPlaceholder` call inside `welcome-art`.

The supplied song link is in the `happy` letter's `song` object in `src/data/letters.js`. It opens on request and does not autoplay.