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

app.get('/nombre',(req,rest)=>{
    rest.json(lista);
});

app.listen(3000,()=>{
    console.log('Esta funcionando');
});