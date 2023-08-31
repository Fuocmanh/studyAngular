import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./client/pages/home/home.component";
import {LoginComponent} from "./client/pages/login/login.component";
import {RegisterComponent} from "./client/pages/register/register.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'dang-nhap', component: LoginComponent},
    {path: 'dang-ky', component: RegisterComponent},
    {path: '**', component: NotFoundPageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
