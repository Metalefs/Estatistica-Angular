import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RestApiService {
    apiURL = environment.endpoint;
    tabela_dados_agrupadosURL = this.apiURL + '/TabelaDistribuicao';
    mediaURL = this.apiURL + '/media';
    medianaURL = this.apiURL + '/mediana';
    modaURL = this.apiURL + '/moda';
    desvio_padraoURL = this.apiURL + "/desvio_padrao";
    varianciaURL = this.apiURL + '/variancia';

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
    })
    
}  
//
private IsLoading = true;
// HttpClient API get() method => Fetch 
getTabelaDadosAgrupados(valores) {
    return this.http.get<any>(this.tabela_dados_agrupadosURL+"/"+valores).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
getMedia() {
    return this.http.get<any>(this.mediaURL).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
getMediana() {
    return this.http.get<any>(this.medianaURL).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
getModa() {
    return this.http.get<any>(this.modaURL).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
getDesvioPadrao() {
    return this.http.get<any>(this.desvio_padraoURL).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
getVariancia() {
    return this.http.get<any>(this.varianciaURL).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
    )
}
// Page Loading state

getLoadingState(){
    return this.IsLoading;
}
setIsLoading(state : boolean){
    this.IsLoading = state;
    if(state == false){
        document.getElementById("loadingBackdrop").className = "modal-backdrop";
        document.getElementById("loading").className = '';
    } else {
        document.getElementById("loading").className = 'active';
    }
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
        window.alert(errorMessage);
        return throwError(errorMessage);
    }
}