import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { UsuarioCardComponent } from '../usuario-card/usuario-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-usuarios',
  standalone: true,
  imports: [CommonModule, UsuarioCardComponent],
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.scss']
})
export class ListadoUsuariosComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.loading = false;
      }
    });
  }
}