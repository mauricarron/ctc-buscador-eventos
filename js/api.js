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
}
