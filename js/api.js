class Api {
  constructor(apikey) {
    this.apikey = apikey;
    this.ordenar = "date,asc";
  }
  async obtenerCategorias() {
    const responseClassifications = await fetch(
      `https://app.ticketmaster.com/discovery/v2/classifications?apikey=${this.apikey}`
    );
    const classifications = await responseClassifications.json();
    return classifications;
  }
  async obtenerResultados(keyword, classification) {
    const responseBusqueda = await fetch(
      `https://app.ticketmaster.com/discovery/v2/events?sort=${this.ordenar}&keyword=${keyword}&classificationId=${classification}&apikey=${this.apikey}`
    );
    const resultadoEventos = await responseBusqueda.json();
    return resultadoEventos;
  }
  async obtenerResultadoSugerido() {
    const responseSugerido = await fetch(
      `https://app.ticketmaster.com/discovery/v2/suggest?sort=${this.ordenar}&apikey=${this.apikey}`
    );
    const resultadoSugerido = responseSugerido.json();
    return resultadoSugerido;
  }
}
