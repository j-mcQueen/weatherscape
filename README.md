# WEATHERSCOPE

## DESCRIPTION

Weatherscope is an application for generating dynamic 3-day weather forecasts for any location. Check out the [live version](https://j-mcqueen.github.io/weatherscope/)!

## MOTIVATIONS

My fiancé frequently asks me for the weather projection of the day, so what better way to give that information in a beat than by building my own weather app? Additionally, I love making visually appealing interfaces, so I wanted to built an efficient application that was more aesthetic than some of the other brutalist/ utilitarian counterparts out there.

Weatherscope was developed using React to build upon the basics I had learned previously. With the visual component being an important aspect of the application, I knew the app needed some fluid animations, which lead me to the interesting learning journey of the [`react-spring`](https://react-spring.dev/) library.

## LEARNING

In the development of this app, I learned how to process and extract information returned from an API, and gained experience in working with asynchronous JS, Promises and the fetch API.

When extracting data from the API and converting it into human readable information for the user, I noticed that the logic followed similar patterns, so I implemented a series of higher order functions to abide by DRY principles and keep my code efficient and readable.

For the animations, I knew what I wanted, but not how to implement. This journey of research led me to the `react-spring` library. Through their documentation, I understood the fundamentals and found an example animation that behaved close to my original vision. Using those fundamentals to translate the code from the example into what I wanted was challenging, but succeeding felt extremely rewarding and I thoroughly enjoyed the learning process. There is clearly much more to learn, but I look forward to utilizing the library for nifty animations in the future!

## CREDITS

- [loading.io](https://loading.io/) - static foam background image
- [bas.dev](https://bas.dev/work/meteocons) - animated weather icons
