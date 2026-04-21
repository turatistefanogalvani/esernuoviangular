import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() name!: string; // <-- Aggiungi la notazione @input

  constructor() {
     // Rimuovi l'impostazione del nome
  }

  ngOnInit() {}
}
