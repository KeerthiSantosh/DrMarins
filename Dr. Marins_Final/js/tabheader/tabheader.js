function aut__aboutus(evt, aboutUs) {
    var i, aut__tabcontent, aut__btn__blue;
    aut__tabcontent = document.getElementsByClassName("aut__tabcontent");
    for (i = 0; i < aut__tabcontent.length; i++) {
      aut__tabcontent[i].style.display = "none";
    }
    aut__btn__blue = document.getElementsByClassName("aut__btn__blue");
    for (i = 0; i < aut__btn__blue.length; i++) {
      aut__btn__blue[i].className = aut__btn__blue[i].className.replace(" active", "");
    }
    document.getElementById(aboutUs).style.display = "block";
    evt.currentTarget.className += " active";
  }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();