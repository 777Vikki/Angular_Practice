import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { IAgentDetail, IUtility, IAmount } from '../models';

@Component({
  selector: 'app-form-array-set-value',
  templateUrl: './form-array-set-value.component.html',
  styleUrls: ['./form-array-set-value.component.css']
})
export class FormArraySetValueComponent implements OnInit {
  
  agentForm: FormGroup;
  AgentData: IAgentDetail[];

  constructor(private fb: FormBuilder, private _appService: AppService) { }

  ngOnInit() {
    this._appService.getAgentDetail().subscribe((res: IAgentDetail[]) => {
      this.AgentData = res;
      console.log(res);
      this.createAgentForm(res);
    });
  }
  
  createAmountArray(amount: IAmount[]) {
    const amountArray = this.fb.array([]);
    amount.forEach(obj => {
      amountArray.push(this.fb.group({
        Catageries: obj.Catageries,
        UtilityName: obj.UtilityName
      }));
    });
    return amountArray;
  }

  createUtilitiesArray(Utility: IUtility[]) {
    const utilityArray = this.fb.array([]);
    Utility.forEach(obj => {
      utilityArray.push(this.fb.group({
        Type: obj.Type,
        Amount: this.createAmountArray(obj.Amount)
      }));
    });
    return utilityArray;
  }

  createPhoneArray(phoneNo: number[]) {
    const phoneNoArray = this.fb.array([]);
    phoneNo.forEach(phoneNumber => {
      phoneNoArray.push(this.fb.control(phoneNumber));
    });
    return phoneNoArray;
  }

  createAgentArray(agentInfo: IAgentDetail[]) {
    const agentArray = this.fb.array([]);
    agentInfo.forEach(obj => {
      agentArray.push(this.fb.group({
        Unit: 1,
        Value: false,
        Name: obj.Name,
        Phone: this.createPhoneArray(obj.Phone),
        Utilities: this.createUtilitiesArray(obj.Utilities)
      }));
    });
    return agentArray;
  }

  createAgentForm(AgentInfo: IAgentDetail[]) {
    this.agentForm = this.fb.group({
      agents: this.createAgentArray(AgentInfo)
    });
    console.log(this.agentForm.value);
  }

  get agents() {
    return this.agentForm.get("agents") as FormArray;
  }

  onSubmit() {
    console.log(this.agentForm.value);
  }
}
