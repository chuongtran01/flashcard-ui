import { CommonModule, Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  #location: Location = inject(Location);
  #hideFooterUrls: string[] = ['/auth/login'];
  showFooter: boolean = false;

  ngOnInit(): void {
    const currentRoute = this.#location.path();
    this.showFooter = !this.#hideFooterUrls.includes(currentRoute);
  }
}
