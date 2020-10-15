import { v4 as uuid } from 'uuid';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const currentUser = this.authService.getCurrentUser();
        const isLoggedIn = currentUser && currentUser.data.token;
        
        // const isApiUrl = request.url.startsWith(config.apiUrl);
        // if (isLoggedIn && isApiUrl) {
        if (isLoggedIn) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.data.token}`
                }
            });
        }

        return next.handle(request);
    }
}
