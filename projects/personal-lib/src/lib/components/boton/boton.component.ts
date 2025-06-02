import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-boton',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
