import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../services/tienda.service';
import { Producto } from '../modelo/producto';

@Component({
  selector: 'app-tienda',
  imports: [],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent implements OnInit {
  tiendaService:TiendaService;
  producto:Producto[];
constructor(){
  this.producto=[];
}
  ngOnInit(): void {
    this.listarProductos();
  }
listarProductos(){
   this.tiendaService.listarProductos().subscribe( 
    (data)=>{
      this.producto=data;
    }
   );
}

}
