import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// app.config.ts
// import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http'; // ✅ Import this

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideRouter([
//       // your routes here
//     ]),
//     importProvidersFrom(HttpClientModule) // ✅ Add this line
//   ]
// };
