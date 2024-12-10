import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; // Import DashboardComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ], // Combine imports into one array
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Corrected from styleUrl to styleUrls (this is the correct property name)
})
export class AppComponent {
  title = 'first-project';
}
