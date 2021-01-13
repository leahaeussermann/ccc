import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import Data from '../data/cook-recipes';

@Component({
  selector: 'app-baking',
  templateUrl: './baking.component.html',
  styleUrls: ['./baking.component.css']
})
export class BakingComponent implements OnInit {

  data: any[] = [];
  filterName: string;
  constructor() {
    this.data = Data;
  }

  ngOnInit() {
  }

  openRecipe() {
    console.log('open recipe page');
  }

}

@Pipe({name: 'filterByName'})
export class FilterBakingNames implements PipeTransform {
  transform(listOfNames: any[], nameToFilter: string): any[] {
    if (!listOfNames) { return []; }
    if (!nameToFilter) { return listOfNames; }
    nameToFilter = nameToFilter.toLowerCase();
    return listOfNames.filter( it => {
      return it.recipe.label.toLowerCase().includes(nameToFilter);
    });
  }
}
