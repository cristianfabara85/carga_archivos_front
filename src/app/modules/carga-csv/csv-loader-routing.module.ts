import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvUploadComponent } from '../csv-loader/pages/csv-upload/csv-upload.component';

const routes: Routes = [
  { path: '', component: CsvUploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CsvLoaderRoutingModule { }
