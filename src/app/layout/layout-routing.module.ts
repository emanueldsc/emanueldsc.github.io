import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogComponent } from "../pages/blog/blog.component";
import { ContactComponent } from "../pages/contact/contact.component";
import { HomeComponent } from "../pages/home/home.component";
import { PortfolioComponent } from "../pages/profile/profile.component";
import { LayoutComponent } from "./layout/layout.component";

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', component: HomeComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'portfolio', component: PortfolioComponent },
            { path: 'blog', component: BlogComponent }
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }