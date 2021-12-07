import { Component } from '@angular/core';
import { PlanetsService } from './service/planets.service';
import { Results } from './service/results';
import { SearchPlanet } from './service/searchPlanet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examen2';
  planets : Results = new Results();
  planetfiltered : Results = new Results();

  

  constructor(private planetService : PlanetsService){
    planetService.getPlanets().subscribe((results:Results)=>{
      this.planets = results;
      this.planetfiltered = results;
    })
  }

  
filterByName(planetSearch : SearchPlanet){
this.planetfiltered.results = this.planets.results.filter(planets=>{
  return planets.name.includes(planetSearch.name.toString());
});
}

}
