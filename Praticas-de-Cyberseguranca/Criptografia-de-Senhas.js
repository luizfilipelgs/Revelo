const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPasswordTrue = 'password123';
const myPasswordFalse = '123456'

// Hashing da senha
bcrypt.hash(myPasswordTrue, saltRounds, (err, hash) => {
    if (err) {
        console.error('Erro ao criar hash:', err);
        return;
    }

    console.log(`Senha em texto simples: ${myPasswordTrue}`);
    console.log(`Hash da senha: ${hash}`);

    // Verificando a senha contra o hash
    bcrypt.compare(myPasswordFalse, hash, (err, result) => {
        if (err) {
            console.error('Erro ao comparar senha e hash:', err);
            return;
        }

        if (result) {
            console.log('A senha fornecida corresponde ao hash!');
        } else {
            console.log('A senha fornecida NÃO corresponde ao hash.');
        }
    });
});
