import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import hideHeaderFooterUrls from '@core/layout/hide-header-footer-urls.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  #location: Location = inject(Location);
  showHeader: boolean = false;

  ngOnInit(): void {
    const currentRoute = this.#location.path();
    this.showHeader = !hideHeaderFooterUrls.includes(currentRoute);
  }
}
