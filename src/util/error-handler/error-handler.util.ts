import { ErrorHandler } from '@angular/core';

export class ErrorHandlerUtil implements ErrorHandler {
  constructor() { }
  handleError(error: any): void {
    console.error('TCL: ErrorHandlerUtil -> error', error);
  }

}
