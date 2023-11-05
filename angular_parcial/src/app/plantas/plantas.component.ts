import { Component, OnInit } from '@angular/core';
import { Plantas } from './plantas';
import { dataPlantas } from './dataPlantas';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantasComponent implements OnInit {
  plantas: Array<Plantas> = [];
  constructor() { }
  getPlantasList(): Array<Plantas>{
    return dataPlantas
  }

  ngOnInit() {
    this.plantas=this.getPlantasList();
  }

}
