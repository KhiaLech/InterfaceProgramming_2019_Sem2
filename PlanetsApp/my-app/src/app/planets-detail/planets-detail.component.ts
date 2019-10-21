import { Component, OnInit, Input } from '@angular/core';
import {Planet} from '../Planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-detail',
  templateUrl: './planets-detail.component.html',
  styleUrls: ['./planets-detail.component.css']
})
export class PlanetsDetailComponent implements OnInit {

  @Input()
  planet: Planet;
  
  constructor() { }

  ngOnInit() {
  }

}
