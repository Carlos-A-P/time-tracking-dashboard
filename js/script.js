const cardData = document.querySelectorAll('[data-card]')
const periodButton = document.querySelectorAll('[data-period]')
const data = `[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`

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