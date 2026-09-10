-- ============================================================
-- GUIA DE CONSULTAS SQL / MYSQL — UC3
-- Material revisado e organizado para estudo
-- ============================================================

-- 1. ALTERANDO UMA CONSTRAINT CHECK
SHOW CREATE TABLE tb_jogos;

ALTER TABLE tb_jogos
DROP CHECK tb_jogos_chk_1;

ALTER TABLE tb_jogos
ADD CONSTRAINT chk_nota
CHECK (nota BETWEEN 0 AND 10);

-- 2. SELECT E ALIASES
SELECT
    nome AS nome_completo,
    cidade AS cidade,
    email AS email
FROM clientes;

-- 3. FILTROS
SELECT id, nome, preco
FROM produtos
WHERE preco > 50
  AND preco < 500;

SELECT id, nome, preco
FROM produtos
WHERE categoria = 'alimentos';

SELECT id, nome, preco
FROM produtos
WHERE preco BETWEEN 50 AND 500;

SELECT id, nome, preco
FROM produtos
WHERE categoria IN ('alimentos', 'eletronicos')
  AND preco < 100;

SELECT id, nome, preco
FROM produtos
WHERE categoria IN ('alimentos', 'eletronicos')
   OR preco < 100;

SELECT id, nome, preco
FROM produtos
WHERE nome LIKE '%caf%';

-- 4. ORDER BY E LIMIT
SELECT id, nome, preco
FROM produtos
WHERE preco < 100
ORDER BY preco ASC;

SELECT id, nome, preco
FROM produtos
WHERE preco < 100
ORDER BY preco DESC;

SELECT id, nome, preco
FROM produtos
WHERE preco < 100
ORDER BY preco DESC
LIMIT 1;

SELECT id, nome, preco
FROM produtos
WHERE categoria = 'alimentos'
ORDER BY preco DESC
LIMIT 3;

-- 5. AGREGAÇÕES
SELECT COUNT(*) AS total_produtos
FROM produtos;

SELECT COUNT(*) AS total_clientes
FROM clientes;

SELECT MAX(preco) AS maior_preco
FROM produtos;

SELECT ROUND(AVG(preco), 2) AS media_preco
FROM produtos;

SELECT MIN(preco) AS menor_preco
FROM produtos;

-- 6. GROUP BY E HAVING
SELECT
    categoria,
    COUNT(*) AS total_produtos
FROM produtos
GROUP BY categoria;

SELECT
    categoria,
    ROUND(AVG(preco), 2) AS media_preco
FROM produtos
GROUP BY categoria
HAVING AVG(preco) > 200;

-- 7. AULA 11 — EXERCÍCIOS REVISADOS

-- 1
SELECT nome, email
FROM clientes;

-- 2
SELECT *
FROM clientes
WHERE estado = 'MG';

-- 3
SELECT nome, preco, estoque
FROM produtos
WHERE categoria = 'Móveis'
  AND preco > 200;

-- 4
SELECT nome, preco
FROM produtos
WHERE preco BETWEEN 50 AND 100;

-- 5
SELECT nome, estado
FROM clientes
WHERE estado IN ('SP', 'RJ', 'MG');

-- 6
SELECT nome, email
FROM clientes
WHERE nome LIKE 'M%'
  AND email LIKE '%@email.com';

-- 7
SELECT nome, preco, estoque
FROM produtos
ORDER BY estoque ASC
LIMIT 3;

-- 8
SELECT
    SUM(quantidade) AS total_pecas_vendidas,
    ROUND(AVG(preco_unitario), 2) AS preco_unitario_medio,
    MAX(preco_unitario) AS item_mais_caro
FROM itens_pedido;

-- 9
SELECT
    estado,
    COUNT(*) AS total_clientes
FROM clientes
GROUP BY estado
ORDER BY total_clientes DESC;

-- 10
SELECT
    categoria,
    ROUND(AVG(preco), 2) AS media_preco
FROM produtos
GROUP BY categoria
HAVING AVG(preco) > 150.00;

-- 11
SELECT
    clientes.nome AS nome_cliente,
    pedidos.id AS pedido_id,
    pedidos.data_pedido
FROM clientes
INNER JOIN pedidos
    ON clientes.id = pedidos.cliente_id;

-- 12
SELECT
    clientes.nome AS nome_cliente,
    clientes.cidade,
    pedidos.id AS pedido_id,
    pedidos.status
FROM clientes
INNER JOIN pedidos
    ON clientes.id = pedidos.cliente_id
WHERE pedidos.status = 'Processando';

-- 13
SELECT
    clientes.nome,
    clientes.email
FROM clientes
LEFT JOIN pedidos
    ON clientes.id = pedidos.cliente_id
WHERE pedidos.id IS NULL;

-- 14
SELECT
    pedidos.id AS pedido_id,
    pedidos.data_pedido,
    produtos.nome AS produto,
    itens_pedido.quantidade,
    itens_pedido.preco_unitario
FROM pedidos
INNER JOIN itens_pedido
    ON pedidos.id = itens_pedido.pedido_id
INNER JOIN produtos
    ON itens_pedido.produto_id = produtos.id;

-- 15
SELECT
    clientes.id AS cliente_id,
    clientes.nome AS nome_cliente,
    SUM(itens_pedido.quantidade * itens_pedido.preco_unitario) AS total_gasto
FROM clientes
INNER JOIN pedidos
    ON clientes.id = pedidos.cliente_id
INNER JOIN itens_pedido
    ON pedidos.id = itens_pedido.pedido_id
GROUP BY
    clientes.id,
    clientes.nome
HAVING total_gasto > 300.00
ORDER BY total_gasto DESC;

-- 8. VIEW
CREATE OR REPLACE VIEW vw_nome_cliente AS
SELECT
    clientes.nome AS nome_cliente
FROM clientes;

CREATE OR REPLACE VIEW vw_clientes_pedidos AS
SELECT
    clientes.id AS cliente_id,
    clientes.nome AS nome_cliente,
    pedidos.id AS pedido_id,
    pedidos.data_pedido,
    pedidos.status
FROM clientes
INNER JOIN pedidos
    ON clientes.id = pedidos.cliente_id;
