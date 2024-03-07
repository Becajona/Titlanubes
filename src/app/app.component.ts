import { Component } from '@angular/core';
import { CatsDogs } from './modelos1/catsDogs.Modelo';
import { CatsDogsService } from './servicios/cats-dogs.service';
import { CatsDogsComponent } from './componentes/cats-dogs/cats-dogs.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jonathan_videos';
}
