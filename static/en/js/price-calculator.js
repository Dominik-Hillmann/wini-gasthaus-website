const startDateInput = document.querySelector("#start");
const endDateInput = document.querySelector("#end");
const numGuestsInput = document.querySelector("#number-people");
const priceOutput = document.querySelector("#price-output");

const updatePrice = () => {
    const [startDateYear, startDateMonth, startDateDay] = startDateInput.value.split("-");
    const startDate = new Date(startDateYear, startDateMonth, startDateDay);
    const [endDateYear, endDateMonth, endDateDay] = endDateInput.value.split("-");
    const endDate = new Date(endDateYear, endDateMonth, endDateDay);

    const numGuests = parseInt(numGuestsInput.value);
    const basePricePerNight = 100.0;
    const timeDelta = endDate - startDate;
    const numNights = Math.ceil(timeDelta / (24 * 60 * 60 * 1000));
    const projectedPrice = basePricePerNight * numNights * numGuests;

    const numNightsOutput = numNights <= 1 ? "one" : `${numNights}`;
    const numGuestsOutput = numGuests <= 1 ? "a single" : `${numGuests}`;
    const nightOutput = numNights > 1 ? "nights" : "night";
    const guestOutput = numGuests > 1 ? "guests" : "guest";
    priceOutput.innerHTML = numNights <= 0 
        ? "" 
        : `A stay of ${numNightsOutput} ${nightOutput} including ${numGuestsOutput} ${guestOutput} will cost approximatly EUR ${projectedPrice}.`;
};

[
    startDateInput, 
    endDateInput, 
    numGuestsInput
].forEach(input => input.addEventListener("change", updatePrice));

updatePrice();
