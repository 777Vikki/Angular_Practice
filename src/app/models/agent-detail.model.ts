import {IUtility} from '../models';

export interface IAgentDetail {
    Name: string;
    Phone: number[];
    Utilities: IUtility[];
}