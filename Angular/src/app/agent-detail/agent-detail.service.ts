import { Injectable } from "@angular/core";
import { IAgentInfo, IAgentUpdate } from "./models";
import { Observable, observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AgentDetailService {
  isNodeJS: boolean = true;
  private AgentDetails: IAgentInfo[] = [
    {
      SN: 1,
      Name: "Ashley Briggs",
      PhoneNumber: "857-526-149",
      Email: "ashley.briggs@gmail.co",
    },
    {
      SN: 2,
      Name: "Carl Jenkins",
      PhoneNumber: "586-526-149",
      Email: "carl.jenkins@gmail.com",
    },
    {
      SN: 3,
      Name: "Bertha Martin",
      PhoneNumber: "263-526-149",
      Email: "bertha.martin@gmail.com",
    },
    {
      SN: 4,
      Name: "Stacie Hall",
      PhoneNumber: "456-526-149",
      Email: "stacie.hall@gmail.com",
    },
    {
      SN: 5,
      Name: "Amanda Jones",
      PhoneNumber: "678-526-149",
      Email: "amanda.jones@gmail.com",
    },
    {
      SN: 6,
      Name: "Ashley Jones",
      PhoneNumber: "678-526-149",
      Email: "ashley.jones.com",
    },
  ];
  AgentDetailCopy: IAgentInfo[] = this.AgentDetails.slice();
  constructor(private http: HttpClient) {}

  getAgentDetail(): Observable<IAgentInfo[]> {
    if (this.isNodeJS) {
      return this.http.get<IAgentInfo[]>(
        "http://localhost:3000/irop/agentsDetail"
      );
    } else {
      return new Observable<IAgentInfo[]>((observable) => {
        observable.next(this.AgentDetails.slice());
      });
    }
  }
  checkAgentDetail(Agent): boolean {
    for (let i = 0; i < this.AgentDetails.length; i++) {
      if (this.AgentDetails[i].SN === Agent.SN) {
        return false;
      }
    }
    return true;
  }

  postAgentDetail(Agent: IAgentInfo): Observable<IAgentUpdate> {
    if (this.isNodeJS) {
      return this.http.post<IAgentUpdate>(
        "http://localhost:3000/irop/agentsDetail",
        Agent
      );
    } else {
      if (this.checkAgentDetail(Agent)) {
        this.AgentDetails.push(Agent);
        return new Observable<IAgentUpdate>((observer) =>
          observer.next({ status: true })
        );
      } else {
        return new Observable<IAgentUpdate>((observer) =>
          observer.next({ status: false })
        );
      }
    }
  }

  resetAgentDetail(): Observable<IAgentInfo[]> {
    if (this.isNodeJS) {
      return this.http.post<IAgentInfo[]>(
        "http://localhost:3000/irop/updateDetail",
        this.AgentDetails
      );
    } else {
      this.AgentDetails = this.AgentDetailCopy.slice();
      return new Observable<IAgentInfo[]>((observer) =>
        observer.next(this.AgentDetails)
      );
    }
  }
}
