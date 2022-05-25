let menu = document.querySelector('#size-menu')
let menuLinks = document.querySelector('.menu-bar-menu')
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

let arrIndeks = 0;
let arrIndeks_1 = 0;
let str = "";
let str_1 = "";
let virtualizations = [{
    overskrift: "WINDOWS 10 PRO++",
    overskrift1: "FOR Å INSTALLERE HYPER V."
  },
  {
    overskrift: "HYPER-V",
    overskrift1: "FOR Å INSTALLERE VIRTUELL SVITSJ OG MASKIN"
  },


];

let virtualization_examples = [
  {
    overskrift: "2.1 Hvordan å installere Hyper-V.",
    overskrift1: "1",
    tekst: [
      {avsnitt: "<p><b>Steg 1</b>:<br>Søk <b>kontrollpanel</b> i søkbaren din og deretter åpne den, dersom du har åpnet kontrollpanel, trykk på <b>programmer</b>.</p>"},
      {avsnitt: "<p><br><b>Steg 2:</b><br>Da vil du komme deg i et vindu hvor det står <b>Programs and Features</b> øverst og under Programs and Features, vil det stå <b>Turn Windows features on or off</b>. Trykk på den. Etter at du har trukket på Turn Windows features on or off, vil det neste vinduet komme opp og der vil det stå en del alternativer. Velg <b>Hyper-V</b> alternativet og deretter trykk <b>ok</b> knappen. Til slutt installasjon vil starte, vent til den er ferdig.</p>"},
      {avsnitt: "<p><br><b>Steg 3:</b><br>Etter at installasjon er ferdig, søk <b>Hyper-V Manager</b> i søkbaren og derved åpne den. Da vil du se et vindu hvor til venstre side vil det stå <b>Hyper-V Manager</b>. Høyre klikk på den og deretter velg <b>Connect to Server</b> Til slutt vil du se to valg, velg <b>Local computer</b> og dermed trykk <b>ok</b> knappen.</p>"}],
      bilde_til_avsnitt: [
      {
      bilde: [
        {bilde: "HyperV/søkbar.png", bredde: "350px", hoyde: "200px"},
        {bilde: "HyperV/programvare.png", bredde: "350px", hoyde: "200px"}]
      },
      {
       bilde: [
          {bilde: "HyperV/programvare-2.png", bredde: "300px", hoyde: "250px"},
          {bilde: "HyperV/programvare-on-off.png" ,bredde: "300px", hoyde: "250px"},
          {bilde: "HyperV/programvare-installasjon.png", bredde: "300px", hoyde: "250px"}]
      },
      {
        bilde: [
          {bilde: "HyperV/Hyper-v.png", bredde: "300px", hoyde: "180px"},
          {bilde: "HyperV/Hyper-v-2.png", bredde: "300px", hoyde: "180px"},
          {bilde: "HyperV/Hyper-v-3.png", bredde: "300px", hoyde: "180px"},
          {bilde: "HyperV/Hyper-v-4.png", bredde: "300px", hoyde: "180px"}]
      }
    ]
  },

   {
     overskrift: "2.2 Hvordan installere virtuell maskin.",
     overskrift1: "2",
     tekst: [
       {avsnitt: "<b>Steg 1:</b><p>For å installere virtuell maskin, trykker du på <b>Quik Create...</b>, derved vil du få valg om hvilken operativsystem som du vil ha på virtuelle maskin din. Velg et operativsystem og deretter trykk på <b>Create Virtual Machine</b> knappen. Til slutt vil installasjon til virtuelle maskin starte, vent til den er ferdig.</p>"},
       {avsnitt: "<b>Steg 2:</b><p>Når installsjon er ferdig, vil det komme et vindu hvor det står <b>Connect</b>, trykk på den. Etter det vil det komme annen vindu hvor det står <b>Start</b>, trykk på den. Til slutt vil du komme til en steg hvor du skal sette opp virtuell maskin, Gå til neste side for videre veiledning.</p>"}
     ],
       bilde_til_avsnitt: [
       {
         bilde: [
             {bilde: "VS/VS-1.png", bredde: "300px", hoyde: "200px"},
             {bilde: "VM/lag-vm.png", bredde: "300px", hoyde: "200px"},
             {bilde: "VM/lag-vm-2.png",bredde: "300px", hoyde: "200px"}
           ]
         },
         {
         bilde: [
             {bilde: "VM/lag-vm-3.png",bredde: "300px", hoyde: "200px"},
             {bilde: "VM/lag-vm-4.png",bredde: "300px", hoyde: "200px"}
           ]
         }
     ]
  },
  {
    overskrift: "2.3 Oppsetning av virtuell maskin:",
    overskrift1: "2",
    tekst: [
      {avsnitt: ""},
      {avsnitt: "Etter å ha trykket Start knappen, vil det komme opp et vinduet hvor det står ‘’<b>Let's start with region. Is this right?</b>‘’, og her kan du velge et land som du ønsker. Etter å ha valgt et land trykk på knappen nederst til høyre <b>‘’Yes’’</b>."},
      {avsnitt: "Dersom du har trykket knappen til høyre ‘’Yes’’, vil det komme opp neste vindu og der vil det stå ‘’<b>Is this the right keyboard layout</b>‘’. Her kan du velge et land/språk som du ønsker, for tastauren din. Etter å ha valgt et land/språk trykk på knappen nederst til høyre <b>‘’Yes’</b>"},
      {avsnitt: "Nå vil de spørre deg om at «ønsker du legge til andre tastatur oppsett». Trykk på knappen nederst til høyre <b>‘’Skip’’</b>, for å unngå <b>å legge til andre tastatur oppsett.</b>"},
      {avsnitt: "Etter at du har trukket ´´<b>Skip</b>‘’, deretter vil du se vinduet med ‘’<b>Windows 10 License Agreement</b>‘’ og her vil det stå informasjon om «Lisens avtale». Du kan gå gjennom dette informasjonen eller trykke på knappen nederst til høyre <b>‘’Accept’’</b>."},
      {avsnitt: "Etter at du har trukket på <b>‘’Accept’’</b> knappen, vil du komme til vinduet hvor du skal opprettet en konto for din virtuell maskin, velg et navn og deretter trykker du <b>‘’Next’’</b>."},
      {avsnitt: "I dette vinduet her, skal du lage en passord som du ønsker. Du kan få informasjon om god passord under. Etter at du er ferdig med å lage passord trykker du på <b>‘’Next’’</b> knappen."},
      {avsnitt: "Nå skal du bekrefte passordet ditt, da er det bare å skrive det samme passordet som du skrev i forrige vinduet og deretter trykk på <b>‘’Next’’</b> knappen."},
      {avsnitt: "<div style='border:1px solid #000;padding:10px;font-size:15px; line-height: 150%; margin-top: 27px; width: 400px'><b  style='font-size:20px'>Unngå dette når du lager et passord:</b><br><br>Ting du bør unngå når det gjelder å lage et godt passord er å skrive ting som andre kan vite lett som f.eks. bursdagen, alderen din og ha tall rekkefølge (for eksempel Jobb123).</div>"},
      {avsnitt: ""},
      {avsnitt: "I dette steget skal du lage sikkerhets spørsmål, da har du en del alternativer på spørsmåelene, velg spørsmålene som du ønsker og de du velger vil bli sikkerhets spørsmål for enheten din. Da er det lurt å huske svarene og velge spørsmålene som passer for deg. Etter at du er ferdig med spørsmålet, trykk på <b>‘’Next’’</b> knappen."},
      {avsnitt: "Her skal du gjøre det samme som du gjorde i forrige vinduet. Etter at du er ferdig med spørsmålet, trykk på <b>‘’Next’’</b> knappen."},
      {avsnitt: "Nå skal du gjøre igjen det samme som forrige vinduet, når du er ferdig med spørsmålet, trykk på <b>‘’Next’’</b> knappen, og da kommer du til siste steget av installasjon til virtuell maskinen din."},
      {avsnitt: ""},
      {avsnitt: "Når du er på dette vinduet, vil de i utgangspunktet be deg om å gi tilgang til posisjonen din, hvis du ønsker å gjøre det, trykk på <b>den øverst</b> og hvis ikke du ønsker å gjøre det, trykk på <b>den som er under.</b> Hvis du har ønske om å få mer informasjon dette, kan trykke på knappen <b>Learn more.</b> Etter at du har valgt, trykk på knappen <b>Accept.</b>"},
      {avsnitt: "I dette vinduet, vil de si spørre deg om å gi tilgang for Find my device. Det vil hjelpe deg med å finne maskinen din, hvi du mister den et sted. Hvis du ønsker å gi tilgang til Find my device, trykk på <b>den øverst</b> (du vil trenge et Microsoft-konto) og hvis du ikke ønsker å gjøre det, trykk på <b>den som er under.</b> Hvis du vil ha mer informasjon om dette, kan du trykke på knappen <b>Learn more</b> og dersom du har valgt, trykk på knappen <b>Accept.</b>"},
      {avsnitt: "Nå vil de spørre deg i utgangspunktet om å gi tilgang til hvor masse informasjon vil du dele. Hvis du ønsker å dele full data, da kan trykk på <b>den øverst</b> og hvis ikke du ønsker å gjøre det, trykk på <b>den som er under.</b> Du kan få mer informasjon om dette ved å trykke på knappen <b>Learn more.</b> Når du har valgt, trykk på knappen <b>Accept.</b>"},
      {avsnitt: "Når du er på dette vinduet, vil de be deg om å gi tilgang til inking and typing, (som vil forbedre språkgjenkjenning og forslagsmuligheter for apper og tjenester som kjører på maskinen din). hvis du ønsker å gjøre det, trykk på <b>den øverst</b> og hvis ikke du ønsker det, trykk på <b>den som er under.</b> Du kan også få mer informasjon om dette ved å trykke på knappen <b>Learn more.</b> Etter at du tatt valget ditt, trykk på knappen <b>Accept.</b>"},
      {avsnitt: "I dette steget, vil de spørre deg om du ønsker å få personlige tips, annonser og anbefalinger. (Det forbedrer Microsoft produkter og tjeneste for forbrukernes behov). Hvis du ønsker å gjøre det, trykk på <b>den øverst</b> og hvis ikke du ønsker å gjøre det, trykk på <b>den som er under.</b> Dersom du ønsker å få mer informasjon om dette, kan du gjøre det ved å trykke på knappen <b>Learn more.</b> Når du har tatt valget ditt, trykk på knappen <b>Accept.</b>"},
      {avsnitt:"Her i dette steget, vil de ha tilgang til reklame-ID din, som vi føre til mer personlig annonsering (det vil si at du kommer til å annonser som er relevante for deg), hvis du ønsker å gjøre det, trykk på den øverst og hvis du ikke ønsker å gjøre det, trykk på den som er under. Hvis du har lyst til å mer informasjon om dette, trykke på knappen Learn more. Dersom du har tatt valget ditt, trykk på knappen <b>Accept.</b>"},
      {avsnitt: ""},
      {avsnitt: "Nå er du på nest siste steget, her skal du bare vente til klargjøring av operativsystem for virtuell maskin din er ferdig."},
      {avsnitt: "Da er installasjonen til virtuell maskin ferdig og den er klar for bruk. Til slutt vil du bli spurt om hvilken størrelse øsnker du for skrivebordet i virtuell maskin. Deretter når du er ferdig med å bestemme hvilken størrelse, trykk på knappen <br><b>´´Connect´´</b>."}
    ],
      bilde_til_avsnitt: [
      {
        bilde: [
            {bilde: "", bredde: "250px", hoyde: "150px", tekst: "<p style='margin-top: 10px; margin-left: 15px'><b>Steg 1:</b></p>"}
          ]
        },
      {
        bilde: [
            {bilde: "Opsetning-vm/1/Opsetning-vm-1.png", bredde: "250px", hoyde: "150px", tekst: ""}
          ]
        },
        {
          bilde: [
            {bilde: "Opsetning-vm/1/Opsetning-vm-2.png",bredde: "250px", hoyde: "150px", tekst: ""}
          ]
        },
        {
          bilde: [
            {bilde: "Opsetning-vm/1/Opsetning-vm-3.png",bredde: "250px", hoyde: "150px", tekst: ""},
          ]
        },
        {
        bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-4.png", bredde: "250px", hoyde: "150px", tekst: ""},
          ]
       },
       {
         bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-5.png", bredde: "250px", hoyde: "150px", tekst: ""},
         ]
       },
       {
         bilde: [
            {bilde: "Opsetning-vm/2/Opsetning-vm-6.png", bredde: "250px", hoyde: "150px", tekst: ""},
         ]
       },
       {
         bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-7.png",bredde: "250px", hoyde: "150px", tekst: ""}
         ]
       },
       {
         bilde: [
           {bilde: "",bredde: "250px", hoyde: "150px", tekst: "<div style='border:1px solid #000; padding:10px;font-size:15px; line-height: 150%'><b style='margin-top:10px; font-size:20px'>Anbefaling for passord:</b><br>" +
           "<br>For å lage et sterkt og godt passord som er nesten umulig å vite, kan du bruke forskjellige tegn som f.eks. som @ # $ %. Husk at når lager et veldig sterkt passord, bør du lagre passordet ditt et sted, for at du ikke glemmer det. (For eksempel anbefalt å sjekke ut Lastpass, under ligger det leken for Lastpass)." +
           " <a target='blank_'href='https://www.lastpass.com/get-premium?&sfdc_id=7014P000001BcMc&gclid=EAIaIQobChMIoqPd_4L-'><br>Lastpass</a></div>"}
         ]
       },
       {
         bilde: [
           {bilde: "",bredde: "250px", hoyde: "150px", tekst: "<p style='margin-top:80px; margin-left: 15px'><b>Steg 2:</b></p>"}
         ]
       },
       {
         bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-8.png",bredde: "250px", hoyde: "150px", tekst: ""}
         ]
       },
       {
         bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-9.png",bredde: "250px", hoyde: "150px", tekst: ""},
         ]
       },
       {
         bilde: [
           {bilde: "Opsetning-vm/2/Opsetning-vm-10.png",bredde: "250px", hoyde: "150px", tekst: ""},
         ]
       },
       {
         bilde: [
             {bilde: "",bredde: "250px", hoyde: "150px", tekst: "<p style='margin-top: 80px; margin-left: 15px'><b>Steg 3:</b></p>"}
         ]
       },
       {
         bilde: [
             {bilde: "Opsetning-vm/3/Oppsetning-vm-14.png",bredde: "250px", hoyde: "150px", tekst: ""}
         ]
       },
        {
        bilde: [
           {bilde: "Opsetning-vm/3/Oppsetning-vm-15.png",bredde: "250px", hoyde: "150px", tekst: ""}
          ]
       },
       {
       bilde: [
          {bilde: "Opsetning-vm/3/Oppsetning-vm-16.png", bredde: "250px", hoyde: "150px", tekst: ""},
         ]
      },
      {
        bilde:[
          {bilde: "Opsetning-vm/3/Oppsetning-vm-13.png",bredde: "250px", hoyde: "150px", tekst: ""}
        ]
      },
      {
        bilde: [
           {bilde: "Opsetning-vm/3/Oppsetning-vm-17.png",bredde: "250px", hoyde: "150px", tekst: ""},
          ]
      },
      {
        bilde: [
           {bilde: "Opsetning-vm/3/Oppsetning-vm-18.png",bredde: "250px", hoyde: "150px", tekst: ""},
          ]
      },
      {
      bilde: [
         {bilde: "", bredde: "250px", hoyde: "150px", tekst: "<p style='margin-top:80px; margin-left: 15px'><b>Steg 4</b></p>"},
        ]
     },
      {
      bilde: [
         {bilde: "Opsetning-vm/4/Opsetning-vm-11.png", bredde: "250px", hoyde: "150px", tekst: ""},
        ]
     },
     {
     bilde: [
        {bilde: "Opsetning-vm/4/Opsetning-vm-12.png",bredde: "250px", hoyde: "150px", tekst: ""},
       ]
    },
    ]
  },
  {
    overskrift: "2.4 Hvordan å installere virtuell svitsj.",
    overskrift1: "2",
    tekst: [
      {avsnitt: "<b>Steg 1:</b><p>For å installere virtuell svitsj, trykk på <b>Virtual Switch Manager</b>, da vil du få tre valg som ektern, intern eller privat. I dette tilfelle kan du velge ektern og deretter trykker du på <b>Create Virtual Switch</b> kanppen.</p>"},
      {avsnitt: "<br><p style='line-height:170%'><b>Ekstern:</b><br> Den lager et virtuelt switch som kobler seg til den fysiske adapteren, slik at de virtuelle maskinene får tilgang til det fysiske nettverket. Samtidig vil de få IP-adressen av nettverket som vår hoved maskin har. Deretter vil de få kobling til internett.</p><br>" +
                "<p><img src='VS/ekstern.png' width='300px' height='200px'></p>" +
                "<br><p style='line-height:170%'><b>Intern:</b><br>Den er veldig lik som privat svitsj, men bare at med intern vil det bli opprettet en virtuell adapter i din hoved (host) maskin, og deretter den virtuelle adapteren som ble opprettet, vil være en del av det virtuelle nettverket. Da vil det være mulig for din hoved maskin å kommunisere med de virtuelle maskinene også.</p><br>" +
                "<p><img src='VS/intern.png' width='300px' height='200px'></p>" +
                "<br><p style='line-height:170%'><b>Privat: </b><br>Den gir et isolert miljø, hvor de virtuelle maskiner er kun avhengig av hverandre og deretter kan man lage sammenkoblet internet mellom dem. Da kan de virtuelle maskinene kommunisere med hverandre og dermed vil ikke din hoved maskin få kobling til virtuelle maskins nettverksområde.</p><br>" +
                "<p><img src='VS/privat.png' width='300px' height='200px'></p>" +
                "<p style='margin-top:15px'><b>Steg 2</b></p>" +
                "<p>Dersom du trukket på Create Virtual Switch, vil det komme opp et vindu hvor du skal gi et navn til virtuelle svitsj din. Kall den det du ønsker og deretter trykk på <b>ok</b> knappen.</p>"},
      {avsnitt: "<b>Steg 3</b>: <p>Etter at du har opprettet virtuell svitsj, kan du koble den med din virtuell maskin. Det kan du gjøre ved å høyre klikke på virtuell maskin som du har opprettet og deretter velger du <b>Settings.</b></p><br><p>Da vil du komme deg i settings vindu og du vil ha en del alternativer på venstre side. Velg <b>Network Adapter</b> og under virtuell switch velg virrtuell svitsj som du har opprettet tidligere.</p>"}
    ],
      bilde_til_avsnitt: [
      {
        bilde: [
            {bilde: "VS/VS-1.png", bredde: "300px", hoyde: "200px"},
            {bilde: "VS/VS-2.png",bredde: "300px", hoyde: "200px"}
          ]
        },
        {
        bilde: [
            {bilde: "VS/VS-3.png",bredde: "300px", hoyde: "200px"},
            {bilde: "VS/VS-4.png",bredde: "300px", hoyde: "200px"}
          ]
        },
        {
        bilde: [
           {bilde: "VS/VS-5.png",bredde: "300px", hoyde: "200px"},
           {bilde: "VS/VS-6.png",bredde: "300px", hoyde: "200px"}
         ]
        }
      ]
   }
];

