# Novin Photo Gallery

A simple Persian RTL photo gallery with search, case filtering, image preview and links to open/download files hosted in OneDrive/SharePoint.

## Setup
1. Replace the sample `imageUrl` in `photos.js` with a tested public image URL.
2. Optionally set `downloadUrl` to a tested download/share link.
3. Commit `index.html` and `photos.js` to your GitHub repository.
4. In repository Settings → Pages, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.

## Important
- GitHub Pages hosts only this static website; images remain in OneDrive/SharePoint.
- The page does not sign users in or upload files.
- Share links are public to anyone who has them. Do not publish confidential photos.
- A standard SharePoint sharing URL may open a preview page rather than return raw image bytes. Test `imageUrl` in an incognito window; if the thumbnail does not load, use a suitable direct image URL or another supported public-image approach.
