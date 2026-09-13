# Edinburgh 2026

Privé one-page site voor het mannenweekend in Edinburgh, **2 – 4 oktober 2026**.
Statisch: geen build, geen framework, geen npm. Openen = werkt.

```
index.html              de pagina
style.css               alle opmaak
script.js               alle content + alle logica
manifest.webmanifest    app-icoon / "Toevoegen aan beginscherm"
icon.svg                het distel-icoon
images/                 de illustraties en portretten
```

---

## 1. Content aanpassen

**Alles wat je normaal wilt wijzigen staat bovenaan `script.js`**, boven de regel
`Hieronder hoef je niets meer aan te passen`. Je hoeft de HTML nooit open te maken.

| Wat | Waar in `script.js` |
|---|---|
| Vertrekmoment voor de countdown | `VERTREK` |
| De elf mannen | `MANNEN` |
| Programma per dag | `PROGRAMMA` |
| Gedeelde sneuvelkoning aanzetten | `SNEUVEL_DB` |
| De scheidsrechterscode | `SCHEIDSRECHTER_HASH` |
| Wisselkoers en snelknoppen | `KOERS_GBP_EUR`, `FX_SNELKEUZE` |
| Middelpunt van de kaart | `KAART_MIDDEN`, `KAART_ZOOM` |
| Klimaatcijfers + de droge opmerking | `KLIMAAT`, `WEER_OPMERKING` |

Het blok `PRAKTISCH` (vluchten, hotel, noodnummer) staat er nog, maar de sectie
is voorlopig van de pagina gehaald. Terugzetten kan later in één keer.

Bewerk met een gewone teksteditor, sla op, ververs de pagina. Let op de komma's
tussen de regels — vergeet je er één, dan blijft de sectie leeg.

### Programma
Elk item ziet er zo uit:

```js
{ tijd: "16:00", icoon: "kasteel", titel: "Bier & whisky", desc: "Bezoek kasteel" }
```

`desc` mag je weglaten. Beschikbare iconen:
`trein` · `vliegtuig` · `koffer` · `bed` · `kasteel` · `bord` · `rugby` ·
`bier` · `koffie` · `whisky` · `bijl`

Verandert een dátum? Pas dan ook `datum: [2026, 9, 2]` aan —
dat is `[jaar, maand−1, dag]`, dus **9 = oktober**.

### De sneuvelkoning
De ranglijst gebruikt dezelfde namen als `MANNEN`. Voeg je iemand toe, dan komt
hij vanzelf onderaan de lijst erbij; haal je iemand weg, dan verdwijnt hij.
Je hoeft de ranglijst zelf nergens bij te houden.

### Kaart
Een gewone kaart van Edinburgh, bewust zonder pinnen. Wil je hem ergens anders
laten beginnen, pas dan `KAART_MIDDEN` en `KAART_ZOOM` aan. Coördinaten vind je
door in Google Maps rechts te klikken op een plek.

---

## 2. De portretten toevoegen

1. Zet het bestand in `images/`.
2. De bestandsnaam is **de voornaam in kleine letters**, met `.jpg`:
   `images/niels.jpg`, `images/danny.jpg`, …
3. Zet diezelfde voornaam in de lijst `MANNEN` bovenaan `script.js`.

```js
const MANNEN = ["niels", "danny", "joost", ...];
```

De site maakt er automatisch `images/<naam>.jpg` van en zet de naam met een
hoofdletter onder het portret.

> **Kleine letters zijn verplicht.** GitHub Pages is hoofdlettergevoelig:
> `images/Niels.jpg` wordt níet gevonden als de lijst `"niels"` zegt.
> Op je Mac werkt het lokaal wél — en online dan niet. Gebruik dus overal
> kleine letters, ook in de extensie (`.jpg`, niet `.JPG`).

**Zolang een portret ontbreekt** toont de site automatisch de eerste letter van
de naam in een inktcirkel met een aquarelvlekje. Dat is met opzet: het ziet
eruit als ontwerp, niet als een fout. Je kunt de portretten dus één voor één
aanleveren.

**Formaat:** vierkant (1:1), alleen het hoofd, frontaal, op dezelfde
papierkleurige achtergrond `#FAF6EC` als de andere illustraties.
400 × 400 px is ruim genoeg.

Iemand toevoegen of weghalen = één woord in de lijst. De galerij herschikt zich
vanzelf en centreert de laatste rij.

---

## 3. `clan.jpg` vervangen

Het clanportret is nu nog de versie met blanco gezichten.

- Zet het nieuwe bestand neer als **`images/clan.jpg`** — zelfde naam, zelfde
  verhouding **3:2** (bijvoorbeeld 1600 × 1073).
- Verder hoef je niets te doen.
- Vergeet niet het onderschrift aan te passen in `index.html`, zoek op
  `polaroid__cap`, en haal daar de regel `(placeholder — de gezichten volgen
  nog)` weg.

