/* ═══════════════════════════════════════════════════════════════════════
   EDINBURGH 2026 — alle content staat hier bovenaan.
   Pas hieronder gerust tekst, tijden, namen en whisky's aan.
   Je hoeft de HTML niet aan te raken.
   ═══════════════════════════════════════════════════════════════════════ */

/* ── Vertrek: 2 oktober 2026, 10:30 CEST (= 08:30 UTC) vanaf Weidevenne ── */
const VERTREK = Date.UTC(2026, 9, 2, 8, 30);   // maand 9 = oktober

/* ── DE MANNEN ───────────────────────────────────────────────────────────
   Alleen voornamen, in kleine letters. De foto wordt images/<naam>.jpg
   en op de site verschijnt de naam met een hoofdletter.
   Voeg iemand toe door één woord aan de lijst te plakken.
   NU NOG PLACEHOLDERS — vervang door de echte voornamen.            */
const MANNEN = [
  "niels", "danny", "joost", "bram", "sander", "thijs",
  "ruben", "maarten", "koen", "jeroen", "wouter"
];

/* Staat het programma al vast? Zet op true zodra je het wilt tonen; de
   tijdlijn hieronder staat klaar. Op false zie je het "volgt nog"-blokje. */
const PROGRAMMA_ZICHTBAAR = false;

/* ── HET PROGRAMMA ───────────────────────────────────────────────────────
   Per dag: label voor de tab, de datum (jaar, maand-1, dag) en de items.
   icoon: trein · vliegtuig · koffer · bed · kasteel · bord · rugby ·
          bier · koffie · whisky · bijl                                  */
const PROGRAMMA = [
  {
    tab: "Vr", datum: [2026, 9, 2], titel: "Vrijdag 2 oktober",
    items: [
      { tijd: "10:30", icoon: "trein",     titel: "Verzamelen",      desc: "Weidevenne treinstation" },
      { tijd: "13:10", icoon: "vliegtuig", titel: "Vliegen" },
      { tijd: "13:45", icoon: "koffer",    titel: "Aankomst Edinburgh" },
      { tijd: "15:00", icoon: "bed",       titel: "Inchecken" },
      { tijd: "16:00", icoon: "kasteel",   titel: "Bier & whisky",   desc: "Bezoek kasteel" },
      { tijd: "18:00", icoon: "bord",      titel: "Eten" },
      { tijd: "19:00", icoon: "rugby",     titel: "Rugbywedstrijd",  desc: "Aftrap 19:45" },
      { tijd: "21:00", icoon: "bier",      titel: "Old Town" }
    ]
  },
  {
    tab: "Za", datum: [2026, 9, 3], titel: "Zaterdag 3 oktober",
    items: [
      { tijd: "11:00", icoon: "koffie", titel: "Ontbijt" },
      { tijd: "12:00", icoon: "whisky", titel: "Johnnie Walker tour" },
      { tijd: "14:00", icoon: "bord",   titel: "Lunch" },
      { tijd: "16:00", icoon: "bier",   titel: "Old Town" },
      { tijd: "19:00", icoon: "bord",   titel: "Avondeten" },
      { tijd: "21:00", icoon: "bier",   titel: "Old Town" }
    ]
  },
  {
    tab: "Zo", datum: [2026, 9, 4], titel: "Zondag 4 oktober",
    items: [
      { tijd: "10:00", icoon: "koffie",    titel: "Ontbijt" },
      { tijd: "12:00", icoon: "bijl",      titel: "Bijlgooien",      desc: "Game of Throws" },
      { tijd: "14:00", icoon: "bier",      titel: "Terras / lunch" },
      { tijd: "16:00", icoon: "koffer",    titel: "Richting vliegveld" },
      { tijd: "18:20", icoon: "vliegtuig", titel: "Terugvlucht" }
    ]
  }
];

/* ── KAART ───────────────────────────────────────────────────────────────
   Gewoon een kaart van Edinburgh om je te oriënteren. Bewust zonder pinnen:
   waar we heen gaan blijft een verrassing.                                */
const KAART_MIDDEN = [55.9505, -3.1935];   // Old Town / Royal Mile
const KAART_ZOOM = 13;

/* ── PRAKTISCH ───────────────────────────────────────────────────────────
   tel:  maakt er een belbare link van
   maps: maakt er een link naar Google/Apple Maps van                    */
const PRAKTISCH = [
  { label: "Heenvlucht",   waarde: "Vluchtnr. XX0000 · 13:10 AMS → 13:45 EDI", placeholder: true },
  { label: "Terugvlucht",  waarde: "Vluchtnr. XX0000 · 18:20 EDI → 20:45 AMS", placeholder: true },
  { label: "Hotel",        waarde: "Naam hotel, straat 00, Edinburgh", maps: "Edinburgh city centre hotel", placeholder: true },
  { label: "Hotel telefoon", waarde: "+44 000 000 0000", tel: "+440000000000", placeholder: true },
  { label: "Tickets",      waarde: "Naam heeft de vliegtickets en de rugbykaarten", placeholder: true },
  { label: "Noodnummer",   waarde: "112 — werkt ook in het VK", tel: "112" },
  { label: "Geld",         waarde: "Ze betalen in pond (£). Overal pinnen of tikken kan; contant is bijna nooit nodig. Reken ruwweg £1 ≈ €1,20." },
  { label: "Stroom",       waarde: "Stekker type G, drie rechthoekige pennen. Neem een adapter mee — één per twee man is genoeg." }
];

/* ── SNEUVELKONING: gedeelde stand ───────────────────────────────────────
   Laat SNEUVEL_DB leeg, dan houdt iedereen zijn eigen lijstje op zijn eigen
   telefoon. Vul je hier je Firebase-adres in, dan zien alle elf dezelfde
   lijst en kan alleen de scheidsrechter hem aanpassen.
   Stap voor stap uitgelegd in de README, onder "De sneuvelkoning delen".  */
