import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

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

  constructor(private titleService: Title) {
    this.formatarTempo(this.cont);
  }

  ngOnInit() {
  }

  acrescentar() {
    this.cont += 1;
  }

  diminuir() {
    this.cont -= 1;
  }

  comecar() {
    if (!this.interruptor) {
      return "";
    }

    console.log("contando");
    this.cont = 1500;
    this.interruptor = false;
    this.contar();

  }

  contar() {
    if (this.interruptor) {
      return "";
    }
    if (this.cont == 11) {
      this.playAudio();
    }
    const delay = 1000;
    if (this.cont > 0) {
      this.diminuir();
      this.formatarTempo(this.cont);
      this.formatarTitulo(`${this.tempo} - Temporizador Pomodoro`)
      setTimeout(() => this.contar(), delay);
    } else {
      this.interruptor = true;
    }

  }

  zerar() {
    this.cont = 1499;
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

  formatarTitulo(novoTitulo: string) {
    this.titleService.setTitle(novoTitulo);
  }

  definirIntervalo() {

    if (this.interruptor) {
      this.cont = 300;
      this.interruptor = false;
      this.contar();
    }
  }

  playAudio() {
    let audio = new Audio();
    audio.src = "../assets/sound/beeps.mp3";
    audio.load();
    audio.play();
  }

}
