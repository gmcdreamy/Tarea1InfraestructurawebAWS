import { Component, Input } from '@angular/core';
import { Results } from '../service/results';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{
@Input() planets : Results = new Results();

}
