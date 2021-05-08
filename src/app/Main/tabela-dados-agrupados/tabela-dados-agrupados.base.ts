import { Component, ViewChild, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { WikiService, WikiSummary } from 'src/app/shared/wiki.service';

@Injectable({
  providedIn: 'root'
})

export abstract class TabelaDadosAgrupadosBase implements OnInit {
  public values:string;
  public wiki:WikiSummary;
  constructor(protected activeRoute: ActivatedRoute, protected wikiService: WikiService){

  }

  ngOnInit(){
    this.handleActivatedRoute();
  }

  hasValueParam(){
    return !!this.activeRoute.snapshot.queryParams.values;
  }

  private getValueParam(){
    let values = this.activeRoute.snapshot.queryParams.values;
    if(values){
      this.setValue(values)
      this.calcular(values)
    }
  }

  getWikiSummary(search:string){
    return this.wikiService.getWikiPage(search).subscribe(result=>this.wiki=result);
  }

  handleActivatedRoute(){
    if(this.hasValueParam())
      this.getValueParam()
  }

  abstract calcular(values:string);
  abstract setValue(values:string);
}
