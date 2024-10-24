import { Component } from '@angular/core';
import { SidenarComponent } from '../sidenar/sidenar.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { CarreraService } from '../../carrera/services/carrera.service';
import { Carrera } from '../../carrera/models/carrera';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-carrera',
  standalone: true,
  imports: [SidenarComponent, CardModule, TableModule, PanelModule],
  templateUrl: './carrera.component.html',
  styleUrl: './carrera.component.css'
})
export class CarreraComponent {
  carreras!: Carrera[];

  constructor(private carreraService: CarreraService) {}

  ngOnInit() {
    
      this.carreraService.getCarreras().subscribe((data) => {
          this.carreras = data;
      }); 
    
  }

}
