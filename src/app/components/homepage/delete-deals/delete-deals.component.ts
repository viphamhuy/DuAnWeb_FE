import { Component, OnInit } from '@angular/core';
import {ComponentsService} from '../../components.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-deals',
  templateUrl: './delete-deals.component.html',
  styleUrls: ['./delete-deals.component.scss']
})
export class DeleteDealsComponent implements OnInit {

  dealsList: any;
  idHouse: any;
  houseList: any;
  constructor(private componentsService: ComponentsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const idSearch = params.get('id');
      this.componentsService.findByIdDeals(idSearch).subscribe( result => {
        this.dealsList = result;
        console.log(this.dealsList);
      });
    });
  }
  deleteDeal() {
    this.updateHouse();
  }
  updateHouse() {
    const id = this.dealsList.house.idNha;
    const trangThai = 'Trống';
    this.componentsService.editHouseByTrangThai(id, trangThai).subscribe();
  }

}
