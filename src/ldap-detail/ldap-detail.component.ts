import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {UserLdap} from "../app/model/user-ldap";
import {UsersService} from "../app/service/users.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-ldap-detail',
  templateUrl: './ldap-detail.component.html',
  styleUrls: ['./ldap-detail.component.css']
})
export class LdapDetailComponent implements OnInit {

  user: UserLdap;
  processLoadRunning = false;
  processValidateRunning = false;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser(): void {
    const login = this.route.snapshot.paramMap.get('id');

    console.log("getUser= " + login);
  }

  private formGetValue(name: string): any {return null; }
  goToLdap(): void{
    this.router.navigate(['user/list']);
  }

  onSubmitForm(): void{}
  updateLogin(): void{}
  updateMail(): void{}
  isFormValid(): boolean {return false; }

}
