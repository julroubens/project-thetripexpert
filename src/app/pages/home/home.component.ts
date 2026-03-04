import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  trustBadges = [
    {
      icon: 'personalized',
      title: 'Personalized Planning',
      description: 'Tailored itineraries designed around your unique preferences and travel dreams'
    },
    {
      icon: 'secure',
      title: 'Secure Booking',
      description: 'Protected reservations with trusted partners and comprehensive travel insurance options'
    },
    {
      icon: 'response',
      title: 'Fast Response',
      description: '24/7 support and expert guidance throughout your entire journey'
    }
  ];

  destinations = [
    {
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Maldives',
      image: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Paris, France',
      image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474689/pexels-photo-2474689.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

}
