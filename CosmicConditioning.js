const URL = "instagram://user?username=cosmiconditioning";
const PARAM = (args.widgetParameter || "").trim();

const N = [
  ["+Forms marriages & partnerships.","+Ventures are gainful.","-Loss via quarrels & disputes.","+Activities produce income.","+Acquisition via commerce.","+Obtaining rare articles.","=Promotes women-related work.","+Promotes grain-related work.","+Promotes journeys.","+Promotes eating & hosting.","+Achievement in Hatha Yoga.","+Defeat of enemies & legal win.","=Promotes quadruped activities.","+Promotes govt & authority work.","-Disrupts entering new house.","+Promotes building cities/houses.","-Disrupts journeys.","+Travel to see royalty/leaders.","+Promotes deity installation.","+Acquisition of armies/guards.","-Loss of money if deal starts.","-Defeat/negligence in litigation.","+Promotes making friends.","+Success in disputes.","+Friendship & merry talks.","+Gains in trade.","+Fruitful union for progeny.","+Promotes auspicious functions.","-Obstructions & huge losses.","+Long-term jobs & philanthropy."],
  ["+Promotes beneficial activities.","+Short & long journeys.","+Success in undertakings.","+Gains through undertakings.","+Bathing after illness.","+Success in any action.","+Promotes agricultural work.","+Money via speculations.","+Attainment of position/status.","+Eating & entertaining guests.","+Grants friendship with women.","+Success.","+Success in litigations.","-Questionable/disreputable acts.","+Triumph where success is issue.","+Success in medical treatment.","=Promotes quadruped activities.","+Triumph where success is issue.","+Promotes entering new premises.","+Even poison becomes nectar.","+Promotes festive functions.","+Organizational well-being.","+Promotes sports & games.","+Marital talks & celebrations.","+Promotes entering new premises.","+Any work undertaken fructifies.","+Planting, gardening & seeding.","+Promotes serving guests.","-Leads to enmity & arguments.","+Promotes all good deeds."],
  ["-Grief from work undertaken.","+Easy attainment of success.","+Establishing strength & prowess.","=Promotes confining others.","+Gains.","+Friendship with good people.","=Activities related to steeds.","=Activities with cows & bulls.","-Loss in travels.","+Seeking a bride or proposals.","+Gaining in marital proposals.","+Promotes trading.","+Success in journeys.","-Fear of animals/thieves in travel.","-Loss via fire and weapons.","-Undertakings result in poverty.","-Unfavorable for rain rituals.","-Journeys bring loss of friends.","+Favorable if remedies taken.","+Enjoyment of melodies.","-Increase of worries.","-Destructive in legal pursuits.","+Effortless money.","+Victory over enemies.","-Leads to severing ties.","-Results in loneliness.","-Unfavorable for sexual acts.","+Happiness in activities.","+Success in all works.","-Dissatisfaction in union."],
  ["-Hearing bad news/harsh words.","-Loss in undertakings.","-Sexual acts cause loss of love.","+Skill in artistry.","-Efforts for job are futile.","-Carelessness causes ailments.","-Quarrels in work.","+Removal of obstacles.","+Effortless honor in work.","+Destruction of enemies.","+Acquisition of wealth.","+Increase of wealth.","+Success.","+Success.","+Work with kings & deities.","+Promotes romance.","+Effortless gain of position.","+Combating wicked people.","+Success.","+Obtaining unavailable items.","+Destroying enemies.","+Union to beget offspring.","+Visiting those high up.","+Cultivation of friendship.","+Strength in position.","+Promotes friendship.","+Gains.","+Friendship.","+Gains.","-Negative results in work."],
  ["+Success in financial work.","+Recovery of lost wealth.","-Physical strain in work.","+Acquisition of scented items.","+Promotes oratory skills.","-Grief.","+Success.","+Destruction of enemies.","+Success in attracting others.","+Gains.","+Acquisition of grains.","+Journeys for higher position.","+Happiness in festivals.","-Activity results in disease.","+Activities lead to fortune.","-Loss of work.","-Injury in fight by weapon.","+Success.","-Loss of courage.","-Journeys risk vehicle damage.","+Great wealth in journey.","+Positional strength.","-Severe grief/loss to relative.","+Courage.","-Enmity.","+Friendship.","+Success.","-Ill effects follow journey.","+Removal of fear.","+Success."],
  ["+Gaining from women.","+Success.","+Effortless money.","+Unexpected friendship.","+Rains via Varuna Sukta.","+Increase in farm output.","-Medical care carries risk.","+Becoming head of an army.","-Loss.","+Gain.","+Removal of legal worries.","+Success in unusual acts.","+Promotes starting education.","+Success in medical care.","-Work has serious fallout.","+Great gains via enemies.","-Loss of undertaking.","+Educational success.","-Food may cause ill health.","-Risk of wounds to relatives.","+Acquiring conveyances.","+Happiness in dialogues.","+Success.","+Happiness in journeys.","-Loss of wealth.","-Grief.","-Odds and obstacles.","+Comforts.","+Promotes auspicious deeds.","-Loss of fortune."],
  ["+Promotes legal matters.","+Gains through those high up.","-Increase of enemies.","+Engaging with friends.","+Success in disputes.","+Acquiring horses/animals.","-Dissatisfaction in travels.","+Success.","+Removal of dissatisfaction.","+Combating difficulties.","=Promotes sexual union.","-Risk to child in work.","-Failure in family disputes.","=Favorable for stupefying.","+Efforts in advancement.","+Acquisition of wealth.","+Promotes journeys.","-Loss of undertaking.","-Greater efforts required.","+Acquisition of grains.","+Increase of wealth.","=Promotes sexual union.","-Penury.","+Courageous acts.","+Physical comfort.","-Worries.","+Success over enemies.","-Severe danger/end in work.","+Pacifying anger.","+Digging tanks & wells."]
];

