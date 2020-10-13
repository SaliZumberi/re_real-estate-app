import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'buildings', pathMatch: 'full'},
  {
    path: 'buildings',
    loadChildren: () => import('./buildings/buildings.module').then(m => m.BuildingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
