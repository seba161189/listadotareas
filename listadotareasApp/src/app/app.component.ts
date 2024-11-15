import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoTareasComponent } from "./listado-tareas/listado-tareas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'listadotareasApp';
}
