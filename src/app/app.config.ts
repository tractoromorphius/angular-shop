import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ENVIRONMENTS, EnvironmentsService } from './environments.service';
import { environment } from '../environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {provide: ENVIRONMENTS, useValue: environment}, 
    provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink);
      const apiUrl = inject(EnvironmentsService).getEnvironment('backApi');

      return {
        link: httpLink.create({
          uri: apiUrl,
        }),
        cache: new InMemoryCache(),
      };
    }),
  ]
};
