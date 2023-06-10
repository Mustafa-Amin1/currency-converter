import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isApiRequest = request.url.startsWith(environment.baseUrl);

    if (isApiRequest) {
      request = request.clone({
        setParams: {
          'access_key': '2d62f3e078a5bbc14f1d20578718758e'
        }
      });
    }

    return next.handle(request);
  }
}