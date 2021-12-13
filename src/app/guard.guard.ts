import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { EquipmentsDetailComponent } from './equipments/equipments-detail/equipments-detail.component';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean 
    | UrlTree> 
    | Promise<boolean 
    | UrlTree> 
    | boolean 
    | UrlTree {
      // Protection method for invalid equipments or user want to acces or modify equipment id in url 
      const equipmentsID = Number(route.paramMap.get('equipmentsID'))
      if (isNaN(equipmentsID) || equipmentsID < 1) {
        alert('Invalid equipment !!!');
        this.router.navigate(['/equipments']);
        return false;
      }
    return true;
  }
  
}
