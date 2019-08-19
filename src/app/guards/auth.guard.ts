import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    console.log("VERIFY");
    console.log(localStorage['token']);

        if (localStorage['token'] == undefined) {
            this.router.navigate(['/perfil']);
        }

        if (localStorage['token'] != 'null') {
            return true;
        } else {
            this.router.navigate(['/login']);
        }

    }
}

   

//     canActivate(route: ActivatedRouteSnapshot,
// state: RouterStateSnapshot
//     ): Observable<boolean> | boolean {

//         console.log("VERIFY");
//         console.log(localStorage['token']);
//     }

//     if (localStorage['token'] == undefined) {
//         this.router.navigate(['/login']);
//     }

//     if (localStorage['token'] != 'null') {
//         return true;
//     } else {
//         this.router.navigate(['/login']);
//     }
// }

