import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
interface ContactDATA {
  // {id: number, name:string, status: string }
  id: number;
  name: string;
  status: string;
}
//resolver for displaying data in routing for async process
export class ContactResolver implements Resolve<ContactDATA> {
  contactData = {
    id: 132,
    name: 'vergel',
    status: 'married'
  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<ContactDATA> |
  Promise<ContactDATA> | ContactDATA {
    return this.contactData;
  }
}
