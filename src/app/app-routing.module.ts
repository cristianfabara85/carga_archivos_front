import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'csv',
  loadChildren: () =>
    import('../app/modules/carga-csv/csv-loader.module')
      .then(m => m.CsvLoaderModule)
},
{ path: '', redirectTo: 'csv', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
