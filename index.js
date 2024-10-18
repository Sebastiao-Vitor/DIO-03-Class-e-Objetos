// class generica
class chanpions{
  constructor(name, age, []) {
    this.chanpionsName = name;
    this.chanpionsAge = age;
    this.chanpionsTipo = ["guerreiro", "mago"];
  };
  personagemClass() {
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
    return mensagem;
  };
  atacar() {
    console.log(`O ${this.chanpionsTipo} atacou usando ${this.personagemClass()}`);
  };
};

let chanpionsGuerreiro = new chanpions("Denvor", 35, "guerreiro");
chanpionsGuerreiro.atacar();