import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  #location: Location = inject(Location);
  #hideHeaderUrls: string[] = ['/auth/login'];
  showHeader: boolean = false;

  ngOnInit(): void {
    const currentRoute = this.#location.path();
    this.showHeader = !this.#hideHeaderUrls.includes(currentRoute);
  }
}
