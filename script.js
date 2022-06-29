$(document).ready(function () {
  $(".plot").click(function () {
    //clear
    $(".description").css("display", "none");
    $(".plot > text").css("stroke-width", "2px");

    screenWidth = $(window).width();
    console.log("elem height", $(this));
    //get plot #
    plot = $(this).attr("id").substring(5);
    console.log("plot", plot);
    plotLocation = $(this).position();
    plotLocationLeft = plotLocation.left;
    //description wont spill off screen
    if (plotLocationLeft > screenWidth - 340) {
      console.log("spill over by", screenWidth - plotLocationLeft);
      difference = screenWidth - plotLocationLeft;
      plotLocationLeft = plotLocationLeft - (340 - difference);
    }
    $(`#plot_${plot} > text`).css("stroke-width", "4px");
    $(".description-" + plot).css({ display: "flex", top: `${plotLocation.top + 40}px`, left: `${plotLocationLeft}px` });
    console.log("location", plotLocation);
  });
});
