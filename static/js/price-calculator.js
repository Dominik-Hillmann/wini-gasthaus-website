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

    if (LANGUAGE === "Deutsch") {
        const numNightsOutput = numNights <= 1 ? "einer" : `${numNights}`;
        const numGuestsOutput = numGuests <= 1 ? "einem" : `${numGuests}`;
        const nightOutput = numNights > 1 ? "Nächten" : "Nacht";
        const guestOutput = numGuests > 1 ? "Gästen" : "Gast";
        priceOutput.innerHTML = numNights <= 0 
            ? "" 
            : `Ein Aufenthalt von ${numNightsOutput} ${nightOutput} mit ${numGuestsOutput} ${guestOutput} kostet voraussichtlich EUR ${projectedPrice}.`;

    } else if (LANGUAGE === "English") {
        const numNightsOutput = numNights <= 1 ? "one" : `${numNights}`;
        const numGuestsOutput = numGuests <= 1 ? "a single" : `${numGuests}`;
        const nightOutput = numNights > 1 ? "nights" : "night";
        const guestOutput = numGuests > 1 ? "guests" : "guest";
        priceOutput.innerHTML = numNights <= 0 
            ? "" 
            : `A stay of ${numNightsOutput} ${nightOutput} accomodating ${numGuestsOutput} ${guestOutput} is expected to cost EUR ${projectedPrice}.`;
    
    } else console.error(`No translation found for language '${LANGUAGE}'.`);    
};

[
    startDateInput, 
    endDateInput, 
    numGuestsInput
].forEach(input => input.addEventListener("change", updatePrice));

updatePrice();
