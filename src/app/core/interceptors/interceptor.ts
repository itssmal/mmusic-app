import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {from} from 'rxjs';
import {Storage} from "@ionic/storage";

@Injectable()
export class AppInterceptor implements HttpInterceptor {

    private token

    constructor(private storage: Storage) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (req.url.endsWith('token')) {
            return next.handle(req)
        } else return from(this.handle(req, next))
    }

    async handle(request: HttpRequest<any>, next: HttpHandler) {
        await this.getToken()
        const req =  request.clone({
            headers: request.headers
                .set('Authorization', `Bearer ${this.token}`)
        });

        return next.handle(req).toPromise()
    }

    async getToken() {
        await this.storage.get('access_token').then(res => {
            this.token = res
        })
    }
}
