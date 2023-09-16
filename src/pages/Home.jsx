import React from "react";
import "../pages/home.css";
import { Parallax } from "react-parallax";
import Parking from "../assets/images/parking.png";

function Home() {
  return (
    <div className="Home">
      <Parallax strength={600} bgImage={Parking}>
        <div className="content">
          <div className="text-content">PASSBY</div>
        </div>
      </Parallax>

      <div class="container">
        <h2>Quem somos</h2>
        <p>
          A PassBy é uma empresa inovadora que está revolucionando a maneira
          como lidamos com estacionamentos no Brasil. Nossa missão é eliminar a
          necessidade de tickets de papel e simplificar a experiência de
          estacionar, tornando-a mais eficiente, sustentável e conveniente para
          todos. Utilizando a tecnologia NFC (Near Field Communication),
          oferecemos aos motoristas a liberdade de acessar estacionamentos sem a
          burocracia de pegar um ticket físico.
        </p>

        <p>
          Com a PassBy, você pode simplesmente "passar por" e aproveitar o
          estacionamento sem se preocupar com filas ou papelada. Estamos
          comprometidos em promover um futuro mais verde, ao mesmo tempo em que
          proporcionamos uma solução tecnológica de ponta para estacionamentos
          em todo o país. Junte-se a nós na jornada para um estacionamento mais
          inteligente, sem papel e com menos impacto ambiental. A PassBy,
          conectando pessoas à mobilidade do futuro.
        </p>
      </div>

      <Parallax strength={600} bgImage={Parking}>
        <div className="content">
          <div className="text-content">PASSBY</div>
        </div>
      </Parallax>

      <div class="container">
        <h2>O que fazemos</h2>
        <p>
          Na PassBy, tornamos a experiência de estacionamento incrivelmente
          simples e amigável ao meio ambiente. Utilizando a tecnologia NFC,
          permitimos que você armazene seu ticket virtualmente em seu celular,
          eliminando a necessidade de papel e as incômodas filas para pagamento
        </p>

        <p>
          Se você se encontrar em uma área sem cobertura de rede, não se
          preocupe - nosso sistema automaticamente salva seu ticket e o envia
          assim que a conexão for restabelecida. Além disso, na hora de sair,
          nossa tecnologia de reconhecimento de placa por câmera agiliza o
          processo de saída, tornando a experiência de estacionamento mais
          eficiente e conveniente do que nunca. Na PassBy, estamos moldando o
          futuro dos estacionamentos, tornando-o mais inteligente, sustentável e
          acessível para todos.
        </p>
      </div>
    </div>

  );
}
export default Home;
