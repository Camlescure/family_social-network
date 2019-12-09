import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';

@Component({
  selector: 'app-arbre',
  templateUrl: './arbre.page.html',
  styleUrls: ['./arbre.page.scss'],
})
export class ArbrePage implements OnInit {

  years: string[] = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];


  constructor(public membreService: MembreService) { }

  lignee: any;

  ngOnInit() {
    this.lignee = this.membreService.getLigneeFromName("Lescure");
  }

}
