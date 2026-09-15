import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const data = {
      email: this.email,
      password: this.password
    };

    console.log("Données envoyées :", data);

    this.http.post<any>('http://localhost:3000/api/auth/login', data)
      .subscribe({
        next: (res) => {
          console.log("Réponse backend :", res);
          alert('Connexion réussie !');

          
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error("Erreur backend :", err);
          alert('Email ou mot de passe incorrect');
        }
      });
  }
}
