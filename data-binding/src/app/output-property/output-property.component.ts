import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  
  @Input() valor: number = 0;

  //Envia o Evento atual para o componente Pai que está usando esse selector
  @Output() mudouValor = new EventEmitter();

  //Faz referencia a uma variavel no HTML
  //@ViewChild('campoInput') campoInput: HTMLElement;
  @ViewChild('campoInput') campoInput: ElementRef;

  incrementa(){
    console.log(this.campoInput.nativeElement.value);
    this.valor++;
    this.mudouValor.emit({novoValor:this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor:this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
