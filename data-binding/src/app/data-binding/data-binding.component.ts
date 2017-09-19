import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual:string;
  valorSalvo:string;
  isMouseOver:boolean = false;
  
  nome:string  = 'abc';

  pessoa:any = {
    nome:'Leonardo',
    idade: "30"
  }

  url:string = 'http://google.com';
  urlImagem = 'http://lorempixel.com/400/200/nature/';


  nomeCurso: string = 'Angular Curso';



  getValor(){
    return 1;
  }

  botaoClicado(){
    alert("Botão Clicado");
  }

  onKeyUp(evento:KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvar(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }


  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
