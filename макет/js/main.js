$(function () {
 
    $("#rateYo").rateYo()
                .on("rateyo.set", function (e, data) {
   
                    alert("The rating is set to " + data.rating + "!");
                });
  });