import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalidadAirePageRoutingModule } from './calidad-aire-routing.module';

import { CalidadAirePage } from './calidad-aire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalidadAirePageRoutingModule
  ],
  declarations: [CalidadAirePage]
})
export class CalidadAirePageModule {}
