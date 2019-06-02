import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/components/common/api';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    const severity = 'error';
    const summary = 'Erro';
    let detail: string = 'Requisição não processada.';
    if (typeof errorResponse === 'string') {
      detail = errorResponse;
    } else if (errorResponse instanceof HttpErrorResponse) {
      const httpErrorResponse: HttpErrorResponse = errorResponse;
      if (httpErrorResponse.status >= 400 && httpErrorResponse.status <= 499) {
        const error = httpErrorResponse.error[0];
        if (error && error.mensagemUsuario) {
          detail = error.mensagemUsuario;
        }
      }
    } else {
      console.log(errorResponse);
    }

    this.messageService.add({ severity, summary, detail });
  }
}
