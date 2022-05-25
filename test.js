// lager en klasse til Test
//
class Test {
  constructor(tittel, svarIndeks, alternativer, poeng) {
    this.tittel = tittel;
    this.svarIndeks = svarIndeks;
    this.alternativer = alternativer;
    this.poeng = poeng;
  }
}
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

// array med spørmålene og aternativene:
// tallene mellom spørsmålane og arrayene som viser alternativer er indeks som viser hvilket svar som er riktig
// spørsmål, riktig svar indeks, alternativer, antall poeng
let sporsmaal = [
  new Test("Hva er virtualisering?", 1, ["Prosess der man kjører dataer som er tilkoblet til hverandre.", "Prosess der man kjører flere separate virtuelle maskiner..", "Prosess der man kjører forskjellige dataer.", "Prosess der man kjører nettverk virtuelt."], 1),
  new Test("Hva er hovedforskjellen mellom type-1 og type-2?", 2, ["Type-1 er bedre enn type-2, på grunn av at den er dyrere.", "Type-2 er bedre enn type-1 fordi den er mer effektiv.", "Type-2 har kun tilgang til maskinvaren gjennom dataens operativsystem, mens type-1 går direkte mot maskinvaren.", "Oppfører seg lik, med små forskjeller."], 1),
  new Test("Hvorfor virtualiserer vi?", 2, ["Det er enklere for hverdagen.", "Virtualisering bidrar til bedre kvalitet på maskinen.", "Det er mange virtuelle maskiner kan kjøre på en fysisk maskin. Da trenger vi ikke mange servere.", "Virtalisering er bra uansett."], 1),
  new Test("Hvordan fungerer Applikasjon-Virtalisering?", 3, ["Den lar brukeren åpne en applikasjon.", "Den lar brukeren bruke applikasjoner, uten begrensninger.", "Den fungerer kun på Windows.", "Den lar brukere få tilgang til applikasjon fra det ene datamaskin til å bruke det samme applikasjonen fra en annen datamaskin."], 1),
  new Test("Hvordan fungerer Nettverk-virtualisering?", 2, ["Det blir bedre nettverk.", "Det blir dårligere nettverk.", "Den kombinerer flere fysiske nettverk til et virtuelt nettverk.", "Den kombinerer flere fysiske nettverk til et nettverk."], 1),
  new Test("Hvordan fungerer Server-virtulalisering?", 3, ["Den lar brukeren åpne en applikasjon.", "Hver gang brukeren får tilgang til det virtuelle skrivebordet sitt, vil programmene og dataene osv., være hoved (host) på servene.", "Nettverk-virtualisering (NV) kan kombinere flere fysiske nettverk som for eksempel uniFi til ett virtuelt.", "Den deler servere inn i flere virtuelle servere."], 1),
  new Test("Hvordan fungerer Lagring-virtulalisering?", 2, ["Den lar brukeren åpne en applikasjon.", "Nettverk-virtualisering (NV) kan kombinere flere fysiske nettverk som for eksempel uniFi til ett virtuelt.", "I denne typen virtualisering er det vanlig å samle data i en enkel hypervisor, hvor man får tilgang til all data som er lagret i virtuell lagring."], 1),
  new Test("Hvordan fungerer Skrivebord-virtulalisering?", 1, ["Den lar brukeren åpne en applikasjon.", "Hver gang brukeren får tilgang til det virtuelle skrivebordet sitt, vil programmene og dataene osv., være hoved (host) på servene.", "Nettverk-virtualisering (NV) kan kombinere flere fysiske nettverk som for eksempel uniFi til ett virtuelt.", "Den deler servere inn i flere virtuelle servere."], 1),
  new Test("Hvilken av alternativene nedenfor er IKKE eksempel på virtualisering?", 3, ["Applikasjon.", "Server.", "Nettverk.", "Operativsystem."], 1),
];
// varabler
// string brukes på funksjoner
// sparer mer plass
let str = "";
let str_2 = "";

// array som lagrer svarene du har valgt i testen
let dineSvar = [];
// resultat over riktige og feil
let riktige = [];
let gale = [];

