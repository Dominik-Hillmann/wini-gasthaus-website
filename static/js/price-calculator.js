const startDateInput = document.querySelector("#start");
const endDateInput = document.querySelector("#end");
const numAdultsInput = document.querySelector("#num-adults");
const numChildrenInput = document.querySelector("#num-children");
const priceOutput = document.querySelector("#price-output");

const updatePrice = () => {
    const [startDateYear, startDateMonth, startDateDay] = startDateInput.value.split("-");
    const startDate = new Date(startDateYear, startDateMonth, startDateDay);
    const [endDateYear, endDateMonth, endDateDay] = endDateInput.value.split("-");
    const endDate = new Date(endDateYear, endDateMonth, endDateDay);

    const numAdults = parseInt(numAdultsInput.value);
    const numChildren = parseInt(numChildrenInput.value);
    const adultBasePricePerNight = 80.0;
    const childBasePricePerNight = 20.0;
    const timeDelta = endDate - startDate;
    const numNights = Math.ceil(timeDelta / (24 * 60 * 60 * 1000));
    const projectedPrice = numNights 
        * (adultBasePricePerNight * numAdults 
        + childBasePricePerNight * numChildren);
    console.log(projectedPrice)

    if (LANGUAGE === "Deutsch") {
        const numNightsOutput = numNights <= 1 ? "einer" : `${numNights}`;

        const numAdultsOutput = numAdults <= 1 ? "einem" : `${numAdults}`;

        let numChildrenOutput = numChildren <= 1 ? " und einem Kind" : ` und ${numChildren} Kindern`;
        numChildrenOutput = numChildren == 0 ? "" : numChildrenOutput;

        const nightOutput = numNights > 1 ? "Nächten" : "Nacht";
        const adultOutput = numAdults > 1 ? "volljährigen Gästen" : "volljährigem Gast";
        priceOutput.innerHTML = numNights <= 0 
            ? "" 
            : `Ein Aufenthalt von ${numNightsOutput} ${nightOutput} 
                mit ${numAdultsOutput} ${adultOutput}${numChildrenOutput} kostet voraussichtlich 
                EUR ${projectedPrice}.`;

    } else if (LANGUAGE === "English") {
        const numNightsOutput = numNights <= 1 ? "one" : `${numNights}`;

        const numAdultsOutput = numAdults <= 1 ? "a single" : `${numAdults}`;

        let numChildrenOutput = numChildren <= 1 ? " and one child" : ` and ${numChildren} children`;
        numChildrenOutput = numChildren == 0 ? "" : numChildrenOutput;

        const nightOutput = numNights > 1 ? "nights" : "night";
        const adultOutput = numAdults > 1 ? "adults" : "adult";
        priceOutput.innerHTML = numNights <= 0 
            ? "" 
            : `A stay of ${numNightsOutput} ${nightOutput} 
                accomodating ${numAdultsOutput} ${adultOutput}${numChildrenOutput} is expected to cost 
                EUR ${projectedPrice}.`;
    
    } else console.error(`No translation found for language '${LANGUAGE}'.`);
    console.log([
        startDateInput, 
        endDateInput, 
        numAdultsInput,
        numChildrenInput
    ])  
};

[
    startDateInput, 
    endDateInput, 
    numAdultsInput,
    numChildrenInput
].forEach(input => input.addEventListener("change", updatePrice));

updatePrice();
