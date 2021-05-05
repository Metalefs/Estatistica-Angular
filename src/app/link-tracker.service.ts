import { Injectable } from '@angular/core';

@Injectable()
export class LinkTrackerService {

  links: NavLink[];

}

export interface NavLink{
  route,
  shape,
  text,
  children?:NavLink[];
}
