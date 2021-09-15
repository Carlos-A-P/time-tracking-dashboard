# Time-Tracking-DashBoard

- Live website -(https://cpwd-time-tracking-dashboard.netlify.app/)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

## My process

### Screenshot

### End Result

![127 0 0 1_5501_index html](https://user-images.githubusercontent.com/85038929/133371242-06e8186e-6de8-43f6-b475-d41fe1e912c3.png)

![127 0 0 1_5501_index html (1)](https://user-images.githubusercontent.com/85038929/133371301-c71ba864-adfa-4860-99dd-19ebac4d9f55.png)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- JavaScript
- Media Queries

### What I learned

In this challenge I learned how to utilize a JSON file into my JavaScript. At first I thought that I would have to somehow link the data.json file to my javascript and somehow import the content. What I found to be most helpful was to change the file into a script.js file or simply copy and paste the object into quotation marks. I then set the object to a variable in order to use it in my function.

```Javascript
periodButton.forEach(button => {
    button.addEventListener('click', () => {
        for(let i = 0; i<button.parentElement.children.length; i++) {
          if (button.parentElement.children[i].classList.contains('selected')){
            button.parentElement.children[i].classList.remove('selected')
          }
        }
        button.classList.add('selected')

        const setting = button.innerHTML

        for(let i=0; i<cardData.length; i++) {

            let currentHoursDaily = JSON.parse(data)[i].timeframes.daily.current
            let prevHoursDaily = JSON.parse(data)[i].timeframes.daily.previous

            let currentHoursWeekly = JSON.parse(data)[i].timeframes.weekly.current
            let prevHoursWeekly = JSON.parse(data)[i].timeframes.weekly.previous

            let currentHoursMonthly = JSON.parse(data)[i].timeframes.monthly.current
            let prevHoursMonthly = JSON.parse(data)[i].timeframes.monthly.previous

            if (setting === 'Daily'){
                cardData[i].children[0].innerHTML = `${currentHoursDaily}hrs`
                cardData[i].children[1].innerHTML = `Yesterday - ${prevHoursDaily}hrs`
            } else if (setting === 'Weekly'){
                cardData[i].children[0].innerHTML = `${currentHoursWeekly}hrs`
                cardData[i].children[1].innerHTML = `Last Week - ${prevHoursWeekly}hrs`
            } else if (setting === 'Monthly'){
                cardData[i].children[0].innerHTML = `${currentHoursMonthly}hrs`
                cardData[i].children[1].innerHTML = `Last Month - ${prevHoursMonthly}hrs`
            }
        }

    })
})
```

- what I did here is that I set a forEach() method for my three buttons that change the data. After adding the event listener, I added two different 'for loops'. The first loop removes the class 'selected' from the selected button so that I can add the selected class to the recently selected button. In the following section I used the for loop to cycle throught each of my card divs. Within the JSON object there were an equal amount of values. As the loop cycled to the next card element, the loop would also cycle through the object values and set the data into the html accordingly.

### Useful resources

- [JavaScript Objects](https://www.w3schools.com/js/js_objects.asp) - documentation that provides information on JavaScript Objects

- [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) - Documentation that provides useful information on how JSON objects contain values and how they work

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://www.site.com)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
