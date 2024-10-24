import { Component } from '@angular/core';
import { SidenarComponent } from '../sidenar/sidenar.component';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { AlumnoService } from '../../alumno/services/alumno.service';
import { Alumno } from '../../alumno/models/alumno';
import { TableModule } from 'primeng/table';
@Component({
  selector: 'app-alumno',
  standalone: true,
  imports: [SidenarComponent, CardModule, PanelModule, TableModule],
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  
  alumnos!: Alumno[];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit() {
    
      this.alumnoService.getAlumnos().subscribe((data) => {
          this.alumnos = data;
      });
    
  }
  

}
