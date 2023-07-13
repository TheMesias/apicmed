from bs4 import BeautifulSoup
import requests
import re
import json

# Funcion para obtener el listado de capitulos
def contenido_tabla(URL):

    # obtener HTML de la pagina web
    html_content = requests.get(URL).text
    soup = BeautifulSoup(html_content, "html.parser")

    # obtener tabla con todos los capitulos
    tabla = soup.find('table', class_='chaptersList')

    # obtener array con cada uno de los capítulos en cada posicion
    lista = tabla.find_all('tr')

    obj = []

    # realizar extraccion de los datos de cada capitulo
    # construccion de las propyedades y valores del diccioinario de capitulos
    for x in lista:
        fila = x.find_all('b')
        enlace = x.find('a')
        datos = {'capitulo': (fila[0].string)[:-2], 'rango': (fila[1].string)
                 [1:-1], 'titulo':  ((fila[2].string).replace('\r\n\t\t\t\t\t\t\t', ' ')), 
                 "enlace": ('https://eciemaps.mscbs.gob.es/ecieMaps/' + (enlace['href']).replace('../../../', ''))}

        obj.append(datos)

    return obj

# Funcion para obtener el diccionario de las enfermedades del cie10
def get_cie10(contenido, obj_cie10):
    registros = 0 #contador para conocer el numero de registros obtenidos
    
    # buscar enfermedades por cada capitulo
    for key in contenido:
        
        # obtener HTML de la pagina web del capítulo
        url = key['enlace']
        print(f"Extrayendo datos del CAP {key['capitulo']}: {key['titulo']} ...")
        html_content = requests.get(url).text
        soup = BeautifulSoup(html_content, "html.parser")

        # obtener los elementos generales correspondientes a cie10_3
        cie10_3 = soup.find_all('div', class_='tlCode0Description')
    
        # obtener los elementos generales correspondientes a cie10_4
        cie10_4 = soup.find_all('div', class_='tlCode1Description')

        obj_cid10_4, obj_cid10_3 = [], []

        # construccion de diccionarios cie10 3
        for y in cie10_3:
            u_cie10_3 = (y.get_text()).strip()
            cod_cie10_3 = u_cie10_3[0:3]
            descrip_cie10_3 = u_cie10_3[5:].rstrip()

            datos = {'cod_cie10_3': cod_cie10_3,'descrip_cie10_3': descrip_cie10_3}
            obj_cid10_3.append(datos)

        # construccion de diccionarios cie10 4
        for x in cie10_4:

            u_cie10_4 = (x.get_text()).strip()
            u_cie10_4 = re.sub(r'\(([()]*[^()]*)\)|','', u_cie10_4).replace('\n▲', '')
            cod_cie10_4 = u_cie10_4[0:5]
            descrip_cie10_4 = u_cie10_4[7:]

            datos = {'capitulo': key['capitulo'], 'nom_capitulo': key['titulo'], 'cod_cie10_3': cod_cie10_4[0:3],
                             'descrip_cie10_3': '', 'cod_cie10_4': cod_cie10_4, 'descrip_cie10_4': descrip_cie10_4}
            
            registros = registros + 1
            obj_cid10_4.append(datos)

        # construccion de diccionario de enfermedades del 10, en base a diccionarios cie10 3 y cie10 4
        construir_objeto_cie10(obj_cid10_3, obj_cid10_4, obj_cie10)
    
    print('La cantidad de registros obtenidos es: ', registros)
    return obj_cie10 # diccionario de enfermedades cie10 completo

# Funcion para construir el diccionario de enfermedades del cie 10
def construir_objeto_cie10(cie10_3, cie10_4, obj_cie10):

    # asignar descripcion del cie10 3 al cie10 4
    for x in cie10_4:
        for y in cie10_3:
            if x['cod_cie10_3'] == y['cod_cie10_3']:
                x['descrip_cie10_3'] = y['descrip_cie10_3']
                #print(f"cie10 4 {x['cod_cie10_4']} => {x['cod_cie10_3']} == {y['cod_cie10_3']}")

        obj_cie10.append(x) # agregar nueva enfermedad cie10 al diccionario cie 10

if __name__ == "__main__":
    obj_cie10 = []

    # obtener del diccionario de capitulos del cie10
    contenido = contenido_tabla(
        "https://eciemaps.mscbs.gob.es/ecieMaps/additional_content/accessible/cie10/tabular_lists_deseases.html#Top")
    
    # obtener del diccionario de enfermedades del cie10
    cie10 = get_cie10(contenido, obj_cie10)
    
    # crear archivo .json con las enfermedades del cie 10
    with open('cie10_datos.json', 'w', encoding='latin-1') as f:
        json.dump(cie10, f, indent=8, ensure_ascii=False)
