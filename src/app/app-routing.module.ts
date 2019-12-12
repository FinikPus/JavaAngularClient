import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import { SummaComponent } from './pages/summa/summa.component';
import { RootComponent } from './pages/root/root/root.component';
import { AuthGuard } from './services/auth.guard';


/**
 * Задаются пути до компонентов
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'summa',
    component: SummaComponent
  },
  {
    path: 'root',
    loadChildren: ()=>import('./pages/root/root.module').then((m=>m.RootModule)),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
