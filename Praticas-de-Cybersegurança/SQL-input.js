const { Pool } = require('pg');

const pool = new Pool({
    user: 'your_db_user',
    host: 'localhost',
    database: 'your_database',
    password: 'your_db_password',
    port: 5432,
});

const registreSales = async (idSale, productId, quantity) => {
    try {
        await pool.query(
            'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ($1, $2, $3)',
            [idSale, productId, quantity]
        );
    } catch (error) {
        console.error("Erro ao registrar venda:", error.message);
    }
};

// Exemplo de uso:
// registreSales(1, 101, 5);
