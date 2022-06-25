
var data = [];

let trending_url = `https://api.themoviedb.org/3/trending/all/day`;
let popular_url = `https://api.themoviedb.org/3/movie/popular`;
let top_rated_url = `https://api.themoviedb.org/3/movie/top_rated`;
let now_playing_url = `https://api.themoviedb.org/3/movie/now_playing`;
let upcoming_url = `https://api.themoviedb.org/3/movie/upcoming`;
let search_url = `https://api.themoviedb.org/3/search/movie`;

openNav()

getdata(now_playing_url);




// --------------------------------------------------------------------------------------------------



// function openNav() {
//     if (
//         $(".sidenav").width() == "260") {
//         $(".sidenav").animate({ "width": "60px" }, 1000);
//         $(".linkcontainer").animate({ "width": "0px" }, 1000).hide(1000);
//         $("#open").text("☰")
//     }
//     else {
//         $(".sidenav").animate({ "width": "260px" }, 1000);
//         $(".linkcontainer").show(1000);
//         $(".linkcontainer").animate({ "width": "200px" });
//         // $("#open").text("X");
//         $("#open").html('<i class="fa fa-align-justify fa-times"></i>');
//     }
// }

function openNav() {
    if (
        $(".sidenav").width() == "260") {
        $(".sidenav").animate({ "width": "60px" }, 1000);
        
        $(".linkcontainer").animate({ "width": "0px" }, 1000);
        
        $("#open").text("☰")
    }
    else {
        $(".sidenav").animate({ "width": "260px" }, 1000);
        // $(".linkcontainer").show(1000);
        $(".linkcontainer").animate({ "width": "200px" });
       
       
        // $("#open").text("X");
        $("#open").html('<i class="fa fa-align-justify fa-times"></i>');
    }
}

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------



async function getdata(url, query = null) {
    console.log(url + `?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR329J3L4o5HCBdmnRtb10khNGNAOGU2pIbRWIo4PNniuCHsK-cMpvZhSfc` + query);
    var response = await fetch(url + `?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR329J3L4o5HCBdmnRtb10khNGNAOGU2pIbRWIo4PNniuCHsK-cMpvZhSfc` + query)
    var moviesresponse = await response.json();
    var moviesdata = moviesresponse.results;
    data = moviesdata;

    console.log(data);
    displaydata()
}



function displaydata() {
    var cartona = ""
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i].poster_path);
        cartona +=
            `  <div class="col-md-4 my-3">
        <div class="img-contain">
     
        <img src= https://image.tmdb.org/t/p/w500`+ data[i].poster_path + ` class="w-100 imgs">
        <div class="img-layer">
       <div class="movie-details">
       <h2>${data[i].original_title}</h2>
       <p>${data[i].overview}</p>
       <p>Rate:${data[i].vote_average}</p>
       <p>${data[i].release_date}</p>
       </div>
    </div>
    
        </div>
      </div>`
    }
    document.getElementById("movieslist").innerHTML = cartona;
}





// ----------------------------------------------


$("#nowplaying").click(function () {
    getdata(now_playing_url)
})
$("#popular").click(function () {
    getdata(popular_url)
})
$("#toprated").click(function () {
    getdata(top_rated_url)
})
$("#trending").click(function () {
    getdata(trending_url)
})
$("#upComing").click(function () {
    getdata(upcoming_url)
})

// -------------------------------------------------
var search = document.getElementById("search");


search.onkeyup = function (e) {
    if (e.target.value !== '') {
        getdata(search_url, '&query=' + e.target.value)
    } else {
        getdata(now_playing_url);
    }
}




// -------------------------------------------------------------
var username = document.getElementById("name");
var userphone = document.getElementById("phone");
var userAge = document.getElementById("age");
var useremail = document.getElementById("email");
var userPassword = document.getElementById("password");
var userRePassword = document.getElementById("rePassword");
var sumbmitbtn = document.getElementById("submit")



function userNameValidation() {
   
    var name_rejax = /^[a-zA-Z0-9]+$/;

    if (name_rejax.test(username.value)) {
        return true;
    }
    else {
        return false ;
    }

}
username.addEventListener("keyup", function () {
    submit();
    if(userNameValidation()){
        $("#namealert").addClass("d-none");
    }else{
        $("#namealert").removeClass("d-none");
    }
})





function userPhoneValidation() {
  
    var phone_rejax = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if (phone_rejax.test(userphone.value)) {
        return true;
    }
    else {
        
        return false;
    }

}




userphone.addEventListener("keyup", function () {
    submit();
    if(userPhoneValidation()){
        $("#phonealert").addClass("d-none");
    }else{
        $("#phonealert").removeClass("d-none");
    }
})




function userAgeValidation(){
    var age_rejax = /^[1-9][0-9]?$|^100$/;
    if(age_rejax.test(userAge.value)){
        return true;
    }
    else {
        return false ;
    }
}

userAge.addEventListener("keyup", function () {
    submit();
    if(userAgeValidation()){
        $("#agealert").addClass("d-none");
    }else{
        $("#agealert").removeClass("d-none");
    }
})




function useremailValidation(){
    var age_rejax = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(age_rejax.test(useremail.value)){
        return true ;
    }
    else {
        return false;
    }
}

useremail.addEventListener("keyup", function () {
    submit();
    if(useremailValidation()){
        $("#emailalert").addClass("d-none");
    }else{
        $("#emailalert").removeClass("d-none");
    }
})

function userpasswordValidation(){
    var age_rejax = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(age_rejax.test(userPassword.value)){
        return true;
    } 
    else {
        return false;
    }
}

userPassword.addEventListener("keyup", function () {
    submit();
    if(userpasswordValidation()){
        $("#passwordalert").addClass("d-none");
    }else{
        $("#passwordalert").removeClass("d-none");
    }
})

function userrepasswordValidation(){
    if (userPassword.value==userRePassword.value){
        return true ;
    }
    else {
        return false;
    }
}

userRePassword.addEventListener("keyup", function () {
    submit();
    if(userrepasswordValidation()){
        $("#repasswordalert").addClass("d-none");
    }else{
        $("#repasswordalert").removeClass("d-none");
    }
})







function submit() {
    if (userNameValidation() && userPhoneValidation() && userAgeValidation() && useremailValidation() && userpasswordValidation() && userrepasswordValidation()) {
        sumbmitbtn.removeAttribute("disabled");
    }
    else {
        // $("#namealert").removeClass("d-none");
        sumbmitbtn.disabled = "true";
    }
}


function Focusfunction() {


    $(".form-control").css({"background-color":"transparent"})
    // var inputfocus=document.getElementsByClassName("form-control");
    // document.getElementsByClassName("form-control").style.background = "yellow"; 
    console.log("kdskdkd")

  }

//   inputfocus.addEventListener("focus",Focusfunction())
