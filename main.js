class Temperature{
    constructor(doC){
        this.doC=doC;
    }
    changeF(){
        return this.doC*9/5 + 32
    }
    changeK(){
        return this.doC+273.15
    }
}
let t1 =new Temperature(10);
document.write(t1.changeF());
document.write('</br>');
document.write(t1.changeK());