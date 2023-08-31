import {Component} from '@angular/core';
import {AdminHomeService} from "../admin-home.service";


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    items: any[] = [];

    constructor(private adminHomeService: AdminHomeService) {
    }

    ngOnInit() {
        this.adminHomeService.getList().subscribe(
            response => {
                this.items = response;
            },
            error => {
                console.log('Error:', error);
            }
        );
    }

    deleteItem(itemId: number) {
// Xóa mục
        this.adminHomeService.deleteItem(itemId).subscribe(
            response => {
                console.log('Xóa thành công');
                this.items = this.items.filter(item => item.id !== itemId);
            },
            error => {
                console.log('Error:', error);
            }
        );
    }
}
