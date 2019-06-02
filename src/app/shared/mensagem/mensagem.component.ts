import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem',
  template: `
    <div *ngIf="temErro()" class="ui-message ui-messages-error">
      {{ texto }}
    </div>
  `,
  styles: [`
    .ui-messages-error {
      margin: 0;
      margin-top: 4px;
    }`]
})
export class MensagemComponent {

  @Input() controle: FormControl;
  @Input() erro: string;
  @Input() texto: string;

  temErro(): boolean {
    return this.controle.hasError(this.erro) && this.controle.dirty;
  }
}
