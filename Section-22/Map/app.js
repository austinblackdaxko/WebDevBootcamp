const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const doubles = numbers.map(function(num) {
    return num * 2;
})

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

const tvShowTitles = tvShows.map(function(name) {
    return name.title
})