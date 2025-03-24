// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';

// @Component({
//   selector: 'app-root',
//   imports: [
//     HomeComponent,
//     RouterOutlet
//   ],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'angular-soa';
// }

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuTitleComponent } from "./components/menu-title/menu-title.component";
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // HomeComponent,
    RouterOutlet,
    MenuTitleComponent,
    MenuBarComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-soa';
}
