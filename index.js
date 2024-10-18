// // class generica
// class chanpions{
//   constructor(name, age, []) {
//     this.chanpionsName = name;
//     this.chanpionsAge = age;
//     this.chanpionsTipo = ["guerreiro", "mago"];
//   };
//   personagemClass() {
//     let mensagem = "";
//     switch(this.chanpionsTipo) {
//       case "guerreiro":
//         mensagem = "espada";
//         break;
//       case "mago":
//         mensagem = "magia";
//         break;
//       case "monge":
//         mensagem = "artes marciais";
//         break;
//       case "ninja":
//         mensagem = "shuriken";
//         break;
//       default:
//         mensagem = "!!tipo desconhecido!!";
//     };
//     return mensagem;
//   };
//   atacar() {
//     console.log(`O ${this.chanpionsTipo} atacou usando ${this.personagemClass()}`);
//   };
// };

// let chanpionsGuerreiro = new chanpions("Denvor", 35, "guerreiro");
// chanpionsGuerreiro.atacar();

class Chanpions {
  constructor(name, age, tipoIndex) {
    this.chanpionsName = name;
    this.chanpionsAge = age;
    
    // Lista de tipos de campeões
    this.tiposDisponiveis = ["guerreiro", "mago", "monge", "ninja"];
    
    // Mapear o índice para o tipo correspondente
    this.chanpionsTipo = this.tiposDisponiveis[tipoIndex];
  };
  classeEscolida(){
    let mensagem = "";
    switch(this.chanpionsTipo) {
      case "guerreiro":
        mensagem = "espada";
        break;
      case "mago":
        mensagem = "magia";
        break;
      case "monge":
        mensagem = "artes marciais";
        break;
      case "ninja":
        mensagem = "shuriken";
        break;
      default:
        mensagem = "!!tipo desconhecido!!";
    };
  }
  ataque() {
    console.log(`Voçe escolheu o personagem: ${this.chanpionsTipo}, agora voçê pode usar os poderes do ${this.chanpionsTipo}`);
  };
};

let MMORPG = new Chanpions("Carton", 28, 1);
console.log(MMORPG);
MMORPG.ataque()