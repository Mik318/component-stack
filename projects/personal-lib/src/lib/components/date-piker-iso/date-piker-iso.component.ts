import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatCalendarCellClassFunction, MatDatepickerModule} from "@angular/material/datepicker";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {FechaUtils} from "../../utils/FechaUntils";
import {FECHA_PROVIDERS} from "../../utils/FechaProviders";

@Component({
  selector: 'lib-date-piker-iso',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule],
  templateUrl: './date-piker-iso.component.html',
  styleUrls: ['./date-piker-iso.component.css'],
  providers: [DatePipe, FECHA_PROVIDERS]
})
export class DatePikerIsoComponent implements OnInit {
  @Input() fechaControl!: FormControl;

  dateClass: MatCalendarCellClassFunction<Date> = FechaUtils.dateClass;

  ngOnInit(): void {
  }
}
