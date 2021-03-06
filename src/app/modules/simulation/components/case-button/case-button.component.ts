import { Component, Input, OnInit } from '@angular/core';
import { ChildActivationStart } from '@angular/router';
import { CasePossibility } from 'models/Case';
import { CaseService } from 'src/app/services/case.service';

@Component({
  selector: 'app-case-button',
  templateUrl: './case-button.component.html',
  styleUrls: ['./case-button.component.scss'],
})
export class CaseButtonComponent implements OnInit {
  @Input() casePosiblity: CasePossibility = {
    id: '',
    details: '',
    feedback: '',
    requiredToCheck: false,
    criticalFailure: false,
    resolvesSimulation: false,
  };
  @Input() isInModal = false;
  showModal = false;

  constructor(private caseService: CaseService) {}

  ngOnInit(): void {}

  buttonClicked() {
    if (!this.casePosiblity.subOptions) {
      this.caseService.handleCasePossiblity(this.casePosiblity);
    }
    this.showModal = !this.showModal;
  }
}
