import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: User;

  get getSelectedUser(): User | undefined {
    return this.selectedUser
      ? this.users.find((user) => user.id === this.selectedUser!.id)
      : undefined;
  }

  onSelectUser(id: string) {
    const newUserId: User | undefined = this.users.find(
      (user) => user.id === id
    );
    this.selectedUser = newUserId;
  }
}
