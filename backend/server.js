const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contatos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB conectado'))
    .catch(err => console.error('❌ Erro ao conectar MongoDB:', err));

const contatoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    telefone: { type: String, required: true }
}, { timestamps: true });

const Contato = mongoose.model('Contato', contatoSchema);


app.get('/api/contatos', async (req, res) => {
    try {
        const contatos = await Contato.find().sort({ createdAt: -1 });
        res.json(contatos);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar contatos' });
    }
});

app.post('/api/contatos', async (req, res) => {
    try {
        const { nome, telefone } = req.body;
        const novoContato = new Contato({ nome, telefone });
        await novoContato.save();
        res.status(201).json(novoContato);
    } catch (err) {
        res.status(400).json({ error: 'Erro ao criar contato' });
    }
});

app.delete('/api/contatos/:id', async (req, res) => {
    try {
        await Contato.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contato deletado com sucesso' });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao deletar contato' });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
});