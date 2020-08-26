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

  if (keyword !== "") {
    API.obtenerResultados(keyword, classificationId).then((response) => {
      console.log(response);
    });
  } else {
    API.obtenerResultadoSugerido().then((response) => {
      console.log(response);
    });
  }
});
