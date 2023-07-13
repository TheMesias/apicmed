//si es hombre, no presentar antecedentes ginecoobstetricos
export default async function validacionSexo(data){
    let sexo = data.sexo
    let tieneAntGineco = false
    if(sexo=='F')
        tieneAntGineco=true
    return tieneAntGineco;
}