const SNEUVEL_DB = "https://edinburgh-2026-default-rtdb.europe-west1.firebasedatabase.app/sneuvel.json";   // leeg laten = iedereen zijn eigen lijstje

/* De scheidsrechterscode staat hier versleuteld, zodat hij niet zomaar in de
   openbare repo te lezen is. De standaardcode is:  kilt2026
   Een andere code? Open de site, druk F12 en typ:  codeHash("jouwcode")
   Plak de uitkomst hieronder.                                             */
const SCHEIDSRECHTER_HASH = "336b5947";

/* ── WISSELKOERS ─────────────────────────────────────────────────────────
   Startwaarde voor de omrekentool. Je kunt de koers ook op de site zelf
   aanpassen; die aanpassing wordt op je telefoon onthouden.               */
const KOERS_GBP_EUR = 1.17;                // alleen als terugval, zie hieronder

/* De koers wordt automatisch opgehaald. Twee bronnen, allebei gratis en zonder
   sleutel; lukt de eerste niet, dan wordt de tweede geprobeerd. Lukt geen van
   beide, dan de laatst opgehaalde koers, en anders KOERS_GBP_EUR hierboven. */
const KOERS_BRONNEN = [
  { url: "https://open.er-api.com/v6/latest/GBP",
    lees: (d) => ({ koers: d.rates && d.rates.EUR, datum: d.time_last_update_utc }) },
  { url: "https://api.frankfurter.dev/v1/latest?base=GBP&symbols=EUR",
    lees: (d) => ({ koers: d.rates && d.rates.EUR, datum: d.date }) }
];

/* ── KLIMAAT & DROGE OPMERKING ─────────────────────────────────────────── */
const KLIMAAT = {
  dag: "ongeveer 13 °C overdag",
  nacht: "ongeveer 7 °C 's nachts",
  regen: "regen op ongeveer de helft van de dagen"
};
const WEER_OPMERKING =
  "Er bestaat geen slecht weer, alleen verkeerde jassen. Neem toch een jas mee.";

/* ═══════════════════════════════════════════════════════════════════════
   Hieronder hoef je niets meer aan te passen.
   ═══════════════════════════════════════════════════════════════════════ */

const LAT = 55.9533, LON = -3.1883;
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
const kalm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);

/* ── Afbeeldingen: nooit een gebroken plaatje ───────────────────────────── */
function bewaakAfbeelding(img, bijFout){
  if (!img) return;
  const fout = () => bijFout(img);
  img.addEventListener("error", fout, { once: true });
  if (img.complete && img.naturalWidth === 0) fout();
}
function verbergFiguur(img){
  const fig = img.closest("figure") || img.parentElement;
  if (fig) fig.style.display = "none";
}

/* ── Inkt-lijniconen (programma) ────────────────────────────────────────── */
const ICONEN = {
  trein: '<path d="M7 5.6h10c1.2 0 2 .9 2 2.1v7.8c0 1.2-.9 2.1-2 2.1H7c-1.1 0-2-1-2-2.1V7.7c0-1.2.8-2.1 2-2.1Z"/><path d="M5.4 10.6h13.3M9 14.4h.2M15 14.3h.2M8.4 17.6 6.2 21M15.6 17.6 17.9 21M7.5 21h9"/>',
  vliegtuig: '<path d="M2.6 13.2 21 6.1c1.1-.4 1.7.9.9 1.6l-4.2 3.9-1 8.2c-.1.9-1.2 1-1.6.3l-2.5-4.6-4.3 2.3-4.9-3c-.7-.4-.6-1.3.2-1.6Z"/><path d="m8.3 17.7 4.4-3.9"/>',
  koffer: '<path d="M4.6 8.2h14.8c.9 0 1.6.8 1.5 1.7l-.6 8.3c-.1.9-.8 1.5-1.6 1.5H5.3c-.8 0-1.5-.7-1.6-1.5L3.1 9.9c-.1-.9.6-1.7 1.5-1.7Z"/><path d="M9 8V5.6c0-.8.6-1.5 1.4-1.5h3.2c.8 0 1.4.7 1.4 1.5V8M3.4 13.1h17.2"/>',
  bed: '<path d="M3.2 18.6V7.4M3.4 11.4h17.3c.8 0 1.4.7 1.4 1.5v5.6M21.9 15.1H3.3"/><path d="M6.6 11.2c-.4-1 .2-2.3 1.4-2.4 1.3-.2 2.2.6 2.3 1.6.1.5 0 .8-.1 1"/>',
  kasteel: '<path d="M4.2 20.4V8.3h2.3V5.6h2.1v2.7h2.2V5.5h2.2v2.8h2.1V5.6h2.2v2.7h2.4v12.1z"/><path d="M10 20.3v-4.4c0-1.1.9-1.9 2-1.9s2 .8 2 1.9v4.4M4.4 11.6h15.2M17.8 5.5V2.9l2.6.9-2.6 1"/>',
  bord: '<path d="M12 4.2c3.9 0 7 2.9 7 6.6 0 4.3-3.5 6.9-7 6.9s-7-2.6-7-6.9c0-3.7 3.1-6.6 7-6.6Z"/><path d="M12 6.7c2.3 0 4.2 1.8 4.2 4M9 21h6"/>',
  rugby: '<path d="M4.3 19.7C2 17.4 3 9.7 6.3 6.4c3.3-3.3 11-4.3 13.3-2 2.3 2.3 1.4 10-1.9 13.4-3.3 3.3-11 4.2-13.4 1.9Z"/><path d="M9.2 14.8 14.9 9M10.4 11.2l2.4 2.4M12.5 9.1l2.4 2.4"/>',
  bier: '<path d="M6.6 6.7h8.6l-.6 13.1c0 .8-.7 1.4-1.5 1.4H8.7c-.8 0-1.4-.6-1.5-1.4z"/><path d="M15.1 9.4h2.6c1 0 1.8.9 1.7 1.9l-.3 3c-.1 1-.9 1.7-1.8 1.7h-2.5M7 10.2c2.6.9 5.3.9 8 0M8.8 6.6c-.6-1.3.2-2.8 1.6-2.9"/>',
  koffie: '<path d="M4.8 8.4h11.4l-.6 9.3c-.1 1.6-1.4 2.8-3 2.8H8.4c-1.6 0-2.9-1.2-3-2.8z"/><path d="M16.1 10.6h1.8c1.4 0 2.5 1.2 2.4 2.6-.1 1.4-1.3 2.4-2.7 2.4h-1.7M8 5.6c-.5-1 .1-2 1-2.2M11.6 5.5c-.5-1 .1-2 1-2.2"/>',
  whisky: '<path d="M6.4 6.6h11.2l-1 11.5c-.1.9-.8 1.5-1.7 1.5H9.1c-.9 0-1.6-.6-1.7-1.5z"/><path d="M6.9 13.1c1.7 1 3.4 1.2 5 .5 1.7-.7 3.4-.6 5 .3M9.4 20.9h5.3"/>',
  bijl: '<path d="M13.9 3.4c3 .2 6 2.2 6.6 5.2-2.2 1.8-5.1 2.2-7.8 1.4"/><path d="M13.7 3.5c-2.3 1.7-3.6 4-3.8 6.7 1 .4 1.9.6 2.8.8M11 9.7 3.9 18.4c-.5.6-.4 1.5.2 2 .6.5 1.5.4 2-.2l6.8-8.9"/>'
};
function icoonSvg(naam){
  const d = ICONEN[naam] || ICONEN.bier;
  return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + d + '</svg>';
}

