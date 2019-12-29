import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage {

  public membresList : Membre[];
  public year: string[] = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  public items: any;
  
  constructor(private membreService: MembreService, private menu:MenuController) {  
  }

  ionViewWillEnter(){
    this.membresList= this.membreService.membresList.slice();
  }

  public checkboxChanged(i:number, ev: any): any{
    const an = this.year[i];
    let list2= this.membresList;
    if (ev.currentTarget.checked === false) {
      let j = this.membresList.findIndex(membre => membre.promo === an);
      while (j != -1) {
        this.membresList.splice(j, 1);
        j = this.membresList.findIndex(membre => membre.promo === an);
      }
      this.items = Array.from(document.querySelector('.results').children);
    } else {
      this.membreService.membresList.forEach(membre => {
        if(membre.promo === an){
          list2.push(membre);
        }
      });
      this.membresList = list2;
      this.membresList.sort((a,b) => b.promo.localeCompare(a.promo));
      this.items = Array.from(document.querySelector('.results').children);
    }
  };

  public handleInput(event) : void {
    this.items = Array.from(document.querySelector('.results').children);
    const query = event.toLowerCase();
    requestAnimationFrame(() => {
        this.items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
  }

  toggleMenu(){
    this.menu.toggle();
  }
}
