



var buttons = document.querySelectorAll("ul.menu li a");

for (var i = 0; i < buttons.length; i++) {
  
  buttons[i].addEventListener("click", function(event) {
    
    event.preventDefault();
    
    var section = document.querySelector(this.getAttribute("href"));

    console.log(section);
    console.log(section.offsetTop);

    
    window.scroll({
      top: section.offsetTop, 
      left: 0, 
      behavior: 'smooth'
    });


    
  });
}


$('.slick').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});


var logo = document.querySelector(".right-arrow");

logo.addEventListener("click", function(event) {
	event.preventDefault();

	$('.slick').slick('slickNext');
});

var logo = document.querySelector(".left-arrow");

logo.addEventListener("click", function(event) {
	event.preventDefault();

	$('.slick').slick('slickPrev');
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  // document.body.scrollTop = 0;
  // document.documentElement.scrollTop = 0;
  window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });

}
