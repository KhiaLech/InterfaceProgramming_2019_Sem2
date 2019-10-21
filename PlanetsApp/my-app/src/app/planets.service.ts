import { Injectable } from '@angular/core';
import { Planet } from './Planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  
  planets:Planet[] = [
    new Planet(
      'earth',
      1,
      7000000
    )
  ];


  constructor() { }


  public addPlanet(){

  }
}