let forside = {
  tittel: "Forside"
}

let innhold = {
  tittel: "Innholdsfortegnelse!"
}

let siste_del = {
  titte: "Siste del"
}

let kapittel_tittel = ["Båkfårside", "Innholdsfortegnelse", "UTSTYR OG PROGRAMVARE:", "Installasjon av Hyper-V sammen med virtuell svitsj og maskin:"];

let kapitler = [forside, innhold, virtualizations, virtualization_examples, siste_del];

function runBook(kapNr, s) {
  let kapNr_1 = kapNr + 1;
  let newPage = s + 1;
  let oldPage = s - 1;

  if (kapNr == 0) {
    str += "<div style='width:20%'></div>";
    str += "<div style='width:50%'>";
    str += "<div class='overskrift'>"
    str += "<h2>Veiledning for installasjon av:</h2>";
    str += "<h3>Programvare Hyper-V, Virtuell Svitsj & Virtuell Maskin.</h3>"
    str += "</div>"
    str += "<div class='bokforside'>";
    str += "<img class='img_forside' src='Bilder/Hyper-v-svitsj.png'>"
    str += "<img class='img_forside_2' src='Bilder/forside_bildet-2.jpg'>"
    str += "<div class='forfatter_boks'>BlueAvengerZ & CO</div>";
    str += "<div class='div_tekst'>Bok om veiledning som vil veilede deg med de tre punktene under:</div>"
    str += "<div class='div_tekst_2'>Hvordan å installere programvare Hyper-V</div>";
    str += "<div class='div_tekst_3'>Hvordan å installere virtuell svitsj.</div>"
    str += "<div class='div_tekst_4'>Hvordan å installere virtuell maskin.</div>"
    str += "<button style='margin-left:15px;position:absolute; top:865px; right:465px;'onclick='openBook(1, 0)'>Åpne bok</button>";
    str += "</div>";
    str += "</div>"
    str += "</div>"
    str += "<div style='width:30%'></div>";
  }

  if (kapNr == 1) {
    let kapNr_1 = kapNr - 3
    str = "<div style='width:20%'></div>"
    str += "<div style='width:60%;height: 90vh'><p><b>" + kapittel_tittel[kapNr] + "</b></p>"
    for (var i = 2; i < kapitler.length - 1; i++) {
      let kap_tall = i - 1
      str += "<h3 style='margin-bottom:40px; margin-top:40px'>" + kap_tall + ": " + kapittel_tittel[i] + "</h3>"
      for (var j = 0; j < kapitler[i].length; j++) {
        let sidetall = (j + 1) * (i - 1);
        if (i === 3) {
          str += "<div class='a_link' onclick='runBook(" + i + "," + j + ")'>" + kapitler[i][j].overskrift + "<span style='float:right'>" + kapitler[i][j].overskrift1 + "</span></div></p>"
        } else if (i == 2) {
          str += "<div class='a_link_1'>" + kapitler[i][j].overskrift + "<span style='float:right'>" + kapitler[i][j].overskrift1 + "</span></div></p>"
        }
      }
    }
    str += "<center><img src='Bilder/Hyper-V.png' class='hyper_v'></center>"
    if (kapNr == kapitler.length - 1) {
      let previousChapter_ = kapNr - 1;
      let totalPagesAtPreviousChapter = kapitler[previousChapter_].length - 1;
      str += "<button onclick='previousChapter(" + previousChapter_ + ", " + totalPagesAtPreviousChapter + ")'>Forrige kapittel</button>";
    }
    str += "</div>";
    str += "<div style='width:20%;margin-left:10px'>"
    str += "</div>"
  }
  if (kapNr > 1 && kapNr < 4) {
    let kapNr_1 = kapNr - 1
    if (s < 1) {
      str = "<div style='width:20%'></div>"
      str += "<div style='width:60%; height: 100vh'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      if (kapitler[kapNr][s].tekst.length > 0) {
        for (var i = 0; i < kapitler[kapNr][s].tekst.length; i++) {
          str += "<p>" + kapitler[kapNr][s].tekst[i].avsnitt + "</p><br><br>";
          if (kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length > 0) {
            for (var j = 0; j < kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length; j++) {
              str += "<p style='display:inline-block'><img style='margin:10px; box-shadow:0px 2px 2px 0px #000' src='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bilde + "' width='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bredde + "' height='"+
              kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].hoyde +"'></p>"
            }
          }
        }
      }
      if (kapNr == 2) {
        let previousChapter_ = kapNr - 1;
        let totalPagesAtPreviousChapter = kapitler[previousChapter_].length - 1;
        str += "<button onclick='previousChapter(" + previousChapter_ + ", " + totalPagesAtPreviousChapter + ")'>Forrige side</button>";
      }

      str += "<button onclick='previousChapter(1, 0)'>Forrige side</button>";
      str += "<button onclick='nextPage(" + kapNr + ", " + newPage + ")'>Neste side</button>";
      str += "</div>";
      str += "<div style='width:20%;margin-left:10px'>"
      str += "<div class='miniSide'>";
      str += "<h1>" + kapitler[kapNr][newPage].overskrift + "</h1>"
      if(kapitler[kapNr][newPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][newPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][newPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>"
      str += "</div>"
    }
    if (s >= 1 && s < kapitler[kapNr].length - 2) {
      str = "<div style='width:20%'>";
      str += "<div class='miniSide'>"
      str += "<h1>" + kapitler[kapNr][oldPage].overskrift + "</h1>"
      if(kapitler[kapNr][oldPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][oldPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][oldPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>";
      str += "</div>";
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      if (kapitler[kapNr][s].tekst.length > 0) {
        for (var i = 0; i < kapitler[kapNr][s].tekst.length; i++) {
          str += "<p>" + kapitler[kapNr][s].tekst[i].avsnitt + "</p><br><br>";
          if (kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length > 0) {
            for (var j = 0; j < kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length; j++) {
              str += "<p style='display:inline-block'><img style='margin:10px; box-shadow:0px 2px 2px 0px #000' src='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bilde + "' width='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bredde + "' height='"+
              kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].hoyde +"'></p>"
            }
          }
        }
      }
      str += "<button onclick='previousPage(" + kapNr + ", " + oldPage + ")'>Forrige side</button>";
      str += "<button onclick='nextPage(" + kapNr + ", " + newPage + ")'>Neste side</button>";
      str += "</div>";
      str += "<div style='width:20%;margin-left:10px'>"
      str += "<div class='miniSide'>";
      str += "<h1>" + kapitler[kapNr][newPage].overskrift + "</h1>"
      if(kapitler[kapNr][newPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][newPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][newPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>"
      str += "</div>"
    }
    // for 2.4 siden
    if (s == kapitler[kapNr].length - 2) {
      str = "<div style='width:20%'>";
      str += "<div class='miniSide'>"
      str += "<h1>" + kapitler[kapNr][oldPage].overskrift + "</h1>"
      if(kapitler[kapNr][oldPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][oldPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][oldPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>";
      str += "</div>";
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      str += "<div class='flex_page'>";
      if (kapitler[kapNr][s].tekst.length > 0) {
        for (var i = 0; i < kapitler[kapNr][s].tekst.length; i++) {
          for (var j = 0; j < kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length; j++) {
            if(kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bilde != "") {
            str += "<div style='width:35%;padding:15px'>"
            str += "<p><img style='box-shadow:0px 2px 2px 0px #000' src='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bilde + "' width='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bredde + "' height='"+
            kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].hoyde +"'></p>"
            str += "</div>"
          } else {
            str += "<div style='width:50%'>"
            str += "<p style='font-size:15px;margin-top:20px'>"+kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].tekst+"</p>"
            str += "</div>"
          }
          }
          str += "<div style='width:50%;padding:15px'><p style='font-size:15px; margin-top:10px; right: 130px'>" + kapitler[kapNr][s].tekst[i].avsnitt + "</p></div>";
        }
      }
      str += "</div>"
      str += "<button onclick='previousPage(" + kapNr + ", " + oldPage + ")'>Forrige side</button>";
      str += "<button onclick='nextPage(" + kapNr + ", " + newPage + ")'>Neste side</button>";
      str += "</div>";
      str += "<div style='width:20%;margin-left:10px'>"
      str += "<div class='miniSide'>";
      str += "<h1>" + kapitler[kapNr][newPage].overskrift + "</h1>"
      if(kapitler[kapNr][newPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][newPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][newPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>"
      str += "</div>"
    }

    if (s == kapitler[kapNr].length - 1) {
      str = "<div style='width:20%'>";
      str += "<div class='miniSide'>"
      str += "<h1>" + kapitler[kapNr][oldPage].overskrift + "</h1>"
      if(kapitler[kapNr][oldPage].tekst[0].avsnitt == "") {
        str += "<p>" + kapitler[kapNr][oldPage].tekst[1].avsnitt + "</p>"
      } else {
      str += "<p>" + kapitler[kapNr][oldPage].tekst[0].avsnitt + "</p>";
      }
      str += "</div>";
      str += "</div>";
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      if (kapitler[kapNr][s].tekst.length > 0) {
        for (var i = 0; i < kapitler[kapNr][s].tekst.length; i++) {
          str += "<p>" + kapitler[kapNr][s].tekst[i].avsnitt + "</p><br><br>";
          if (kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length > 0) {
            for (var j = 0; j < kapitler[kapNr][s].bilde_til_avsnitt[i].bilde.length; j++) {
              str += "<p style='display:inline-block'><img style='margin:10px; box-shadow:0px 2px 2px 0px #000' src='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bilde + "' width='" + kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].bredde + "' height='"+
              kapitler[kapNr][s].bilde_til_avsnitt[i].bilde[j].hoyde +"'></p>"
            }
          }
        }
      }
      str += "<button onclick='previousPage(" + kapNr + ", " + oldPage + ")'>Forrige side</button>";
      if (kapNr < kapitler.length - 1) {
        let nyKapNr = kapNr + 1
        if (kapNr < 3) {
          str += "<button onclick='nextChapter(" + nyKapNr + ", 0)'>Neste kapittel</button>";
        } else if (kapNr == 3) {
          str += "<button onclick='nextChapter(" + nyKapNr + ", 0)'>Neste side</button>";
        }
      }
    }
  }

  if (kapNr == kapitler.length - 1) {
    let kapNr_forrige = kapNr - 1;
    let sidens_lengde_forrige_kap = kapitler[kapNr_forrige].length - 1;
    str = "<div style='width:20%'></div>";
    str += "<div style='width:50%'>";
    str += "<div class='overskrift_bakside'>"
    str += "<h2>BOK OM VIRTUALISERING</h2>";
    str += "<div class='bakside_bok'>";
    str += "<div class='div_venstre'></div>";
    str += "<div class='tekst_bakside_1'>I denne boken får du veiledning for de tre punktene under og du vil bli veiledet steg for steg:</div>"
    str += "<div class='tekst_bakside_2' style='top:'>"
    str += "<p class='baktekst'><br><span style='color: #f77062'>01:</span> Hvordan å installere <span>Hyper-V</span>?</p>"
    str += "<p class='baktekst'><span style='color: #f77062'>02:</span> Hvordan å installere virtuelt <span style='margin-left:41px'>svitsj</span>?</p>"
    str += "<p class='baktekst'><span style='color: #f77062'>03:</span> Hvordan å installere virtuell <span style='margin-left:41px'>maskin og oppsetning av <span style='margin-left:41px'>virtuell maskin</span></span>?</p>"
    str += "</div>"
    if (kapNr == kapitler.length - 1) {
      str += "<div class='button_position'>"
      str += "<button onclick='previousPage(" + kapNr_forrige + ", " + sidens_lengde_forrige_kap + ")'>Forrige side</button>";
      str += "<a href='Manual.html'><button>Lukk Boka</button></a>";
      str += "</div>"
    }
    str += "</div>"
    str += "</div>"
    str += "<div style='width:30%'></div>";
  }
  document.getElementById("bookVirtualization").innerHTML = str;
}

function openBook(kapNr, side) {
  runBook(kapNr, side)
}

function nextChapter(nyKap, side) {
  runBook(nyKap, side);
}

function previousChapter(nyKap, side) {
  runBook(nyKap, side);
}

function nextPage(kapNr, n) {
  runBook(kapNr, n);
}

function previousPage(kapNr, n) {
  runBook(kapNr, n);
}

function playSound(sound) {
  var song1 = document.getElementById(sound);
  var isPlaying = true;
  if (!isPlaying) {
    isPlaying == true;
    song1.play();
  } else {
    isPlaying == false;
    song1.pause();
  }
}
