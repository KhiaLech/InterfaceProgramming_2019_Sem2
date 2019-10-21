import { Component, OnInit } from '@angular/core';
import {Planet} from '../Planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.css']
})
export class PlanetsListComponent implements OnInit {

 

 

  constructor(public service:PlanetsService) { }

  ngOnInit() {
  }

}
