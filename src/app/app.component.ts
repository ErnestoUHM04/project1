import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { forwardRef } from "@angular/core";
import { OperacionesComponent } from "./operaciones/operaciones.component";
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OperacionesComponent, FormsModule, forwardRef(() => OperacionesComponent)],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project1';
}