Ontbreekt het bestand, dan toont de site netjes "Clanportret volgt" met een
getekend heuveltje, en is de lightbox uitgeschakeld.

---

## 4. De illustraties

Alle vijf staan al in `images/` en worden zonder kader op het papier getoond,
met zacht uitvloeiende randen zodat je de rand van het JPEG-bestand niet ziet.

| Bestand | Formaat | Waar |
|---|---|---|
| `illu-skyline.jpg` | 2000 × 848 (12:5) | onderaan de hero, full-width |
| `illu-pub.jpg` | 900 × 672 (4:3) | bij het programma |
| `illu-whisky.jpg` | 900 × 672 (4:3) | bij de scorekaart |
| `illu-heuvels.jpg` | 1024 × 434 (21:9) | boven de footer, full-width |
| `clan.jpg` | 1600 × 1073 (3:2) | het clanportret, als polaroid |

Vervang je er één, houd dan dezelfde verhouding aan. Wijkt die af, pas dan de
`aspect-ratio` in `style.css` aan (zoek op `bleed--skyline`, `illu--pub`, enz.),
anders verspringt de pagina tijdens het laden.

De papierkleur van de pagina is `--paper: #FAF6EC` in `style.css`. Die is
gesampled uit de randen van jouw illustraties. Laat je nieuwe illustraties maken
met een duidelijk andere papiertint, pas dan die ene variabele aan — de hele
site loopt mee.

---

## 5. Een echt app-icoon toevoegen

Nu gebruikt de site een **inline SVG-favicon** (een distel) en `icon.svg`.
Dat werkt overal, behalve voor het iOS-beginscherm: iPhones willen een PNG.

