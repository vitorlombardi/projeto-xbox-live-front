export const Api = {
  baseURL: "http://localhost:3001",

  //url de jogos
  readAllJogos: () => Api.baseURL + "/jogos",
  createJogos: () => Api.baseURL + "/jogos",
  readJogoPorId: (id) => Api.baseURL + `/jogos/${id}`,
  updateJogoPorId: (id) => Api.baseURL + `/jogos/${id}`,

  //login url
  loginUrl: () => Api.baseURL + "/login",
  cadastroUrl:() => Api.baseURL + "/usuario",

  // url perfil
  readPerfilUrl: () => Api.baseURL + "/perfil",
  readPerfilId: (id) => Api.baseURL + `/perfil/${id}`,
  createPerfilUrl: () => Api.baseURL + "/perfil",

  //url generos
  readgenerosUrl: () => Api.baseURL + "/generos",
  readGeneroPorId: (id) => Api.baseURL + `/generos/${id}`,

  //auth header
  // authHeaders:{
  //     "Authorization":"Bearer "+ localStorage.getItem("Jwt")
  //   },

  //funções de requisição
  buildAppGetRequest: (url) =>
    fetch(url, {
      method: "GET",
    }),

  buildApiPostRequest: (url, body) =>
    fetch(url, {
      method: "POST",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),

    buildApiUpdateRequest: (url, body) =>
    fetch(url, {
      method: "PATCH",
      headers: new Headers({
        "Content-type": "application/json",
      }),
      body: JSON.stringify(body),
    }),
};
