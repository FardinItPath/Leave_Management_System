import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api'; // ✅ Add this import
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura'; // ✅ Import the theme you want to use

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    MessageService, // ✅ Add this provider
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.light-mode',
        }
      }
    }) ]
  
};
