var darkMode = false;

function filterOnClick() {
    console.log("filter clicked");
    $(".fa-sort-down").css("display") !== "none" ?
        $(".fa-sort-down").hide() :
        $(".fa-sort-down").show();

    $(".fa-sort-up").css("display") !== "none" ?
        $(".fa-sort-up").hide() :
        $(".fa-sort-up").show();

    $(".dropdown").css("display") === "none" ?
        $(".dropdown").show() :
        $(".dropdown").hide();
}

function switchTheme() {
    console.log("switch btn clicked");

    darkMode = !darkMode;

    if (darkMode) {
        // dark mode
        $("body").css("background-color", "hsl(207, 26%, 17%)");
        $(".box-shadow").css("box-shadow", "1px 1px 6px hsl(207, 26%, 8%)");
        $("header").css({
            "box-shadow": "1px 1px 6px hsl(207, 26%, 8%)",
            "background-color": "hsl(209, 23%, 22%)"
        });
        $(".brand-title").css("color", "#fff");
        $(".mode-switch button").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".search-result form input[type='search']").css(
            "background-color",
            "hsl(209, 23%, 22%)"
        );
        $("#search").toggleClass("light");
        $(".filter").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".filter button").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".fas").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".country-card").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".details-section a").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".info").css({
            "color": "#fff"
        });
        $(".border-card").css({
            "background-color": "hsl(209, 23%, 22%)"
        });
        $(".dropdown").css({
            "background-color": "hsl(209, 23%, 22%)",
            "color": "#fff"
        });
        $(".country-card a").css({
            "color": "#fff"
        });
    } else {
        // light mode
        $("body").css("background-color", "hsl(0, 0%, 98%)");
        $(".box-shadow").css("box-shadow", "1px 1px 6px hsl(0, 0%, 90%)");
        $("header").css({
            "box-shadow": "1px 1px 6px hsl(0, 0%, 90%)",
            "background-color": "#fff"
        });
        $(".brand-title").css("color", "hsl(200, 15%, 8%)");
        $(".mode-switch button").css({
            "background-color": "#fff",
            "color": "hsl(200, 15%, 8%)"
        });
        $(".search-result form input[type='search']").css(
            "background-color",
            "#fff"
        );
        $("#search").toggleClass("light");
        $(".filter").css({
            "background-color": "#fff",
            "color": "hsl(200, 15%, 8%)"
        });
        $(".filter button").css({
            "background-color": "#fff",
            "color": "hsl(200, 15%, 8%)"
        });
        $(".fas").css({
            "background-color": "#fff",
            "color": "#111"
        });
        $(".country-card").css({
            "background-color": "#fff",
            "color": "#111"
        });
        $(".details-section a").css({
            "background-color": "#fff",
            "color": "#111"
        });
        $(".dropdown").css({
            "background-color": "#fff",
            "color": "#111"
        });
        $(".border-card").css({
            "background-color": "#fff"
        });
        $(".info").css({
            "color": "#111"
        });
        $(".country-card a").css({
            "color": "#111"
        });
    }
}