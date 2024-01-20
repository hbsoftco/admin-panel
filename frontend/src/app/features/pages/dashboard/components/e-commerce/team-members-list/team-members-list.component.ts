import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IUser } from '../../../../../../core/interfaces';

@Component({
  selector: 'app-team-members-list',
  templateUrl: './team-members-list.component.html',
  styleUrl: './team-members-list.component.scss'
})
export class TeamMembersListComponent {
  users: IUser[] = []
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.users = [
      {
        id: 1,
        name: 'Lucile Young',
        avatar: 'user8.jpg',
        username: '@lyoung4a',
        email: 'user8@hbsoft.org',
        role: 'Editor',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Jordan Stevenson',
        avatar: 'user9.jpg',
        username: '@jstevenson5c',
        email: 'user9@hbsoft.org',
        role: 'Admin',
        status: 'Inactive',
      },
      {
        id: 3,
        name: 'Francis Frank',
        avatar: 'user10.jpg',
        username: '@ffrank7e',
        email: 'user10@hbsoft.org',
        role: 'Maintainer',
        status: 'Active',
      },
      {
        id: 4,
        name: 'Phoebe Patterson',
        avatar: 'user11.jpg',
        username: '@ppatterson2g',
        email: 'user11@hbsoft.org',
        role: 'Author',
        status: 'Active',
      },
      {
        id: 5,
        name: 'James Andy',
        avatar: 'user1.jpg',
        username: '@andyjm32',
        email: 'user1@hbsoft.org',
        role: 'Admin',
        status: 'Inactive',
      },
      {
        id: 6,
        name: 'Sarah Taylor',
        avatar: 'user2.jpg',
        username: '@taylors32',
        email: 'user2@hbsoft.org',
        role: 'Editor',
        status: 'Active',
      },
      {
        id: 7,
        name: 'David Warner',
        avatar: 'user3.jpg',
        username: '@davidwabc2',
        email: 'user3@hbsoft.org',
        role: 'Author',
        status: 'Active',
      },
      {
        id: 8,
        name: 'Steven Smith',
        avatar: 'user4.jpg',
        username: '@ssmith542',
        email: 'user4@hbsoft.org',
        role: 'Maintainer',
        status: 'Active',
      },
    ]

    this.items = [
      {
        label: 'Add',
        icon: 'pi pi-plus-circle'
      },
      {
        label: 'Delete',
        icon: 'pi pi-trash'
      },
      {
        label: 'Refresh',
        icon: 'pi pi-refresh'
      },
    ]
  }

}