/* ═══════════ 1. COUNTDOWN ═══════════ */
(function countdown(){
  const d = $("#cd-d"), h = $("#cd-h"), m = $("#cd-m"), note = $("#cd-note");
  if (!d) return;
  function tik(){
    let diff = VERTREK - Date.now();
    if (diff <= 0){
      d.textContent = "0"; h.textContent = "0"; m.textContent = "0";
      note.textContent = "Slàinte mhath — we zijn onderweg.";
      return;
    }
    const min = Math.floor(diff / 60000);
    d.textContent = Math.floor(min / 1440);
    h.textContent = Math.floor(min % 1440 / 60);
    m.textContent = min % 60;
  }
  tik();
  setInterval(tik, 15000);
})();

/* ═══════════ 2. WEER ═══════════ */
const WMO = {
  0:["Onbewolkt","zon"], 1:["Overwegend zonnig","zon"], 2:["Half bewolkt","half"],
  3:["Bewolkt","wolk"], 45:["Mist","mist"], 48:["IJzelmist","mist"],
  51:["Lichte motregen","motregen"], 53:["Motregen","motregen"], 55:["Dichte motregen","motregen"],
  56:["IJzelige motregen","motregen"], 57:["IJzelige motregen","motregen"],
  61:["Lichte regen","regen"], 63:["Regen","regen"], 65:["Zware regen","regen"],
  66:["IJzelregen","regen"], 67:["IJzelregen","regen"],
  71:["Lichte sneeuw","sneeuw"], 73:["Sneeuw","sneeuw"], 75:["Zware sneeuw","sneeuw"],
  77:["Sneeuwkorrels","sneeuw"], 80:["Buien","buien"], 81:["Buien","buien"],
  82:["Zware buien","buien"], 85:["Sneeuwbuien","sneeuw"], 86:["Sneeuwbuien","sneeuw"],
  95:["Onweer","onweer"], 96:["Onweer met hagel","onweer"], 99:["Zwaar onweer","onweer"]
};
const weerInfo = (c) => WMO[c] || ["Wisselvallig","half"];

/* Handgetekende weericonen: dunne inktlijn met een zacht kleurvlekje erachter. */
function weerIcoon(soort){
  const S = '<svg class="wx-icon" viewBox="0 0 64 64" fill="none" stroke="#241A18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  const zon  = '<circle cx="32" cy="27" r="10.5" fill="rgba(219,161,74,.35)"/><path d="M32 8.6v5.4M32 40.2v5.2M13.4 27h5.4M45.2 27h5.3M18.8 13.6l3.8 3.9M41.4 36.4l3.9 3.9M18.9 40.4l3.8-3.9M41.4 17.6l3.9-3.9"/>';
  const wolk = '<path d="M17.6 45c-5 0-8.6-3.6-8.3-8 .3-4 3.7-6.8 7.6-6.7.7-5.7 5.4-9.8 11.1-9.8 5.5 0 10 3.6 11.2 8.6 5.4-.6 9.6 2.8 9.9 7.6.3 4.7-3.4 8.4-8.4 8.3z" fill="rgba(158,147,125,.32)"/>';
  const druppels = '<path d="M20 49.5 17 57M30 49.5 27 57M40 49.5 37 57"/>';
  const wind = '<path d="M12 50h20c3 0 5 1.9 5 4.1 0 2.1-1.7 3.8-3.8 3.8-1.9 0-3.4-1.3-3.6-3M12 57h11"/>';
  switch(soort){
    case "zon":   return S + zon + '</svg>';
    case "half":  return S + '<circle cx="43" cy="20" r="8" fill="rgba(219,161,74,.34)"/><path d="M43 6.5v3.6M56.4 20H60M52.6 10.4l2.6-2.6"/>' + wolk + '</svg>';
    case "wolk":  return S + wolk + '</svg>';
    case "mist":  return S + wolk + '<path d="M13 51h30M18 57h26"/></svg>';
    case "motregen": return S + wolk + '<path d="M22 50l-1.6 4.6M32 50l-1.6 4.6M42 50l-1.6 4.6"/></svg>';
    case "regen": return S + wolk + druppels + '</svg>';
    case "buien": return S + '<circle cx="46" cy="19" r="7" fill="rgba(219,161,74,.3)"/>' + wolk + druppels + '</svg>';
    case "sneeuw":return S + wolk + '<path d="M20 50v7M16.6 51.8l6.8 3.4M23.4 51.8l-6.8 3.4M40 50v7M36.6 51.8l6.8 3.4M43.4 51.8l-6.8 3.4"/></svg>';
    case "onweer":return S + wolk + '<path d="M32 48l-6 8h6.6l-4 8" stroke="#BA7634"/></svg>';
    case "wind":  return S + wolk + wind + '</svg>';
    default:      return S + wolk + '</svg>';
  }
}

