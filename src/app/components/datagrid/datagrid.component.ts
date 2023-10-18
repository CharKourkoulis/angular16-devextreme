import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { DxDataGridModule } from 'devextreme-angular';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product';

@Component({
  standalone: true,
  selector: 'datagrid-component',
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit {

  products$: Observable<Product[]> =  this.productsService.getRandomProducts(100000);

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {

  }

}
