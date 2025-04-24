import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  providers: [UserService] // Añade esto para inyección de dependencias
})
export class UserPostsComponent implements OnInit {
  posts: Post[] = [];
  loading = true;
  userId!: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPosts();
  }

  loadPosts(): void {
    this.userService.getUserPosts(this.userId).subscribe({
      next: (posts: Post[]) => { // Tipo explícito
        this.posts = posts;
        this.loading = false;
      },
      error: (err: any) => { // Tipo explícito
        console.error('Error loading posts:', err);
        this.loading = false;
      }
    });
  }
}