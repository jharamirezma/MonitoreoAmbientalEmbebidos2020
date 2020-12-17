import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'places', loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)},
  { path: 'calidad-aire', loadChildren: () => import('./calidad-aire/calidad-aire.module').then( m => m.CalidadAirePageModule) },
  { path: 'monoxido', loadChildren: () => import('./monoxido/monoxido.module').then( m => m.MonoxidoPageModule)},
  { path: 'humedad', loadChildren: () => import('./humedad/humedad.module').then( m => m.HumedadPageModule)},
  { path: 'temperatura', loadChildren: () => import('./temperatura/temperatura.module').then( m => m.TemperaturaPageModule)},
  { path: 'precipitacion', loadChildren: () => import('./precipitacion/precipitacion.module').then( m => m.PrecipitacionPageModule)},
  { path: 'presion', loadChildren: () => import('./presion/presion.module').then( m => m.PresionPageModule)},
  { path: 'radiacion', loadChildren: () => import('./radiacion/radiacion.module').then( m => m.RadiacionPageModule)},
  { path: 'ruido', loadChildren: () => import('./ruido/ruido.module').then( m => m.RuidoPageModule)},
  { path: 'luz', loadChildren: () => import('./luz/luz.module').then( m => m.LuzPageModule)},
  { path: 'sensores', loadChildren: () => import('./sensores/sensores.module').then( m => m.SensoresPageModule) },
  { path: 'zonas', loadChildren: () => import('./zonas/zonas.module').then( m => m.ZonasPageModule)},
  { path: 'sensores/:id', loadChildren: './sensores/sensores.module#sensoresPageModule' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
