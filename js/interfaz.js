class Interfaze {
  constructor() {
    this.init();
    this.listadoEventos = document.querySelector("resultado-eventos");
  }
  init() {}
  imprimirCategorias() {
    const llamadoCategorias = API.obtenerCategorias().then((response) => {
      const listaCategorias = response._embedded.classifications;
      const $selectCategorias = document.querySelector("#listado-categorias");
      for (let i = 11; i <= 16; i++) {
        const option = document.createElement("option");
        option.value = listaCategorias[i].segment.id;
        option.appendChild(
          document.createTextNode(listaCategorias[i].segment.name)
        );
        $selectCategorias.appendChild(option);
      }
      document.querySelector('option[value="KZFzniwnSyZfZ7v7nl"]').remove();
    });
  }
}
