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
    resp.send('el resultado es: '+ suma);
});
app.listen(3000,()=>{
    console.log('Esta funcionando');
});