import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierComponent } from '../../../panier/panier.component';


const routes: Routes = [
  { path: '', component: PanierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanierRoutingModule { }
