import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goodbye',
  standalone: true,
  imports: [],
  templateUrl: './goodbye.component.html',
  styleUrl: './goodbye.component.scss'
})
export class GoodbyeComponent {
  constructor(private router:Router){
  }
  OnBack(){
    this.router.navigateByUrl("");
  }
}
