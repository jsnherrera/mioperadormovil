export class PnnDTO {
  constructor(
    public clave_censal: string,
    public poblacion: string,
    public municipio: string,
    public estado: string,
    public nir: string,
    public serie: string,
    public numeracion_inicial: string,
    public numeracion_final: string,
    public razon_social: string,
    public nombre_corto: string,
    public id_operador: string
  ) {

  }
}
