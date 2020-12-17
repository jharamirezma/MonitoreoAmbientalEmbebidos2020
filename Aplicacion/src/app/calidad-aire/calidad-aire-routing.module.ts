import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalidadAirePage } from './calidad-aire.page';

const routes: Routes = [
  {
    path: '',
    component: CalidadAirePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalidadAirePageRoutingModule {}
