function email() {
    let sub =document.getElementById("subject").value;                    // getting subject from subject box
    let msg =document.getElementById("message").value;                  // getting the message
    let approval = confirm("Your email: \n" + sub + "\n" + msg);        //confirm that you are happy with the message
    if (approval === false) {
     alert("Didn't come out as you had hoped? \nPlease try again, we'd love to hear from you!")     //if confirmation is false send please try again message
  }  else {
      alert("Your email is done, just click send from your Microsoft Mailbox")            //otherwise(if true): window open microsoft outlook (with the subject and message passed in)
      window.open(`mailto:cknighton.pullin@gmail.com?subject=${sub}&body=${msg}`);
  }
}

function share(){                                                             //sane function i made for task 13. Opens whatsapp. Removes the need for +27
  let num = document.getElementById("number").value;                           
    let msg = "https://charleskp.github.io/My-studio-website/";                                     //website obviously not currently in existence
    let approval = confirm("Share IN THE ROOF STUDIOS with relevant friends on Whatsapp?")       //confirmation to open whatsapp and send to friends
    if (approval === true) {                                                                  // if positive confirmation then open whatsapp to share with friends
      var win = window.open(`https://api.whatsapp.com/send?${num}&text=${msg}`, "_blank");
    }
}