import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminHomeService} from "../admin-home.service";
import {ItemAdmin} from "../item";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
    public item: ItemAdmin = {
        id: 0,
        customer_name: '',
        address: '',
        phone: '',
        email: '',
        payment_method: '',
        status: 0
    };
    private _value: string = '';
    editForm: FormGroup;

    constructor(private adminHomeService: AdminHomeService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
        this.editForm = this.formBuilder.group({
            id: [],
            customer_name: [""],
            address: [""],
            phone: [""],
            email: [""],
            payment_method: [""],
            status: [""]
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const itemId = params['id']; // Chuyển đổi sang kiểu number nếu cần thiết
            this.adminHomeService.findId(itemId).subscribe(
                response => {
                    this.item = response;
                },
                error => {
                    console.log('Error:', error);
                }
            );
        });
    }

    update() {
        this.route.params.subscribe(params => {
            const itemId = params['id']; // Chuyển đổi sang kiểu number nếu cần thiết
            this.adminHomeService.update(itemId, this.item).subscribe(
                response => {
                    this.router.navigateByUrl('/admin');
                },
                error => {
                    console.log('Error:', error);
                }
            );
        });
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
