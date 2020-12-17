import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuidoPageRoutingModule } from './ruido-routing.module';

import { RuidoPage } from './ruido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuidoPageRoutingModule
  ],
  declarations: [RuidoPage]
})
export class RuidoPageModule {}
