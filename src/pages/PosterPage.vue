<script setup lang="ts">
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const qrDataUrl = ref('')

onMounted(async () => {
  qrDataUrl.value = await QRCode.toDataURL('https://jamming-studie.kiehnlein.de', {
    width: 480,
    margin: 2,
    color: { dark: '#00d4ff', light: '#07070f' },
  })
})
</script>

<template>
  <div class="poster">
    <!-- Background -->
    <div class="bg" aria-hidden="true">
      <div class="orb orb-1" />
      <div class="orb orb-2" />
      <div class="orb orb-3" />
      <div class="grid" />
      <div class="dot-field" />
    </div>

    <div class="poster-inner">

      <!-- ── HEADER ── -->
      <header class="header">
        <div class="badge">
          <span class="badge-dot" />
          Studie läuft · Jetzt bewerben
        </div>

        <h1 class="title">
          <span class="title-line1">Jamming</span>
          <span class="title-line2">in VR</span>
        </h1>

        <p class="subtitle">
          Musiker*innen für spannende<br />Mixed-Reality-Studie gesucht!
        </p>

        <div class="divider" aria-hidden="true">
          <div class="divider-line" />
          <span class="divider-icon">✦</span>
          <div class="divider-line" />
        </div>
      </header>

      <!-- ── INTRO ── -->
      <p class="intro">
        Spielst du ein Instrument und hast Lust, etwas Neues auszuprobieren?
        Zwei Musiker*innen jammen gemeinsam – unterstützt durch Mixed-Reality-Headsets.
        Dein*e Partner*in erscheint virtuell in deinem Sichtfeld – als wärst du mit ihr oder ihm im selben Raum.
      </p>

      <!-- ── PHOTO STRIP ── -->
      <div class="photo-strip">
        <div class="strip-img-wrap">
          <img src="/images/image3.jpg"  alt="Schlagzeugerin mit VR-Headset" class="strip-img" />
        </div>
        <div class="strip-img-wrap">
          <img src="/images/image.jpg"   alt="Gitarrist mit VR-Headset" class="strip-img" />
        </div>
        <div class="strip-img-wrap">
          <img src="/images/image5.jpeg" alt="Akustik-Gitarristin mit VR-Headset" class="strip-img" />
        </div>
        <div class="strip-img-wrap">
          <img src="/images/image4.jpeg" alt="Akkordeon-Spieler mit VR-Headset" class="strip-img" />
        </div>
      </div>

      <!-- ── HIGHLIGHTS 2×2 ── -->
      <div class="highlights">
        <div class="hi-card c1">
          <div class="hi-top">
            <span class="hi-icon">✦</span>
            <strong>30 € Aufwands&shy;entschädigung</strong>
          </div>
          <p>Alle Teilnehmer*innen erhalten eine Aufwandsentschädigung für ihre Zeit.</p>
        </div>

        <div class="hi-card c2">
          <div class="hi-top">
            <span class="hi-icon">◈</span>
            <strong>Kein Vorwissen nötig</strong>
          </div>
          <p>Wir begleiten dich durch das gesamte Setup des Mixed-Reality-Headsets.</p>
        </div>

        <div class="hi-card c3">
          <div class="hi-top">
            <span class="hi-icon">◉</span>
            <strong>Alle Instrumente willkommen</strong>
          </div>
          <p>Gitarre, Klavier, Schlagzeug, Gesang und alles, was sich per Klinke anschließen lässt.</p>
        </div>

        <div class="hi-card c4">
          <div class="hi-top">
            <span class="hi-icon">★</span>
            <strong>Keine Musikaufnahmen</strong>
          </div>
          <p>Die Session bleibt ganz unter euch – entspannt und ohne Druck.</p>
        </div>
      </div>

      <!-- ── BOTTOM: CONTACT + QR ── -->
      <div class="bottom">
        <div class="contact">
          <p class="contact-eyebrow">Interesse geweckt?</p>
          <p class="contact-desc">
            Melde dich per E-Mail für weitere Infos zur Teilnahme. Teile uns kurz dein Alter und dein Instrument mit – und bring am besten gleich jemanden mit, mit dem du zusammen jammen möchtest!
          </p>
          <a class="contact-email" href="mailto:jamming-studie@kiehnlein.de">
            <span class="email-icon">✉</span>
            jamming-studie@kiehnlein.de
          </a>
        </div>

        <a class="qr-wrap" href="https://jamming-studie.kiehnlein.de" target="_blank">
          <img v-if="qrDataUrl" :src="qrDataUrl" alt="QR Code" class="qr-img" />
          <div v-else class="qr-placeholder" />
          <p class="qr-cta">Mehr Infos</p>
          <p class="qr-url">jamming-studie.kiehnlein.de</p>
        </a>
      </div>

    </div>

    <!-- ── FOOTER STRIP ── -->
    <footer class="footer">
      <span>Jamming in VR</span>
      <span class="sep">·</span>
      <span>Mixed Reality Studie</span>
      <span class="sep">·</span>
      <span>Human-Computer Interaction</span>
    </footer>
  </div>
</template>

<style scoped lang="scss">
/* ── Poster shell ── */
.poster {
  width: 210mm;
  height: 297mm;
  margin: 0 auto;
  background: #07070f;
  color: #e8e8f0;
  font-family: 'DM Sans', sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

@media screen {
  .poster {
    box-shadow: 0 0 100px rgba(0,212,255,0.14), 0 0 0 1px rgba(255,255,255,0.07);
    border-radius: 4px;
  }
}

/* ── Background ── */
.bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.dot-field {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 22px 22px;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(72px);
}
.orb-1 {
  width: 380px; height: 380px;
  background: radial-gradient(circle, rgba(0,212,255,0.18), transparent 70%);
  top: -100px; right: -100px;
}
.orb-2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(255,45,120,0.13), transparent 70%);
  bottom: 80px; left: -80px;
}
.orb-3 {
  width: 260px; height: 260px;
  background: radial-gradient(circle, rgba(139,92,246,0.14), transparent 70%);
  top: 45%; left: 30%;
}

.grid {
  position: absolute;
  bottom: 0; left: 50%;
  transform: translateX(-50%) perspective(300px) rotateX(68deg);
  width: 250%;
  height: 180px;
  transform-origin: bottom center;
  background-image:
    linear-gradient(rgba(0,212,255,0.09) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,212,255,0.09) 1px, transparent 1px);
  background-size: 36px 36px;
}

/* ── Inner ── */
.poster-inner {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 12mm 13mm 8mm;
  gap: 5mm; /* consistent spacing between all sections */
}

/* ── Header ── */
.header { display: flex; flex-direction: column; gap: 3mm; }

.badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(0,212,255,0.08);
  border: 1px solid rgba(0,212,255,0.25);
  color: #00d4ff;
  padding: 2.5px 11px;
  border-radius: 100px;
  font-size: 7pt;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  width: fit-content;
}
.badge-dot {
  width: 5px; height: 5px;
  background: #00d4ff;
  border-radius: 50%;
}

.title {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 72pt;
  line-height: 0.85;
  letter-spacing: -0.04em;
  margin: 0;
}
.title-line1 {
  display: block;
  background: linear-gradient(120deg, #ffffff 0%, #c8eeff 40%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.title-line2 {
  display: block;
  background: linear-gradient(120deg, #a78bfa 0%, #8b5cf6 40%, #ff2d78 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-family: 'Syne', sans-serif;
  font-size: 12.5pt;
  font-weight: 600;
  color: rgba(232,232,240,0.75);
  line-height: 1.35;
  margin: 0;
}

.divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 1mm;
}
.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(0,212,255,0.5), rgba(139,92,246,0.4), transparent);
}
.divider-icon {
  font-size: 9pt;
  color: rgba(0,212,255,0.6);
}

/* ── Intro ── */
.intro {
  font-size: 9pt;
  color: rgba(232,232,240,0.58);
  line-height: 1.75;
  margin: 0;
}

/* ── Photo strip ── */
.photo-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4mm;
}
.strip-img-wrap {
  aspect-ratio: 1 / 1; /* square crop — ~20mm shorter than 3:4, frees space for section gaps */
  overflow: hidden;
  border-radius: 7px;
  border: 1px solid rgba(0,212,255,0.18);
}
.strip-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  display: block;
  filter: brightness(0.88) saturate(1.08);
}

