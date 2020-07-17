import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  users: any[] = []

  title = 'Ana Sofia De la Cruz Navarro'
  constructor(protected userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser2()
    .subscribe(
      (data) => {
        console.log(data)
        this.users = data['results']
      },
      (error) => {
        console.error(error)
      }
    )
  }

}
