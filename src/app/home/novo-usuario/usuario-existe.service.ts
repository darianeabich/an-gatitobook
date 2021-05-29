import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { NovoUsuarioService } from './novo-usuario.service';
import { first, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private novoUsuarioService: NovoUsuarioService) { }

  /**
   * Método que retornará uma função com o Objeto com chave-valor ou erro ou nulo
   * É uma função assíncrona que retornará um Observable com o valor. Na verdade,
   * serão dois Observables, um que representa a digitação do usuário e outro que
   * representa uma requisição em um servidor. A requisição retornará true or false
   * e esse valor deve ser convertido em objeto de erro ou nulo.
   */
  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.novoUsuarioService.verificaUsuarioExistente(nomeUsuario)
          ),
          map((usuarioExiste) =>
            (usuarioExiste ? {usuarioExistente: true} : null
          )),
          first()
      );
    };
  }
}
