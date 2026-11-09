# Rubox servis s.r.o. — web

Statický návrh webu pro výškové, stavební, kominické a zemní práce. Hotové soubory pro hosting jsou ve složce [`dist/`](dist/). Domovská stránka je `dist/index.html`.

## Místní náhled

Vyžaduje Node.js. Spusťte `node server.cjs` a otevřete `http://127.0.0.1:4173/`.

## Úpravy

- `dist/styles.css` a `dist/detail.css` určují vzhled.
- `dist/script.js` obsluhuje mobilní menu, poptávku a fotogalerii.
- `build-pages.cjs` obsahuje obsah čtyř podstránek. Po jeho změně spusťte `node build-pages.cjs`, který vygeneruje odpovídající HTML do `dist/`.
- `dist/assets/` obsahuje logo, video a fotografie včetně galerie výškových prací.

Všechny HTML stránky obsahují `noindex, nofollow, noarchive`. Poptávkový formulář pouze připravuje text ke zkopírování; nic neodesílá. Před ostrým nasazením je třeba doplnit ověřené kontaktní údaje a způsob odeslání poptávky.

Texty pro výškové a kominické práce jsou přepracované podle spřízněného webu [kominikhk.cz – výškové práce](https://www.kominikhk.cz/vyskove-prace.htm) a [kominikhk.cz – kominické práce](https://www.kominikhk.cz/kominicke-prace.htm). Dvě ilustrační fotografie z tohoto webu jsou označené přímo na podstránkách. Ostatní fotografie dodal zadavatel.

Fotografie zábran proti ptákům je na webu nedestruktivně zesvětlena a jemně doostřena pomocí filtru SVG. Původní JPG v `dist/assets/` zůstává zachovaný.