const VARAS = ["Ravivara", "Somavara", "Mangalavara", "Budhavara", "Guruvara", "Shukravara", "Shanivara"];
const TITHIS = ["Pratipada","Dwitiya","Tritiya","Chaturthi","Panchami","Shashthi","Saptami","Ashtami","Navami","Dashami","Ekadashi","Dwadashi","Trayodashi","Chaturdashi","Purnima","Pratipada","Dwitiya","Tritiya","Chaturthi","Panchami","Shashthi","Saptami","Ashtami","Navami","Dashami","Ekadashi","Dwadashi","Trayodashi","Chaturdashi","Amavasya"];
const NAKSHATRAS = ["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni","Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha","Mula","Purva Ashadha","Uttara Ashadha","Shravana","Dhanishta","Shatabhisha","Purva Bhadrapada","Uttara Bhadrapada","Revati"];
const YOGAS = ["Vishkambha","Priti","Ayushman","Saubhagya","Shobhana","Atiganda","Sukarma","Dhriti","Shula","Ganda","Vriddhi","Dhruva","Vyaghata","Harshana","Vajra","Siddhi","Vyatipata","Variyan","Parigha","Shiva","Siddha","Sadhya","Shubha","Shukla","Brahma","Indra","Vaidhriti"];
const KARANAS = ["Bava","Balava","Kaulava","Taitila","Gara","Vanija","Vishti"];

async function getCity(q) {
  const fm = FileManager.local(), f = fm.joinPath(fm.documentsDirectory(), "cc_city.json");
  let c = fm.fileExists(f) ? JSON.parse(fm.readString(f)) : null;
  if (q) {
    if (c && c.q === q.toLowerCase()) return c;
    try {
      const g = await new Request("https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(q) + "&count=1").loadJSON();
      const p = g.results.at(0);
      const t = await new Request("https://api.open-meteo.com/v1/forecast?latitude=" + p.latitude + "&longitude=" + p.longitude + "&current=temperature_2m&timezone=auto").loadJSON();
      c = { q: q.toLowerCase(), name: p.name + ", " + p.country_code, lat: p.latitude, lon: p.longitude, tz: t.utc_offset_seconds / 3600 };
      fm.writeString(f, JSON.stringify(c));
      return c;
    } catch (e) { if (c) return c; }
  }
  try {
    Location.setAccuracyToThreeKilometers();
    const l = await Location.current(), r = await Location.reverseGeocode(l.latitude, l.longitude);
    c = { q: "_gps", name: r.at(0).locality || "Local", lat: l.latitude, lon: l.longitude, tz: -(new Date().getTimezoneOffset() / 60) };
    fm.writeString(f, JSON.stringify(c));
    return c;
  } catch (e) { return c || { name: "Mumbai, IN", lat: 19.076, lon: 72.878, tz: 5.5 }; }
}

const fmt = h => {
  const m = Math.round((((h % 24) + 24) % 24) * 60), hh = Math.floor(m / 60) % 24, mm = m % 60;
  return String(hh % 12 || 12).padStart(2, "0") + ":" + String(mm).padStart(2, "0") + (hh >= 12 ? " PM" : " AM");
};

function sunTimes(d, lat, lon, tz) {
  const doy = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000), g = (2 * Math.PI / 365) * (doy - 1);
  const eq = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
  const dec = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g);
  const ha = Math.acos(Math.max(-1, Math.min(1, Math.cos(1.5853) / (Math.cos(lat * Math.PI / 180) * Math.cos(dec)) - Math.tan(lat * Math.PI / 180) * Math.tan(dec)))) * 180 / Math.PI;
  const noon = 720 - 4 * lon - eq;
  return [(noon - 4 * ha) / 60 + tz, (noon + 4 * ha) / 60 + tz];
}

