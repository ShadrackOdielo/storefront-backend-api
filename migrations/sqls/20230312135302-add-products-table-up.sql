CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  price NUMERIC(8, 2) NOT NULL,
  category VARCHAR(50) NOT NULL DEFAULT 'other'
);
