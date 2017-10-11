var infoValue;
/**
 * This function will initialize the listeners
 * for the tabs and then set infoValue based on
 * what tab is selected.
 */
$(document).ready(function(){
    "use strict";
    $( 'a[data-toggle="tab"]' ).on( 'shown.bs.tab', function( evt ) {
        // Read the a href of the anchor that was clicked
        var anchor = $( evt.target ).attr( 'href' );
        anchor = anchor.substring(1);
        if (anchor === "Welcome"){
            infoValue = "welcome";
        }else if (anchor === "AboutMe"){
            infoValue = "about";
        }else if (anchor === "Classes"){
            infoValue = "classes";
        }else if(anchor === "Contact"){
            infoValue = "contact";
        }
        populatePage();
    });
});

function populatePage(){
    "use strict";
     var res = "";
    if (infoValue === "welcome"){
        res = "<p>Welcome to my page!</p><p>I'm a software engineer at Milwaukee School of Engineering.</p>" +
            "<p>I'm a junior, however I have quite the story to tell. Feel free to navigate my page to learn" +
            " more about me!</p>";
    }else if(infoValue === "about"){
        res = "My name is Danielle!";
    }else if(infoValue === "classes"){
        res = "Here are the classes I have taken so far";
    }else if (infoValue === "contact"){
        res = "Here is my contact info";
    }
    $("#section").html(res);
}
