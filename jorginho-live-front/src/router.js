import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/header";



import Home from './pages/home/home';
import JogoPorId from "./pages/jogoPorId/JogoPorId";
import Login from "./pages/login/login";
import Perfils from "./pages/perfils/perfils";
import Cadastro from "./pages/cadastro/cadastro";
import CriaPerfil from "./pages/criarPerfil/criarPerfil";
import CentralAdimin from "./pages/entralAdmin/centralAdmin";
import Perfil from "./pages/perfil/perfil";
import AdiminJogos from "./pages/admin-jogos/adimin-jogos";
import AdiminJogoUpdate from "./pages/adimin-jogo-update/adiminJogoUpdate";
import AdiminJogoCreate from "./pages/adimin-jogo-create/adiminJogoCreate";
import AdiminGenero from "./pages/adimin-genero/adiminGenero";
import AdiminGeneroUpdate from "./pages/adimin-genero-update/adiminGeneroUpdate";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header/> 
      <Switch>
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />

        
        <Route exact={true} path="/usuario/perfil/criar" component={CriaPerfil} />
        <Route exact={true} path="/usuario/perfil/mudar" component={CriaPerfil} />
        <Route path="/usuario/perfil/:id" component={Perfil} />
        <Route path="/usuario/perfil" component={Perfils} />  
        <Route path="/usuario" component={Home} />

        <Route path="/adimin/jogos/criar" component={AdiminJogoCreate} />
        <Route path="/adimin/jogos/editar/:id" component={AdiminJogoUpdate} />
        <Route path="/adimin/jogos" component={AdiminJogos} />
        

        <Route path="/adimin/genero/criar" component={Home} />
        <Route path="/adimin/generos/edita:id" component={AdiminGeneroUpdate} />
        <Route path="/adimin/generos" component={AdiminGenero} />
        <Route  path="/adimin" component={CentralAdimin} />

       
        <Route path="/jogos/:id" component={JogoPorId} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
