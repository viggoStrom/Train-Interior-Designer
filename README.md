# Train Interior Designer and Simulator
### The roguelike train designer

You are the owner of your very own train. You design every car and you decide which locomotives you use. You play one run at a time until you run out of money. You are therefore motivated to earn money to buy better stuff and improve your designs.

## Main Gimmick
Boarding and disembarking is run as a simulation. Not much more than that.. The rest of the gameplay loop is there to motivate you to optimize your train for this simulation.

## Gameplay Loop of a Run
1. Start a day with a basic train (basic loco + basic car probably).
1. Arrive at your first station and pick up as many passengers as you can fit.
1. Travel to the next station. Traveling between stations takes a set amount of time. Most passengers will get off here. When passengers spawn they know how many stops they wanna travel. They pay more for longer trips.
1. Repeat until you reach the end of the day or you cancel the train for that day.
1. At the end of the day, you arrive at your workshop where you can upgrade or modify your train with the money you earn.
1. When you are satisfied with your train, you can start the next day.
1. You do this until you run out of money.

The longer you stay afloat, the more tech you will unlock for future runs. Special challenges will also be there to make you try something new like running with only cargo locomotives and cars or to recreate the Polar Express etc.

## Considerations
When doing a run, you always weight the importance between a couple of things. Money is your ultimate motivator, without it you will just go bankrupt of course. But you also need to consider your ticket prices, popularity, space, passenger mood, speed, and length. 

Ticket prices are the most important thing. They are practically the only way of making money. Be weary though, passengers will only tolerate so much. It's a balancing game of how much you can charge for a ticket and how many passengers you can get on your train. Too high, and you will have empty cars and lose popularity. Too low, and you will fill your cars but won't make enough money to keep the train running.

Popularity will affect how much passengers are willing to pay to ride and how many passengers show up at the stations. It is increased by nice decor, comfort and punctuality. It is decreased by bad decor, discomfort, and being late. Increased popularity will also increase retention.

Space is simply how big the grids are in your cars. More space can mean more seats, or more decor. Generally cars with more space have trade-offs like price or popularity.

Passenger mood is affected by decor and which furniture you choose. Bunks for instance will increase retention by a lot but it's gonna make passengers drowsy and slower to disembark. Cold lighting will make your passengers quicker on their feet at the cost of retention.

Speed is how fast your train is. This is determined by the power of your locomotives. When running at nominal power, you travel at speed. Running below nominal power will lead to slower times which will surely affect your popularity negatively. People do not enjoy late trains.

Having a super long train is not going to be a solution to every problem either. Stations have length limits. Even if you could get a really long train to run at nominal power, if the station is too short your embark and disembark times will be atrocious if even possible. Most cars let passengers pass through to the next car but some cars will not allow this so disembarking might not even be possible. Passengers that are not let off will be mad and require compensation which will eat into your bottom line.


## Pressures
You will be pressured to make a train that is both efficient and comfortable. You will need to balance throughput with comfort. You will need to balance speed with popularity. You will need to balance space with price. You will need to balance everything to make the most money.

Taxes and fees are brutal. Inflation is also rough these days. Costs will increase over time so you can't just fall into a rhythm that works. You live in capitalist society after all. Running late and locking passengers on your train will incur fines and settlement costs. Stopping at stations also costs money of course, as well as a longer train. That's valuable station real estate you're taking up. You also have to pay for cleaning of your train of course. The more passengers you transport, the higher those costs are going to be. At the end of the day you will get a summery of the day's costs and earnings.

Events will occur, to your benefit and detriment. You may have an engine failure to decrease your nominal power for the day. It could be a holiday which increases passenger counts (hopefully you have space for them all *wink*). A competitor might go out of business giving you more passengers and so on. Events exist to keep the game interesting and to keep you on your toes like any good roguelike.


## Time scale
Every run will start at day and month zero. You run trains on a day to day basis but you only do one day per month so after 12 days of playing, it's been a year. This is to make the scale as a whole more sensible, especially since tech/new furniture, locomotives and cars may be unlocked if you progress far enough. Having a tech be unlocked after you successfully run a train for 5 years for instance would make more sense than 60 days.



## Items & Stuff

### Furniture
Different decor and lights could affect passengers differently. Bunks on a train could drastically increase retention while slowing passengers speed down when disembarking. Warmer lights could do the same. Cold lighting could increase passenger speed but decrease retention.

### Cars & Locomotives
I'm thinking that there will be a couple of car types and locomotives with different strengths and weaknesses. Their absolute stats will improve if you get a better train in that category but the relative stats of the train will not change. Can't buy yourself out of a trade off.

#### Cars
You design the interiors of the cars on a grid system. Furniture can be things like seats, tables, poles, windows, dividers?, lights?, and more. 

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
  
#### Locomotives 
There could be different classes of locomotives in multiple tiers that all have different nominal power so that their prices can develop at different paces.

I guess you could stack locomotives but you would get punished from stations being too small. I'm gonna make locomotives take up space at stations (I blame signaling and safety I guess). Not all locomotives allow for stacking and some give bonuses or penalties to power for stacking. Modifiers are not finalized.

Stacking modifiers. The modifier applies to the second, third, etc locomotive in the stack. The first locomotive is always at nominal power. A second Basic locomotive would be at 0.8x power. A third would be at 0.8^2x of the first locomotive's power etc. Some locomotives will not allow stacking but may allow for double headed trains. So they will only be allowed two locomotives and they probably won't be on full power. 

| **Type**                 | **Nominal Power** | **Stacking**    | **Price**      | **Popularity** | **Passenger Space** | **Note**                          |
| ------------------------ | ----------------- | --------------- | -------------- | -------------- | ------------------- | --------------------------------- |
| Basic                    | Normal            | Yes (0.8x)      | Normal         | Normal         | None                | All-rounder                       |
| Cargo                    | Very High         | Yes (1.5x)      | Normal         | Low            | None                | Power over looks                  |
| Steam                    | Low               | Yes (1x)        | Normal         | Very High      | None                | Who doesn't love vintage trains?? |
| Modern Electric wo/space | High              | Each End (0.8x) | Expensive      | High           | None                | Better than basic besides price   |
| Modern Electric w/space  | Normal            | Each End (0.8x) | Expensive      | High           | Some                | Loco with passengers??            |
| Shinkansen               | Very High         | Each end (0.8x) | Very Expensive | Very High      | None                | Fast and efficient. Shinkansen!   |
<!-- Protected row to prevent table shenanigans -->