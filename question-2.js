url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating"

async function callAPI(url) {
    try {
        const resultsContainer = document.querySelector(".results");
        let response = await fetch(url);
        let data = await response.json();
        data = data["results"];
        resultsContainer.innerHTML = "";
        for (let i = 0; i <= 8; i++) {

            let name = data[i].name;
            let rating = data[i].rating;
            let tags = data[i].tags.length;

            resultsContainer.innerHTML += '<div>' + name + '<br>' + rating + '<br>' + tags + '</div>';

        }

    } catch (error) {
        console.log("An error occured");
        console.log(error);
    }
}

callAPI(url);

