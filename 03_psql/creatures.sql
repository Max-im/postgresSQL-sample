CREATE TABLE wizards
(
    name CHARACTER varying(50),
    power CHARACTER varying(50)
);

CREATE TABLE elves
(
    name CHARACTER varying(50),
    speed real
);


CREATE TABLE hobbits
(
    name CHARACTER varying(50),
    personality CHARACTER varying(50)
);

CREATE TABLE allies
(
    wizard CHARACTER varying(50),
    elf CHARACTER varying(50)
);


CREATE TABLE guardians
(
    elf CHARACTER varying(50),
    hobbit CHARACTER varying(50)
);



INSERT INTO wizards
    (name, power)
VALUES
    ('Gandalf', 'fireworks' ),
    ('Sauron', 'rings'),
    ('Saruman', 'betrayal');


INSERT INTO elves
    (name, speed)
VALUES
    ('Legalas', 10),
    ('Arven', 9),
    ('Elrond', 5);


INSERT INTO hobbits
    (name, personality)
VALUES
    ('Frodo', 'brave'),
    ('Sam', 'kind'),
    ('Bilbo', 'greedy');



INSERT INTO allies
    (wizard, elf)
VALUES
    ('Gendalf', 'Legalas'),
    ('Gendalf', 'Arven'),
    ('Saruman', 'Elrond'),
    ('Saruman', 'Legalas');

INSERT INTO guardians
    (elf, hobbit)
VALUES
    ('Legalas', 'Frodo'),
    ('Arven', 'Sam'),
    ('Elrond', 'Bilbo');

    