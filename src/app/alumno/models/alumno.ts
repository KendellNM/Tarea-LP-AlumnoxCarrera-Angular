import { Carrera } from "../../carrera/models/carrera";

export class Alumno {
    id: number;
    nombre: string;
    apepat: string;
    estado: string;
    carrera: Carrera;

    constructor(id: number=0, nombre: string='', apepat: string='', estado: string='', carrera: Carrera) {
        this.id = id;
        this.nombre = nombre;
        this.apepat = apepat;
        this.estado = estado;
        this.carrera = carrera;
    }
}