function klimaatBlok(extraRegel){
  return '<div class="wx-climate">' +
    '<h3>Oktober in Edinburgh, gemiddeld</h3>' +
    '<ul><li>' + esc(KLIMAAT.dag) + '</li><li>' + esc(KLIMAAT.nacht) + '</li><li>' + esc(KLIMAAT.regen) + '</li></ul>' +
    '<p class="soon">' + esc(extraRegel) + '</p></div>';
}

(function weer(){
  const nu = $("#weather-now"), body = $("#weather-body"), dry = $("#weather-dry");
  if (!body) return;
  dry.textContent = WEER_OPMERKING;

  const START = "2026-10-02", EIND = "2026-10-04";
  const dagenTot = Math.ceil((Date.UTC(2026, 9, 2) - Date.now()) / 86400000);
  const binnenVerwachting = dagenTot <= 14;

  let url = "https://api.open-meteo.com/v1/forecast?latitude=" + LAT + "&longitude=" + LON +
            "&current=temperature_2m,weather_code,wind_speed_10m" +
            "&wind_speed_unit=kmh&timezone=Europe%2FLondon";
  if (binnenVerwachting){
    url += "&daily=weather_code,temperature_2m_max,temperature_2m_min," +
           "precipitation_probability_max,precipitation_sum,wind_speed_10m_max" +
           "&start_date=" + START + "&end_date=" + EIND;
  } else {
    url += "&forecast_days=1";
  }

  const terugval = dagenTot > 0
    ? "De echte verwachting verschijnt hier zodra het weekend binnen de 14-daagse verwachting valt — nog " + dagenTot + " dagen."
    : "De verwachting is nu niet op te halen. Dit zijn de gemiddelden voor oktober.";

  function toonKlimaat(){ body.innerHTML = klimaatBlok(terugval); }

  const dagNamen = { "2026-10-02":"Vrijdag 2 okt", "2026-10-03":"Zaterdag 3 okt", "2026-10-04":"Zondag 4 okt" };

  fetch(url, { cache: "no-store" })
    .then(r => r.ok ? r.json() : Promise.reject(new Error("http " + r.status)))
    .then(data => {
      if (data.current){
        const info = weerInfo(data.current.weather_code);
        nu.innerHTML = "Nu in Edinburgh: <b>" + Math.round(data.current.temperature_2m) + " °C</b>, " +
                       esc(info[0].toLowerCase()) + ", wind " + Math.round(data.current.wind_speed_10m) + " km/u";
      } else {
        nu.hidden = true;
      }

      const d = data.daily;
      if (!binnenVerwachting || !d || !d.time || !d.time.length){ toonKlimaat(); return; }

      let html = '<div class="wx-cards">';
      d.time.forEach((dag, i) => {
        const info = weerInfo(d.weather_code[i]);
        const mm = d.precipitation_sum[i];
        html += '<div class="wx-card">' + weerIcoon(info[1]) + '<div>' +
          '<p class="wx-card__day">' + esc(dagNamen[dag] || dag) + '</p>' +
          '<p class="wx-card__temp">' + Math.round(d.temperature_2m_max[i]) + ' °C ' +
            '<span class="min">/ ' + Math.round(d.temperature_2m_min[i]) + ' °C</span></p>' +
          '<p class="wx-card__meta">' + esc(info[0]) + '</p>' +
          '<p class="wx-card__meta">' + Math.round(d.precipitation_probability_max[i] || 0) + '% kans · ' +
            (mm == null ? 0 : mm.toFixed(1)).toString().replace(".", ",") + ' mm</p>' +
          '<p class="wx-card__meta">wind ' + Math.round(d.wind_speed_10m_max[i]) + ' km/u</p>' +
          '</div></div>';
      });
      body.innerHTML = html + '</div>';
    })
    .catch(() => { nu.hidden = true; toonKlimaat(); });   // geen foutmelding in beeld
})();

