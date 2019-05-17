//// import HTTPCLIENT
function decorador(mensaje:string){
    return function(target:Function){
      target.prototype.decorar = function(){
        console.log(`el mensaje es ${mensaje}`);
      }
    }
}

@decorador("MI MENSAJE ES ESTE")
class Persona{
  public nombre:string;
  public apellido:string;
  constructor(){
      console.log("Se acaba de crear una Persona");
  }
  getNombreCompleto():string{
    return `Sr(a). ${this.nombre} ${this.apellido}`;
  }
}

let objPersona = new Persona();
objPersona.decorar();
