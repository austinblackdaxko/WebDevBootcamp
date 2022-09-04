const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

function returnDay(int) {
    if (int <= 0 || int > 7 || !parseInt(int)) {
        return null
    }
    else {
        return daysOfWeek[int - 1]
    }
}
