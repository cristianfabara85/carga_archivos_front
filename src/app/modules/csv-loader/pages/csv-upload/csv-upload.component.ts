import { Component, OnInit } from '@angular/core';
import { CsvLoaderService } from '../../services/csv-loader.service';
import { Campaign } from 'src/app/shared/models/campaign.model';
import { ToastrService } from 'ngx-toastr';
import { Agrupado } from 'src/app/shared/models/agrupado.model';
@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent implements OnInit {

  file: File;
  result: any;
  campaigns: Campaign[] = [];
  presupuestoAcumulado: number = 0;
  message: string = '';
  messageType: 'error' | 'success' | 'info' | '' = '';
  presupuestoAgrupado: Agrupado[] = [];
  campaniasCargadas: Campaign[] = [];


  constructor(private csvService: CsvLoaderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.csvService.uploadCsv(formData)
      .subscribe((response: any) => {
        this.refreshData();
        this.campaigns = response.campanias;
        if (response.error) {
          this.presupuestoAcumulado = response.totalPresupuesto;
          this.toastr.error(response.error, 'Error')
        } else {
          this.presupuestoAcumulado = response.totalPresupuesto;
          this.toastr.success('Archivo cargado correctamente', 'Éxito')
        }

      });
  }

  refreshData() {
    this.csvService.findAll()
      .subscribe((response: any) => {
        this.campaniasCargadas = response;
      });

    this.csvService.grouped()
      .subscribe((response: any) => {
        this.presupuestoAgrupado = response;
      });
  }


}
