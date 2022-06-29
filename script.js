$(document).ready(function () {
  $(".plot").click(function (e) {
    //clear
    $(".description").css("display", "none");
    $(".plot > text").css("stroke-width", "2px");
    htmlWidth = $(document).width();
    svgWidth = $("svg").width();
    svgLocation = $("svg").position();
    console.log("svgWidth", svgWidth);
    console.log("svgLocation", svgLocation.left);
    console.log("htmlwidth", htmlWidth);
    //get plot #
    plot = $(this).attr("id").substring(5);
    //get plot location
    plotLocation = $(this).position();
    plotLocationLeft = plotLocation.left;

    //get desciption pop up width
    descriptionWidth = $(".description-" + plot).width();

    //description wont spill off screen
    console.log("plotLocationLeft", plotLocationLeft);
    //Move the pop ups so they arent off the page
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
    //move pop ups for mobile
    if (htmlWidth < 541) {
      if (plotLocationLeft > svgWidth - (descriptionWidth + 20)) {
        console.log("spill over by", svgWidth - plotLocationLeft);
        difference = svgWidth - plotLocationLeft;
        plotLocationLeft = plotLocationLeft - (170 - difference);
      }
    }

    $(`#plot_${plot} > text`).css("stroke-width", "4px");
    $(".description-" + plot).css({ display: "block", top: `${plotLocation.top + 5}px`, left: `${plotLocationLeft}px` });
  });
});
