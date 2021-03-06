import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bananas'},
  {path: 'bananas', loadChildren: () => import('./banana/banana.module').then(m => m.BananaModule)},
  {path: 'apples', loadChildren: () => import('./apple/apple.module').then(m => m.AppleModule)},
  {path: 'fruit-salad', loadChildren: () => import('./fruit-salad/fruit-salad.module').then(m => m.FruitSaladModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
