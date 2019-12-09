import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbrePage } from './arbre.page';

const routes: Routes = [
  {
    path: '',
    component: ArbrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArbrePageRoutingModule {}
