import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://www.alura.com.br/artigos/assets/como-comecar-com-angular/como-comecar-com-angular.png";
  contentTitle: string = "MINHA NOTICIA";
  contentDescription: string = "OLá mundo";

  constructor() { }

  ngOnInit(): void {
  }

}
