import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EEquipments } from '../equipment';
import { EquipmentsComponent } from '../equipments.component';

@Component({
  selector: 'app-equipments-detail',
  templateUrl: './equipments-detail.component.html',
  styleUrls: ['./equipments-detail.component.css']
})
export class EquipmentsDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  equipment: EEquipments | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    const equipmentsID = Number(this.route.snapshot.paramMap.get('equipmentsID'));
    this.pageTitle += `: ${equipmentsID}`;
  }

  // functie pentru buton de back care sa te aduca inapoi 
  // de pe pagina de equipment-detail la pagina de equipments
  onBack(): void {
    this.router.navigate(['/equipments']);
  }
}
