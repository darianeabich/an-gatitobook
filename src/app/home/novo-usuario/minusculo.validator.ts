import { AbstractControl } from "@angular/forms";

/**
 *
 * @param control
 * @returns true se o valor for realmente minúsculo e false caso não
 */
export function minusculoValidator(control: AbstractControl) {
  const valor = control.value as string;
  if (valor !== valor.toLowerCase()) {
    return { minusculo: true };
  } else {
    return null;
  }
};
