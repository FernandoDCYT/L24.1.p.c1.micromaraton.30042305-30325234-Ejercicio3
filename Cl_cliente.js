export default class Cl_cliente{
    constructor(nom, tip, edad, sex){
    this.nom=nom;
    this.tip=tip;
    this.edad=edad;
    this.sex=sex;
    }
    set nom(n){
        this._nom=n;
    }
    set tip(t){  
        this._tip=t;
    }
    set edad(ed){
        this._edad=ed;
    }
    set sex(s){
        this._sex=s;
    }
    get nom(){
        return this._nom
    }
    get tip(){
        return this._tip
    }
    get edad(){
        return this._edad
    }
    get sex(){
        return this._sex
    }
}