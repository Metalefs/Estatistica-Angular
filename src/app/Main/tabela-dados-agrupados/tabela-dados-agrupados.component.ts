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
  constructor(public activeRoute:ActivatedRoute){

  }

  ngOnInit(){

  }

  hasValueParam(){
    let subject = new Subject<boolean>();
    console.log(this.activeRoute)
    return subject.asObservable();
  }

  private getValueParam(){
    let subject = new Subject<string>();
    this.activeRoute.params.subscribe(routeParams =>{
      let values = routeParams['values'];
      if(values){
        this.values = values;
      }
      subject.next(values);
    });
    return subject.asObservable();
  }


  handleActivatedRoute(){
    this.getValueParam()
  }

}
