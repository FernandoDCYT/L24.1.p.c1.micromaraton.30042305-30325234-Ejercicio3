export default class Cl_empresa{
    constructor (){
        this.contF18=0;
        this.menor=999;
        this.acumEdCli=0;
        this.contCli=0;
    }
    procesarCliente(c){
        if(c.sex=="2" && c.edad>=18){
            this.contF18++;
        }
        if(this.menor>c.edad){
            this.menor=c.edad;
        }
        this.acumEdCli+=c.edad;
        this.contCli++
    }
    calcPromEd(){
        return this.acumEdCli/this.contCli;
    }
}