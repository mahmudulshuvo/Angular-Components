import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { PopupsComponent } from './popups/popups.component';
import { DatatableComponent } from './datatable/datatable.component';



const routes: Routes = [
    {
        path: '',
        component: FormsComponent
    },

    {
        path: 'navigation',
        component: NavigationComponent
    },

    {
        path: 'layout',
        component: LayoutComponent
    },

    {
        path: 'buttons',
        component: ButtonsComponent
    },

    {
        path: 'popups',
        component: PopupsComponent
    },

    {
        path: 'datatable',
        component: DatatableComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
