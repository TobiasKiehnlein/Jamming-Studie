export type Locale = 'de' | 'en'

export interface FaqItem {
  q: string
  a: string
}

export interface FaqGroup {
  icon: string
  iconClass: string
  title: string
  items: FaqItem[]
}

export interface Translation {
  nav: {
    home: string
    faq: string
    cta: string
    langSwitch: string
  }
  hero: {
    badge: string
    subtitle: string
    text: string
    cta: string
  }
  faq: {
    label: string
    headingLine1: string
    headingLine2: string
    groups: FaqGroup[]
  }
  contact: {
    label: string
    headingLine1: string
    headingLine2: string
    intro: string
    checklist: string[]
    btnLabel: string
    emailSubject: string
    outro: string
  }
  footer: string
}

export const translations: Record<Locale, Translation> = {
  de: {
    nav: {
      home: 'Home',
      faq: 'FAQ',
      cta: 'Mitmachen →',
      langSwitch: 'EN',
    },
    hero: {
      badge: 'Studie läuft · Jetzt bewerben',
      subtitle: 'Musiker*innen für spannende Mixed-Reality-Studie gesucht!',
      text: 'Spielst du ein Instrument und hast Lust, etwas Neues auszuprobieren? Dann mach mit bei unserer Studie zum Musizieren in Mixed Reality! Zwei Musiker*innen jammen gemeinsam – unterstützt durch Mixed-Reality-Headsets. Du spielst dein Instrument ganz normal, während dein*e Partner*in und virtuelle Elemente digital in deinem Sichtfeld erscheinen. Eine völlig neue Art, gemeinsam Musik zu machen – auch über Distanz.',
      cta: 'Jetzt mitmachen',
    },
    faq: {
      label: 'Fragen & Antworten',
      headingLine1: 'Was du wissen',
      headingLine2: 'möchtest',
      groups: [
        {
          icon: '✦',
          iconClass: 'cyan',
          title: 'Warum mitmachen?',
          items: [
            {
              q: 'Gibt es eine Aufwandsentschädigung?',
              a: 'Ja! Alle Teilnehmer*innen erhalten eine Aufwandsentschädigung von 30 €.',
            },
            {
              q: 'Welchen Mehrwert bietet die Studie für mich?',
              a: 'Erlebe, wie Jammen in Mixed Reality kreative Sessions auf ein neues Level bringt – eine einzigartige Erfahrung, die du so nirgendwo sonst machen kannst.',
            },
            {
              q: 'Wie unterstützt Mixed Reality meine Kreativität?',
              a: 'Virtuelle Visualisierungen reagieren in Echtzeit auf deine Musik, schaffen eine einzigartige Atmosphäre und eröffnen völlig neue Wege der Improvisation. Mixed Reality kann Kreativität auf Arten entfachen, die physische Räume allein nicht ermöglichen.',
            },
            {
              q: 'Kann ich wirklich remote mit jemandem improvisieren?',
              a: 'Ja! Ein zentrales Ziel dieser Technologie ist es, Remote-Jamming so inspirierend und flüssig wie möglich zu gestalten. Dein*e Partner*in erscheint virtuell in deinem Sichtfeld – als wärst du mit ihr oder ihm im selben Raum.',
            },
            {
              q: 'Welchen wissenschaftlichen Zweck hat die Studie?',
              a: 'Du unterstützt spannende Forschung zur Zukunft des Musizierens. Deine Teilnahme hilft uns zu verstehen, wie Mixed Reality das gemeinsame Musizieren nachhaltig verändern kann.',
            },
          ],
        },
        {
          icon: '◈',
          iconClass: 'magenta',
          title: 'Was erwartet dich?',
          items: [
            {
              q: 'Wie läuft die Session ab?',
              a: 'Dich erwartet eine entspannte Jam-Session mit genau einer anderen Person – immer zu zweit, in einer ungezwungenen, kreativen Atmosphäre. Bring einfach dein Instrument mit, den Rest regeln wir.',
            },
            {
              q: 'Welche Instrumente kann ich mitbringen?',
              a: 'Vor Ort stehen eine Gitarre, ein Stage-Piano und ein digitales Schlagzeug bereit. Gesang ist ebenfalls willkommen, sowie alle Instrumente, die sich per Klinkenstecker anschließen oder über ein Mikrofon aufnehmen lassen.',
            },
            {
              q: 'Wird meine Musik aufgezeichnet?',
              a: 'Nein. Es findet keinerlei Audio-Aufnahme deiner Musik statt. Die Session ist nur für dich und dein*e Jamming-Partner*in – ganz ohne Druck.',
            },
            {
              q: 'Muss ich Erfahrung mit VR-Technik haben?',
              a: 'Nein! Wir begleiten dich durch das gesamte Setup des Mixed-Reality-Headsets. Keine Vorkenntnisse nötig – wir kümmern uns um alles Technische.',
            },
            {
              q: 'Was lerne ich über neue Technologien?',
              a: 'Du erhältst einen spannenden Einblick in neue Technologien für Musik und Kreativität – und bist damit ganz vorne dabei, wenn es um die Zukunft des Musizierens geht.',
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Kontakt',
      headingLine1: 'Interesse',
      headingLine2: 'geweckt?',
      intro: 'Dann melde dich gerne bei uns für weitere Informationen zur Teilnahme. Die Session findet immer zu zweit statt. Teile uns in deiner Nachricht bitte kurz mit:',
      checklist: [
        'Dein Alter',
        'Welches Instrument du spielst',
        'Dein ungefähres Spielniveau (z. B. Anfänger, Fortgeschritten, Profi)',
        'In welchem Genre du hauptsächlich unterwegs bist',
        'Ob du bereits einen Jamming-Partner oder eine Jamming-Partnerin hast',
      ],
      btnLabel: '✉ E-Mail schreiben',
      emailSubject: 'Teilnahme%20Jamming%20in%20VR',
      outro: 'Wir freuen uns auf dich und deine Musik!',
    },
    footer: 'Jamming in VR · Mixed Reality Studie',
  },

  en: {
    nav: {
      home: 'Home',
      faq: 'FAQ',
      cta: 'Join →',
      langSwitch: 'DE',
    },
    hero: {
      badge: 'Study ongoing · Apply now',
      subtitle: 'Musicians wanted for an exciting Mixed Reality study!',
      text: 'Do you play an instrument and want to try something new? Join our Mixed Reality music study! Two musicians jam together — supported by Mixed Reality headsets. You play your instrument as normal while your partner and virtual elements appear digitally in your field of view. A whole new way of making music together — even across distances.',
      cta: 'Join now',
    },
    faq: {
      label: 'Questions & Answers',
      headingLine1: 'What you want',
      headingLine2: 'to know',
      groups: [
        {
          icon: '✦',
          iconClass: 'cyan',
          title: 'Why participate?',
          items: [
            {
              q: 'Is there any compensation?',
              a: 'Yes! All participants receive a compensation of €30 for their time.',
            },
            {
              q: 'What do I get out of participating?',
              a: 'Experience how jamming in Mixed Reality takes creative sessions to a whole new level — a unique experience you simply won\'t find anywhere else.',
            },
            {
              q: 'How does Mixed Reality support my creativity?',
              a: 'Virtual visualizations respond to your music in real time, creating a unique atmosphere and opening up entirely new avenues for improvisation. Mixed Reality can spark creativity in ways that physical spaces alone simply cannot.',
            },
            {
              q: 'Can I really improvise remotely with someone?',
              a: 'Yes! A core goal of this technology is to make remote jamming as inspiring and seamless as possible. Your partner appears virtually in your field of view — as if you were in the same room.',
            },
            {
              q: 'What is the scientific purpose of the study?',
              a: 'You\'ll be supporting exciting research into the future of music-making. Your participation helps us understand how Mixed Reality can fundamentally transform collaborative music.',
            },
          ],
        },
        {
          icon: '◈',
          iconClass: 'magenta',
          title: 'What to expect?',
          items: [
            {
              q: 'How does the session work?',
              a: 'Expect a relaxed jam session with exactly one other person — always just two musicians, in a casual, creative atmosphere. Just bring your instrument and we\'ll handle the rest.',
            },
            {
              q: 'What instruments can I use?',
              a: 'On site we have a guitar, a stage piano, and a digital drum kit available. Vocals are also welcome, as are any instruments that can be connected via audio jack or recorded with a microphone.',
            },
            {
              q: 'Will my music be recorded?',
              a: 'No. There is no audio recording of your music whatsoever. The session is just between you and your jamming partner — completely pressure-free.',
            },
            {
              q: 'Do I need any VR experience?',
              a: 'Not at all! We\'ll walk you through the full Mixed Reality headset setup. No prior experience needed — we take care of everything technical.',
            },
            {
              q: 'What will I learn about new technology?',
              a: 'You\'ll gain exciting insights into new technologies for music and creativity — putting you right at the forefront of the future of music-making.',
            },
          ],
        },
      ],
    },
    contact: {
      label: 'Contact',
      headingLine1: 'Sounds',
      headingLine2: 'interesting?',
      intro: 'Get in touch for more information about participating. Sessions always involve exactly two musicians. Please briefly include in your message:',
      checklist: [
        'Your age',
        'Which instrument you play',
        'Your approximate skill level (e.g. beginner, intermediate, advanced)',
        'What genre you mainly play in',
        'Whether you already have a jamming partner',
      ],
      btnLabel: '✉ Send an email',
      emailSubject: 'Participation%20Jamming%20in%20VR',
      outro: 'We look forward to hearing from you and your music!',
    },
    footer: 'Jamming in VR · Mixed Reality Study',
  },
}
