const nums = [13,4,5,21,3,3,1,2,7,6,4,2,53456]

const spread = Math.max(...nums) // this now uses all the numbers in nums as its own element, not just the array itself

const cats = ['Luna', 'Gothmog', 'Hugo']
const dogs = ['Savannah', 'Max', 'Sonia']

const allPets = [...cats, ...dogs, "Trunks"]

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = {
    ...feline,
    ...canine
}

