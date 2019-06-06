$(document).ready(function() {
  $("#animals").submit(function(event) {

    var animalChosen = parseInt($("#animalSelection option:selected").val());

    if (animalChosen === 1) {
      $("#Possums").show();
      $("#Koalas").hide();
       $("#Kangaroos").hide();
    } else if (animalChosen === 2) {
      $("#Koalas").show();
      $("#Possums").hide();
      $("#Kangaroos").hide();
    } else {
      $("#Kangaroos").show();
      $("#Koalas").hide();
      $("#Possums").hide();
    }

    event.preventDefault();
  });
});
