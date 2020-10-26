$(document).ready(function() {
  const groceryList = [];
  $("formOne").submit(function(event) {
    event.preventDefault();
    
    let userInput = $("input#list").val();
    
    userInput.sort();
    groceryList.push(userInput);

    
    newList = groceryList.join[", "];
    $("div#list").text(newList);
    $(".list").show(newList);
  });
});

    // $("span#grocery").prepend().text(list);

  

