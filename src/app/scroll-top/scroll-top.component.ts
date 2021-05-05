import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { PageScrollService } from '../shared/scrollService';
@Component({
    selector: 'app-scroll-top',
    templateUrl: './scroll-top.component.html',
    styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent implements OnInit {
    windowScrolled: boolean;
    constructor(private ss: PageScrollService) {}
    @HostListener('document:wheel', ['$event.target'])
    onWindowScroll() {
      var element = document.getElementById("content-area");
      if (element.scrollTop > 100) {
          this.windowScrolled = true;
      }
      else
        this.windowScrolled = false;

    }
    scrollToTop() {
        this.ss.scrollElementIntoView("main")
    }
    ngOnInit() {}
}
