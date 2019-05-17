class Vehiculo {
    constructor(newMarca, newModelo) {
        this._marca = newMarca;
        this._modelo = newModelo;
    }
    getInfo() {
        return `El vehiculo es de marca ${this._marca} y modelo ${this._modelo}`;
    }
    setHP(hp) {
        this._hp = hp;
    }
}
let miCarro = new Vehiculo("Kia", "Picanto");
console.log(miCarro.getInfo());
