import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RadiacionPageRoutingModule } from './radiacion-routing.module';

import { RadiacionPage } from './radiacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RadiacionPageRoutingModule
  ],
  declarations: [RadiacionPage]
})
export class RadiacionPageModule {}