/* ═══════════ 3. PROGRAMMA ═══════════ */
(function programma(){
  const tabs = $("#day-tabs"), dagen = $("#days");
  if (!tabs) return;
  if (!PROGRAMMA_ZICHTBAAR) return;      // het "volgt nog"-blokje staat al in de HTML
  $(".binnenkort").hidden = true;
  tabs.hidden = false;
  dagen.hidden = false;

  const alles = [];
  PROGRAMMA.forEach((dag, di) => {
    dag.items.forEach((it, ii) => {
      const [u, mi] = it.tijd.split(":").map(Number);
      alles.push({ di, ii, t: new Date(dag.datum[0], dag.datum[1], dag.datum[2], u, mi).getTime() });
    });
  });
  alles.sort((a, b) => a.t - b.t);

  /* Welk item is nu of komt zo? Alleen tijdens het weekend zelf. */
  const nu = Date.now();
  let actief = -1;
  if (alles.length && nu >= alles[0].t - 6 * 3600e3 && nu <= alles[alles.length - 1].t + 4 * 3600e3){
    actief = 0;
    for (let i = 0; i < alles.length; i++) if (alles[i].t <= nu) actief = i;
  }
  const nuDag  = actief >= 0 ? alles[actief].di : -1;
  const nuItem = actief >= 0 ? alles[actief].ii : -1;

  PROGRAMMA.forEach((dag, di) => {
    const b = document.createElement("button");
    b.className = "tab";
    b.type = "button";
    b.setAttribute("role", "tab");
    b.id = "tab-" + di;
    b.setAttribute("aria-controls", "dag-" + di);
    b.innerHTML = esc(dag.tab) + '<span class="tab__date">' + esc(dag.titel.split(" ").slice(1).join(" ")) + '</span>';
    tabs.appendChild(b);

    const sec = document.createElement("div");
    sec.className = "day";
    sec.id = "dag-" + di;
    sec.setAttribute("role", "tabpanel");
    sec.setAttribute("aria-labelledby", "tab-" + di);

    let li = '<div class="timeline__line" aria-hidden="true"><svg viewBox="0 0 14 400" preserveAspectRatio="none">' +
      '<path d="M7 0C4 42 10 78 7 120 4 162 10 198 7 240 4 282 10 318 7 360 5.6 378 7 390 7 400" fill="none" ' +
      'stroke="currentColor" stroke-width="1.6" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></div>';

    li += '<ol class="timeline__items" style="list-style:none;margin:0;padding:0">';
    dag.items.forEach((it, ii) => {
      const isNu = (di === nuDag && ii === nuItem);
      li += '<li class="item' + (isNu ? " is-now" : "") + '"' + (isNu ? ' id="nu-item"' : '') + '>' +
        '<span class="item__time">' + esc(it.tijd) + '</span>' +
        '<span class="item__icon">' + icoonSvg(it.icoon) + '</span>' +
        '<div class="item__body">' +
          '<p class="item__title">' + esc(it.titel) + '</p>' +
          (it.desc ? '<p class="item__desc">' + esc(it.desc) + '</p>' : '') +
        '</div></li>';
    });
    li += '</ol>';

    sec.innerHTML = '<div class="timeline">' + li + '</div>';
    dagen.appendChild(sec);
  });

  const knoppen = $$(".tab", tabs);
  const panelen = $$(".day", dagen);
  function kies(i){
    knoppen.forEach((b, n) => b.setAttribute("aria-selected", String(n === i)));
    panelen.forEach((p, n) => { p.hidden = n !== i; });
  }
  knoppen.forEach((b, i) => b.addEventListener("click", () => kies(i)));
  kies(nuDag >= 0 ? nuDag : 0);

  if (nuDag >= 0){
    const doel = $("#nu-item");
    if (doel) setTimeout(() => doel.scrollIntoView({ behavior: kalm ? "auto" : "smooth", block: "center" }), 400);
  }
})();

/* ═══════════ 4. DE MANNEN ═══════════ */
(function clanportret(){
  const img = $("#clan-img"), btn = $("#clan-btn");
  if (!img) return;
  bewaakAfbeelding(img, () => {
    img.remove();
    const frame = $(".polaroid__frame");
    frame.innerHTML = '<div class="clan-fallback">' +
      '<svg viewBox="0 0 200 90" fill="none" stroke="#5B4F49" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">' +
      '<path d="M4 74c22-4 32-26 54-27 20-1 27 14 44 13 19-1 28-22 48-21 18 1 30 17 46 20"/>' +
      '<path d="M4 84c26-5 40-12 62-12 24 0 34 9 56 9 24 0 40-10 78-13"/>' +
      '<path d="M30 47c0-6 4-11 9-11M158 40c1-6 5-10 10-9"/></svg>' +
      '<span>Clanportret volgt</span></div>';
    btn.disabled = true;
    btn.style.cursor = "default";
    btn.setAttribute("aria-label", "Clanportret volgt nog");
  });
})();

(function portretten(){
  const lijst = $("#portraits");
  if (!lijst) return;
  const blobs = [
    "rgba(219,161,74,.42)", "rgba(106,113,81,.38)",
    "rgba(158,147,125,.42)", "rgba(113,77,103,.34)"
  ];
  const ringen = [
    "M49.7 4.2c24.8-.8 45.9 19.8 46.1 45.3.2 25.9-20 46.6-45.6 46.3C24.6 95.5 4.1 75.4 4.3 49.8 4.5 24.6 25 5 49.7 4.2Z",
    "M50.6 3.9C76.8 3.4 96.6 25.4 95.7 50.9 94.8 76 74.9 96.4 49.4 95.8 24.9 95.2 4.6 74.2 5.1 49.1 5.6 24.4 25.5 4.4 50.6 3.9Z",
    "M48.9 4.6C74.7 3.9 95.4 24 96 49.6c.6 26-19.9 46.6-45.4 46.8C25.4 96.6 3.9 76.1 4.2 50.4 4.5 25.2 24 5.3 48.9 4.6Z",
    "M51.2 4.4c25.3.6 44.8 21.4 44.5 46.6-.3 25.4-21.2 45.7-46.4 44.9C24.7 95.1 4.4 74.3 4.9 49.2 5.4 24.3 26.2 3.8 51.2 4.4Z"
  ];

  MANNEN.forEach((naam, i) => {
    const kleur = blobs[i % blobs.length];
    const ring = ringen[i % ringen.length];
    const draai = [-2.4, 1.8, -1.1, 2.6, -0.7][i % 5];

    const li = document.createElement("li");
    li.className = "portrait";
    li.innerHTML =
      '<div class="portrait__art">' +
        '<span class="portrait__blob" style="background:radial-gradient(58% 58% at 42% 40%, ' + kleur +
          ', rgba(0,0,0,0) 72%),radial-gradient(52% 52% at 66% 68%, ' + kleur + ', rgba(0,0,0,0) 74%)"></span>' +
        '<img src="images/' + encodeURIComponent(naam) + '.jpg" alt="Portret van ' + esc(cap(naam)) + '" ' +
             'loading="lazy" decoding="async" width="400" height="400">' +
        '<svg class="portrait__ring" viewBox="0 0 100 100" fill="none" aria-hidden="true" ' +
             'style="transform:rotate(' + draai + 'deg)">' +
          '<path d="' + ring + '" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" vector-effect="non-scaling-stroke"/>' +
          '<path d="M12 30C18 17 32 8 47 7.4" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" opacity=".5" vector-effect="non-scaling-stroke"/>' +
        '</svg>' +
      '</div>' +
      '<span class="portrait__name">' + esc(cap(naam)) + '</span>';

    const img = $("img", li);
    bewaakAfbeelding(img, () => {
      img.remove();
      const letter = document.createElement("span");
      letter.className = "portrait__letter";
      letter.setAttribute("aria-hidden", "true");
      letter.textContent = cap(naam).charAt(0);
      $(".portrait__art", li).insertBefore(letter, $(".portrait__ring", li));
    });

    lijst.appendChild(li);
  });
})();

