import { IAgentDetail } from "./models";
import { Observable } from 'rxjs';

const AgentDetail: IAgentDetail[] = [
    {
      Name: "Agent A",
      Phone: [9785254556, 8564759632, 7854963214],
      Utilities: [
        {
          Type: "Suger",
          Amount: [
            {
              UtilityName: "Suger",
              Catageries: "A",
            },
            {
              UtilityName: "Suger",
              Catageries: "B",
            },
            {
              UtilityName: "Suger",
              Catageries: "C",
            },
          ],
        },
        {
          Type: "Oil",
          Amount: [
            {
              UtilityName: "Oil",
              Catageries: "A",
            },
            {
              UtilityName: "Oil",
              Catageries: "B",
            },
            {
              UtilityName: "Oil",
              Catageries: "C",
            },
          ],
        },
      ],
    },
    {
      Name: "Agent B",
      Phone: [8574965879],
      Utilities: [
        {
          Type: "Banana",
          Amount: [
            {
              UtilityName: "Banana",
              Catageries: "A",
            },
            {
              UtilityName: "Banana",
              Catageries: "B",
            },
            {
              UtilityName: "Banana",
              Catageries: "C",
            },
          ],
        },
        {
          Type: "Apple",
          Amount: [
            {
              UtilityName: "Apple",
              Catageries: "A",
            },
            {
              UtilityName: "Apple",
              Catageries: "B",
            },
            {
              UtilityName: "Apple",
              Catageries: "C",
            },
          ],
        },
      ],
    },
  ];

export const getDetail = (): Observable<IAgentDetail[]> => {
    return new Observable((observer) => observer.next(AgentDetail));
}