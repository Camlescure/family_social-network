import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Membre } from 'src/app/models/Membre';
import { MembreService } from 'src/app/services/membre.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {

  nom: string;
  membre: Membre;
  fillot: Membre;
  parrain: Membre;

  constructor(private actRoute: ActivatedRoute, public membreService: MembreService) { }

  ngOnInit() {
    this.nom = this.actRoute.snapshot.params['membre_id'];
    this.membre = this.membreService.getMembreByName(this.nom);
    this.fillot = this.membreService.getMembreByName(this.membre.fillot);
    this.parrain = this.membreService.getMembreByName(this.membre.parrain);
  }

}
