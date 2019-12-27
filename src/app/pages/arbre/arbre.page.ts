import { Component, OnInit } from '@angular/core';
import { MembreService } from 'src/app/services/membre.service';
import { Membre } from 'src/app/models/Membre';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arbre',
  templateUrl: './arbre.page.html',
  styleUrls: ['./arbre.page.scss'],
})
export class ArbrePage implements OnInit {


  years: string[] = ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  nom: string;

  constructor(public membreService: MembreService, private actRoute: ActivatedRoute) { }

  lignee: any;

  ngOnInit() {
    this.nom = this.actRoute.snapshot.params['membre_id'];
    this.lignee = this.membreService.getLigneeFromName(this.nom);
  }

}
