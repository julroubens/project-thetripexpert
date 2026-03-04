import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

// Replace this with your real TravelJoy form URL
const TRAVELJOY_EMBED_URL =
  'https://app.traveljoy.com/public/trips/your-traveljoy-form-id';

@Component({
  selector: 'app-quote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})
export class QuoteComponent {
  travelJoyUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.travelJoyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      TRAVELJOY_EMBED_URL
    );
  }
}

