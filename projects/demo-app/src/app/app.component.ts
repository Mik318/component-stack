import {Component} from '@angular/core';
import {BotonComponent, DatePikerIsoComponent} from 'personal-lib';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: [],
  imports: [CommonModule, ReactiveFormsModule, BotonComponent, DatePikerIsoComponent, DatePikerIsoComponent]
})
export class AppComponent {
  title = 'demo-app';
  fechaControl = new FormControl();

  constructor() {
  }
}
