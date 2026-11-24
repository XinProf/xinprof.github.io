# xinprof.github.io

Official project site for **XinProf**, published at <https://xinprof.github.io>.

A small, dependency-free static site describing the ten public repositories under
[github.com/XinProf](https://github.com/XinProf?tab=repositories): two desktop
applications, reference-data repositories, utilities and four MCP integrations.
The landing page also features four self-contained, interactive Chinese-language
product guides, linked prominently from the top of `index.html`.
Repositories under the separate `PolyXRD` account are intentionally not covered.

## Structure

```
index.html                     Single-page site (six UI languages)
XinMatch-Intro.html            Interactive XinMatch product guide (zh)
XinRefinement-Intro.html       Interactive XinRefinement product guide (zh)
XinRefinePro-Intro.html        Interactive XinRefinePro product guide (zh)
XinDataBase-Intro.html         Interactive reference-database guide (zh)
assets/css/style.css           All styling, responsive, no framework
assets/img/diffraction.svg     Hero powder-XRD pattern (generated vector artwork)
assets/img/workflow.svg        Data-flow / architecture diagram
assets/img/lattice.svg         Crystal lattice decoration
assets/img/favicon.svg         Site icon
assets/img/logo-xinmatch.png   XinMatch project logo
assets/img/logo-xinrefinement.png  XinRefinement project logo
gen_assets.py                  Regenerates the four SVG artwork files
.nojekyll                      Serve files as-is, skip Jekyll processing
```

The SVG artwork is generated from scratch (no external assets, no CDN, no web
fonts, no JavaScript framework). The two PNG logos are copied from the
corresponding project repositories. The four product guides are fully
self-contained: styles, scripts and images (base64 PNG) are inlined, so each
guide works as a standalone file with no local dependencies.

## Editing

No build step: edit `index.html` / `style.css` and push to the default branch.
GitHub Pages publishes the repository root automatically.

To regenerate the diagrams:

```bash
python gen_assets.py
```

Landing-page UI text is available in English, Chinese, Japanese, German, French
and Arabic (`assets/js/i18n.js`); the four linked product guides are written in
Chinese. Repository descriptions used on the cards are shortened from each
repository's About text; update `index.html` and `i18n.js` if a repository's
scope changes.

## Custom domain

The site currently uses the default GitHub Pages domain `xinprof.github.io`.
To attach a custom domain, add the hostname to a `CNAME` file at the repository
root and configure the DNS records as described in the GitHub Pages settings.

## License

Site content © 2026 XinProf. The software projects it describes are distributed
under their own dual Academic + Commercial licenses; see each repository's
`LICENSE` file.
