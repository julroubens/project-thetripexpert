import { Routes } from '@angular/router';

// export const routes: Routes = [
//     { path: '', component: HomeComponent, title: 'The Trip Expert Travel' },
//     { path: 'about', component: AboutComponent, title: 'About • The Trip Expert Travel' },
//     // { path: 'contact', component: ContactComponent, title: 'Contact • The Trip Expert Travel' },
//     {
//         path: 'contact',
//         loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
//         title: 'Contact Us - The Trip Expert Travel'
//     },
//     { path: '**', redirectTo: '' }
// ];

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
        title: 'The Trip Expert - Luxury Travel Planning Worldwide'
    },
    {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
        title: 'About Us - The Trip Expert'
    },
    {
        path: 'quote',
        loadComponent: () => import('./pages/quote/quote.component').then(m => m.QuoteComponent),
        title: 'Get a Quote - The Trip Expert'
    },
    {
        path: 'contact',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact Us - The Trip Expert'
    },
    {
        path: '**',
        redirectTo: ''
    }
];