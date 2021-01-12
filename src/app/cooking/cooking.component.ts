import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import Data from '../data/cook-recipes';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {

  names = ['daniel manuel', 'jhon', 'gorka', 'kepa'];
  data: any[] = [];
  filterName: string;
  constructor() {
    console.log(Data);
    this.data = Data;

  }

  ngOnInit() {

  }

}
@Pipe({name: 'filterByName'})
export class FilterNames implements PipeTransform {
  transform(listOfNames: any[], nameToFilter: string): any[] {
      if (!listOfNames) { return []; }
      if (!nameToFilter) { return listOfNames; }
      nameToFilter = nameToFilter.toLowerCase();
      return listOfNames.filter( it => {
        return it.recipe.label.toLowerCase().includes(nameToFilter);
      });
    }
}
