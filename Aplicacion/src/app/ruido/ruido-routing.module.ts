import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuidoPage } from './ruido.page';

const routes: Routes = [
  {
    path: '',
    component: RuidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuidoPageRoutingModule {}
