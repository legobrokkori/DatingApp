import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router,
     private alertify: AlertifyService) {}

    resolve(router: ActivatedRouteSnapshot): Observable<User> {
        return this.userService.getUser(router.params['id']).pipe(
            catchError(error => {
                this.alertify.error('Ploblem retrieving data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
