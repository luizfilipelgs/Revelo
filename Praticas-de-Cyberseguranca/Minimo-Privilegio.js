// Criar usuário somente-leitura
CREATE USER readonly_user WITH PASSWORD 'your_password';
// Dar acesso somente-leitura à tabela sales_products
GRANT USAGE ON SCHEMA public TO readonly_user;
GRANT SELECT ON TABLE public.sales_products TO readonly_user;


const { Pool } = require('pg');

const pool = new Pool({
    user: 'readonly_user',
    host: 'localhost',
    database: 'your_database',
    password: 'your_password',
    port: 5432,
});

pool.query('SELECT * FROM sales_products', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results.rows);
    pool.end();
});

