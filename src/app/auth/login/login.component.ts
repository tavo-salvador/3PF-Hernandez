import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
/*
  public formulario: FormGroup;
  public imagenURL: string;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
    
    if (this.authService.getCurrentUser()) {
      this.router.navigate(['/app']);
      return;
    }
  }*/
  ngOnInit(): void {/*
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });*/
  }

  public onSubmit(): void {
    /*
    if (this.formulario.invalid) {
      alert('Lo valores ingresados son incorrectos');
      return;
    }
    this.authService.login(
      this.formulario.get('email')?.value,
      this.formulario.get('password')?.value
    ).subscribe({
      next: respuesta => {
        this.router.navigateByUrl('/app');
      },
      error: error => {
        alert(error);
      }
    });*/
  }

}
