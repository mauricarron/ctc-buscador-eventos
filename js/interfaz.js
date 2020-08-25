class Interfaze {
  constructor() {
    this.init();
    this.listadoEventos = document.querySelector("resultado-eventos");
  }
  init() {}
  imprimirCategorias() {
    const LISTA_CATEGORIAS = api.obtenerCategorias();
  }
}
