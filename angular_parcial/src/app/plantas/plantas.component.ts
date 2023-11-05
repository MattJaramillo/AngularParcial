import { Component, OnInit } from '@angular/core';
import { Plantas } from './plantas';
import { PlantasService } from './plantas.service';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {

  constructor(private plantasService: PlantasService) { }
  planta: Array<Plantas> = [];
  
  getPlantas(){
    this.plantasService.getPlantas().subscribe( planta => {
      this.planta= planta;
    });
  }

  ngOnInit() {
    this.getPlantas();
  }

}
