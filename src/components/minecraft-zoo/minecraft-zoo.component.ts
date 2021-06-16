import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minecraft-zoo',
  templateUrl: './minecraft-zoo.component.html',
  styleUrls: ['./minecraft-zoo.component.css']
})
export class MinecraftZooComponent implements OnInit {
  imgPaths: String[];

  constructor() { 
    this.imgPaths = [
      'assets/img/minecraft-zoo-build1.png',
      'assets/img/minecraft-zoo-build2.png',
      'assets/img/minecraft-zoo-build3.png',
      'assets/img/minecraft-zoo-build4.png',
      'assets/img/minecraft-zoo-build5.png',
      'assets/img/minecraft-zoo-build6.png'
    ]
  }

  ngOnInit(): void {
  }

}
