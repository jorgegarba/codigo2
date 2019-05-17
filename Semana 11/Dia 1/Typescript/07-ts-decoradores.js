var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//// import HTTPCLIENT
function decorador(mensaje) {
    return function (target) {
        target.prototype.decorar = function () {
            console.log(`el mensaje es ${mensaje}`);
        };
    };
}
let Persona = class Persona {
    constructor() {
        console.log("Se acaba de crear una Persona");
    }
    getNombreCompleto() {
        return `Sr(a). ${this.nombre} ${this.apellido}`;
    }
};
Persona = __decorate([
    decorador("MI MENSAJE ES ESTE")
], Persona);
let objPersona = new Persona();
objPersona.decorar();
