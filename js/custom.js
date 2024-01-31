$(document).ready(function () {
    $('.menu').click(function () {
        $('header').slideToggle();
    });
});
// home
let yourtext = [["Backend Developer"], ["Web Developer"], ["Developer"]];

let x = 0;
let y = 0;
//how fast typing is
let wait = 300;
//how long you want to text stay before overwriting
let additionalwait = 5;
let txt = yourtext[0][0].split("");
let out = "";
let retyping = setInterval(function () {
  document.getElementById("changingText").innerHTML = out;
  if (x > txt.length - 1) {
  } else {
    out += txt[x];
  }
  x++;
  if (x == txt.length + 2 + additionalwait) {
    if (y == yourtext.length - 1) {
      y = 0;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    } else {
      y += 1;
      txt = yourtext[y][0].split("");
      out = "";
      document.getElementById("changingText").innerHTML = out;
      document.getElementById("changingText").style.color = yourtext[y][1];
      x = 0;
    }
  }
}, wait);







// projects
$(document).ready(function () {
    $(".all").click(function () {
        $(".project-item").removeClass("active");
    });

    $(".jquery").click(function () {
        $(".project-item").addClass("active");
        $(".project-4").removeClass("active");
    });
    $(".html").click(function () {
        $(".project-item").addClass("active");
        $(".project-1 , .project-2").removeClass("active");
    });
    $(".jquery").click(function () {
        $(".project-item").addClass("active");
        $(".project-3").removeClass("active");
    });
    $(".bootstrap").click(function () {
        $(".project-item").addClass("active");
        $(".project-4 , .project-5 , .project-6").removeClass("active");
    });
    $(".sass").click(function () {
        $(".project-item").addClass("active");
        $(".project-7").removeClass("active");
    });
});

