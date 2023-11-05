/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { PlantasComponent } from './plantas.component';
import {  PlantasService } from './plantas.service';
import { Plantas } from './plantas';


describe('PlantasListComponent', () => {
 let component: PlantasComponent;
 let fixture: ComponentFixture<PlantasComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PlantasComponent ],
     providers: [ PlantasService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PlantasComponent);
   component = fixture.componentInstance;

   component.planta = [
     new Plantas(faker.datatype.number(), faker.name.firstName(), faker.lorem.word(),faker.lorem.word()
     , faker.datatype.number(), faker.lorem.word(), faker.lorem.word()
     
     )
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.planta[0].nombre_comun)
 });

});