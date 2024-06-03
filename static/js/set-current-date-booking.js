const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const startDateElement = document.querySelector("#dates-selector-wrapper div:first-of-type input")
const endDateElement = document.querySelector("#dates-selector-wrapper div:last-of-type input")

const today = new Date()

startDateElement.min = addDays(today, 1).toISOString().substring(0, 10)
endDateElement.min = addDays(today, 1).toISOString().substring(0, 10)

startDateElement.value = addDays(today, 1).toISOString().substring(0, 10)
endDateElement.value = addDays(today, 4).toISOString().substring(0, 10)
