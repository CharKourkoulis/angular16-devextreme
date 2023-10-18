import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxChartModule } from 'devextreme-angular';
import { Observable, map } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, DxChartModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  chartData$: Observable<{title: string; price:number;}[]> =  this.productsService.getRandomProducts(7).pipe(
    map(products => {
        const data = products.map(product => ({title: product.title, price: product.price}));
        return data;
    })
  );

  constructor(private productsService: ProductsService){}

}
