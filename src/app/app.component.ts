import { PnnResponse } from './models/PnnResponse';
import { PnnDTO } from './models/PnnDTO';
import { Component, OnInit } from '@angular/core';
import { PlanService } from './services/plan.service';
import { MenuItem } from 'primeng/api';

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

  constructor(private planService: PlanService) {

  }

  getPnnByNumber(): void {
    if (this.phoneNumber) {
      this.pnns = [];
      this.planService.getPnnByNumber(this.phoneNumber).subscribe(
        (result: PnnResponse) => {
          console.log(result.pnn);
          if (result.pnn) {
            this.pnns.push(result.pnn);
          }
        },
      );
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
