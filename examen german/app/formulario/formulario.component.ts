
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchPlanet } from '../service/searchPlanet';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  SearchName : SearchPlanet = new SearchPlanet();
  @Output() onSearchByName = new EventEmitter<SearchPlanet>();

  constructor() { }

  ngOnInit(): void {
  }
  searchByName() {
    this.onSearchByName.emit(this.SearchName);
    this.SearchName = new SearchPlanet();
  }

}
