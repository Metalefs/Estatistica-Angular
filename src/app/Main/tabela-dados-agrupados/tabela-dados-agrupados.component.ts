import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'tabela-dados-agrupados',
  templateUrl: './tabela-dados-agrupados.component.html',
  styleUrls: ['./tabela-dados-agrupados.component.css']
})

export class TabelaDadosAgrupadosComponent implements OnInit {
  public values:boolean;
  constructor(){

  }
  ngOnInit(){

  }

  resetLocalStorage(){
    localStorage.clear();
    location.reload();
  }
}
