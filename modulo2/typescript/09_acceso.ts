export class Libro {
    public titulo: string;
    private cota: any;
    protected idGeneric: string= '9918128933';
    constructor(
        titulo: string
    ){
        this.titulo=titulo;
        this.generarCota()
    }
    generarCota(): void{
        const fecha = new Date();
        this.cota = (new Date()).toDateString();
    }

    getCota():any{
        return this.cota;
    }

    getAtributes(): any {
        return { 
            cota: this.cota, 
            titulo: this.titulo, 
            id: this.idGeneric
        }
    }
}