// function for testen
function test(sporsmaalIndeks) {
  let spNr = sporsmaalIndeks + 1;
  str = "<div class='main-text'>"
  str += "<h1>" + spNr + ". " + sporsmaal[sporsmaalIndeks].tittel + "</h1>";
  str += "<p>Velg ett alternativ</p>";
  for (var i = 0; i < sporsmaal[sporsmaalIndeks].alternativer.length; i++) {
    str += "<input class='options' type='radio' onclick='lagreSvar(" + sporsmaalIndeks + "," + i + ")' name='svar_test' id='" + sporsmaal[sporsmaalIndeks].alternativer[i] + "' value='" + sporsmaal[sporsmaalIndeks].alternativer[i] + "'>";
    str += "<label for='" + i + "'>" + sporsmaal[sporsmaalIndeks].alternativer[i] + "</label><br style='margin-bottom:10px'>";;
  }
  if (sporsmaalIndeks == 0) {
    str += "<button onclick='nesteSp(" + sporsmaalIndeks + ")'>Neste spørsmål</button>"
  } else if (sporsmaalIndeks > 0 && sporsmaalIndeks < sporsmaal.length - 1) {
    str += "<button onclick='forrigeSp(" + sporsmaalIndeks + ")'>Forrige spørsmål</button>"
    str += "<button onclick='nesteSp(" + sporsmaalIndeks + ")'>Neste spørsmål</button>"
  } else if (sporsmaalIndeks == sporsmaal.length - 1) {
    str += "<button onclick='forrigeSp(" + sporsmaalIndeks + ")'>Forrige spørsmål</button>"
    str += "<button onclick='finish()'>Fullfør</button>"
    str += "<div id='comfirm_finish'></div>"
  }
  str += "<br>" + spNr + " av " + sporsmaal.length + " spørsmål";
  str += "</div>";

  document.getElementById("test").innerHTML = str;
}

// når man fullfører teten, vises denne funksjonen.
function finish() {
  let sisteSpNr = sporsmaal.length - 1
  str_2 = "<div class='main-text'>"
  str_2 += "<h1>Er du sikker på at du vil fullføre?</h1>"
  str_2 += "<p>Fullfører du, kan du ikke angre</p>"
  str_2 += "<button onclick='test(" + sisteSpNr + ")'>Avbryt og fortsett</button>"
  str_2 += "<button onclick='resultat()'>Fullfør</button>"
  str += "</div>"
  document.getElementById("test").innerHTML = str_2
}
// resultat over poeng, bestått eller ikke.
function resultat() {
  // sjekkMed Sporsmålene
  str = "<div class='main-text'>";
  for (var i = 0; i < sporsmaal.length; i++) {
    if (sporsmaal[i].svarIndeks == dineSvar[i]) {
      riktige.push(sporsmaal[i])
    } else if (sporsmaal[i].svarIndeks != dineSvar[i]) {
      gale.push(sporsmaal[i])
    }
  }
  // viser antall prosent riktig på quizen
  let prosentRiktig = (riktige.length / sporsmaal.length) * 100
  str += "<h1>Prøven er fullført</h1>"
  str += "<p>Resultat fra testen:</p>"
  str += "<p>Du har fått " + riktige.length + " av " + sporsmaal.length + " poeng (<b>" + prosentRiktig.toFixed(0) + "%</b>)</p><hr>";
  if (gale.length > 0) {
    str += "<p>Med antall " + gale.length + " feil på testen</p>";
  }
  // hvis arrayen fant en feil, vis den feilen.
  if (gale.length > 0) {
    str += "<p>Testen er <b style='color: #f54242'>IKKE bestått!</b></p>";
  } else if (gale.length < 1) {
    str += "<p>Gratulerer du har <b style='color: #68ad70'>bestått!</b></p>"
  }
  if (gale.length > 0) {
    str += "<h1>De du svarte feil på: </h1>";
    for (var j = 0; j < sporsmaal.length; j++) {
      if (dineSvar[j] != sporsmaal[j].svarIndeks) {
        str += "<p><b>" + sporsmaal[j].tittel + "</b></p>";
        if (dineSvar[j] == undefined) {
          str += "<p>Du svarte: <b>Ingen svar</b></p>";
        } else {
          str += "<p>Du svarte: <b>" + sporsmaal[j].alternativer[dineSvar[j]] + "</b></p>";
        }
        str += "<p style='color:red'>Oppgaven er ikke besvart riktig!</p>";
        str += "<p style='margin:20px'></p>"
      }
    }
  }
  str += "<button onclick='restart()'>Prøv på nytt</button>"
  if (gale.length == 0) {
    str += "<a href='manual.html'><button>Åpne manual</button></a>"
  }
  str += "</div>"
  document.getElementById("test").innerHTML = str;
}

// start på nytt funksjon
function restart() {
  str = "";
  str_2 = "";
  dineSvar = [];
  riktige = [];
  gale = [];
  test(0);
}

// når man velger alternativ på hver av spørsmålene kjøres denne funksjonen
function lagreSvar(spNr, indeks) {
  dineSvar[spNr] = indeks;
}

// neste spørsmal
function nesteSp(spIndeks) {
  test(spIndeks + 1);
}

// forrige spørsmål
function forrigeSp(spIndeks) {
  test(spIndeks - 1);
}
