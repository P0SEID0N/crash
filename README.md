# crash

This is a VERY simple frontend only Proof of concept for a crash game, commonly seen on betting sites. /

The objective of the crash game is as follows:

Every round there is a 10-20 second buy in period. During this period you stake a particular amount. 
After the round has started, the server would select a proveably fair value that the game will "crash" at which will represent the highest value the chart will reach. 
Then the server will every second send a push message to the frontend with "ticks" as the time progresses the tickets push us closer to infinity. 
When the tick == the determined crash value (before the round started) then the game crashes. 

For the players the objective would be to cash out of the game before the game crashes. With each tick the multipler on their payout increases by the "tick" factor which is the same each round. 
If the player cashes out before the crash their original bet is multiplied by the payout factor when they cashed out (as long as the game had not crashed)
If the game crashes before the player cashes out they lose their original stake. 

Please let me know if there are any issues with setup. Its base javascript but can be extended even in its current form to a fully functioning game. If there is interest I will upgrade it to an SPA framework!
