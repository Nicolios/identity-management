import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapAddComponent} from "./ldap-add/ldap-add.component";
import {LdapEditComponent} from "./ldap-edit/ldap-edit.component";
import {AlertComponent} from "../share/alert/alert.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppMaterialModule} from "../app-material.module";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule, InMemoryBackendConfig} from "angular-in-memory-web-api";
import {InMemoryUsersService} from "../in-memory-users.service";


@NgModule({
  declarations: [
    LdapListComponent,
    LdapAddComponent,
    LdapEditComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    LdapManagementRoutingModule,
    MatSlideToggleModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryUsersService, {dataEncapsulation: false}
    )
  ]
})
export class LdapManagementModule { }
