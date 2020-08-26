class Interfaze {
  constructor() {
    this.init();
    this.listadoEventos = document.querySelector("#resultado-eventos");
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
  imprimirResultados(eventos) {
    const listaEventos = eventos._embedded.events;
    listaEventos.forEach((evento) => {
      this.listadoEventos.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <img class="img-fluid" src="${evento.images[0].url}"/>
                    </div>
                    <div class="card-body">
                        <div class="card-text">
                            <h2 class="text-center">${evento.name}</h2>
                            <p class="lead text-info">Información del Evento</p>
                            <p>${
                              evento.description
                                ? evento.description.substring(0, 280)
                                : ""
                            }...</p>
                            <a href="${
                              evento.url
                            }" target="_blank" class="btn btn-success btn-block mt-4">Más Información</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
  }
  limpiarResultados() {
    this.listadoEventos.innerHTML = "";
  }
  mostrarMensaje(mensaje, tipo) {
    const div = document.createElement("div");
    div.classList = tipo;
    div.appendChild(document.createTextNode(mensaje));
    document.querySelector("#buscador").appendChild(div);
    setTimeout(() => {
      document.querySelector("#buscador > div.alert").remove();
    }, 3000);
  }
}
