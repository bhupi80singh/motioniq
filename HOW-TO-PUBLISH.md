# Put Motion IQ on your phone — no Mac, no Terminal

You need a free GitHub account. Everything is done in the browser.

1. Go to github.com → Sign up (free).
2. Top-right "+" → New repository. Name: `motioniq`. Public. Create repository.
3. On the new repo page click "uploading an existing file". Drag in these four files:
   `index.html`, `manifest.json`, `sw.js`, `icon.png`. Click "Commit changes".
4. Repo → Settings tab → Pages (left menu) → Source: "Deploy from a branch" → Branch: `main`, folder `/ (root)` → Save.
5. Wait about a minute, refresh. Pages shows your address: `https://YOURNAME.github.io/motioniq/`
6. Open that address in Safari on your iPhone. Allow the camera when asked.
7. Tap the Share button → "Add to Home Screen". It now opens like an app, full screen, with an icon.

Your data lives in that phone's browser. Settings → Export backup gives you a file you can import on another device or keep in iCloud.

## Updating the app later
Upload a new `index.html` over the old one (Add file → Upload → Commit). Reopen the app twice so the cached version refreshes.

## If the camera won't start
- The address must start with https:// (GitHub Pages does).
- iPhone Settings → Safari → Camera → Allow, and make sure no other app is using the camera.
- Voice needs one tap first (Start button) — that's an iOS rule.
