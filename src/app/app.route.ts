import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserAddEditComponent } from './users/user-add-edit.component';

const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full' },
    {
        path: 'users', component: UsersComponent },
        { path: 'users/add', component: UserAddEditComponent },
            { path: 'users/edit/:id', component: UserAddEditComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'users' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [UsersComponent, UserAddEditComponent];
