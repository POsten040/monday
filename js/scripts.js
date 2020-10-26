$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const userInput = [$("input#list").val()];
    let upperCaseList = [];
    userInput.forEach(function(element) {
  
    upperCaseList.push(element);
    $("div#results").append(upperCaseList);
    event.preventDefault();
    });
  });
});
    // const groceryList = [];
    // event.preventDefault();

    // $("#results").show();
    // $("span#final").append().text(list);



    // let grocery = $("input#list").val();

    // grocery.sort();
    // grocery.push(list);


    // newList = groceryList.join[", "];
    // $(".final").text(newList);
    // $(".final").show(newList);

//   });
// });

    // $("span#grocery").prepend().text(list);