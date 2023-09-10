// Módulo readline do Node.js para interagir com o console.
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicite ao usuário inserir algum texto.
rl.question('Digite algo (tente usar caracteres especiais como < ou >): ', (input) => {
    
    // Função para validar a entrada do usuário.
    function validateInput(data) {
        // Substitua quaisquer instâncias de < ou > para evitar injeção maliciosa, por exemplo.
        const sanitized = data.replace(/<|>/g, '');
        return sanitized;
    }

    const sanitizedInput = validateInput(input);

    console.log(`Entrada original: ${input}`);
    console.log(`Entrada após validação: ${sanitizedInput}`);
    
    rl.close();
});


const registreSales = async (idSale, productId, quantity) => {
    await conn.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?,?,?)',
      [idSale, productId, quantity],
    );
};