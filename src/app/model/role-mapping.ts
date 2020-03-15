import { IRole } from '../model';

const Roles: IRole[] = [];
let Role: IRole;
let code: string;

export const mapKeyValueRole = (data: string): IRole[] => {
    const arr = data.split(',').map(item => {
        return item.trim();
      });
    arr.forEach(obj => {
        code = '';
        Role = undefined;
        obj.split(' ').forEach(item => {
          code = code + item[0];
        });
        Role = {
          RoleName: obj,
          RoleCode: code
        };
        Roles.push(Role);
      });
    return Roles;
};
