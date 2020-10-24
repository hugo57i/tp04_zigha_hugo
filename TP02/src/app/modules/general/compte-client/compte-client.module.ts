import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompteClientRoutingModule } from './compte-client-routing.module';

import { SaisieClientComponent } from 'src/app/saisie-client/saisie-client.component';
import { RecapitulatifDonneeComponent } from 'src/app/recapitulatif-donnee/recapitulatif-donnee.component';
import { PhonepipePipe } from 'src/app/phonepipe.pipe';


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
