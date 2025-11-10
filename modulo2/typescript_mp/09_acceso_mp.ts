export class Vehiculo {
    public marca: string;
    private codigoInterno: any;
    protected idSistema: string = "VH-20251109";

    constructor(marca: string) {
        this.marca = marca;
        this.generarCodigo();
    }

    private generarCodigo(): void {
        const fecha = new Date();
        this.codigoInterno = `${this.marca}-${fecha.getTime()}`;
    }

    getCodigo(): any {
        return this.codigoInterno;
    }

    getAtributos(): any {
        return {
            marca: this.marca,
            codigo: this.codigoInterno,
            id: this.idSistema
        };
    }
}
