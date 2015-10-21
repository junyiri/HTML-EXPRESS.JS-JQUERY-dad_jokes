/*$(function() {
  $.get("/jokes",function(data){
		var dataSetup = data.setup;
		var dataPunchline = data.punchline;
  },"json");
});
​
var ret = function(){
  var setup = $("#setup");
  var punchline = $("#punchline");
  setup.html(dataSetup);
  punchline.html(dataPunchline);
});*/

$(function() {
  $('#b1').on("click", function(){
    $.get("/jokes", function(data){
      var punchline = $("#punchline");
      punchline.html("");
      var dataSetup = data.setup;
      var dataPunchline = data.punchline;
      var setup = $("#setup");
      setup.html(dataSetup);
      $('#b2').on("click",function(){
        punchline.html(dataPunchline);
      })
    },"json")
  });
});
