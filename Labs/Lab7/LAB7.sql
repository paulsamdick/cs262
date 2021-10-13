-- Lab 7
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author, kvlinden
-- @author, Paul Dick, psd22
-- @version Summer, 2015
-- @adjustments: 10/13/21
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS PlayerState;
Drop TABLE IF EXISTS BoardState;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;


-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);
	
CREATE TABLE PlayerState(
	playerId integer REFERENCES Player(ID),
	gameID integer REFERENCES Game(ID),
	cashOnHand money,
	piece_location integer
);
	
CREATE TABLE BoardState(
	gameID integer References Game(ID),
	playerID integer References Player(ID),
	property char(30) Primary Key,
	houses integer,
	hotels integer
);

-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON PlayerState TO PUBLIC;
GRANT SELECT ON BoardState TO PUBLIC;

-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

INSERT INTO PlayerState Values (1, 2, 3000, 4);
INSERT INTO PlayerState Values (2, 2, 4000, 5);
INSERT INTO PlayerState Values (2, 3, 100, 1);

INSERT INTO BoardState Values (1, 2, 'Broadway', 4 , 0);
INSERT INTO BoardState Values (1, 2, 'Park Place', 0, 1);