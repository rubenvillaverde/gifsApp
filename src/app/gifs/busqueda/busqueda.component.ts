import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  @ViewChild("txtBuscar") txtBuscar!:ElementRef<HTMLInputElement>;



  buscar(){
    const value = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.txtBuscar.nativeElement.value = "";

  }

}
