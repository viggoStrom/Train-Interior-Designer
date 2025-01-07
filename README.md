# Train Interior Designer and Simulator

You own a train. You get to design the layout of every car to maximize your passenger throughput whilst balancing comfort to keep a good reputation.

Choose routes to run your trains and optimize those trains for those routes and types of jobs. Running a subway will make you prioritize train acceleration, amount of doors, and seats to get a lot of people through. In a subway the passengers aren't as picky about comfort as they are about getting to their destination quickly. Running a long distance train will make you prioritize comfort, food, and entertainment to keep your passengers happy during the long journey.

You can buy new trains, add cars, and upgrade existing cars. You can sponsor stations to hope they can increase passenger throughput. You can also hire staff to keep your trains clean and maintained.

Backlog:
 - List view of all the cars in a train.
 - List view of routes.
 - UI system for all the menu interactions. Either via HTML or a custom system in a canvas.
 - System for drawing a train car at a time.
 - Goto button for the routes.
 - Different types of cars.
 - Different types of routes.
 - Train stats
 - Train purchasing
 - Train upgrading
 - Hard coding seats in a layout
 - Passengers. Spawn at a station and want to get to another station. If they get there, you get payed.
 - Train staff
 - Passengers tell you when they wanna get off by their color. Longer travel gives more money but they will hate you if you take them too far.



Gameplay loop:
 - Arrive at the first station, pick up all the passengers at the station (or as many as you can fit).
   - You get paid for each passenger you pick up but only at the end of the day (like your counting the tickets later. Will be convenient since some passengers pay more but it depends on how far they ride. I guess they could get their ride length generated at spawn).
 - Travel to the next station. This will take one hour of in game time. (Running above or below nominal power will affect this which will affect your popularity).
 - Most passengers will get off at the next station. The other ones will have an increased chance of getting off at the next station, and the next, and so on. They pay you more the further they go.
- All the passengers waiting at the station will get on. At the same time as the rest of course, like real people :|
- Repeat until you reach the end of the day.
- At days end (or if you cancel the train that day which will decrease your popularity) you get to modify your train. Changing layout in a car, getting a new engine, adding a car, etc.
- You will be graded by how many people you transport per hour (p/h). p/h will be calculated by averaging transport during a day (maybe don't count canceled days) and your score should probably be averaged over multiple days so one bad day won't ruin you. Increased score will allow higher ticket prices => more furniture and trains and such.
- When done with modifications, you can start the next day.

Popularity:
 - Popularity is measured on a scale (maybe 0-5 stars?) and will affect your ticket prices. Probably automatically, I don't want this game to turn into a simulator... Besides the simulation of boarding of course :P
 - This will make them more likely to stay longer on the train which will increase your profits.
 - Popularity is gained by good decor, food, entertainment, cleanliness and running on time. To start off with, the time criteria is probably gonna be the first and only to be implemented. The rest may be added later.
 - Popularity could be on a car to car basis (plus speed probably) to allow for different classes.

## Features & Motivations:
 - Simulating boarding: It's the main concept of the game which will make you have to optimize your train which is the fun part i hope.
 - Scoring by passengers per hour (p/h): I hope this will be a motivator for the player to optimize instead of just getting as much cash as possible. I also wanna balance the game so multiple playstyles are viable. I'm thinking, long slow-steamer with a lot of capacity, nice express train with high prices due to nice decor, or a more balanced approach or something else! I hope this will make the game playable for more than like a couple minutes.
 - 

## Cars & Locomotives
I'm thinking that there will be a couple of car types and locomotives with different strengths and weaknesses. Their absolute stats will improve if you get a better train in that category but the relative stats of the train will not change. Can't buy yourself out of a trade off.

### Cars
You design the interiors of the cars on a grid system. Furniture can be things like seats, tables, poles, windows, dividers?, lights?, and more.

Passthrough on a car means passengers can travel through the train to get off at smaller stations. (I don't think they should care but your score is gonna tank since it's gonna be hella' slow).

Maybe a regular car with two sets of doors and decent space, a subway car with more doors and less space (maybe exclusive furniture? Like those poles?), a fancy car with only one pair of doors with plenty of space (maybe some walls? Custom positions or not?). 

| **Type** | **Door Pairs** | **Space** | **Price** | **Popularity** | **Passthrough** | **Note**                                                                          |
| -------- | -------------- | --------- | --------- | -------------- | --------------- | --------------------------------------------------------------------------------- |
| Basic    | 2              | Normal    | Normal    | Normal         | Yes             | All-rounder                                                                       |
| Cargo    | 1              | Very High | Cheap     | Very Low       | No              | Space over looks and convenience.<br>No passthrough is risky for smaller stations |
| Subway   | 4              | Normal    | Expensive | Low            | Yes             | More doors, but they also take space                                              |
| Fancy    | 1              | High      | Expensive | High           | Yes             | Space and the looks worth a pretty penny                                          |
| Sleeper  | 1              | Low       | Expensive | Very High      | Yes             | Passengers do love a nights (1 hour) sleep!                                       |
| Flat Bed | ∞              | High      | Cheap     | Incredibly Low | No              | Infinite doors! You can exit anywhere!                                            |
| Modern   | 2              | Normal    | Expensive | High           | Yes             | Better than basic but at a cost                                                   |
<!-- Protected row to prevent table shenanigans -->
  
### Locomotives 
Maybe a different "classes" of locomotives with different tiers that all have different nominal power so that their prices can develop at different paces. Classes like: Basic (all-rounder), cargo (higher nominal, expensive, maybe less popular?), steam locomotive (super low nominal *I know that's not accurate*, super popular), modern electric with without passenger space (slightly better than basic's nominal, expensive, neutral popularity. All-round good but expensive), modern electric with passenger space (probably same nominal as basic, expensive, neutral popularity, grid space!), etc maybe.

I guess you could stack locomotives but you would get punished from stations being too small. I'm gonna make locomotives take up space at stations (I blame signaling and safety I ).

| **Type**                 | **Nominal Power** | **Price** | **Popularity** | **Passenger Space** | **Note**                          |
| ------------------------ | ----------------- | --------- | -------------- | ------------------- | --------------------------------- |
| Basic                    | Normal            | Normal    | Normal         | None                | All-rounder                       |
| Cargo                    | Very High         | Normal    | Low            | None                | Power over looks                  |
| Steam                    | Low               | Normal    | Very High      | None                | Who doesn't love vintage trains?? |
| Modern Electric wo/space | High              | Expensive | High           | None                | Better than basic besides price   |
| Modern Electric w/space  | Normal            | Expensive | High           | Some                | Loco with passengers??            |
<!-- Protected row to prevent table shenanigans -->


## Stations
They spawn with a certain passenger count (maybe modified by score or popularity?) and they know how many stops they wanna travel. They pay more for longer distances of course. Stations could have length limits (I could simply prevent you from stopping there, loosing you passengers and popularity or I could just stop the train so only some cars are accessible which would also be bad for you since passengers are gonna be ass slow getting off since they would have to walk through the train. If possible even)