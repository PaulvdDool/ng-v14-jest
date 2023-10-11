import { Injectable } from "@angular/core";

export enum Status {
  IDLE,
  PENDING,
  DONE,
  ERROR
}

export interface StoreState {
  loadingStatus: LoadingStatus;
}

export interface LoadingStatus {
  loading: Status;
}

@Injectable()
export class StoreService {
  static readonly initialLoadingStatus: LoadingStatus = {
    loading: Status.IDLE
  }

  static readonly initialState: StoreState = {
    loadingStatus: StoreService.initialLoadingStatus
  }

  constructor() {}

  setLoadingStatus( { key, status }: { key: string, status: Status }, state: StoreState ): StoreState {
    return {
      ...state,
      loadingStatus: {
        ...state.loadingStatus,
        [key]: status
      }
    }
  }
}
