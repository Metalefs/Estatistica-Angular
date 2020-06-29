import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class Rotas {
	ultimasMensagensRoute(){return "/dadosUltimasMensagens/"};
	ExportCode(){return  "/Exports/"};
	port(){return 3030};
	self(){return "/AdminRotas/"};
	InformacaoGeralRoute(){return  "/InformacaoGeral/"};
}
