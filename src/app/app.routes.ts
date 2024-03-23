import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AuthComponent } from './pages/auth/auth.component';

export const routes: Routes = [
	{ path: "", component: HomepageComponent },
	{ path: "auth", component: AuthComponent },
];
