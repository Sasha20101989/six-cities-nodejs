import { Container } from 'inversify';
import { types } from '@typegoose/typegoose';

import type { AmenityServiceInterface } from './amenity-service.interface.js';
import { AppComponent } from '../../types/app-component.enum.js';
import AmenityService from './amenity.service.js';
import { AmenityEntity, AmenityModel } from './amenity.entity.js';

export function createAmenityContainer() {
  const amenityContainer = new Container();

  amenityContainer.bind<AmenityServiceInterface>(AppComponent.AmenityServiceInterface).to(AmenityService);
  amenityContainer.bind<types.ModelType<AmenityEntity>>(AppComponent.AmenityModel).toConstantValue(AmenityModel);

  return amenityContainer;
}