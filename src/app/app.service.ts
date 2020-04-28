import { Injectable } from "@angular/core";
import { IAgentDetail } from "./models";
import { Observable } from "rxjs";
import {getDetail} from "./agent-detail.fixture";

@Injectable({
  providedIn: "root",
})
export class AppService {

  constructor() {}

  getAgentDetail(): Observable<IAgentDetail[]> {
    return getDetail();
  }
}
