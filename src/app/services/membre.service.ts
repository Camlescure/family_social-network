import { Injectable } from '@angular/core';
import { Membre } from '../models/Membre';

@Injectable({
  providedIn: 'root'
})
export class MembreService {

  constructor() { }

  getMembreByName(name: string): Membre{
    let i;
    this.membresList.forEach(function(membre, index){
      if(membre.nom === name){
        i = index;
      }
    });
    return this.membresList[i];
  }

  

  getLigneeFromName(name: string): Membre[]{
    let ligneeDesc: Membre[] = [];
    let ligneeMont: Membre[] = [];
    let mbrForFils: Membre = this.getMembreByName(name); 
    let mbrForPar: Membre = this.getMembreByName(name); 
    ligneeDesc.push(mbrForFils);
    while (mbrForFils.fillot != "") {
      let fils = this.getMembreByName(mbrForFils.fillot);
      ligneeDesc.push(fils);
      mbrForFils = this.getMembreByName(fils.nom);
    }
    while (mbrForPar.parrain != null && mbrForPar.parrain != "") {
      let par = this.getMembreByName(mbrForPar.parrain);
      ligneeMont.push(par);
      mbrForPar = this.getMembreByName(par.nom);
    }
    let lignee: Membre[] = ligneeMont.concat(ligneeDesc);
    return lignee;
  }
    

