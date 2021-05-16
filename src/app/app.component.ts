import { PnnResponse } from './models/PnnResponse';
import { PnnDTO } from './models/PnnDTO';
import { Component, OnInit } from '@angular/core';
import { PlanService } from './services/plan.service';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mioperadormovil';
  phoneNumber: number;
  pnns: PnnDTO[] = [];
  items: MenuItem[];
  pbLoading: boolean = false;

  constructor(private planService: PlanService,
    private messageService: MessageService) {

  }

  showSToast(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }

  getPnnByNumber(): void {
    if (this.phoneNumber && this.phoneNumber.toString().length === 10) {
      this.pbLoading = true;
      this.pnns = [];
      this.planService.getPnnByNumber(this.phoneNumber).subscribe(
        (result: PnnResponse) => {
          if (result.pnn) {
            this.pnns.push(result.pnn);
          }
          this.pbLoading = false;
          if (this.pnns.length !== 0) {
            this.showSToast(severity.success, 'Petición exitosa', 'El número se consultó correctamente');
          }
          else {
            this.showSToast(severity.info, 'Info', 'No encontramos el número en ninguna operadora');
          }
        }, err => {
          console.log(err);
          this.pbLoading = false;
          this.showSToast(severity.error, 'Error', 'Esto es vergonzoso se ha presentado un error');
        }
      );
    }
    else {
      this.showSToast(severity.warn, 'Captura incorrecta', 'El número capturado debe ser de 10 dígitos');
    }
  }

  limpiar(): void {
    this.phoneNumber = null;
    this.pnns = [];
    this.showSToast(severity.info, 'Info', 'Formulario limpio');
  }

  validarLongitud(event: KeyboardEvent) {
    if (this.phoneNumber && this.phoneNumber.toString().length >= 10) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bienvenido',
      }
    ];
  }

}

enum severity {
  success = "success",
  info = "info",
  warn = "warn",
  error = "error",
  custom = "custom"
}
