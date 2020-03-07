$(document).ready(function() {
    $(".circularProgress").each(function (index, cProgress) {
        var progressPercentage = parseInt($(cProgress).attr("data-progress"));
        $(cProgress).css({
            "background-color":
                "conic-gradient(#ffb366 " + 
                progressPercentage + 
                "%,#0b090c " +
                progressPercentage +
                "%)"
        })
    });
});