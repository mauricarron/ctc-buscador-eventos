const API = new Api("AvJAoARuWG1QQAxsQvdoexyt17vz3vMs");
const UI = new Interfaze();

UI.imprimirCategorias();

document.querySelector("input#buscarBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const $inputBusqueda = document.querySelector("input#evento");
  const keyword = $inputBusqueda.value;
  const $inputCategoria = document.querySelector("select#listado-categorias");
  const classificationId =
    $inputCategoria.options[$inputCategoria.selectedIndex].value;

  UI.limpiarResultados();
  if (keyword !== "") {
    API.obtenerResultados(keyword, classificationId).then((response) => {
      if (response.page.totalElements > 0) {
        UI.imprimirResultados(response);
      } else {
        UI.mostrarMensaje(
          "No se encontraron resultados",
          "alert alert-warning mt-4"
        );
      }
    });
  } else {
    API.obtenerResultadoSugerido().then((response) => {
      UI.imprimirResultados(response);
      console.log(response);
    });
  }
});
