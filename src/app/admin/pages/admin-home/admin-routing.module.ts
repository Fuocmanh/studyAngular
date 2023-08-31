import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminHomeComponent} from "./admin-home.component";
import {EditComponent} from "./edit/edit.component";
import {IndexComponent} from "./index/index.component";
import {CreateComponent} from "./create/create.component";

const adminRoutes: Routes = [
    {
        path: 'admin', component: AdminHomeComponent,
        children: [
            {path: '', component: IndexComponent},
            {path: 'create', component: CreateComponent},
            {path: 'edit/:id', component: EditComponent},
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
