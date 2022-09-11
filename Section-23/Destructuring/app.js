// const scores = [929, 899, 888, 772, 543, 243, 111];

// const [gold, silver, bronze, ...rest] = scores;

// Destructuring Objects

const user = {
    email: 'harvey@example.com',
    password: 'Password123!xlmb',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Milk was an American politician and the first openly gay man to be elected to public office in California',
    city: 'San Francisco',
    state: 'California'
}

// the cringe way

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// the based way (destructuring)

// const {firstName, email, lastName, city, bio} = user;

// can set a new variable name like this, and also assign a default value using = 

// const { born: birthYear, died: deathYear = 'not dead yet!' } = user;

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const {city, state, died = 'not dead yet!'} = user2;

// Param Destructuring

// The cringe way

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }

// The based way, using destructuring. looks longer here but comes in handy for a lot of arguments

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// another way of doing it

function fullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`
}


const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

// Destructuring params in an array, the cringe way

// movies.filter((movie) => movie.score >= 90)

// the based way

// movies.filter(({ score }) => score >= 90)

// const goodMovies = movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })


const goodMovies = movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`
})



