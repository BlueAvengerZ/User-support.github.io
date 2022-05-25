// menubar
let menu = document.querySelector('#size-menu')
let menuLinks = document.querySelector('.menu-bar-menu')
menu.addEventListener('click', function() {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
})

$(document).ready(function(){

  // lager funksjon som gjør at, når blar ned så kommer det blå bakgrunn på menu bar.

    $(window).scroll(function(){

     // sticky menu-bar on scroll script Start


    // hvis scrollY er større enn 20, så skal menu bar få blå bakgrunn.

        if (this.scrollY > 20) {
            $('.menu-bar').addClass("sticky");
        }

   // hvis ikke scrollY er større enn 20, så skal bakgrunne til menu bar fjernes.

        else {
              $('.menu-bar').removeClass("sticky");
            }
      });
  });

     // sticky menu-bar on scroll script End


// variabler
let arrIndeks = 0;
let arrIndeks_1 = 0;
let str = "";
let str_1 = "";
// array
let virtualizations = [
  {
    overskrift: "Hva er virtualisering?",
    tekst: "Med virtualisering kan man kjøre flere separate virtuelle maskiner på en fysisk datamaskin. Virtualisering starter med en programvare, som for eksempel vi kaller for en hypervisor (Hyper-V). Denne har enten type 1 eller type 2. Tillegg til dette så betyr virtualisering at ressursene er digitalt, istedenfor fysisk til stedet. Samtidig så er virtulalisering mer enn bare virtuelle maskiner. For eksempel så finnes det virtuelle svitsj og nettverk osv.",
    bilde: ""
  },
  {
    overskrift: "Type-1:",
    tekst: "Går direkte mot maskinvaren (uten et operativsystem innimellom). Dette gir hypervisoren full tilgang og kort vei til maskinvaren. Eksempel på type 1 er Hyper-V og VMware vSphere osv.",
    bilde: "Bilder/eksempel.png"
  },
  {
    overskrift: "Type-2:",
    tekst: "Hypervisor kjører på toppen av hovedmaskinens operativsystem. Denne hypervisoren har kun tilgang til maskinvare gjennom dette operativsystemet.  Hvis den trenger mer ressurser som (prosessorkraft, arbeidsminne eller liknede) må det godkjennes av hovedmaskinens operativsystem. De er dermed mindre effektive og stabile enn type 1. Eksempel på type 2 er Oracle VirtualBox og VMware Workstation osv.",
    bilde: "Bilder/eksempel.png"
  },
  {
    overskrift: "Vi virtualiserer fordi:",
    tekst: "Mange virtuelle maskiner kan kjøre på en fysisk maskin. Trengs ikke da trolig like mange servere og det er enkelt å flytte dem mellom forskjellige fysiske maskiner, så lenge hypervisoren er den samme.<p>Hypervisoren styrer hvilke ressurser som hver vm får tilgang til og du får bedre kontroll. Det er i tillegg lett å gi virtuelle maskiner flere ressurser, men da fysiske serveren må ha ledige ressurser.</p>",
    bilde: ""
  }
];
// array eksempler
let virtualization_examples = [
  {
    overskrift: "Applikasjon-virtualisering",
    tekst: "Applikasjon virtualisering er teknologi som lar brukere få tilgang til applikasjon fra det ene datamaskin til å bruke det samme applikasjonen fra en annen datamaskin som ikke har det samme programmet installert. For at brukeren skal gjøre dette prosessen så må datamaskinene støtte for eksempel App-V som tilhører Microsoft.",
    bilde: "Bilder/app_vir.jpeg"
  },
  {
    overskrift: "Skrivebord-virtualisering",
    tekst: "Hver gang brukeren får tilgang til det virtuelle skrivebordet sitt, vil programmene og dataene osv., være hoved (host) på servene, noe som gir flere muligheter for brukeren, for eksempel å tillate bruk av skrivebordet på forskjellige enheter og fra flere steder. Det kan være fra mobil osv.",
    bilde: "Bilder/D_V.png"
  },
  {
    overskrift: "Server-virtualisering",
    tekst: "Server virtualisering er vanlig i bedrifter og tjenesteleverandører. Den deler servere inn i flere virtuelle servere, slik at den kan gi fordeler som automatisering av enkelte oppgaver som foregår i datamaskinen. Og det vil føre til redusering av kostnader (mye billigere for bedrifter å bruke virtuelle servere) enn fysiske servere.",
    bilde: "Bilder/S_V.png"
  },
  {
    overskrift: "Nettverk-virtualisering",
    tekst: "Nettverk-virtualisering (NV) kan kombinere flere fysiske nettverk som for eksempel uniFi til ett virtuelt, det vil si at det er programvarebasert nettverk, eller det kan dele ett fysisk nettverk i separate virtuelle nettverk.",
    bilde: "Bilder/N_V.png"
  },
  {
    overskrift: "Lagring-virtualisering",
    tekst: "I denne typen virtualisering er det vanlig å samle data i en enkel hypervisor, hvor man får tilgang til all data som er lagret i virtuell lagring og det har ingenting å si om den er lagret på forskjellige steder eller områder.",
    bilde: "Bilder/Storage_V.jpeg"
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

let kapittel_tittel = ["Bokfårside", "Innholdsfortegnelse", "Introduksjon om virtualisering", "Ulike eksempler"];
//array til kapitler
let kapitler = [forside,innhold, virtualizations, virtualization_examples, siste_del];
// funksjon til å vise boka
function runBook(kapNr, s) {
  let kapNr_1 = kapNr + 1;
  let newPage = s + 1;
  let oldPage = s - 1;

  if(kapNr == 0) {
    str += "<div style='width:20%'></div>";
    str += "<div style='width:50%'>";
    str += "<div class='overskrift'>"
    str += "<h2>BOK OM VIRTUALISERING</h2>";
    str += "<h3>En Introduksjon til Virtualisering</h3>"
    str += "</div>"
    str += "<div class='bokforside'>";
    str += "<img class='img_forside' src='Bilder/forside_bildet.png'>"
    str += "<img class='img_forside_2' src='Bilder/vr-background.jpeg'>"
    str += "<div class='forfatter_boks'>BlueAvengerZ & CO</div>";
    str += "<div class='div_tekst'>Bok om framtiden. <br>Verden blir digitalisert.<br>Digitalt utstyr blir utspredt hver gang.<br>En bok som forteller en del av det finner man her.</div>"
    str += "<div class='div_tekst_2'>Virtualisering: Data, VR, Virtuelt maskin, Servere, Nettverk, Deling, Applikasjoner</div>";
    str += "<div class='div_tekst_3'>Virtualisering er det siste året brukt mye.</div>"
    str += "<button style='margin-left:15px;position:absolute; top:865px; right:465px;'onclick='openBook(1, 0)'>Åpne bok</button>";
    str += "</div>";
    str += "</div>"
    str += "</div>"
    str += "<div style='width:30%'></div>";
  }

  if (kapNr == 1) {
    let kapNr_1 = kapNr - 3
    str = "<div style='width:20%'></div>"
    str += "<div style='width:60%'><p><b>" + kapittel_tittel[kapNr] + "</b></p>"
    for (var i = 2; i < kapitler.length - 1; i++) {
      let kap_tall = i - 1
      str += "<h3 style='margin-bottom:40px; margin-top:40px'>" + kap_tall + ": " + kapittel_tittel[i] + "</h3>"
      for (var j = 0; j < kapitler[i].length; j++) {
        let sidetall = (j + 1)*(i - 1);
        str += "<div class='a_link' onclick='runBook("+i+", "+j+")'>" + kapitler[i][j].overskrift + "<span style='float:right'>"+sidetall+"</span></div></p>"
      }
    }
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
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      str += "<p>" + kapitler[kapNr][s].tekst + "</p><br><br>";
      if (kapitler[kapNr][s].bilde != "") {
        str += "<p><img src='" + kapitler[kapNr][s].bilde + "' width='300px'></p>"
      }
      if (kapNr <= kapitler.length - 1 && kapNr > 2) {
        let previousChapter_ = kapNr - 1;
        let totalPagesAtPreviousChapter = kapitler[previousChapter_].length - 1;
        str += "<button onclick='previousChapter(" + previousChapter_ + ", " + totalPagesAtPreviousChapter + ")'>Forrige kapittel</button>";
      }
      if (kapNr == 2) {
        let previousChapter_ = kapNr - 1;
        let totalPagesAtPreviousChapter = kapitler[previousChapter_].length - 1;
        str += "<button onclick='previousChapter(" + previousChapter_ + ", " + totalPagesAtPreviousChapter + ")'>Forrige side</button>";
      }
      str += "<button onclick='nextPage(" + kapNr + ", " + newPage + ")'>Neste side</button>";
      str += "</div>";
      str += "<div style='width:20%;margin-left:10px'>"
      str += "<div class='miniSide'>";
      str += "<h1>" + kapitler[kapNr][newPage].overskrift + "</h1>"
      str += "<p>" + kapitler[kapNr][newPage].tekst + "</p>";
      str += "</div>"
      str += "</div>"
    }
    if (s >= 1 && s < kapitler[kapNr].length - 1) {
      str = "<div style='width:20%'>";
      str += "<div class='miniSide'>"
      str += "<h1>" + kapitler[kapNr][oldPage].overskrift + "</h1>"
      str += "<p>" + kapitler[kapNr][oldPage].tekst + "</p>"
      str += "</div>";
      str += "</div>";
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      str += "<p>" + kapitler[kapNr][s].tekst + "</p><br><br>";
      if (kapitler[kapNr][s].bilde != "") {
        str += "<p><img src='" + kapitler[kapNr][s].bilde + "' width='300px'></p>"
      }
      str += "<button onclick='previousPage(" + kapNr + ", " + oldPage + ")'>Forrige side</button>";
      str += "<button onclick='nextPage(" + kapNr + ", " + newPage + ")'>Neste side</button>";
      str += "</div>";
      str += "<div style='width:20%;margin-left:10px'>"
      str += "<div class='miniSide'>";
      str += "<h1>" + kapitler[kapNr][newPage].overskrift + "</h1>"
      str += "<p>" + kapitler[kapNr][newPage].tekst + "</p>"
      str += "</div>"
      str += "</div>"
    }
    if (s == kapitler[kapNr].length - 1) {
      str = "<div style='width:20%'>";
      str += "<div class='miniSide'>"
      str += "<h1>" + kapitler[kapNr][oldPage].overskrift + "</h1>"
      str += "<p>" + kapitler[kapNr][oldPage].tekst + "</p>"
      str += "</div>";
      str += "</div>";
      str += "<div style='width:60%'><p><b>Kapittel: " + kapNr_1 + ". " + kapittel_tittel[kapNr] + "</b></p>"
      str += "<h1>" + kapitler[kapNr][s].overskrift + "</h1>";
      str += "<p>" + kapitler[kapNr][s].tekst + "</p><br><br>";
      if (kapitler[kapNr][s].bilde != "") {
        str += "<p><img src='" + kapitler[kapNr][s].bilde + "' width='300px'></p>"
      }
      str += "<button onclick='previousPage(" + kapNr + ", " + oldPage + ")'>Forrige side</button>";
      if (kapNr < kapitler.length - 1) {
        let nyKapNr = kapNr + 1
        if(kapNr < 3) {
          str += "<button onclick='nextChapter(" + nyKapNr + ", 0)'>Neste kapittel</button>";
        } else if(kapNr == 3) {
          str += "<button onclick='nextChapter(" + nyKapNr + ", 0)'>Neste side</button>";
        }
      }
    }
  }

  if(kapNr == kapitler.length - 1) {
      let kapNr_forrige = kapNr - 1;
      let sidens_lengde_forrige_kap = kapitler[kapNr_forrige].length - 1;
      str = "<div style='width:20%'></div>";
      str += "<div style='width:50%'>";
      str += "<div class='overskrift_bakside'>"
      str += "<h2>BOK OM VIRTUALISERING</h2>";
      str += "<div class='bakside_bok'>";
      str += "<div class='div_venstre'></div>";
      str += "<div class='tekst_bakside_1'>I denne boken får du informasjon om hva virtualisering er og hvordan den funker? </div>"
      str += "<div class='tekst_bakside_2'>";
      str += "<p><span style='color: #f77062'>01:</span> Hva er virtualisering?</p>"
      str += "<p><span style='color: #f77062'>02:</span> Hvorfor brukes det?</p>"
      str += "<p><span style='color: #f77062'>03:</span> Ulike eksempler</p>"
      str += "</div>"
      if(kapNr == kapitler.length - 1) {
        str += "<div class='button_position'>"
        str += "<button onclick='previousPage(" + kapNr_forrige + ", " + sidens_lengde_forrige_kap + ")'>Forrige side</button>";
        str += "<a href='test.html'><button>Ta testen</button></a>";
        str += "</div>"
      }
      str += "</div>"
      str += "</div>"
      str += "<div style='width:30%'></div>";
    }
  document.getElementById("bookVirtualization").innerHTML = str;
}
// funksjon til å åpne boka
function openBook(kapNr, side) {
  runBook(kapNr, side)
}

// neste kapittel
function nextChapter(nyKap, side) {
  runBook(nyKap, side);
}

// forrige kapitel
function previousChapter(nyKap, side) {
  runBook(nyKap, side);
}

// neste side
function nextPage(kapNr, n) {
  runBook(kapNr, n);
}

// forrige side
function previousPage(kapNr, n) {
  runBook(kapNr, n);
}
