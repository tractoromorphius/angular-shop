import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Environments } from '../core/environment';

export const ENVIRONMENTS = new InjectionToken<Environments>('evnironments');
@Injectable({
  providedIn: 'root'
})
export class EnvironmentsService {

  private environments!: Environments;
  constructor(@Inject(ENVIRONMENTS) environments: Environments) {
    this.environments = environments;
  }

  getEnvironment<K extends keyof Environments>(key: K): Environments[K] {
    return this.environments[key];
  }
}
