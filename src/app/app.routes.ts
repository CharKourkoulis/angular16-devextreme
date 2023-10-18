import { Routes } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';

export const routes: Routes = [
  {path : '', component : DatagridComponent},
  {path : 'datagrid', component : DatagridComponent, pathMatch: 'full'},
  {path: 'form', loadComponent: () => import('./components/form/form.component').then((mod) => mod.FormComponent)},
  {path: 'chart', loadComponent: () => import('./components/chart/chart.component').then((mod) => mod.ChartComponent)},
  {path : '**', component : DatagridComponent}
];
