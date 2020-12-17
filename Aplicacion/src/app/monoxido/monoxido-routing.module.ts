import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonoxidoPage } from './monoxido.page';

const routes: Routes = [
  {
    path: '',
    component: MonoxidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonoxidoPageRoutingModule {}
