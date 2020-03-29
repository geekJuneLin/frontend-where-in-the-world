const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

// set ejs view engine
app.set("view engine", "ejs");

// set the static folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// global var
let fetchedCountries = [];
var darkMode = false;

// home page
app.get("/", (req, res) => {
    if (fetchedCountries.length == 0) {
        request.get(
            "https://restcountries.eu/rest/v2/all",
            (err, response, body) => {
                if (err) {
                    console.log("Fetching countries information with errors: " + err);
                } else {
                    let decodedRes = JSON.parse(body);

                    console.log(decodedRes);

                    decodedRes.forEach(country => {
                        // console.log(country.name + ", flag: " + country.flag);
                        packedCountry = {
                            name: country.name,
                            flag: country.flag,
                            population: country.population,
                            capital: country.capital,
                            region: country.region,
                            topLevelDomain: country.topLevelDomain,
                            subRegion: country.subRegion,
                            borders: country.borders,
                            currencies: country.currencies,
                            languages: country.languages,
                            nativeName: country.nativeName,
                            alpha3Code: country.alpha3Code
                        };

                        fetchedCountries.push(packedCountry);
                    });
                    // testing
                    console.log(fetchedCountries.length);
                    res.render("search-page", { countries: fetchedCountries });
                }
            }
        );
    } else {
        res.render("search-page", {
            countries: fetchedCountries
        });
    }
});

// details page
app.get("/details/:name", (req, res) => {
    let countryName = req.params.name;
    console.log("Country name is: " + countryName);
    fetchedCountries.forEach(country => {
        if (country.name === countryName) {
            res.render("details", {
                country: country,
                fetchedCountries: fetchedCountries
            });
            console.log(country);
            return;
        }
    });
});

// set server port
app.listen(3000, (req, res) => {
    console.log("server is running on port 3000");
});