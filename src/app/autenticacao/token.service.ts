import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  //não tem construtor, pois não será instanciado, será criado um serviço puro

  /**
   *
   * @returns Retorna a chave, senão vazio.
   */
  retornaToken() {
    return localStorage.getItem(KEY) ?? '';
  };

  /**
   * Recebe o token como parâmetro e salva.
   */
  salvaToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  /**
   * Remove o token
   */
  excluiToken() {
    localStorage.removeItem(KEY);
  }

  /**
   *
   * @returns Retorna se tem ou não token, mas não qual é ele.
   */
  possuiToken() {
    return !!this.retornaToken();
  }
}
