import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.email, this.password).subscribe({
      next: (res) => {
        console.log('Utilisateur créé :', res);
        alert('Inscription réussie');
      },
      error: () => {
        alert('Erreur lors de l’inscription');
      }
    });
  }
}
