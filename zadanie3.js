function Oferta (marka, model, cena, spalanie, rocznik) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
    this.spalanie = spalanie;
    this.rocznik = rocznik;
    this.koszt100km = function() {
        let koszt = this.spalanie * pb95;
        return koszt;
    };
    this.wiekSamochodu = function() {
        let data=new Date()
        let wiek=Number(data.getFullYear())-this.rocznik;
        if(wiek==1) { wiek=wiek+' rok'; }
        else if (wiek>1 && wiek <5) { wiek=wiek+' lata'; }
        else { wiek=wiek+' lat'; }
        return wiek;
    }
}
const Komis = {
    Oferta1: new Oferta("Kia","Carens",60000,8,2018),
    Oferta2: new Oferta("Opel", "Astra", 70000, 10, 1998),
    Oferta3: new Oferta ("Renout", "clio", 50000, 6, 2008),
    // Oferta4: new Oferta ("Toyota", "Yaris",2000, 5, 2000)
}
console.log(Komis.Oferta1)
var step;
// for (step = 1; step < 4; step++) {
//     let a = `Oferta${step}`
// console.log(a)
// var myArray = Object.values(Komis);
// document.getElementById("dane").innerHTML = myArray;
// }
console.log(n)
for(var n of Object.keys(Komis))
 {
     console.log(Komis[n])
     let wiek =Komis[n].wiekSamochodu()
     let rocznik = Komis[n].rocznik
     console.log(n)
     var listaOfert= document.getElementById("oferty")
let newElement = document.createElement('li')
let tekst = document.createTextNode(Komis[n].marka +" wiek auta " + wiek+ " cena "+ Komis[n].cena +"zl")
listaOfert.appendChild(newElement).appendChild(tekst)
    //  console.log(Komis.Oferta`${n}`)
 }

 let dlugosc =n.length-1
 console.log(n[dlugosc])
 if(n[dlugosc]<=3)
 {
     console.log("o działa")

        var Oferta4 =new Oferta ("Toyota", "Yaris", 50000 , 5, 2018 )

 }
 else{
     console.log("wiecej")
 }

 console.log(Oferta4)
 var myArray = Object.values(Oferta4);
 let newElement = document.createElement('li')
let tekst = document.createTextNode(("dane").innerHTML = myArray )
//mozna w ten sposób ale wyskakują ciała funkcji
listaOfert.appendChild(newElement).appendChild(tekst)















//  for(n of Object.keys(Komis))
//  {
//      console.log(Komis[n])
//      let wiek =Komis[n].wiekSamochodu()
//      let rocznik = Komis[n].rocznik
//     //  console.log(wiek.tab.slice(0, 1))
//     console.log(wiek)
//     let wiekAuta=wiek[0]+wiek[1]
//      console.log(wiekAuta)
    
//     var listaOfert= document.getElementById("marki")
//      if(wiekAuta <=5)
//      {
//          console.log("automłode")
//          let marka= Komis[n].marka
//          let newElement = document.createElement('li')
//          let tekst = document.createTextNode(marka +" wiek auta " + wiek+ "cena "+ Komis[n].cena +"zl")
//          listaOfert.appendChild(newElement).appendChild(tekst)
//      }
//      else{
//          console.log("stare")
//      }
//  }