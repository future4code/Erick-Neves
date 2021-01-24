import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import PerfilPicture from './img/perfil.jpg';
import IconEmail from './img/email-icon.png';
import IconLocation from './img/location-icon.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={PerfilPicture}
          nome="Erick Charles" 
          descricao="Olá, seja bem vindo, é uma satisfação receber a sua visita, me chamo Erick, 
          atualmente estou em formação como desenvolvedor Web Full Stack pela Labenu, de 2017 a 2020 
          estive na graduação de engenharia elétrica pela Ufcg, 2020
          foi o ano de ponto de partida que decidi migrar de carreira para a área que sempre me identifiquei mais, que é a programação e design web."
        />
        <CardPequeno 
          imagem={IconEmail}
          nome="E-mail:"
          descricao="erick.neves.projetos@gmail.com"
        />
        <CardPequeno
          imagem={IconLocation}
          nome="Endereço:" 
          descricao="Rua Arquiteto Henrique, João Pessoa - PB"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Lorem mudar" 
          descricao="lorem mudar" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
