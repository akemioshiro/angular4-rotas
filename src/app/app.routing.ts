// declarar rotas
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';



const APP_ROUTES:Routes = [
    { path: 'login' , component:LoginComponent},
    { path: '', component: HomeComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
];


export const routing : ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);