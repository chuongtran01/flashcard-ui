import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import hideHeaderFooterUrls from '@core/layout/hide-header-footer-urls.store';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  #location: Location = inject(Location);
  showFooter: boolean = false;

  ngOnInit(): void {
    const currentRoute = this.#location.path();
    this.showFooter = !hideHeaderFooterUrls.includes(currentRoute);
  }
}
