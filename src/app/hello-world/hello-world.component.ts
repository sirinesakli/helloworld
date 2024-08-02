import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss',
})
export class Helloworldcomponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl: string='https://www.codelikethewind.org/content/images/size/w2000/2022/05/hello_world.png'
  World:number=0;
  ngOnInit(): void {
  

  } 
  constructor(private route:Router){}
  
  onAddWorld():void{
    
    this.route.navigateByUrl("goodby")
  }
}