async function run() {
  const now = new Date(), city = await getCity(PARAM);
  const d = (now.getTime() / 86400000) + 2440587.5 - 2451545.0, ay = 23.85 + (d / 36525) * 1.397;
  const sA = ((357.528 + 0.9856003 * d) % 360) * Math.PI / 180, mA = ((134.963 + 13.064993 * d) % 360) * Math.PI / 180;
  const sun = ((280.46 + 0.9856474 * d + 1.915 * Math.sin(sA) + 0.02 * Math.sin(2 * sA) - ay) % 360 + 360) % 360;
  const moon = ((218.316 + 13.176396 * d + 6.289 * Math.sin(mA) - ay) % 360 + 360) % 360;
  const diff = (moon - sun + 360) % 360, tIdx = Math.floor(diff / 12), kIdx = Math.floor(diff / 6);

  const tithi = (tIdx < 15 ? "Shukla " : "Krishna ") + TITHIS.at(tIdx);
  const nakshatra = NAKSHATRAS.at(Math.floor(moon / (360 / 27)));
  const yoga = YOGAS.at(Math.floor(((sun + moon) % 360) / (360 / 27)));
  const karana = kIdx === 0 ? "Kimstughna" : kIdx === 57 ? "Shakuni" : kIdx === 58 ? "Chatushpada" : kIdx === 59 ? "Naga" : KARANAS.at((kIdx - 1) % 7);

  const cityDate = new Date(now.getTime() + city.tz * 3600000);
  const locHrs = ((now.getUTCHours() + now.getUTCMinutes() / 60 + city.tz) % 24 + 24) % 24;
  const [sr, ss] = sunTimes(cityDate, city.lat, city.lon, city.tz);
  let dow = cityDate.getUTCDay(), sinceSr = locHrs - sr;
  if (sinceSr < 0) { sinceSr += 24; dow = (dow + 6) % 7; }

  const nIdx = Math.floor(sinceSr / 0.4) % 60, bIdx = nIdx % 30, rawN = N.at(dow).at(bIdx);
  const pol = rawN.at(0), nText = rawN.slice(1), mLen = (ss - sr) / 15;
  const rng = (a, b) => fmt(a) + "–" + fmt(b);

  const INK_DARK  = new Color("#2B1810");
  const INK_MUTED = new Color("#6E4E3A");
  const SAFFRON   = new Color("#C85A17");

  const w = new ListWidget();
  w.url = URL;
  w.setPadding(12, 14, 12, 14);
  w.refreshAfterDate = new Date(now.getTime() + Math.max(1, Math.ceil(24 - (sinceSr % 0.4) * 60)) * 60000);
  const bg = new LinearGradient();
  bg.locations = [0, 1];
  bg.colors = [new Color("#FFFDF8"), new Color("#F6EBDD")];
  w.backgroundGradient = bg;

  const top = w.addStack();
  top.centerAlignContent();
  const b = top.addText("🕉️ COSMIC CONDITIONING");
  b.font = Font.heavySystemFont(11);
  b.textColor = SAFFRON;
  top.addSpacer();
  const c = top.addText("📍 " + city.name.toUpperCase());
  c.font = Font.boldSystemFont(11);
  c.textColor = INK_MUTED;
  w.addSpacer(6);

  const bar = w.addStack();
  bar.backgroundColor = new Color("#EAD8C3");
  bar.cornerRadius = 8;
  bar.setPadding(5, 10, 5, 10);
  bar.centerAlignContent();
  const t1 = bar.addText("🌅 " + fmt(sr));
  t1.font = Font.boldSystemFont(12);
  t1.textColor = INK_DARK;
  bar.addSpacer();
  const t2 = bar.addText("🌇 " + fmt(ss));
  t2.font = Font.boldSystemFont(12);
  t2.textColor = INK_DARK;
  w.addSpacer(7);

  const cardBg = pol === "+" ? "#E4F3E8" : pol === "-" ? "#FDE8E6" : "#FDF3DC";
  const badgeCol = pol === "+" ? "#1B7A3E" : pol === "-" ? "#B92B27" : "#A66A00";
  const card = w.addStack();
  card.layoutVertically();
  card.backgroundColor = new Color(cardBg);
  card.borderColor = new Color(badgeCol, 0.4);
  card.borderWidth = 1.5;
  card.cornerRadius = 10;
  card.setPadding(7, 10, 7, 10);

  const nh = card.addStack();
  nh.centerAlignContent();
  const nt = nh.addText("⏱️ NADIKA " + (nIdx + 1) + " • " + rng(sr + nIdx * 0.4, sr + (nIdx + 1) * 0.4));
  nt.font = Font.boldSystemFont(11);
  nt.textColor = INK_MUTED;
  nh.addSpacer();
  const bd = nh.addText(pol === "+" ? "✅ GOOD" : pol === "-" ? "⚠️ AVOID" : "⚖️ NEUTRAL");
  bd.font = Font.heavySystemFont(10.5);
  bd.textColor = new Color(badgeCol);

  card.addSpacer(3);
  const nr = card.addText(nText);
  nr.font = Font.boldSystemFont(13);
  nr.textColor = INK_DARK;
  nr.lineLimit = 2;
  w.addSpacer(7);

  const grid = w.addStack();
  grid.layoutHorizontally();

  const leftCol = grid.addStack();
  leftCol.layoutVertically();
  const lHead = leftCol.addText("PANCHANG");
  lHead.font = Font.heavySystemFont(10);
  lHead.textColor = SAFFRON;
  leftCol.addSpacer(3);

  const addLeft = (lbl, val) => {
    const t = leftCol.addText(lbl + ": " + val);
    t.font = Font.semiboldSystemFont(11.5);
    t.textColor = INK_DARK;
    t.lineLimit = 1;
    t.minimumScaleFactor = 0.85;
    leftCol.addSpacer(2.5);
  };

  addLeft("Vara", VARAS.at(dow));
  addLeft("Tithi", tithi);
  addLeft("Nakshatra", nakshatra);
  addLeft("Yoga", yoga);
  addLeft("Karana", karana);

  grid.addSpacer(10);

  const rightCol = grid.addStack();
  rightCol.layoutVertically();
  const rHead = rightCol.addText("AUSPICIOUS MUHURTAS");
  rHead.font = Font.heavySystemFont(10);
  rHead.textColor = SAFFRON;
  rightCol.addSpacer(3);

  const addRight = (lbl, val) => {
    const t = rightCol.addText(lbl + ": " + val);
    t.font = Font.semiboldSystemFont(11.5);
    t.textColor = INK_DARK;
    t.lineLimit = 1;
    t.minimumScaleFactor = 0.85;
    rightCol.addSpacer(2.5);
  };

  addRight("Brahma", rng(sr - 1.6, sr - 0.8));
  addRight("Abhijit", dow === 3 ? "Avoid Wed" : rng(sr + 7 * mLen, sr + 8 * mLen));
  addRight("Vijaya", rng(sr + 10 * mLen, sr + 11 * mLen));
  addRight("Godhuli", rng(ss - 0.4, ss + 0.4));
  addRight("Sayahna", rng(ss, ss + 0.8));

  w.addSpacer();

  const ft = w.addStack();
  ft.centerAlignContent();
  const cta = ft.addText("📲 Tap for @cosmiconditioning daily guidance →");
  cta.font = Font.boldSystemFont(11);
  cta.textColor = SAFFRON;
  return w;
}

const widget = await run();
if (config.runsInWidget) Script.setWidget(widget); else widget.presentLarge();
Script.complete();
