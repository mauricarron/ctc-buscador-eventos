class Api {
  constructor(apikey) {
    this.apikey = apikey;
    this.ordenar = "date";
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
      `https://app.ticketmaster.com/discovery/v2/events?keyword=${keyword}&classificationId=${classification}&apikey=${this.apikey}`
    );
    const resultadoEventos = await responseBusqueda.json();
    return resultadoEventos;
  }
  async obtenerResultadoSugerido() {
    const resposeSugerido = await fetch(
      `https://app.ticketmaster.com/discovery/v2/suggest?apikey=${this.apikey}`
    );
    const resultadoSugerido = resposeSugerido.json();
    return resultadoSugerido;
  }
}
