import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class WikiService {
    wikiURL = (SEARCH:String)=> `https://pt.wikipedia.org/api/rest_v1/page/summary/${SEARCH}`;
    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
    })

}

getWikiPage(search:string):Observable<WikiSummary> {
    return this.http.get<WikiSummary>(this.wikiURL(search.replace(' ',"_")),this.httpOptions).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}

// Error handling
handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
      return throwError('');
    }
}

export class WikiSummary {
  type?:          string;
  title?:         string;
  displaytitle?:  string;
 // namespace?:     Namespace;
  wikibase_item?: string;
  //titles?:        Titles;
  pageid?:        number;
  //thumbnail?:     Originalimage;
 // originalimage?: Originalimage;
  lang?:          string;
  dir?:           string;
  revision?:      string;
  tid?:           string;
  timestamp?:     Date;
  description?:   string;
  //content_urls?:  ContentUrls;
  //api_urls?:      APIUrls;
  extract?:       string;
  extract_html?:  string;
}
