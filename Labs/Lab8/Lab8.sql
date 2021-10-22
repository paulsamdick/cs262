--Retrieve a list of all the games, ordered by date with the most recent game coming first
--SELECT * FROM Game
--ORDER BY time DESC

--Retrieve all the games that occurred in the past week.
--select * from Game
--where time > '10-15-21'

--Retrieve a list of players who have (non-NULL) names.
--SELECT * FROM Player
--WHERE NAME IS NOT NULL

--Retrieve a list of IDs for players who have some game score larger than 2000.
--SELECT DISTINCT playerID FROM playergame
--WHERE score > 2000

--Retrieve a list of players who have GMail accounts.
--SELECT name,
--	   emailAddress
--	   FROM Player
--WHERE emailAddress LIKE '%gmail%'

--Retrieve all “The King”’s game scores in decreasing order.
--SELECT  gameID,
--		score,
--	   name
--		FROM playerGame inner join Player on 
--		Player.id = playerGame.playerID
--		where name = 'The King'
		
--Retrieve the name of the winner of the game played on 2006-06-28 13:20:00
--SELECT name
--	   FROM player 
--		   INNER JOIN playerGame on
--				player.id = playerGame.playerID
--		   INNER JOIN Game on
--				game.id = playerGame.gameID
--WHERE time = '2006-06-28 13:20:00'
--ORDER BY score DESC
--LIMIT 1

--So what does that P1.ID < P2.ID clause do in the last example query?
--It ensures that the players are not actually the same. IN othere words it is the unique identification of the players

--answer to last question:
--Possibly the table has a foreign key which refers to its primary key.