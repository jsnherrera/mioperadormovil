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

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Consulta exitosa', detail: 'El número se consultó correctamente' });
  }

  getPnnByNumber(): void {
    if (this.phoneNumber) {
      this.pbLoading = true;
      this.pnns = [];
      try {
        this.planService.getPnnByNumber(this.phoneNumber).subscribe(
          (result: PnnResponse) => {
            if (result.pnn) {
              this.pnns.push(result.pnn);
            }
            this.pbLoading = false;
            this.addSingle();
          },
        );
      } catch (err) {
        console.log(err);
        this.pbLoading = false;
      }
    }
  }

  limpiar(): void {
    this.phoneNumber = null;
    this.pnns = [];
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Bienvenido',
      }
    ];
  }

}
