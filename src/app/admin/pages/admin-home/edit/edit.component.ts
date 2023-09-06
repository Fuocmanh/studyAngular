import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminHomeService} from "../admin-home.service";
import {ItemAdmin} from "../item.interface";
import {DefaultItemAdmin} from "../DefaultItemAdmin";
import {SweetAlertService} from "../../../../helper/sweet-alert.service";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
    public item: ItemAdmin = new DefaultItemAdmin;
    public routePath: string = "create";
    private module: string = "users/";
    // @ts-ignore
    public method: boolean;

    constructor(private adminHomeService: AdminHomeService, private route: ActivatedRoute, private router: Router, private sweetAlert: SweetAlertService) {
    }

    ngOnInit() {
        // @ts-ignore
        this.method = this.routePath == this.route.snapshot.routeConfig.path
        if (!this.method) {
            this.adminHomeService.method = "update"
            this.sweetAlert.msg = "Sửa"
            this.route.params.subscribe(params => {
                const itemId = params['id'];
                this.adminHomeService.findId(this.module, itemId).subscribe(
                    response => {
                        // @ts-ignore
                        this.item = response.data;
                    }
                );
            });
        } else {
            this.adminHomeService.method = "store"
            this.sweetAlert.msg = "Thêm"
        }
    }

    storeOrUpdate() {
        // @ts-ignore
        this.adminHomeService.storeOrUpdate(this.module, this.item, this.item.id).subscribe(
            response => {
                this.sweetAlert.Toast.fire(`${this.sweetAlert.msg} thành công`, '', 'success')
                this.router.navigateByUrl('/admin');
            }
        );
    }

    valueChangeTo(valueChange: string, name: string) {
        const keys: string[] = Object.keys(this.item);
        for (const key of keys) {
            if (key === name) {
                this.item[name] = valueChange;
            }
        }
    }

}
