import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.css']
})
export class RecipeDialogComponent {

  @Input() lesson: any;
  constructor(public activeModal: NgbActiveModal) { }
}
