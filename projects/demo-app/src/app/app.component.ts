import {Component} from '@angular/core';
import {BotonComponent, DatePikerIsoComponent, FileUploadComponent} from 'personal-lib';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [CommonModule, ReactiveFormsModule, BotonComponent, DatePikerIsoComponent, DatePikerIsoComponent, FileUploadComponent]
})
export class AppComponent {
  title = 'demo-app';
  fechaControl = new FormControl();

  constructor() {
  }
}
