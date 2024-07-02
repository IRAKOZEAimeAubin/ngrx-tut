import { isDevMode } from "@angular/core";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { User } from "../model/user.model";
import { AuthActions } from "../action-types";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

// export const reducers: ActionReducerMap<AuthState> = {};

export const intialAuthState: AuthState = {
  user: undefined,
};

export const authReducer = createReducer(
  intialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user,
    };
  })
);

export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];
