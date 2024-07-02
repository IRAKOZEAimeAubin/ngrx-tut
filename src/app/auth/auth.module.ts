import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from "@ngrx/store";
import { AuthService } from "./auth.service";
import { EffectsModule } from "@ngrx/effects";
import { CommonModule } from "@angular/common";
import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import * as fromAuth from "./reducers";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([{ path: "", component: LoginComponent }]),
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer, {
      metaReducers: fromAuth.metaReducers,
    }),
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService],
    };
  }
}
