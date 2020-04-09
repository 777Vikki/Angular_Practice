import { Component, OnInit } from "@angular/core";
import { AgentDetailService } from "../agent-detail.service";
import { IAgentInfo, IAgentUpdate } from "../models";

@Component({
  selector: "app-agent-details",
  templateUrl: "./agent-details.component.html",
  styleUrls: ["./agent-details.component.css"],
})
export class AgentDetailsComponent implements OnInit {
  agentDetails: IAgentInfo[];
  ascendingSwitch: boolean = true;
  descendingSwitch: boolean = false;
  constructor(private _agentDetailService: AgentDetailService) {}

  ngOnInit() {
    this._agentDetailService.getAgentDetail().subscribe((res: IAgentInfo[]) => {
      this.agentDetails = res.slice();
    });
  }

  onAscending() {
    if (this.ascendingSwitch) {
      this.agentDetails.sort((a, b) => {
        return a.Name.localeCompare(b.Name);
      });
    }
    this.ascendingSwitch = false;
    this.descendingSwitch = true;
  }

  onDescending() {
    if (this.descendingSwitch) {
      this.agentDetails.sort((a, b) => {
        return b.Name.localeCompare(a.Name);
      });
    }
    this.descendingSwitch = false;
    this.ascendingSwitch = true;
  }

  onPostAgentDetail1() {
    const agent: IAgentInfo = {
      SN: 7,
      Name: "Vivek Maurya",
      PhoneNumber: "485-148-5647",
      Email: "vivek.maurya@abc.com",
    };
    this._agentDetailService.postAgentDetail(agent).subscribe(res => {
      console.log(res);
    });
  }

  onPostAgentDetail2() {
    const agent: IAgentInfo = {
      SN: 8,
      Name: "Mayank Kumar",
      PhoneNumber: "115-148-5647",
      Email: "mayank.kumar@abc.com",
    };
    this._agentDetailService.postAgentDetail(agent).subscribe(res => {
      console.log(res);
    });
  }

  onPostAgentDetail3() {
    const agent: IAgentInfo = {
      SN: 9,
      Name: "Ramesh Chand",
      PhoneNumber: "365-148-5647",
      Email: "ramesh.chand@abc.com",
    };
    this._agentDetailService.postAgentDetail(agent).subscribe((res: IAgentUpdate) => {
      console.log(res);
    });
  }

  onGetAgentDetail() {
    this._agentDetailService.getAgentDetail().subscribe((res: IAgentInfo[]) => {
      this.agentDetails = res.slice();
    });
  }

  onResetAgentDetail() {
    this._agentDetailService.resetAgentDetail().subscribe((res: IAgentInfo[]) => {
      this.agentDetails = res;
    });
  }
}
