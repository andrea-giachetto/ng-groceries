import { AppState } from './../../../app.module';
import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector } from "@ngrx/store";

export const getRouter = createFeatureSelector<AppState, RouterReducerState>('router');
