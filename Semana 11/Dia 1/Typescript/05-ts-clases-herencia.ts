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

class Camioneta extends Vehiculo{
  constructor(public _color:string,
              public _precio:number,
              public _modelo:string,
              public _marca:string,
              public _pickUp:boolean){
    //el objeto this no se usa por que las variables _color, _precio, etc.
    //son variables locales en la función constructora
    //el atributo this se usa cuando referenciamos a las variables de clase
    //desde otras funciones
    super(_color,_precio,_modelo,_marca);
  }
  set pickUp(newPickUp:boolean){
    this._pickUp = newPickUp;
  }
  get pickUp(){
    return this._pickUp;
  }
  public getInfo(){
    console.log(`La camioneta es una ${this._marca} de modelo ${this._modelo}`);
  }
}

let miCamioneta:Camioneta = new Camioneta("Azul",30000,"Amarok","VW",true);
miCamioneta.getInfo();
