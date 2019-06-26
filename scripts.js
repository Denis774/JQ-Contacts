$(document).ready(function(){
 
  var contacts =[];

# saving a Contact 
    $("save-id").click(function(event)
    {
    var first_name = $("#first_name").value;
    var second_name = $("#second_name").value;
    var phone_number = $("#phone_number").value;
    var email = $("#email").value;
    var address = $("#address").value;
    statusElm.empty();
    
    var newcontact = [first_name,second_name,phone_number,email,address];
  // var newcontact = Contact(first_name,second_name,phone_number,email,address);
     
     contacts.push(newcontact);
     // console.log(contacts);
     console.log("saved successfully");
  };


  // search for a contact
     $("search_function").click(function(event)

      {
        var phrase = $("#search_phrase").value();
        var statusElm = $(".search_result");

        for (var i =0;i<contacts.length;i++)
          {
            var contact = contacts[i];
            if (contact[0].includes(phrase)){
              console.log(contact);
               
              document.getElementById("result").innerHTML = contact[0];
                   }
          else
          {
            console.log("Oops not found");
          }
 