/* ═══════════ 5. DE SNEUVELKONING ═══════════ */

/* Kleine hash (FNV-1a). Geen beveiliging, wel een drempel: de code staat
   hierdoor niet leesbaar in de openbare repo. Handig om een nieuwe code te
   maken: open de console en typ codeHash("jouwcode"). */
function codeHash(tekst){
  let h = 0x811c9dc5;
  const t = String(tekst).trim().toLowerCase();
  for (let i = 0; i < t.length; i++){
    h ^= t.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0");
}
window.codeHash = codeHash;

(function sneuvelkoning(){
  const lijst = $("#ranking");
  if (!lijst) return;

  const KEY = "edi26.sneuvel";
  const SLEUTEL_CODE = "edi26.scheids";
  const gedeeld = !!SNEUVEL_DB;

  const status = $("#rank-status");
  const knopUnlock = $("#rank-unlock");
  const knopReset = $("#rank-reset");

  /* Zonder gedeelde database mag iedereen gewoon schuiven, net als voorheen. */
  let magSchuiven = !gedeeld;
  try { if (localStorage.getItem(SLEUTEL_CODE) === SCHEIDSRECHTER_HASH) magSchuiven = true; } catch(e){}

  let volgorde = [];
  let bijgewerkt = 0;
  let bezigMetOpslaan = false;
  let nogmaalsOpslaan = false;
  let opslaanTimer = null;

  /* Een opgeslagen volgorde moet meebewegen met MANNEN: namen die weg zijn
     vallen af, nieuwe namen komen onderaan erbij. */
  function schoon(lijstje){
    const uit = (Array.isArray(lijstje) ? lijstje : []).filter(n => MANNEN.includes(n));
    MANNEN.forEach(n => { if (!uit.includes(n)) uit.push(n); });
    return uit;
  }

  function lokaalLezen(){
    try { return schoon(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch(e){ return schoon([]); }
  }
  function lokaalBewaren(){
    try { localStorage.setItem(KEY, JSON.stringify(volgorde)); } catch(e){ /* privemodus */ }
  }

  volgorde = lokaalLezen();

  /* ── iconen ── */
  const kroon =
    '<svg class="rank__crown" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M3.4 8.2c1.5 1.1 3 2.3 4.5 3.4 1.3-2 2.7-4 4.1-6 1.4 2 2.8 4 4.1 6 1.5-1.1 3-2.3 4.5-3.4' +
    'c-.6 3.4-1.2 6.8-1.7 10.2-4.6.5-9.2.5-13.8 0-.6-3.4-1.1-6.8-1.7-10.2z"/>' +
    '<path d="M7.2 15.4c3.2-.5 6.4-.5 9.6 0"/></svg>';
  const pijl = (op) =>
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
    'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (op ? '<path d="M5.6 14.6C7.7 12.2 9.9 9.9 12.1 7.6c2.1 2.4 4.2 4.7 6.3 7.1"/>'
        : '<path d="M5.6 9.4c2.1 2.4 4.3 4.7 6.5 7 2.1-2.4 4.2-4.7 6.3-7.1"/>') +
    '</svg>';

  function teken(){
    lijst.innerHTML = volgorde.map((naam, i) =>
      '<li class="rank' + (i === 0 ? " rank--koning" : "") + '">' +
        '<span class="rank__pos">' + (i === 0 ? kroon : (i + 1)) + '</span>' +
        '<span class="rank__naam">' + esc(cap(naam)) + '</span>' +
        (magSchuiven
          ? '<span class="rank__knoppen">' +
              '<button class="rank__btn" type="button" data-op="' + i + '"' +
                (i === 0 ? ' disabled' : '') + ' aria-label="' + esc(cap(naam)) + ' omhoog">' + pijl(true) + '</button>' +
              '<button class="rank__btn" type="button" data-neer="' + i + '"' +
                (i === volgorde.length - 1 ? ' disabled' : '') + ' aria-label="' + esc(cap(naam)) + ' omlaag">' + pijl(false) + '</button>' +
            '</span>'
          : '') +
      '</li>'
    ).join("");
    knopReset.hidden = !magSchuiven;
    knopUnlock.hidden = magSchuiven || !gedeeld;
  }

  function meldStand(tekst){ status.textContent = tekst; }

  function tijdTekst(ms){
    if (!ms) return "";
    const min = Math.round((Date.now() - ms) / 60000);
    if (min < 1) return "zojuist bijgewerkt";
    if (min < 60) return "bijgewerkt, " + min + " min geleden";
    const uur = Math.round(min / 60);
    return "bijgewerkt, " + uur + (uur === 1 ? " uur" : " uur") + " geleden";
  }

  /* ── gedeelde stand ophalen en wegschrijven ── */
  async function haalOp(){
    if (!gedeeld) return;
    try {
      const r = await fetch(SNEUVEL_DB + "?_=" + Date.now(), { cache: "no-store" });
      if (!r.ok) throw new Error("http " + r.status);
      const data = await r.json();
      if (data && Array.isArray(data.volgorde)){
        volgorde = schoon(data.volgorde);
        bijgewerkt = data.bijgewerkt || 0;
        lokaalBewaren();
        teken();
        meldStand(tijdTekst(bijgewerkt));
      } else {
        meldStand("Nog geen stand gedeeld.");
      }
    } catch(e){
      // stil terugvallen op wat er lokaal staat; geen foutmelding in beeld
      meldStand("Even geen verbinding — dit is de laatst bekende stand.");
    }
  }

  /* Schuif je snel achter elkaar, dan wachten we even en sturen we één keer
     de eindstand. Loopt er al een verzoek, dan gaat er daarna nóg een, met de
     laatste stand — anders zou het scherm iets anders tonen dan de database. */
  function planOpslaan(){
    if (!gedeeld) return;
    clearTimeout(opslaanTimer);
    meldStand("opslaan…");
    opslaanTimer = setTimeout(schrijfWeg, 500);
  }

  async function schrijfWeg(){
    if (!gedeeld) return;
    if (bezigMetOpslaan){ nogmaalsOpslaan = true; return; }
    bezigMetOpslaan = true;
    try {
      const r = await fetch(SNEUVEL_DB, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ volgorde: volgorde, bijgewerkt: Date.now() })
      });
      if (!r.ok) throw new Error("http " + r.status);
      meldStand("zojuist bijgewerkt");
    } catch(e){
      meldStand("Opslaan lukte niet — probeer het zo nog eens.");
    }
    bezigMetOpslaan = false;
    if (nogmaalsOpslaan){ nogmaalsOpslaan = false; schrijfWeg(); }
  }

  function wissel(a, b){
    const t = volgorde[a]; volgorde[a] = volgorde[b]; volgorde[b] = t;
    lokaalBewaren();
    teken();
    planOpslaan();
    // focus terug op de knop die je net gebruikte, zodat doortikken blijft werken
    const knop = $('[data-' + (b < a ? 'op' : 'neer') + '="' + b + '"]', lijst);
    if (knop && !knop.disabled) knop.focus();
  }

  lijst.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b || b.disabled || !magSchuiven) return;
    if (b.dataset.op   !== undefined) wissel(Number(b.dataset.op), Number(b.dataset.op) - 1);
    if (b.dataset.neer !== undefined) wissel(Number(b.dataset.neer), Number(b.dataset.neer) + 1);
  });

  knopUnlock.addEventListener("click", () => {
    const ingevoerd = prompt("Scheidsrechterscode:");
    if (ingevoerd === null) return;
    if (codeHash(ingevoerd) !== SCHEIDSRECHTER_HASH){
      alert("Die code klopt niet.");
      return;
    }
    magSchuiven = true;
    try { localStorage.setItem(SLEUTEL_CODE, SCHEIDSRECHTER_HASH); } catch(e){}
    teken();
  });

  knopReset.addEventListener("click", () => {
    if (!magSchuiven) return;          // alleen de scheidsrechter
    if (!confirm("De ranglijst terugzetten op de oorspronkelijke volgorde?")) return;
    volgorde = MANNEN.slice();
    lokaalBewaren();
    teken();
    planOpslaan();
  });

  teken();

  if (gedeeld){
    haalOp();
    // meekijken met wat de scheidsrechter doet, maar alleen als je kijkt
    setInterval(() => { if (!document.hidden && !magSchuiven) haalOp(); }, 20000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) haalOp(); });
  }
})();

