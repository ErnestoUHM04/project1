import { Component } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  imports: [],
  templateUrl: './operaciones.component.html',
  styleUrl: './operaciones.component.css'
})
export class OperacionesComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  sumar(): void {
    this.resultado = this.numero1 + this.numero2;
  }
  restar(): void {
    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar(): void {
    this.resultado = this.numero1 * this.numero2;
  }
  dividir(): void {
    if (this.numero2 !== 0) {
      this.resultado = this.numero1 / this.numero2;
    } else {
      alert('No se puede dividir por cero');
      this.resultado = 0;
    }
  }

}
