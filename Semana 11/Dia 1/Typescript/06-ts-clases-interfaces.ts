interface iVehiculo{
  /**
  ESTA FUNCION RETORNARA EL MODELO Y LA MARCA
  */
  getInfo():string;
  setHP(hp:number):void;
}

class Vehiculo implements iVehiculo{
  public _marca:string;
  public _modelo:string;
  public _hp:number;
  constructor(newMarca:string,newModelo:string){
    this._marca = newMarca;
    this._modelo = newModelo;
  }
  getInfo():string{
    return `El vehiculo es de marca ${this._marca} y modelo ${this._modelo}`;
  }
  setHP(hp:number):void{
    this._hp = hp;
  }
}

let miCarro = new Vehiculo("Kia","Picanto");
console.log(miCarro.getInfo());
