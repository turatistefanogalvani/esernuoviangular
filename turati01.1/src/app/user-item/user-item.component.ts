import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  name: string; // <-- aggiunta la proprietà name
  constructor() { 
    this.name = 'Felipe'; // setta il nome nel costruttore
  }
  ngOnInit() {
  }
}
