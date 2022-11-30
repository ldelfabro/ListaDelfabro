import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoAprobacion'
})
export class EstadoAprobacionPipe implements PipeTransform {

  transform(value: boolean, ...args: string[]): string {

    if(value){
      return "APROBADO"
    }
    else
    {
      return "DESAPROBADO"
    }

  }

}
