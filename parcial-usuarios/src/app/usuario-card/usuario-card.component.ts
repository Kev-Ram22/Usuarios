import { Component, Input } from '@angular/core';
import { User } from '../models/user.model';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PhoneFormatPipe } from '../pipes/phone-format.pipe';

@Component({
  selector: 'app-usuario-card',
  standalone: true,
  imports: [CommonModule, RouterLink, PhoneFormatPipe], // ¡RouterLink es esencial!
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.scss']
})
export class UsuarioCardComponent {
  @Input() user!: User; // Asegúrate que la propiedad user esté definida
}