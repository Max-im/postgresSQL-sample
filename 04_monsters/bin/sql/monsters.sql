CREATE TABLE monsters
(
    id serial,
    name CHARACTER varying(50),
    personality CHARACTER varying(50)
);

CREATE TABLE habitats
(
    id serial,
    name CHARACTER varying(50),
    climate CHARACTER varying(50),
    temperature INT
);

CREATE TABLE lives
(
    monster CHARACTER varying(50),
    habitat CHARACTER varying(50)
);

-- insert

INSERT INTO monsters
    (name, personality)
VALUES
    ('Fluffy', 'aggressive'),
    ('Noodles', 'impatient'),
    ('Rusty', 'passionate');

INSERT INTO habitats
    (name, climate, temperature)
VALUES
    ('desert', 'dry', 100),
    ('forest', 'haunted', 70),
    ('mountain', 'icy', 30);


INSERT INTO lives
    (monster, habitat)
VALUES
    ('Fluffy', 'desert'),
    ('Noodels', 'forest'),
    ('Rusty', 'mountain');