  membresList: Membre[] = [
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Enzo", 
      nom: "Morille",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Monier", 
      fillot: "", 
      surnom: "Zozob"
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Tanguy", 
      nom: "Paillard",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Morosi", 
      fillot: "", 
      surnom: "La Tang'"
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Justine", 
      nom: "De Paoli-Cremades",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Denis", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Antoine", 
      nom: "Landraing",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Fontan", 
      fillot: "", 
      surnom: "Asaoul"
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Arthur", 
      nom: "Blanchard",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Roche", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Louis", 
      nom: "Netz",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Odeye", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "IFIE", 
      prenom: "Solène", 
      nom: "Cairey-Remonnay",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Barré", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "IFIA", 
      prenom: "Pauline", 
      nom: "Moricaud",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Feliciano", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "IFIA", 
      prenom: "Inès", 
      nom: "El Moumin",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Barragat", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "INTERNATIONAL", 
      prenom: "Eduardo", 
      nom: "Grossmann",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Iwunze", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2022",
      IFI: "INTERNATIONAL", 
      prenom: "Susana", 
      nom: "Saenz Sierra",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Kim", 
      fillot: "", 
      surnom: "Saoulsana"
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Zoé", 
      nom: "Monier",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Pelletier", 
      fillot: "Morille", 
      surnom: ""
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Louis", 
      nom: "Morosi",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Benssy", 
      fillot: "Paillard", 
      surnom: "Morozizi"
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Valentin", 
      nom: "Denis",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Coponat", 
      fillot: "De Paoli-Cremades", 
      surnom: ""
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Thibaut", 
      nom: "Fontan",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Ruggieri", 
      fillot: "Landraing", 
      surnom: "Tsaoul"
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Hugo", 
      nom: "Roche",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Coutin", 
      fillot: "Blanchard", 
      surnom: "Caillou"
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Gwendal", 
      nom: "Odeye",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Jouffrieau", 
      fillot: "Netz", 
      surnom: "Dwengal"
    },
    {
      promo: "2021",
      IFI: "IFIE", 
      prenom: "Julie", 
      nom: "Barré",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Albi", 
      parrain: "Sourisseau", 
      fillot: "Cairey-Remonnay", 
      surnom: "Bulie"
    },
    {
      promo: "2021",
      IFI: "IFIA", 
      prenom: "Olivia", 
      nom: "Feliciano",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Paillagot", 
      fillot: "Moricaud", 
      surnom: ""
    },
    {
      promo: "2021",
      IFI: "IFIA", 
      prenom: "Camille", 
      nom: "Barragat",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Ossun", 
      fillot: "El Moumin", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Paul", 
      nom: "Pelletier",
      option: "IMAS", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Cazenave-Soupicou", 
      fillot: "Monier", 
      surnom: "Polo"
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Sami", 
      nom: "Benssy",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Manuel", 
      fillot: "Morosi", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Camille", 
      nom: "Coponat",
      option: "BE+", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Fayard", 
      fillot: "Denis", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Baptiste", 
      nom: "Ruggieri",
      option: "ETN", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Abiven", 
      fillot: "Fontan", 
      surnom: "Bsaoul"
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Antoine", 
      nom: "Coutin",
      option: "GSI", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Waes", 
      fillot: "Roche", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Baptiste", 
      nom: "Jouffrieau",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Cadinot", 
      fillot: "Odeye", 
      surnom: "Jouff"
    },
    {
      promo: "2020",
      IFI: "IFIE", 
      prenom: "Céline", 
      nom: "Sourisseau",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Lescure", 
      fillot: "Barré", 
      surnom: "Sourissaoul"
    },
    {
      promo: "2020",
      IFI: "IFIA", 
      prenom: "Marc", 
      nom: "Laventure",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Graulet", 
      fillot: "Gerdessus", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIA", 
      prenom: "Marie", 
      nom: "Paillagot",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Pezon", 
      fillot: "Feliciano", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "IFIA", 
      prenom: "Chloé", 
      nom: "Ossun",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Fanjat", 
      fillot: "Barragat", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "INTERNATIONAL", 
      prenom: "Paul", 
      nom: "Iwunze",
      option: "Master BiWem", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Grossmann", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "INTERNATIONAL", 
      prenom: "Hyeonseok", 
      nom: "Kim",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Saenz Sierra", 
      surnom: ""
    },
    {
      promo: "2020",
      IFI: "MASTER", 
      prenom: "Corentin", 
      nom: "Miranda",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Justine", 
      nom: "Cazenave-Soupicou",
      option: "GI", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Amoureux", 
      fillot: "Pelletier", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Ruben", 
      nom: "Manuel",
      option: "RCEE", 
      poste: "", 
      entreprise: "", 
      ville: "Bruxelles", 
      parrain: "Boichat", 
      fillot: "Pelletier", 
      surnom: "Rubite"
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Léo", 
      nom: "Fayard",
      option: "BE+", 
      poste: "", 
      entreprise: "", 
      ville: "Toulouse", 
      parrain: "Riveaux", 
      fillot: "Coponat", 
      surnom: "Leffe"
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Antoine", 
      nom: "Waes",
      option: "GSI", 
      poste: "", 
      entreprise: "Vinci", 
      ville: "Paris", 
      parrain: "Nogue", 
      fillot: "Coutin", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Charles-Ewen", 
      nom: "Abiven",
      option: "IMAS", 
      poste: "", 
      entreprise: "", 
      ville: "Brest", 
      parrain: "Dubuc", 
      fillot: "Ruggieri", 
      surnom: "Csaoul"
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Hugo", 
      nom: "Cadinot",
      option: "IMAS", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Lescolan", 
      fillot: "Jouffrieau", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIE", 
      prenom: "Camille", 
      nom: "Lescure",
      option: "GSI", 
      poste: "Ingénieur développement", 
      entreprise: "Ublu", 
      ville: "Toulouse", 
      parrain: "Thiriat", 
      fillot: "Sourisseau", 
      surnom: "Camchiasse"
    },
    {
      promo: "2019",
      IFI: "IFIA", 
      prenom: "Axel", 
      nom: "Lemaitre",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Paris", 
      parrain: "", 
      fillot: "Graulet", 
      surnom: "Axsaoul"
    },
    {
      promo: "2019",
      IFI: "IFIA", 
      prenom: "Isaura", 
      nom: "Pezon",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Bresson", 
      fillot: "Paillagot", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIA", 
      prenom: "Oceane", 
      nom: "Fanjat",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Bariller", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2019",
      IFI: "IFIA", 
      prenom: "Margaux", 
      nom: "Bellorgey",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Ibarra", 
      fillot: "", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Alexandre", 
      nom: "Amoureux",
      option: "GSI", 
      poste: "", 
      entreprise: "", 
      ville: "Toulouse", 
      parrain: "Bonecher", 
      fillot: "Cazenave-Soupicou", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Hugo", 
      nom: "Boichat",
      option: "GSI", 
      poste: "", 
      entreprise: "", 
      ville: "Oh Chi Min, Vietnam", 
      parrain: "Buroni", 
      fillot: "Manuel", 
      surnom: "Boichatte"
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Alexandre", 
      nom: "Riveaux",
      option: "TBS", 
      poste: "", 
      entreprise: "", 
      ville: "Paris", 
      parrain: "Payan", 
      fillot: "Fayard", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Alice", 
      nom: "Nogue",
      option: "GI", 
      poste: "", 
      entreprise: "", 
      ville: "Paris", 
      parrain: "Richard", 
      fillot: "Waes", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Victor", 
      nom: "Dubuc",
      option: "GI", 
      poste: "", 
      entreprise: "", 
      ville: "Toulouse", 
      parrain: "Jeannes", 
      fillot: "Abiven", 
      surnom: "Vsaoul"
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Thibaud", 
      nom: "Lescolan",
      option: "Polytechnique Montréal", 
      poste: "Ingénieur calcul", 
      entreprise: "Capgemini", 
      ville: "Toulouse", 
      parrain: "Buroni", 
      fillot: "Cadinot", 
      surnom: "Lesco"
    },
    {
      promo: "2018",
      IFI: "IFIE", 
      prenom: "Louise", 
      nom: "Thiriat",
      option: "Polytechnique Montréal", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Carrot", 
      fillot: "Lescure", 
      surnom: "Scandalouise"
    },
    {
      promo: "2018",
      IFI: "IFIA", 
      prenom: "Anaïs", 
      nom: "Bresson",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Autex", 
      fillot: "Pezon", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIA", 
      prenom: "Lise", 
      nom: "Bariller",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "Autex", 
      fillot: "Fanjat", 
      surnom: ""
    },
    {
      promo: "2018",
      IFI: "IFIA", 
      prenom: "Antoine", 
      nom: "Ibarra",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Bellorgey", 
      surnom: ""
    }, 
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Emma", 
      nom: "Bonecher",
      option: "GSI", 
      poste: "", 
      entreprise: "", 
      ville: "Lyon", 
      parrain: "", 
      fillot: "Amoureux", 
      surnom: "Emma Bo"
    },
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Théo", 
      nom: "Buroni",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Boichat", 
      surnom: "Burosex"
    },
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Jérémy", 
      nom: "Payan",
      option: "GSI", 
      poste: "", 
      entreprise: "", 
      ville: "Paris", 
      parrain: "", 
      fillot: "Riveaux", 
      surnom: ""
    },
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Grégoire", 
      nom: "Richard",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Paris", 
      parrain: "", 
      fillot: "Nogue", 
      surnom: ""
    },
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Quentin", 
      nom: "Jeannes",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "Nantes", 
      parrain: "", 
      fillot: "Dubuc", 
      surnom: "Qsaoul"
    },
    {
      promo: "2017",
      IFI: "IFIE", 
      prenom: "Marie", 
      nom: "Carrot",
      option: "Polytechnique Montréal", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Thiriat", 
      surnom: ""
    },
    {
      promo: "2017",
      IFI: "IFIA", 
      prenom: "Vincent", 
      nom: "Autex",
      option: "", 
      poste: "", 
      entreprise: "", 
      ville: "", 
      parrain: "", 
      fillot: "Bariller", 
      surnom: ""
    }
  ]

}
