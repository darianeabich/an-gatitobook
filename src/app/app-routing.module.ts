import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { LoginGuard } from './autenticacao/login.guard';

const routes: Routes = [
  //quando não tiver nada na rota, direcionar para home
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  //rota home: função para executar quando for acessada a rota
  //para requisitar o Módulo
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
        .then((m) => m.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module')
        .then((m) => m.AnimaisModule),
    canLoad: [AutenticacaoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
