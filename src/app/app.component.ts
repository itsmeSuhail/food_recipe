import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthservicesService } from './services/authservices.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user:any=null;
constructor(private authService:AuthservicesService){}
ngOnInit(){
  this.authService.getUserProfile().subscribe({
    next:(res)=>{
      console.log("user nginit",res);
    },
    error:(err)=>{
      console.log("error nginit",err)
    }
  });
  this.authService.authSubject.subscribe(
    (auth)=>{
      console.log("user auth",auth)
      this.user=auth.user;
    }
  )
}
}
