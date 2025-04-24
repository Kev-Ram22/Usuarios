import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User, Post } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.scss']
})
export class DetalleUsuarioComponent implements OnInit {
  user: User | null = null;
  loading = true;
  showCompanyInfo = false;
  posts: Post[] = [];
  showPosts = false;
  postsLoading = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe({
        next: (user) => {
          this.user = user;
          this.loading = false;
        },
        error: () => {
          this.router.navigate(['/usuarios']);
        }
      });
    } else {
      this.router.navigate(['/usuarios']);
    }
  }

  toggleCompanyInfo(): void {
    this.showCompanyInfo = !this.showCompanyInfo;
  }

  loadPosts(): void {
    if (!this.user) return;
    
    if (this.posts.length === 0) {
      this.postsLoading = true;
      this.userService.getUserPosts(this.user.id).subscribe({
        next: (posts) => {
          this.posts = posts;
          this.postsLoading = false;
          this.showPosts = true;
        },
        error: () => {
          this.postsLoading = false;
        }
      });
    } else {
      this.showPosts = !this.showPosts;
    }
  }
}