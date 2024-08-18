const startDateInput = document.querySelector("#start");
const endDateInput = document.querySelector("#end");
const numAdultsInput = document.querySelector("#num-adults");
const numChildrenInput = document.querySelector("#num-children");
const numPetsInput = document.querySelector("#num-pets")
const priceOutput = document.querySelector("#price-output");

const updatePrice = () => {
    const [startDateYear, startDateMonth, startDateDay] = startDateInput.value.split("-");
    const startDate = new Date(startDateYear, startDateMonth, startDateDay);
    const [endDateYear, endDateMonth, endDateDay] = endDateInput.value.split("-");
    const endDate = new Date(endDateYear, endDateMonth, endDateDay);
    const timeDelta = endDate - startDate;
    const numNights = Math.ceil(timeDelta / (24 * 60 * 60 * 1000));

    const numAdults = parseInt(numAdultsInput.value);
    const numChildren = parseInt(numChildrenInput.value);
    const numPets = parseInt(numPetsInput.value);

    const baseUrl = "https://gasthaus-wini.com/api/v1/price";
    //const baseUrl = "http://localhost:8080/api/v1/price"
    const queryParams = new URLSearchParams({
        startDate: `${startDateInput.value}`,
        endDate: `${endDateInput.value}`,
        numAdults: `${numAdults}`,
        numChildren: `${numChildren}`,
        numPets: `${numPets}`
    });

    const insertPriceOnSuccess = price => {
        if (LANGUAGE === "Deutsch") {
            const numNightsOutput = numNights <= 1 ? "einer" : `${numNights}`;

            const numAdultsOutput = numAdults <= 1 ? "einem" : `${numAdults}`;

            let numChildrenOutput = numChildren <= 1 ? " und einem Kind" : ` und ${numChildren} Kindern`;
            numChildrenOutput = numChildren === 0 ? "" : numChildrenOutput;

            let numPetsOutput = numPets <= 1 ? ", einem Haustier" : `, ${numPets} Haustieren`;
            numPetsOutput = numPets === 0 ? "" : numPetsOutput;

            const nightOutput = numNights > 1 ? "Nächten" : "Nacht";
            const adultOutput = numAdults > 1 ? "volljährigen Gästen" : "volljährigem Gast";
            priceOutput.innerHTML = numNights <= 0
                ? ""
                : `Ein Aufenthalt von ${numNightsOutput} ${nightOutput} 
            mit ${numAdultsOutput} ${adultOutput}${numPetsOutput}${numChildrenOutput} kostet voraussichtlich 
            EUR ${price.toFixed(2)}.`;

        } else if (LANGUAGE === "English") {
            const numNightsOutput = numNights <= 1 ? "one" : `${numNights}`;

            const numAdultsOutput = numAdults <= 1 ? "a single" : `${numAdults}`;

            let numChildrenOutput = numChildren <= 1 ? " and one child" : ` and ${numChildren} children`;
            numChildrenOutput = numChildren === 0 ? "" : numChildrenOutput;

            let numPetsOutput = numPets <= 1 ? ", a single pet" : `, ${numPets} pets`;
            numPetsOutput = numPets === 0 ? "" : numPetsOutput;

            const nightOutput = numNights > 1 ? "nights" : "night";
            const adultOutput = numAdults > 1 ? "adults" : "adult";
            priceOutput.innerHTML = numNights <= 0
                ? ""
                : `A stay of ${numNightsOutput} ${nightOutput} 
            accommodating ${numAdultsOutput} ${adultOutput}${numPetsOutput}${numChildrenOutput} is expected to cost 
            EUR ${price.toFixed(2)}.`;

        } else console.error(`No translation found for language '${LANGUAGE}'.`);
    }

    let resetTimeout;

    const greenPriceLightUp = () => {

        priceOutput.classList.remove("priceFetchFailure");
        priceOutput.classList.add("priceFetchSuccess");
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => priceOutput.classList.remove("priceFetchSuccess"), 3000);
    };

    const redPriceLightUp = () => {
        priceOutput.classList.remove("priceFetchSuccess");
        priceOutput.classList.add("priceFetchFailure");
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => priceOutput.classList.remove("priceFetchFailure"), 3000);
    };

    fetch(`${baseUrl}?${queryParams.toString()}`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            if (data.price) {
                insertPriceOnSuccess(data.price);
                greenPriceLightUp();
            } else {
                priceOutput.innerHTML = LANGUAGE === "Deutsch" ? data["message-german"] : data["message-english"];
                redPriceLightUp();
            }
        })
        .catch(error => console.error(error));
};

[
    startDateInput, 
    endDateInput, 
    numAdultsInput,
    numChildrenInput,
    numPetsInput
].forEach(input => input.addEventListener("change", updatePrice));

updatePrice();
