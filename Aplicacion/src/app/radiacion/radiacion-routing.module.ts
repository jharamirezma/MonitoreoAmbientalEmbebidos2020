import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RadiacionPage } from './radiacion.page';

const routes: Routes = [
  {
    path: '',
    component: RadiacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RadiacionPageRoutingModule {}
