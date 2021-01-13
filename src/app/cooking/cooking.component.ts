import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import Data from '../data/cook-recipes';
import {RecipeDialogComponent} from '../recipe-dialog/recipe-dialog.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cooking',
  templateUrl: './cooking.component.html',
  styleUrls: ['./cooking.component.css']
})
export class CookingComponent implements OnInit {
  data: any[] = [];
  filterName: string;
  constructor(private modalService: NgbModal) {
    this.data = Data;
  }

  ngOnInit() {
  }

  openRecipe(name: any) {
    const modalRef = this.modalService.open(RecipeDialogComponent);
    modalRef.componentInstance.lesson = name;
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
