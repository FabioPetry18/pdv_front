import { Injectable } from "@angular/core";
import { HttpService } from './http.service';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpService: HttpService) {}

  signUp(credentials: { usuario: string; senha: string }): Observable<any> {
    return this.httpService.post("/login/autenticar", credentials);
  }
}