/* ═══════════ 6. KAART ═══════════ */
(function kaart(){
  const holder = $("#map");
  if (!holder) return;
  if (typeof L === "undefined"){ holder.closest(".mapframe").style.display = "none"; return; }

  const map = L.map(holder, {
    center: KAART_MIDDEN, zoom: KAART_ZOOM,
    scrollWheelZoom: false,          // vangt anders de scroll van de pagina
    dragging: false, touchZoom: false, doubleClickZoom: false,
    zoomControl: true
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 19
  }).addTo(map);

  // Leaflet-CSS laadt non-blocking; even opnieuw meten als hij binnen is.
  setTimeout(() => map.invalidateSize(), 400);

  const veil = $("#map-veil"), lock = $("#map-lock");
  veil.addEventListener("click", () => {
    map.dragging.enable(); map.touchZoom.enable(); map.doubleClickZoom.enable();
    veil.hidden = true; lock.hidden = false;
    map.invalidateSize();
  });
  lock.addEventListener("click", () => {
    map.dragging.disable(); map.touchZoom.disable(); map.doubleClickZoom.disable();
    veil.hidden = false; lock.hidden = true;
  });
})();

/* ═══════════ 7. PRAKTISCH ═══════════
   De sectie staat nu even niet op de pagina. De data (PRAKTISCH) en deze code
   blijven staan: zet het blok in index.html terug en het werkt weer.        */
