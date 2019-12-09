import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  membresList : Membre[];

  year: string[] = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];

  constructor(private membreService: MembreService, private menu:MenuController) {  
   }

  ionViewWillEnter(){
    this.membresList= this.membreService.membresList.slice();
  }

  search() : any {
    console.log("coucou"); 
  }

  checkboxChanged(i:number, ev: any): any{
    const an = this.year[i];
    let j = 0;
    let list = this.membreService.membresList;
    let list3;
    let mbr;
    if(ev.currentTarget.checked == false){
      this.membresList.forEach(function(membre, index){
          if(membre.promo === an){
            j++; 
            mbr = membre;
          }   
      })
      this.membresList.splice(0,j);
    } else {
      this.membresList.push(mbr);
    }
  };

  toggleMenu(){
    this.menu.toggle();
  }

}
