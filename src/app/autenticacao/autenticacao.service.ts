import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor(private httpClient: HttpClient, private usuarioService: UsuarioService) { }
  //implementar método de autenticaçao
  autentica(usuario: string, senha: string): Observable<HttpResponse<any>> {
    return this.httpClient.post(`${API}/user/login`,
      {
        userName: usuario,
        password: senha,
      },
      { observe: 'response' } //não pega somente o body, pega o header também
    ).pipe(
      tap((res) => {
        const authToken = res.headers.get('x-access-token') ?? ''; //se houver salva o token, senão vazio
        this.usuarioService.salvaToken(authToken); //salva
      })
    );
  }
}
