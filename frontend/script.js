const API_URL = 'http://localhost:5000/api/contatos';

const form = document.getElementById('contatoForm');
const nomeInput = document.getElementById('nome');
const telefoneInput = document.getElementById('telefone');
const contatosList = document.getElementById('contatosList');

document.addEventListener('DOMContentLoaded', carregarContatos);

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    await adicionarContato();
});

async function carregarContatos() {
    try {
        const response = await fetch(API_URL);
        const contatos = await response.json();

        if (contatos.length === 0) {
            contatosList.innerHTML = '<p class="empty">Nenhum contato cadastrado ainda.</p>';
            return;
        }

        contatosList.innerHTML = contatos.map(contato => `
            <div class="contato-item">
                <div class="contato-info">
                    <h3>${contato.nome}</h3>
                    <p>📱 ${contato.telefone}</p>
                </div>
                <button class="btn-delete" onclick="deletarContato('${contato._id}')">
                    🗑️ Deletar
                </button>
            </div>
        `).join('');
    } catch (error) {
        contatosList.innerHTML = '<p class="empty">❌ Erro ao carregar contatos. Verifique se o servidor está rodando.</p>';
        console.error('Erro:', error);
    }
}

async function adicionarContato() {
    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if (!nome || !telefone) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, telefone })
        });

        if (response.ok) {

            nomeInput.value = '';
            telefoneInput.value = '';


            mostrarMensagem('✅ Contato adicionado com sucesso!');


            await carregarContatos();
        } else {
            alert('Erro ao adicionar contato!');
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor!');
        console.error('Erro:', error);
    }
}

async function deletarContato(id) {
    if (!confirm('Tem certeza que deseja deletar este contato?')) {
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            mostrarMensagem('✅ Contato deletado com sucesso!');
            await carregarContatos();
        } else {
            alert('Erro ao deletar contato!');
        }
    } catch (error) {
        alert('Erro ao conectar com o servidor!');
        console.error('Erro:', error);
    }
}


function mostrarMensagem(texto) {
    const mensagem = document.createElement('div');
    mensagem.className = 'success-message';
    mensagem.textContent = texto;

    const formContainer = document.querySelector('.form-container');
    formContainer.insertBefore(mensagem, formContainer.firstChild);

    setTimeout(() => {
        mensagem.remove();
    }, 3000);
}