(function praktisch(){
  const blok = $("#praktisch-blok");
  if (!blok) return;
  blok.innerHTML = "<dl>" + PRAKTISCH.map(r => {
    let w = esc(r.waarde);
    if (r.placeholder) w += ' <span class="ph">(placeholder)</span>';
    // Belbaar of aantikbaar? Dan een eigen knop van 44px+ eronder, geen piepkleine inline link.
    if (r.tel){
      w += '<a class="np__act" href="tel:' + esc(r.tel.replace(/\s/g, "")) + '">Bellen &rsaquo;</a>';
    }
    if (r.maps){
      w += '<a class="np__act" href="' + mapsUrl(r.maps) + '" target="_blank" rel="noopener">Op de kaart &rsaquo;</a>';
    }
    return "<dt>" + esc(r.label) + "</dt><dd>" + w + "</dd>";
  }).join("") + "</dl>";
})();

/* ═══════════ 8. POND NAAR EURO ═══════════ */
(function wisselkoers(){
  const gbp = $("#fx-gbp"), uit = $("#fx-eur"), regel = $("#fx-rate");
  if (!gbp) return;
  const KEY = "edi26.koers";

  // "12,50" en "12.50" allebei accepteren — je typt in een pub wat je gewend bent
  const lees = (v) => {
    const n = parseFloat(String(v).replace(",", ".").replace(/[^0-9.]/g, ""));
    return isFinite(n) ? n : NaN;
  };
  const toon = (n, d) => n.toFixed(d === undefined ? 2 : d).replace(".", ",");

  let koers = KOERS_GBP_EUR;
  let herkomst = "geschatte koers";

  // laatst opgehaalde koers alvast gebruiken, zodat er meteen iets goeds staat
  try {
    const bewaard = JSON.parse(localStorage.getItem(KEY) || "null");
    if (bewaard && bewaard.koers > 0){
      koers = bewaard.koers;
      herkomst = "koers van " + bewaard.datum;
    }
  } catch(e){ /* privemodus */ }

  function reken(){
    const p = lees(gbp.value);
    uit.textContent = isFinite(p) ? "\u20AC " + toon(p * koers) : "\u20AC –";
    regel.textContent = "\u00A31 = \u20AC" + toon(koers, 3) + " \u00B7 " + herkomst;
  }

  gbp.addEventListener("input", reken);
  reken();

  /* Koers ophalen. Mislukt het, dan blijft gewoon staan wat er stond —
     geen foutmelding in beeld. */
  (async () => {
    for (const bron of KOERS_BRONNEN){
      try {
        const r = await fetch(bron.url, { cache: "no-store" });
        if (!r.ok) continue;
        const { koers: k, datum } = bron.lees(await r.json());
        if (!(k > 0)) continue;
        const dag = new Date(datum);
        const leesbaar = isNaN(dag) ? String(datum)
          : dag.toLocaleDateString("nl-NL", { day: "numeric", month: "long" });
        koers = k;
        herkomst = "koers van " + leesbaar;
        try { localStorage.setItem(KEY, JSON.stringify({ koers: k, datum: leesbaar })); } catch(e){}
        reken();
        return;
      } catch(e){ /* volgende bron proberen */ }
    }
  })();
})();

/* ═══════════ 9. LIGHTBOX (clanportret) ═══════════ */
(function lightbox(){
  const box = $("#lightbox"), img = $("#lightbox-img"), btn = $("#clan-btn"),
        sluit = $("#lightbox-close"), stage = $("#lightbox-stage");
  if (!box || !btn) return;
  let vorigeFocus = null;

  function open(){
    if (btn.disabled) return;
    const bron = $("#clan-img");
    if (!bron) return;
    vorigeFocus = document.activeElement;
    img.src = bron.currentSrc || bron.src;
    box.hidden = false;
    document.body.classList.add("is-locked");
    sluit.focus();
  }
  function dicht(){
    box.hidden = true;
    document.body.classList.remove("is-locked");
    img.src = "";
    if (vorigeFocus) vorigeFocus.focus();
  }

  btn.addEventListener("click", open);
  sluit.addEventListener("click", dicht);
  box.addEventListener("click", (e) => { if (e.target === box || e.target === stage) dicht(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) dicht(); });
})();

/* ═══════════ 10. NAVIGATIE ═══════════ */
(function navigatie(){
  const knop = $("#nav-toggle"), paneel = $("#nav-panel"), hier = $("#nav-here");
  const links = $$(".nav__list a");
  if (!knop) return;

  function zet(open){
    paneel.hidden = !open;
    knop.setAttribute("aria-expanded", String(open));
  }
  knop.addEventListener("click", () => zet(paneel.hidden));
  links.forEach(a => a.addEventListener("click", () => zet(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !paneel.hidden){ zet(false); knop.focus(); }
  });
  document.addEventListener("click", (e) => {
    if (!paneel.hidden && !e.target.closest(".nav")) zet(false);
  });

  /* Welke sectie kijk je nu? Die naam komt in de balk te staan, zodat je ook
     zonder het menu open te klappen weet waar je bent. */
  const doelen = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!("IntersectionObserver" in window) || !doelen.length) return;

  /* Bijhouden wat er in beeld is en daarvan de bovenste kiezen. Niet simpelweg
     de laatste melding pakken: bij een sprong komen er meerdere tegelijk
     binnen en dan zet je de verkeerde naam in de balk. */
  const inBeeld = new Set();
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) inBeeld.add(e.target.id); else inBeeld.delete(e.target.id);
    });
    const huidig = doelen.find(t => inBeeld.has(t.id));
    if (!huidig) return;
    links.forEach(a => {
      const raak = a.getAttribute("href") === "#" + huidig.id;
      a.classList.toggle("is-active", raak);
      if (raak) hier.textContent = a.textContent;
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  doelen.forEach(t => io.observe(t));
})();

/* ═══════════ 11. LOSSE ILLUSTRATIES: nooit een gebroken plaatje ═══════════ */
$$('img[data-fallback="hide"]').forEach(img => bewaakAfbeelding(img, verbergFiguur));
