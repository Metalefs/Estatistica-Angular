import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root",
})
export class PageScrollService{
    scrollTop(){
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
          })();
    }
    scrollTopOnElement(elementId:string){
      (function smoothscroll() {
          var element = document.getElementById(elementId);
          var currentScroll = element.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              element.scrollTo(0, currentScroll - (currentScroll / 8));
          }
        })();
    }
    scrollElementIntoView(elementId:string){
      (function smoothscroll() {
          var element = document.getElementById(elementId);
          element.scrollIntoView();
        })();
    }
    scrollDown(){
        (function smoothscroll() {
            window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        })();
    }
}
