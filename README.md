
15 Minutes: How Will You Use Your 15 Minutes of Fame?

<img width="997" alt="15Minutes" src="https://user-images.githubusercontent.com/79177146/151684872-93a5b650-97c1-486f-9bc0-f8a082155538.png">

15 Minutes is a take on the concept introduced by Andy Warhol "15 Minutes of Fame". This project was built in React and Node.js with Express using the Twitter API.  Find more info on the Twitter API at https://developer.twitter.com/en/products/twitter-api.  

Check it out here: https://calm-citadel-32694.herokuapp.com/

The goal of this project is to encourage the user/viewer to think critically about their use of social media.  Now that we're living in an age when each person can have their 15 minutes of fame, isn't it time to take Andy's excitement a step further?  Instead of simply having your 15 minutes, shouldn't we use that 15 minutes for something positive?   

I decided to choose 5 celebrities who are frequently using their Twitter platform to send positive messages to their fans.  They are:

Lady Gaga.
Oprah Winfrey.
Reese Witherspoon.
Ashton Kutcher.
Beyonce Knowles. 

Read more about this project in my blog post at https://casspicerblog.netlify.app/blog/15-minutes

*Bug Fixes*
4/29/2022 Bug Fix: 
1. Added a "catch-all" route in the server which will allow the user to refresh from any page of the application without experiencing issues.  I added this route at the bottom of the server side code:

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })
 
2. Fixed the bug that was causing intermittent issues with the random tweets on the showcase page not rendering.  (I simply added a conditional ternary statement within the setShow() method in the Showcase component which added the string "none" if the media type or url came back from the server as undefined, meaning there was no photo or video attached.)

Feature Wishlist:
- Create a better user search interface. Currently, the user has to enter the exact Twitter handle (starts with @) for a user in order to find their tweets.  Even one letter off, and it won't pull up the user.  I'd like to design a more flexible search using the GET users/search endpoint, which allows the user to search by multiple criteria.  Find info on this endpoint at https://developer.twitter.com/en/docs/twitter-api/v1/accounts-and-users/follow-search-get-users/api-reference/get-users-search

Developed by Cas Spicer, Web Developer & Problem Solver Extraordinaire 
Learn more about me and my work at www.casspicer.com
Connect with me on LinkedIn at https://www.linkedin.com/in/cas-spicer/

Thanks for taking a look!
