import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CsvLoaderRoutingModule } from './csv-loader-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CsvLoaderRoutingModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CsvLoaderModule { }
