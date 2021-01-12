import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {

  names = ['daniel manuel', 'jhon', 'gorka', 'kepa'];
  filterName: string;
  namesFiltered = [];
  constructor() { }

  ngOnInit() {
  }

}
@Pipe({name: 'filterByName'})
export class FilterNames implements PipeTransform {
  transform(listOfNames: string[], nameToFilter: string): string[] {
    if (!listOfNames) { return null; }
    if (!nameToFilter) { return listOfNames; }

    return listOfNames.filter(n => n.indexOf(nameToFilter) >= 0);
  }
}
