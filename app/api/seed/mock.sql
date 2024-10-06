INSERT INTO categories (name, description, icon)
VALUES
  ('Alimentação', 'Despesas com alimentos e refeições', 'utensils'),
  ('Transporte', 'Despesas com transporte público ou combustível', 'car'),
  ('Moradia', 'Despesas relacionadas à habitação, como aluguel e contas', 'home'),
  ('Saúde', 'Gastos com saúde, medicamentos e consultas médicas', 'heartbeat'),
  ('Lazer', 'Despesas com entretenimento, viagens e atividades recreativas', 'gamepad');

-- Inserir 5 despesas com reference_date 09-2024
INSERT INTO expenses (users_id, categories_id, name, description, status, value, reference_date, due_date)
VALUES
  (1, 1, 'Compra de supermercado', 'Alimentos e produtos básicos', 'paid', 250.75, '2024-09-01', '2024-09-10'),
  (1, 2, 'Passagem de ônibus', 'Transporte público mensal', 'pending', 120.00, '2024-09-01', '2024-09-15'),
  (1, 3, 'Aluguel apartamento', 'Pagamento do aluguel de setembro', 'paid', 1500.00, '2024-09-01', '2024-09-05'),
  (1, 4, 'Consulta médica', 'Consulta dermatológica', 'pending', 350.00, '2024-09-01', '2024-09-20'),
  (1, 5, 'Viagem de fim de semana', 'Viagem de lazer', 'paid', 600.00, '2024-09-01', '2024-09-18');

-- Inserir 5 despesas com o mês atual 10-2024
INSERT INTO expenses (users_id, categories_id, name, description, status, value, reference_date, due_date)
VALUES
  (1, 1, 'Compra de supermercado', 'Despesas de alimentos e produtos', 'pending', 275.50, '2024-10-01', '2024-10-10'),
  (1, 2, 'Combustível', 'Gastos com abastecimento', 'paid', 300.00, '2024-10-01', '2024-10-12'),
  (1, 3, 'Aluguel apartamento', 'Pagamento do aluguel de outubro', 'pending', 1500.00, '2024-10-01', '2024-10-05'),
  (1, 4, 'Compra de medicamentos', 'Remédios comprados na farmácia', 'paid', 120.00, '2024-10-01', '2024-10-15'),
  (1, 5, 'Cinema e jantar', 'Despesas com lazer no fim de semana', 'pending', 200.00, '2024-10-01', '2024-10-08');