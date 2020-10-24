import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompteClientRoutingModule } from './compte-client-routing.module';

import { SaisieClientComponent } from '../../../saisie-client/saisie-client.component';
import { RecapitulatifDonneeComponent } from '../../../recapitulatif-donnee/recapitulatif-donnee.component';
import { PhonepipePipe } from '../../../phonepipe.pipe';


@NgModule({
  declarations: [
    SaisieClientComponent,
    RecapitulatifDonneeComponent,
    PhonepipePipe
  ],
  imports: [
    CommonModule,
    CompteClientRoutingModule,
    FormsModule
  ],
  exports: [
    SaisieClientComponent
  ]
})
export class CompteClientModule { }
