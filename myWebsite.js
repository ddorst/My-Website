var infoValue;
var xml;
var xsl;

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
            addData();
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

function addData(){

    // var objSrcTree = new ActiveXObject('Microsoft.XMLDOM');
    // var objXSLT = new ActiveXObject('Microsoft.XMLDOM');
    // objSrcTree.load('./AboutMe.xml');
    // objXSLT.load('./section.xsl');
    // var res = objSrcTree.transformNode(objXSLT);
    // $('#section').html = res;
    //$("#section").load('./random.txt');
}

function populatePage(){
    "use strict";
     var res = "";
    if (infoValue === "welcome"){
        res = "<h1 style = 'text-align: center'>Welcome to my page!</h1><p style = 'text-align: center'>" +
            "I'm a Software Engineering student at Milwaukee School of Engineering.</p><h2>What I'm Looking For</h2>" +
           "<p style = 'text-align: center'>I'm looking for an internship in Software Engineering. I would ultimately like" +
            "to find an internship that has the option to work during the school year and can grow into a full time " +
            "position after I graduate. I am expected to graduate in May 2019.</p>";

    }else if(infoValue === "about"){
        res = "<h1 style = 'text-align: center'>About Me</h1><p style = 'text-align: center'>" +
            "My name is Danielle! I'm in my third year of software engineering at MSOE. I'm also minoring" +
            "in Technical Communications.</p><h1 style = 'text-align: center'>My Story</h1><p>My story is a unique." +
            "I started school at MSOE when I was 18 a few years back. However, I didn't start off in the software" +
            "engineering program; I started as a software engineer. Three years into the program, I had to take a " +
            "couple of Bioinformatics classes where we started learning how to code in Java. I fell in love with it. " +
            "It no longer felt like school work because I enjoyed it that much. I made the tough decision to switch majors." +
            "Switching majors made it so I had to start all over with my major classes adding on 4 more years of school." +
            "Some people called me crazy, but I knew I had to do what I love or I'd be unhappy. Here I am today," +
            "happier than ever. Switching majors was the best decision I've ever made.</p>";
    }else if(infoValue === "classes"){
        res = "<h1 style = 'text-align: center'>Relevant Software Classes</h1><p>(This table is in progess. Meanwhile," +
            "please contact me or see my <a href=\"https://www.linkedin.com/in/danielle-dorst-2b18b472/\">linked in</a>" +
            " for more information.)</p>";
    }else if (infoValue === "contact"){
        res = "<h1 style = 'text-align: center'>Contact Information</h1><p style = 'text-align: center'>" +
            "My linked in: <a href=\"https://www.linkedin.com/in/danielle-dorst-2b18b472/\">linked in</a><br>" +
            "My email: dorstd@msoe.edu<br>My phone number: (262)309-0812</p>";
    }
    $("#section").html(res);
}
