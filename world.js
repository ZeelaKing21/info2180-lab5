
document.addEventListener("DOMContentLoaded", function () {
    const lookupButton = document.getElementById("lookup");
    const citiesButton = document.getElementById("lookup-cities");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    function lookup(type) {
        const country = countryInput.value.trim();

        let url = "world.php?country=" + encodeURIComponent(country);

        if (type === "cities") {
            url += "&lookup=cities";
        }

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error) {
                console.error(error);
                result.textContent = "Unable to retrieve information.";
            });
    }

    lookupButton.addEventListener("click", function () {
        lookup("countries");
    });

    citiesButton.addEventListener("click", function () {
        lookup("cities");
    });
});
