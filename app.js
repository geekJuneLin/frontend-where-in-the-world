const express = require("express");
const request = require("request");
const app = express();

// set ejs view engine
app.set("view engine", "ejs");

// set the static folder
app.use(express.static("public"));

// home page
app.get("/", (req, res) => {
    let fetchedCountries = [];
    request.get("https://restcountries.eu/rest/v2/all", (err, response, body) => {
        if (err) {
            console.log("Fetching countries information with errors: " + err);
        } else {
            let decodedRes = JSON.parse(body);
            decodedRes.forEach(country => {
                // console.log(country.name + ", flag: " + country.flag);
                packedCountry = {
                    name: country.name,
                    flag: country.flag,
                    population: country.population,
                    capital: country.capital,
                    region: country.region
                };

                fetchedCountries.push(packedCountry);
            });
            // testing
            console.log(fetchedCountries.length);
            res.render("search-page", { countries: fetchedCountries });
        }
    });
});

// details page
app.get("/details", (req, res) => {
    res.render("details");
});

app.post("/details", (req, res) => {
    console.log("btn clicked!");
});

// set server port
app.listen(3000, (req, res) => {
    console.log("server is running on port 3000");
});