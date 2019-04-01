import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { MemberListComponent } from 'src/app/members/member-list/member-list.component';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { ListsComponent } from 'src/app/lists/lists.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { MemberDetailComponent } from 'src/app/members/member-detail/member-detail.component';
import { MemberDetailResolver } from 'src/app/_resolvers/member-detail.resolver';
import { MemberListResolver } from 'src/app/_resolvers/member-list.resolver';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver}},
            { path: 'members/:id', component: MemberDetailComponent,
                resolve: {user: MemberDetailResolver}},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