1. Maak een **180 × 180 px PNG**, vierkant, zonder afgeronde hoeken
   (iOS rondt zelf af). Achtergrond `#FAF6EC`, tekening in `#241A18`.
   Je kunt `icon.svg` als vertrekpunt openen in Figma, Illustrator of
   [svgtopng.com](https://svgtopng.com) en exporteren op 180 × 180.
2. Sla hem op als **`apple-touch-icon.png`** in de hoofdmap — naast `index.html`,
   dus niet in `images/`.
3. Klaar. In `index.html` en `manifest.webmanifest` wordt hij al verwacht:
   ```html
   <link rel="apple-touch-icon" href="apple-touch-icon.png">
   ```

Wil je ook een scherpe favicon voor de browsertab: maak dan daarnaast
`favicon-32.png` en zet erboven
`<link rel="icon" type="image/png" sizes="32x32" href="favicon-32.png">`.

**Op je beginscherm zetten:** open de site in Safari → deelknop → *Zet op
beginscherm*. Hij opent dan zonder browserbalk, als een app.

---

## 6. De sneuvelkoning delen

**Dit staat al aan.** De stand wordt gedeeld via een Firebase-database:

```
https://edinburgh-2026-default-rtdb.europe-west1.firebasedatabase.app/sneuvel.json
```

Iedereen ziet dezelfde lijst, alleen de scheidsrechter kan schuiven. De code is
**`kilt2026`** (hoofdletters maken niet uit). Je hoeft hier niets meer voor te doen.

De stappen hieronder staan er voor als je het ooit opnieuw moet opzetten, of
naar een ander project wilt verhuizen.

### Zo zet je het (opnieuw) aan

1. Ga naar [console.firebase.google.com](https://console.firebase.google.com) en
   log in met een Google-account.
2. **Project toevoegen** → noem het bijvoorbeeld `edinburgh-2026`.
   Google Analytics mag je uitzetten.
3. In het menu links: **Build → Realtime Database → Database maken**.
   Kies als locatie **europe-west1** en start in testmodus.
4. Ga naar het tabblad **Regels** en zet er dit neer:

   ```json
   {
     "rules": {
       "sneuvel": { ".read": true, ".write": true }
     }
   }
   ```

   Publiceren. (Zonder deze stap stopt het na 30 dagen, want de testmodus loopt af.)
5. Op het tabblad **Gegevens** staat bovenaan de URL van je database, zoiets als
   `https://edinburgh-2026-default-rtdb.europe-west1.firebasedatabase.app`
6. Zet die URL bovenaan `script.js`, met **`/sneuvel.json` erachter**:

   ```js
   const SNEUVEL_DB = "https://edinburgh-2026-default-rtdb.europe-west1.firebasedatabase.app/sneuvel.json";
   ```

7. Pushen naar GitHub. Klaar.

### Hoe het dan werkt

- Iedereen die de site opent ziet dezelfde lijst, met eronder hoe lang geleden
  hij is bijgewerkt. Geen pijltjes: je kunt alleen kijken.
- Onderaan staat een knop **"Ik ben de scheidsrechter"**. Daar typ je de code in.
  Klopt hij, dan verschijnen de pijltjes en kun jij schuiven. Elke verschuiving
  gaat meteen naar de database, en de anderen zien hem binnen twintig seconden.
- Je telefoon onthoudt dat je de scheidsrechter bent. Je typt de code dus
  één keer, niet elke keer.
- **De standaardcode is `kilt2026`.** Hoofdletters maken niet uit.

### Een andere code kiezen

De code staat niet leesbaar in de repo, maar als een korte versleutelde waarde.
Wil je een eigen code:

1. Open de site in Chrome op je laptop en druk op **F12** (tabblad *Console*).
2. Typ `codeHash("jouwnieuwecode")` en druk op enter.
3. Je krijgt acht tekens terug, bijvoorbeeld `a1b2c3d4`. Zet die bovenaan
   `script.js` bij `SCHEIDSRECHTER_HASH`, en push.

### Wat die code wél en niet is

Het is een drempel, geen slot. Hij zorgt ervoor dat niemand per ongeluk of voor
de grap de lijst omgooit, en dat de code niet zomaar in de repo te lezen is.
Maar iemand die er echt werk van maakt, kan de database omzeilen — de regels
hierboven laten immers iedereen met de URL schrijven. Voor een ranglijst van
elf vrienden is dat prima; zet er verder niets gevoeligs in.

**Doe je stap 1 tot 7 niet?** Dan werkt de site gewoon, alleen houdt iedereen
dan zijn eigen lijstje bij. Er gaat niets stuk.

---

## 7. Deployen naar GitHub Pages

Eenmalig instellen:

1. Push alles naar de `main`-branch van deze repo.
2. Op GitHub: **Settings → Pages**.
3. Bij *Source*: **Deploy from a branch**, branch `main`, map `/ (root)`.
4. Opslaan. Na een minuut staat de site op
   `https://<jouw-gebruikersnaam>.github.io/edinburgh-2026/`.

Daarna is publiceren gewoon:

```bash
git add .
git commit -m "portretten toegevoegd"
git push
```

Na ongeveer een minuut is de site bijgewerkt. Zie je je wijziging niet, ververs
dan hard (op de telefoon: tabblad sluiten en opnieuw openen).

**Twee dingen om op te letten:**

- **Hoofdletters.** GitHub Pages is hoofdlettergevoelig, je Mac niet. Werkt iets
  lokaal wel en online niet, dan is dat bijna altijd een hoofdletter in een
  bestandsnaam. Houd alles in kleine letters.
- **Alle paden zijn relatief** (`images/...`, `style.css`). Zo blijft het werken
  in een submap zoals `/edinburgh-2026/`. Zet er nooit een `/` voor.

De site staat op `noindex, nofollow`, dus Google neemt hem niet op. Hij is wél
openbaar voor wie de link heeft — zet er dus geen boekingsnummers of
wachtwoorden in.

---

## 8. Lokaal bekijken en op je telefoon testen

Op je Mac, in de map van het project:

```bash
python3 -m http.server 8080
```

Open dan <http://localhost:8080>.

> Open `index.html` niet met dubbelklik (`file://`) — dan werken het weer, de
> kaart en het opslaan van bingo en whiskyscores niet.

**Op je telefoon, via hetzelfde wifi-netwerk:**

1. Zoek het IP-adres van je Mac:
   ```bash
   ipconfig getifaddr en0
   ```
   (geeft bijvoorbeeld `192.168.1.24`)
2. Start de server met:
   ```bash
   python3 -m http.server 8080 --bind 0.0.0.0
   ```
3. Typ op je telefoon `http://192.168.1.24:8080` in de browser.

Zo zie je meteen hoe het écht op een telefoon oogt. Stoppen doe je met `Ctrl-C`.

---

## 9. Handig om te weten

- **De sneuvelkoning** staat in `localStorage` zolang je `SNEUVEL_DB` leeg laat,
  dus per telefoon. Zet je hem aan, dan staat de stand centraal — zie punt 6.
- **De wisselkoers** die je zelf instelt wordt per telefoon onthouden.
- **Het weer** komt van Open-Meteo, zonder API-key. Tot veertien dagen voor
  vertrek toont de site de oktobergemiddelden; daarna schakelt hij vanzelf over
  naar de echte verwachting voor 2, 3 en 4 oktober. Doet de API het even niet,
  dan verschijnen gewoon de gemiddelden — geen foutmelding.
- **Het programma** markeert tijdens het weekend zelf het lopende onderdeel, kiest
  automatisch de juiste dagtab en scrolt ernaartoe.
- **De kaart** is bij het laden vergrendeld, zodat hij je scroll niet afvangt.
  Eén tik activeert hem, en met "Kaart vastzetten" zet je hem weer vast.
  De tegels komen van OpenStreetMap (geen API-key nodig). Er staan bewust geen
  pinnen op: waar jullie heen gaan blijft een verrassing.
- **Externe bronnen:** Google Fonts (Caveat + Nunito), Leaflet via unpkg,
  OpenStreetMap-tegels, Open-Meteo. Verder niets — geen tracking, geen cookies.
