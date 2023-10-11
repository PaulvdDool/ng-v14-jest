# Project

## Minimal reproduction
This repository is a minimal reproduction of an issue I'm running into with Jest.  
The app is an Angular v14 library with the same overall structure and configuration as the larger project that is showing the error.

## Error to reproduce
When running unit tests, a class initialisation is throwing an error.
```
TypeError: Cannot read properties of undefined (reading 'initialLoadingStatus')
```

The error happens in the `StoreService` file embedded in this project.
```angular2html
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
```

## How to reproduce the issue
1. Check out this repository
2. Run `npm install`
3. Run `npm run test`

Note that the current version has a build issue that is unrelated to the unit test issue. I'm still figuring that one out.
