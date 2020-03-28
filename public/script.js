function filterOnClick() {
  console.log("filter clicked");
  $(".fa-sort-down").css("display") !== "none"
    ? $(".fa-sort-down").css("display", "none")
    : $(".fa-sort-down").css("display", "inline-block");

  $(".fa-sort-up").css("display") !== "none"
    ? $(".fa-sort-up").css("display", "none")
    : $(".fa-sort-up").css("display", "inline-block");

  $(".dropdown").css("display") === "none"
    ? $(".dropdown").css("display", "block")
    : $(".dropdown").css("display", "none");
}
