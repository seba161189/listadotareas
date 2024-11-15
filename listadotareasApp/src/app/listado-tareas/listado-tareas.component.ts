import { Component, inject, Signal, signal } from '@angular/core';
import { Tarea } from '../models/tarea.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialog,
} from '@angular/material/dialog';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatListModule, MatIconModule, MatInputModule,
    MatCheckboxModule, MatButtonModule],
  templateUrl: './listado-tareas.component.html',
  styleUrl: './listado-tareas.component.scss'
})
export class ListadoTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea = signal<Tarea>({ id: 0, descripcion: '', completada: false });
  readonly dialog = inject(MatDialog);

  agregarTarea(): void {
    const tarea = this.nuevaTarea(); // Obtener el valor actual de la señal
    if (tarea.descripcion) {
      const nueva: Tarea = {
        id: Date.now(),
        descripcion: tarea.descripcion,
        completada: false
      };
      this.tareas.push(nueva);
      this.nuevaTarea.set({ id: 0, descripcion: '', completada: false });  // Limpiar la tarea
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }

  editarTarea(id: number, descripcion: string): void {

    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: { id: id, descripcion: descripcion },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog cerrado');
      if (result !== undefined) {
        this.nuevaTarea.set(result)
        this.guardarEdicion()
      }
    });
  }

  guardarEdicion(): void {
    const nueva = this.nuevaTarea();
    const tarea = this.tareas.find(t => t.id === nueva.id);
    if (tarea) {
      tarea.descripcion = nueva.descripcion.trim();
    }
    this.nuevaTarea.set({ id: 0, descripcion: '', completada: false });  // Limpiar la tarea
  }

  marcarCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }


}