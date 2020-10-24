import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import { CatalogueRoutingModule } from './catalogue-routing.module';

import { ListeProduitComponent } from 'src/app/liste-produit/liste-produit.component';
import { SearchFilterComponent } from 'src/app/search-filter/search-filter.component';
import { CardComponent } from 'src/app/card/card.component';


@NgModule({
  declarations: [
    ListeProduitComponent,
    SearchFilterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    FormsModule,
    Ng5SliderModule
  ],
  exports: [
    ListeProduitComponent
  ]
})
export class CatalogueModule { }
