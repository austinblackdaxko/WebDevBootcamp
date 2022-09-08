const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function print(element) {
//     console.log(element)
// }

// numbers.forEach(print)

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
//     else {
//         console.log(`${el} is an odd number!`)
//     }

// })

const tvShows = [
    {
        title: 'Ranking of Kings',
        score: 80
    },
    {
        title: 'House of the Dragon',
        score: 85
    },
    {
        title: 'Fargo',
        score: 90
    },
    {
        title: 'Mr. Robot',
        score: 95
    },
    {
        title: 'Better Call Saul',
        score: 90
    },
    {
        title: 'Spy x Family',
        score: 85
    }
]

tvShows.forEach(function (show) {
    console.log(`${show.title}: ${show.score}/100`)
})

// const rating = tvShows.map(function (show) {
//     return `${show.title} - ${show.score / 10}/10`
// })

const rating = tvShows.map((show) => (
    `${show.title} - ${show.score / 10}/10`
))