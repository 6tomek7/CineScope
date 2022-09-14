import { MoviesService } from './../movies.service';
import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal',
  template: `
  <div class="modal-header">
      <h4 class="modal-title">Hello</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>
    <div class="modal-body">
      <p>
        Angular is asking for your permission to read and write data on your behalf. 
        This is necessary if you want to do things like maintain your lists or rate movies outside of TMDB.
      </p>
    </div>
    <div class="modal-footer">
      <a target="_blank" href="{{permission}}{{tokenNumber}}?redirect_to={{actuallyUrl}}/approved">
      <button class="btn btn-primary" >Approve</button></a>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>`

})
export class ModalComponent {
  actuallyUrl = window.location
  permission = environment.authenticate
  tokenNumber = this.moviesService.tokenRequest?.request_token
  constructor(
    public activeModal: NgbActiveModal,
    private moviesService: MoviesService) { }
}
