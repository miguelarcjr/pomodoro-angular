import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: String = 'Contador Regressivo';
  public cont: any = 1499;
  public tempo: String = '0m 0s';
  public interruptor: Boolean = true;
  constructor() {
    this.formatarTempo(this.cont);
  }

  acrescentar() {
    this.cont += 1;
  }

  diminuir() {
    this.cont -= 1;
  }

  comecar() {
    if (this.interruptor) {
      this.cont = 1500;
      this.contar();
      this.interruptor = false;
    }
  }

  contar() {
    const delay = 1000;
    if (this.cont > 0) {
      this.diminuir();
      this.formatarTempo(this.cont);
      setTimeout(() => this.contar(), delay);
    } else {
      this.interruptor = true;
    }
  }

  zerar() {
    this.cont = 0;
    this.formatarTempo(this.cont);
    this.interruptor = true;
  }

  formatarTempo(tempo) {
    let m = 0;
    let s = this.cont;
    while (s >= 60) {
      m += 1;
      s -= 60;
    } 
    this.tempo = `${m}m ${s}s`;

  }

  definirIntervalo() {;
    if (this.interruptor) {
      this.cont = 300;
      this.contar();
      this.interruptor = false;
    }
  }

  ngOnInit() {
  }
}
