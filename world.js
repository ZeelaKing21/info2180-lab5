
document.addEventListener("DOMContentLoaded", function () {
    const lookupButton = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const result = document.getElementById("result");

    lookupButton.addEventListener("click", function () {
        const country = countryInput.value.trim();

        fetch("world.php?country=" + encodeURIComponent(country))
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
                result.textContent = "Unable to retrieve country information.";
            });
    });
});
