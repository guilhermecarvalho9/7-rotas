import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7-rotas';

  mostrarMenu: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.mostrarMenuEmitter.subscribe(
      (mostrar: boolean) => this.mostrarMenu = mostrar
    );
  }
}