/* ── Highlights ── */
.highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm;
}

/* All cards share the same base */
.hi-card {
  padding: 4.5mm 5mm;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 2mm;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.07);
}
/* Spectrum: cyan → indigo → violet → pink */
.hi-card.c1 { border-left: 3px solid #00d4ff; }
.hi-card.c2 { border-left: 3px solid #818cf8; }
.hi-card.c3 { border-left: 3px solid #a78bfa; }
.hi-card.c4 { border-left: 3px solid #f472b6; }

.hi-top {
  display: flex;
  align-items: center;
  gap: 2.5mm;
}
.hi-icon { font-size: 10pt; }
.hi-card.c1 .hi-icon { color: #00d4ff; }
.hi-card.c2 .hi-icon { color: #818cf8; }
.hi-card.c3 .hi-icon { color: #a78bfa; }
.hi-card.c4 .hi-icon { color: #f472b6; }

.hi-card strong {
  font-size: 8.5pt;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  color: #e8e8f0;
}
.hi-card p {
  font-size: 7.5pt;
  color: rgba(232,232,240,0.52);
  line-height: 1.6;
  margin: 0;
  padding-left: 5.5mm;
}

/* ── Bottom ── */
.bottom {
  display: flex;
  gap: 8mm;
  align-items: flex-end;
  margin-top: auto; /* absorbs all remaining space — pushes contact away from cards above */
}

.contact {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2.5mm;
}

.contact-eyebrow {
  font-family: 'Syne', sans-serif;
  font-size: 13pt;
  font-weight: 800;
  background: linear-gradient(120deg, #00d4ff, #8b5cf6, #ff2d78);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
}

.contact-desc {
  font-size: 8pt;
  color: rgba(232,232,240,0.52);
  line-height: 1.65;
  margin: 0;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: 2mm;
  background: linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1));
  border: 1px solid rgba(0,212,255,0.3);
  border-radius: 8px;
  padding: 3mm 5mm;
  text-decoration: none;
  width: fit-content;
  margin-top: 1mm;
}
.email-icon {
  font-size: 14pt;
  color: #00d4ff;
  line-height: 1;
}
.contact-email {
  font-family: 'Courier New', monospace;
  font-size: 9.5pt;
  color: #00d4ff;
  font-weight: 600;
}

.qr-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2mm;
  padding: 4mm;
  background: rgba(0,212,255,0.05);
  border: 1px solid rgba(0,212,255,0.2);
  border-radius: 12px;
  flex-shrink: 0;
  text-decoration: none;
}
.qr-img {
  width: 48mm;
  height: 48mm;
  display: block;
  border-radius: 6px;
}
.qr-placeholder {
  width: 48mm; height: 48mm;
  background: rgba(0,212,255,0.05);
  border-radius: 6px;
}
.qr-cta {
  font-size: 7pt;
  color: rgba(232,232,240,0.45);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}
.qr-url {
  font-family: 'Courier New', monospace;
  font-size: 6.5pt;
  color: #00d4ff;
  text-align: center;
  margin: 0;
}

/* ── Footer ── */
.footer {
  position: relative;
  z-index: 1;
  padding: 3mm 13mm;
  border-top: 1px solid rgba(255,255,255,0.06);
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 6.5pt;
  font-family: 'Syne', sans-serif;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(136,136,170,0.45);
}
.sep { color: rgba(0,212,255,0.35); }

/* ── Print ── */
@media print {
  @page { size: A4 portrait; margin: 0; }
  body {
    margin: 0;
    background: #07070f !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .poster {
    box-shadow: none !important;
    border-radius: 0 !important;
    margin: 0;
  }
  .badge-dot { display: none; }

  /* Gradient-clip text is invisible when printed — replace with solid colours */
  //.title-line1 {
  //  background: none !important;
  //  -webkit-text-fill-color: #00d4ff !important;
  //  color: #00d4ff !important;
  //}
  //.title-line2 {
  //  background: none !important;
  //  -webkit-text-fill-color: #a78bfa !important;
  //  color: #a78bfa !important;
  //}
  //.contact-eyebrow {
  //  background: none !important;
  //  -webkit-text-fill-color: #00d4ff !important;
  //  color: #00d4ff !important;
  //}
}
</style>
