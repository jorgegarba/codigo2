class Vehiculo{
  //atributos de clase
  // public color:string;
  // public precio:number;
  // public modelo:string;
  // public marca:string;
  //constructor
  // constructor(color:string,precio:number,modelo:string,marca:string){
  //   this.color = color;
  //   this.precio = precio;
  //   this.modelo = modelo;
  //   this.marca = marca;
  // }

  constructor(public _color:string,
              public _precio:number,
              public _modelo:string,
              public _marca:string){}
  //metodos GETTERS Y SETTERS
  public getColor():string{
    return this._color;
  }
  public setColor(nuevoColor:string){
    this._color=nuevoColor;
  }
  //metodos comunes
  public marcaYModelo():string{
    return `${this._marca} es de modelo ${this._modelo}`;
  }
  get precio():number{
    return this._precio;
  }
  set precio(nuevoPrecio:number){
    this._precio = nuevoPrecio;
  }
}

let carro:Vehiculo = new Vehiculo("Verde",50000.00,"Range Rover Evoque","Land Rover");
console.log(carro);
