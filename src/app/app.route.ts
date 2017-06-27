import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/index';
import { UserEditComponent } from './user-edit/index';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
        path: 'users', component: UsersComponent },
        { path: 'users/add', component: UserEditComponent },
            { path: 'users/edit/:id', component: UserEditComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'users' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [UsersComponent, UserEditComponent];
