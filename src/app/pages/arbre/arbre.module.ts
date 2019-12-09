import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArbrePageRoutingModule } from './arbre-routing.module';

import { ArbrePage } from './arbre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArbrePageRoutingModule
  ],
  declarations: [ArbrePage]
})
export class ArbrePageModule {}
