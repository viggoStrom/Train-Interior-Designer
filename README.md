# Train Interior Designer and Simulator

You own a train. You get to design the layout of every car to maximize your passenger throughput whilst balancing comfort to keep a good reputation.

## Gameplay loop
 - Arrive at the first station, pick up all the passengers at the station (or as many as you can fit).
   - You get paid for each passenger you pick up but only at the end of the day (like your counting the tickets later. Will be convenient since some passengers pay more but it depends on how far they ride. I guess they could get their ride length generated at spawn).
 - Travel to the next station. This will take one hour of in game time. (Running above or below nominal power will affect this which will affect your popularity).
 - Most passengers will get off at the next station. The other ones will have an increased chance of getting off at the next station, and the next, and so on. They pay you more the further they go.
- All the passengers waiting at the station will get on. At the same time as the rest of course, like real people :|
- Repeat until you reach the end of the day.
- At days end (or if you cancel the train that day which will decrease your popularity) you get to modify your train. Changing layout in a car, getting a new engine, adding a car, etc.
- You will be graded by how many people you transport per hour (p/h). p/h will be calculated by averaging transport during a day (maybe don't count canceled days) and your score should probably be averaged over multiple days so one bad day won't ruin you. Increased score will allow higher ticket prices => more furniture and trains and such.
- When done with modifications, you can start the next day.


## Popularity
Popularity is measured on a scale (maybe 0-5 stars?) and may affect your ticket prices. Probably automatically, I don't want this game to turn into a simulator... Besides the simulation of boarding of course :P

Score could make passengers more likely to stay longer on the train which will increase your profits.

Popularity is gained by good decor, good lighting, ~~food~~, ~~entertainment~~, ~~cleanliness~~ and running on time. To start off with, the time criteria is probably gonna be the first and only to be implemented. The rest may be added later.

Popularity could be on a car to car basis (plus speed probably) to allow for different classes.


## Features & Motivations

### Simulating boarding
It's the main concept of the game which will make you have to optimize your train which is the fun part i hope.

### Scoring by passengers per hour (p/h)
I hope this will be a motivator for the player to optimize instead of just getting as much cash as possible. I also wanna balance the game so multiple playstyles are viable. I'm thinking, long slow-steamer with a lot of capacity, nice express train with higher prices due to nice decor, or a more balanced approach or something else! I hope this will make the game playable for more than like a couple minutes.

### Popularity
You need to be motivated to make fancy trains. Without it you would make tin cans. Having this be like a more localized score that mostly affects single cars rather than your whole experience. Popularity could modify things such as ticket prices, retention time (how many stations people travel) and maybe even passenger count? 

### Ticket Pricing
I want this to be done automatically. You will still see the price always so you can measure your performance against that number. Ticket prices will be affected by things like your popularity and random demand and trip length.

## Station length limits
I want to have stations have length limits. This will pressure the player to not make 10 km long trains to increase passenger counts. This will also make the player consider whether stacking locomotives is worth it. 

## Grid based design
Cars will have grids in them for the sake of easier implementation and hopefully easier to approach. You will need to leave space for people to walk around and get off the train but you could make it a maze if you want to at the cost of throughput.

### Staff - Eventually
For staff to be useful I would need to implement food serving (which would require a service car) or dirty cars to have cleaning staff or something like that. That will be a later feature.


## Cars & Locomotives
I'm thinking that there will be a couple of car types and locomotives with different strengths and weaknesses. Their absolute stats will improve if you get a better train in that category but the relative stats of the train will not change. Can't buy yourself out of a trade off.

### Cars
You design the interiors of the cars on a grid system. Furniture can be things like seats, tables, poles, windows, dividers?, lights?, and more. 

#### Furniture
Different decor and lights could affect passengers differently. Bunks on a train could drastically increase retention while slowing passengers speed down when disembarking. Warmer lights could do the same. Cold lighting could increase passenger speed but decrease retention.

Getting a class of car that has more doors will help improve throughput but doors themselves will take up more space.

Passthrough on a car means passengers can travel between cars to get off at smaller stations. (I don't think they should care and therefore not affect your popularity but your score is gonna tank since it's gonna be hella' slow).

| **Type** | **Door Pairs** | **Space** | **Retention**   | **Price** | **Popularity** | **Passthrough** | **Note**                                                                          |
| -------- | -------------- | --------- | --------------- | --------- | -------------- | --------------- | --------------------------------------------------------------------------------- |
| Basic    | 2              | Normal    | Normal          | Normal    | Normal         | Yes             | All-rounder                                                                       |
| Cargo    | 1              | Very High | Low             | Cheap     | Very Low       | No              | Space over looks and convenience.<br>No passthrough is risky for smaller stations |
| Subway   | 4              | Normal    | Low             | Expensive | Low            | Yes             | More doors, but they also take space                                              |
| Fancy    | 1              | High      | Very High       | Expensive | High           | Yes             | Space and the looks worth a pretty penny                                          |
| Sleeper  | 1              | Low       | Incredibly High | Expensive | Very High      | Yes             | Passengers do love a nights (1 hour) sleep!                                       |
| Flat Bed | ∞              | High      | Incredibly Low  | Cheap     | Incredibly Low | No              | Infinite doors! You can exit anywhere!                                            |
| Modern   | 2              | Normal    | High            | Expensive | High           | Yes             | Better than basic but at a cost                                                   |
<!-- Protected row to prevent table shenanigans -->
  
### Locomotives 
There could be different classes of locomotives in multiple tiers that all have different nominal power so that their prices can develop at different paces.

I guess you could stack locomotives but you would get punished from stations being too small. I'm gonna make locomotives take up space at stations (I blame signaling and safety I guess).

| **Type**                 | **Nominal Power** | **Price** | **Popularity** | **Passenger Space** | **Note**                          |
| ------------------------ | ----------------- | --------- | -------------- | ------------------- | --------------------------------- |
| Basic                    | Normal            | Normal    | Normal         | None                | All-rounder                       |
| Cargo                    | Very High         | Normal    | Low            | None                | Power over looks                  |
| Steam                    | Low               | Normal    | Very High      | None                | Who doesn't love vintage trains?? |
| Modern Electric wo/space | High              | Expensive | High           | None                | Better than basic besides price   |
| Modern Electric w/space  | Normal            | Expensive | High           | Some                | Loco with passengers??            |
<!-- Protected row to prevent table shenanigans -->


## Stations
They spawn with a certain passenger count (maybe modified by score or popularity?) and they know how many stops they wanna travel. They pay more for longer distances of course. 

Stations have length limits. If you

Stations could have length limits (I could simply prevent you from stopping there, loosing you passengers and popularity or I could just stop the train so only some cars are accessible which would also be bad for you since passengers are gonna be ass slow getting off since they would have to walk through the train. If possible even)