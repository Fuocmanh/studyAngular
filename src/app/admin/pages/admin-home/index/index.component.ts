import {Component} from '@angular/core';
import {AdminHomeService} from "../admin-home.service";
import {SweetAlertService} from "../../../../helper/sweet-alert.service";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    items: any[] = [];
    protected module: string = "users/";

    constructor(private adminHomeService: AdminHomeService, private sweetAlert: SweetAlertService) {
    }

    ngOnInit() {
        this.adminHomeService.getList(this.module).subscribe(
            response => {
                // @ts-ignore
                this.items = response.data.data;
            }
        );
    }

    deleteItem(itemId: number) {
        this.adminHomeService.deleteItem(this.module, itemId).subscribe(
            response => {
                this.sweetAlert.Toast.fire('Xoá thành công', '', 'success')
                this.items = this.items.filter(item => item.id !== itemId);
            },
            error => {
                console.log('Error:', error);
            }
        );
    }
}
