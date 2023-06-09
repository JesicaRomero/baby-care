import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) { }

  success(message: string) {
    this.toastr.success(message, '', { toastClass: 'toast-success' });
  }

  warning(message: string) {
    this.toastr.error(message, '', { toastClass: 'toast-warning' });
  }

  error(message: string) {
    this.toastr.error(message, '', { toastClass: 'toast-error' });
  }
}
