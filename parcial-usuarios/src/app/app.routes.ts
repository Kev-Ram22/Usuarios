import { Routes } from '@angular/router';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { DetalleUsuarioComponent } from './detalle-usuario/detalle-usuario.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

export const routes: Routes = [
  { path: 'usuarios', component: ListadoUsuariosComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: '**', redirectTo: '/usuarios' },
  { path: 'usuario/:id/posts', component: UserPostsComponent}
  
     
    
];