import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

//. componentes de applicación
import { AppComponent } from './app.component';
import { BirthDatePipe } from './birthdate.pipe';

//. Loading Spinner
import { LoadingOverlay } from './loading/loading-overlay.component';

//. navegación
import { AppRoutingModule, routedComponents } from './app.route';

//. servicio de datos
import { UserService, User } from './service/index';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    LoadingOverlay,
    BirthDatePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
