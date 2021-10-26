import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {UserLdap} from "../app/model/user-ldap";
import {UsersService} from "../app/service/users.service";

@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.css']
})
export class LdapDetailComponent implements OnInit {

  user: UserLdap;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');

    this.usersService.getUser(login).subscribe(
      user => { this.user = user; console.log("LdapDetail getUser ="); console.log(user);}
    )
  }

}
