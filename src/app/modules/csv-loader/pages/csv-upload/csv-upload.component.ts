import { Component, OnInit } from '@angular/core';
import { CsvLoaderService } from '../../services/csv-loader.service';
import { Campaign } from 'src/app/shared/models/campaign.model';

@Component({
  selector: 'app-csv-upload',
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {

  file: File;
  result: any;
  campaigns: Campaign[] = [];
  presupuestoAgrupado: { [empresa: string]: number } = {};

  constructor(private csvService: CsvLoaderService) { }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  upload() {
    const formData = new FormData();
    formData.append('file', this.file);

    this.csvService.uploadCsv(formData)
      .subscribe((response: any) => {
        this.campaigns = response.campanias;
        console.log(this.campaigns);

      });
  }


}
