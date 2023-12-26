CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  status VARCHAR(50) NOT NULL CHECK (status IN ('open', 'in_progress', 'finished'))
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY, 
  name VARCHAR(50) NOT NULL,
  abilities TEXT []
);

CREATE TABLE player_game (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  game_id INTEGER NOT NULL REFERENCES games(id),
  role_id INTEGER NOT NULL REFERENCES roles(id)
);