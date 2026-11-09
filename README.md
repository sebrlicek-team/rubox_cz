# Rubox servis s.r.o. — web

Statický návrh webu pro výškové, stavební, kominické a zemní práce. Hotové soubory pro hosting jsou ve složce [`dist/`](dist/). Domovská stránka je `dist/index.html`.

## GitHub Pages

Workflow [`.github/workflows/pages.yml`](.github/workflows/pages.yml) při každém pushi do `main` publikuje obsah `dist/` na GitHub Pages. V nastavení repozitáře je jako **Build and deployment → Source** vybrán **GitHub Actions**. Projektová adresa Pages je `https://sebrlicek-team.github.io/rubox_cz/`; pokud je v nastavení aktivní vlastní doména, GitHub na ni může návštěvníky přesměrovat. Vlastní doména musí mít správně nastavené DNS.

Všechny odkazy a cesty k souborům jsou relativní, aby fungovaly i pod adresářem `/rubox_cz/`. Stránky mají `noindex, nofollow, noarchive`; odkaz na Pages je veřejně přístupný, ale vyhledávače dostanou pokyn jej neindexovat.

## Místní náhled

Vyžaduje Node.js. Spusťte `node server.cjs` a otevřete `http://127.0.0.1:4173/`.

## Úpravy

- `dist/styles.css`, `dist/detail.css` a `dist/contact.css` určují vzhled.
- `dist/script.js` obsluhuje mobilní menu, poptávku a fotogalerii.
- `build-pages.cjs` obsahuje obsah čtyř podstránek. Po jeho změně spusťte `node build-pages.cjs`, který vygeneruje odpovídající HTML do `dist/`.
- `dist/assets/` obsahuje logo, video a fotografie včetně galerie výškových prací.

Všechny HTML stránky obsahují `noindex, nofollow, noarchive`. Kontaktní údaje jsou na `dist/kontakt.html`. Poptávkový formulář pouze připravuje text ke zkopírování; nic neodesílá.

Texty pro výškové a kominické práce jsou přepracované podle spřízněného webu [kominikhk.cz – výškové práce](https://www.kominikhk.cz/vyskove-prace.htm) a [kominikhk.cz – kominické práce](https://www.kominikhk.cz/kominicke-prace.htm). Dvě ilustrační fotografie z tohoto webu jsou označené přímo na podstránkách. Ostatní fotografie dodal zadavatel.

Fotografie zábran proti ptákům je na webu nedestruktivně zesvětlena a jemně doostřena pomocí filtru SVG. Původní JPG v `dist/assets/` zůstává zachovaný.
