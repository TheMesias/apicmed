
export function vQuitarEspacios(entrada) {
    let entradaSinEspacios = entrada.trim();
    return entradaSinEspacios;
}

export function vSoloLetrasEspacio(entrada) {
    let valido = true;
    if (!/^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

export function vNumEnterosDecimales(entrada) {
    let valido = true;
    if (!/^[0-9]*(\.?)[0-9]+$/.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

export function vNumEnteros(entrada) {
    let valido = true;
    if (!/^[0-9]*[0-9]+$/.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

export function vNumLetras1Espacio(entrada) {
    let valido = true;
    if (!/^[A-Za-z0-9\s]+$/g.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

export function vEmail(entrada) {
    /* Políticas:
        Acepta caracteres latinos y con tilde
    */
    let valido = true;
    if (!/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

export function vLongitudesString(entrada, longitud) {
    try {
        if (entrada.length >= 0 && entrada.length <= longitud) {
            return true
        }
        return false
    } catch (error) {
        return false
    }
}

export function vContrasena(entrada) {
    /* Políticas:
        Minimo 8 caracteres
        Maximo 15
        Al menos una letra mayúscula
        Al menos una letra minucula
        Al menos un dígito
        No espacios en blanco
        Al menos 1 caracter especial
    */
    let valido = true;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/.test(entrada.trim())) {
        valido = false;
    }
    return valido;
}

//entrada de solo fecha
export function vSoloFecha(entrada) {
    //llega -> 2022-07-14T10:08
    //en bd -> 2022-06-30 16:08:01.676-05
    try {
        let isValidDate = Date.parse(entrada);
        if (isValidDate) {
            return true
        } else {
            return false
        }
    } catch (error) {
        return false
    }
}

//solo hora
export function vSoloHorayMin(entrada) {
    //llega -> 2022-07-14T10:08
    //en bd -> 2022-06-30 16:08:01.676-05
    try {
        let date = new Date(entrada);
        if (!isNaN(date.getTime())) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}


//entrada de fecha con hora
export function vFechaTS(entrada) {
    //llega -> 2022-07-14T10:08
    //en bd -> 2022-06-30 16:08:01.676-05
    try {
        let esFecha = new Date(entrada)
        let fechaYHora = entrada.split('T')
        let fechaYHora2 = entrada.split(' ')
        let esFecha2 = new Date(entrada)
        if (!isNaN(esFecha.getHours()) && fechaYHora[0] && fechaYHora[1]) {
            return true
        }else if(!isNaN(esFecha2.getHours()) && fechaYHora2[0] && fechaYHora2[1]){
            return true
        }
        else {
            return false
        }
    } catch (error) {
        return false
    }
}

//char de uno
export function vCharUno(entrada) {
    if (entrada.length == 1) return true

    return false
}



export function vCedula(entrada) {
    var cedula = entrada;

    //Preguntamos si la cedula consta de 10 digitos
    if (cedula.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = cedula.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = cedula.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(cedula.substring(1, 2)) + parseInt(cedula.substring(3, 4)) + parseInt(cedula.substring(5, 6)) + parseInt(cedula.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = cedula.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = cedula.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = cedula.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = cedula.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = cedula.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10)
                var digito_validador = 0;

            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador == ultimo_digito) {
                console.log('la cedula:' + cedula + ' es correcta');
                return true
            } else {
                console.log('la cedula:' + cedula + ' es incorrecta');
                return false
            }

        } else {
            // imprimimos en consola si la region no pertenece
            console.log('Esta cedula no pertenece a ninguna region');
            return false
        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        console.log('Esta cedula tiene menos de 10 Digitos');
        return false
    }
}

export function vSexo(sexo) {
    if (sexo === "M" || sexo === "F") {
        return true;
    } else {
        return false;
    }
}

export function vEstadoCivil(estadoCivil) {
    if (estadoCivil === "S" || estadoCivil === "C" || estadoCivil === "D" || estadoCivil === "V") {
        return true;
    } else {
        return false;
    }
}