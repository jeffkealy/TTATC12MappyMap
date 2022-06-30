$(document).ready(function () {
  var selectedPlot;
  var oneClicked = false;
  $(".plot").click(function () {
    // if (selectedPlot != undefined && selectedPlot.css("display") === "block") {
    //get rid of popup by clicking on the same plot
    oneClicked = true;

    clearPopup();
    htmlWidth = $(document).width();
    svgWidth = $("svg").width();
    svgLocation = $("svg").position();
    //get plot #
    plot = $(this).attr("id").substring(5);
    //get plot location
    plotLocation = $(this).position();
    plotLocationLeft = plotLocation.left;

    //get desciption pop up width
    descriptionWidth = $(".description-" + plot).width();

    //Move the pop ups so they dont spill off screen
    if (htmlWidth > 1080) {
      if (plotLocationLeft > svgWidth - 340) {
        console.log("spill over by", svgWidth - plotLocationLeft);
        difference = svgWidth - plotLocationLeft;
        plotLocationLeft = plotLocationLeft - (340 - difference);
      } else {
        console.log("adjust for white space");
        plotLocationLeft = plotLocationLeft - svgLocation.left;
      }
    }
    //move pop ups for tablet
    if (htmlWidth < 1080 && htmlWidth > 540) {
      if (plotLocationLeft > svgWidth - 340) {
        console.log("spill over by", svgWidth - plotLocationLeft);
        difference = svgWidth - plotLocationLeft;
        plotLocationLeft = plotLocationLeft - (340 - difference);
      }
    }

    if (htmlWidth < 541) {
      if (plotLocationLeft > svgWidth - (descriptionWidth + 20)) {
        console.log("spill over by", svgWidth - plotLocationLeft);
        difference = svgWidth - plotLocationLeft;
        plotLocationLeft = plotLocationLeft - (90 - difference);
      }
    }
    //show popup
    $(`#plot_${plot} > text`).css("stroke-width", "4px");
    $(".description-" + plot).css({ display: "block", top: `${plotLocation.top + 5}px`, left: `${plotLocationLeft}px` });
    selectedPlot = $(".description-" + plot);
  });
  //clear pop up when clicked
  $(".description").click(function () {
    clearPopup();
  });

  function clearPopup() {
    $(".description").css("display", "none");
    $(".plot > text").css("stroke-width", "2px");
  }
});
