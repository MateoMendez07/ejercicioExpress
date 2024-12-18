const express = require ('express');
const app = express();
app.use(express.json());
var lista = [{
    id:'1',
    nombre:'Mateo'
},{
    id:'2',
    nombre:'Dayana'
}];

//web service de tipo get

app.get('/nombre',(req,resp)=>{
    resp.json(lista);
});

app.get('/Mateo',(req,res)=>{
    res.send('Soy Mateo Mendez, tengo 20 años, soy un intento de progrmador, y estoy haciendo mi tesis.');
});

app.get('/suma',(req,resp)=>{
    let n1 = 2;
    let n2 = 3;
    let suma = n1 + n2;
    resp.send(suma+'');
});

app.get('/sumas/:n1',(req,resp)=>{
    let num1 = parseInt(req.params.n1);
    let num2 = 3;
    let suma = num1 + num2;
    resp.send('El resultado es: '+ suma);
});

app.get('/cuadrado/areayperimetro/:n1',(req,resp)=>{
    let lado = parseInt(req.params.n1);
    let area = lado * lado;
    let perimetro = lado * 4;
    resp.send('El area del cuadrado es: ' + area + '\nEl perimetro es: ' + perimetro);
});

app.get('/circulo/areayperimetro/:n1',(req,resp)=>{
    let pi = Math.PI;
    let radio = parseInt(req.params.n1);
    let area = (radio * radio) * pi;
    let perimetro = radio * (pi*2);
    resp.send('El area del ciruclo es: ' + area + '\nEl perimetro es: ' + perimetro);
});

app.get('/paralelogramo/areayperimetro/:n1/:n2/:n3',(req,resp)=>{
        let base = parseInt(req.params.n1);
        let altura = parseInt(req.params.n2);
        let lado = parseInt(req.params.n3);
        let area = base * altura;
        let perimetro = 2 * (base + lado);

        resp.send('El area del paralelogramo es: ' + area + '\nEl perimetro es: ' + perimetro)
});
app.listen(3000,()=>{
    console.log('Esta funcionando');
});