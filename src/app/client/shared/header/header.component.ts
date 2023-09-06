import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    items: any[] = [
        {
            name: "Trang chủ",
            href: ""
        },
        {
            name: "admin",
            href: "/admin"
        },
        {
            name: "Trang chủ",
            href: ""
        },
        {
            name: "admin",
            href: "/admin"
        },
        {
            name: "Trang chủ",
            href: ""
        },
        {
            name: "admin",
            href: "/admin"
        },
        {
            name: "admin",
            href: "/admin"
        },
    ];

    ngOnInit(): void {

    }
}
