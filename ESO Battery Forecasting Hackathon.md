Here is what I learnt after taking part in an ESO battery hackathon on Kaggle (and came 3rd 🥉) where I was tasked with forecasting the output for battery connected to the grid.

1. XGBoost is still a super powerful and efficient ML tool for forecasting. Despite lots of new flashy models on the market.

2. AI coding speeds things up. I now use Cursor, an code editor with GPT4 built in. It's quick and I much prefer being able to talk to my code base rather than copying and pasting. However, it doesn't support remote SSH tunnelling yet.

3. Data, as usual, is key to forecasting. In researching more about the battery, I found several nearby EV charging stations. Data from these EV stations would have likely helped but this data is private.

4. On the other hand, I was surprised by the quality and quantity of data published on the BMRS and Elexon APIs! I came across a great dataset by xxxx, of energy generation in the UK for the last 10 years for each settlement period which is updated monthly. Quality, large and maintained datasets like this save everyone a ton of time (you can tell from the XXX number of downloads it has).

5. For the battery itself, the main key driver of

6. The regulatory environment for how batteries operate has shifted a lot over the past year as the ESO aims to get rid of XXX and replace it with YYY. This adds a rather tricky dimensions to the forecast as the live scenario no longer reflects the behaviour in the training set. This is where using live lag features would help a lot. 

7. Lastly, Hackathons are great fun. If your new to ML and want to try out something, have a go at one! Since joining Open Climate Fix I have found myself maintaining larger models and code bases so I find it exciting when I can start a project from a clean slate!