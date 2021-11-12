import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroupRegistrationComponent } from './form-group-registration/form-group-registration.component';
import { RecapFormComponent } from './recap-form/recap-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {PhonePipe} from "./phone-pipe";
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HttpClientModule} from "@angular/common/http";
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './productState';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'products',
      loadChildren: () =>
        import('./products/products.module').then((m) => m.ProductsModule),
    },
    {
      path: 'signup',
      component: FormGroupRegistrationComponent
    },
  ];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        FormGroupRegistrationComponent,
        RecapFormComponent,
        PhonePipe,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatRadioModule,
        MatSidenavModule,
        MatCardModule,
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
        FormsModule,
        NgxsModule.forRoot([ProductState]),
        RouterModule.forRoot(routes)
    ],
    providers: [
        {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
