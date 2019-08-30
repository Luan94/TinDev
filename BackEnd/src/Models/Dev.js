const {Schema , model } = require ('mongoose'); // "const { }" outro jeito de importar dependências dentro de um objeto
const DevSchema = new Schema 
({
    name: {type: String,required: true,},
    user: {type: String,required: true,},
    Bio: String,
    avatar: {type: string, required: true},
},
{
    timestamps:true,
}
);

module.exports = model('Devs' , DevSchema); //exporta schema para o .json