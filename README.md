# Partylist Compilation

May dalawang bersyon dito, pareho ang itsura at features (kasama ang flip
card sa larawan), pero magkaiba ang paraan ng pagpapatakbo:

## 1. Para sa GitHub Pages (static — ito ang gamitin mo sa GitHub)

Ito ang **index.html** kasama ang **data.js**, **style.css**, **script.js**.

- Buksan ang `data.js` para i-edit ang mga partylist, miyembro, larawan,
  at achievements.
- I-push mo lang ang buong folder sa GitHub repo mo, i-enable ang
  **GitHub Pages** (Settings > Pages > i-set ang branch/folder), at
  gagana na agad — walang kailangang server o PHP.
- Ilagay ang mga image file sa loob ng `images/` folder, tapos sa
  `data.js`, sa `image:` field ng bawat member, ilagay ang path
  hal. `'images/juan.jpg'`.

## 2. Para sa PHP hosting (kung may sarili kang server / XAMPP / hosting na may PHP)

Ito ang **index.php** (may sarili ring `$partylists` array sa loob).
Hindi ito gagana sa GitHub Pages dahil hindi nagpapatakbo ng PHP ang
GitHub Pages — static files lang ang sinusuportahan nito.

- Gamitin lang ito kung naka-deploy ka sa PHP-capable na host
  (hal. InfinityFree, 000webhost, sariling VPS, o `php -S localhost:8000`
  sa terminal para sa local testing).

---

**Tip:** Kung GitHub Pages ang plano mong palagian gamitin, mas simple
nang tanggalin/wag na lang gamitin ang `index.php` para hindi malito —
ang `index.html` + `data.js` na lang ang kailangan mo.
