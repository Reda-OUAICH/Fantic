window.onload = function() {
  var bouton = document.getElementById('categoryNav');
  var nav = document.getElementById('categoryItem');
  bouton.onclick = function(e) {
    if (nav.style.display == "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";

    }
  };
};

//movies list
var insertPic = function(selector) {
  selector.insertAdjacentHTML('beforeend', '<img class="moviesPics" src="' + data.films[i].thumbnail + '">');
}

/*APPARITION PLAYER*/
var player = document.querySelector('.containerSection');


var playerFonction = function(i) {
  player.style.display = "block";
  player.innerHTML = '<video id="videoPlayer" class="video" >' + '<source src="' + data.films[i].src + '" type="video/mp4">' + '</video>' +
    '<div id="media-control"class="menuPlayer">' + '<button id="playsbutton" class="control">></button>' +
    '<button  class="control2" >Stop</button>' +
    '<span class="volume">' +
    '<h6 class="stick1"></h6>' +
    '<h6 class="stick2"></h6>' +
    '<h6 class="stick3"></h6>' +
    '<h6 class="stick4"></h6>' +
    '<h6 class="stick5"></h6>' +
    '<h6 class="stick6"></h6>' +
    '</span>' + '<div id="progressBarControl"><div id="progressBar"></div>' + '<button id="fullscreenbtn">[&nbsp;&nbsp;]</button>' + '</div><span id="progressTime">00:00</span>' + '</div> <div class="describContainer"> <h4 class="describTitle">' + data.films[i].title + '<p class="data__category"> Catégorie : ' + data.films[i].category + '</p>' +
    ' </h4><p class="describPara"> Description : ' + data.films[i].description + '</p><p class="authorPara"> Auteur : ' + data.films[i].author + '</p>' + '<p class="url"> Auteur url : </p>' + '<a href="#" class="url__auteur">' + data.films[i].author_url + '</a>' + '<p class="data__year"> Year : ' + data.films[i].year + '</p>' + '<p class="data__rating"> Note : ' + data.films[i].rating + '</p>' + '</div>' + '<span class="video__close">&times;</span>';
  var videoclose = document.querySelector('.video__close');

  videoclose.addEventListener('click', function() {
    video.pause();
    video.currentTime = 0;
    player.style.display = "none";
  });
  var menuPlayer = document.getElementById('media-control');
  var play = document.querySelector('.control');
  var stop = document.querySelector('.control2');
  var video = document.getElementById("videoPlayer");


  video.addEventListener("timeupdate", function() {
    video.currentTime;
    update();
  })
  player.addEventListener("mouseover", function() {
    menuPlayer.style.display = "";
  });
  player.addEventListener("mouseout", function() {
    menuPlayer.style.display = "none";
  });
  var p = 0;
  play.addEventListener("click", function() {
    if (p === 1) {
      video.pause();
      play.innerHTML = '>';
      p = 0;
    } else {
      video.play();
      play.innerHTML = '||';
      p = 1;
    }
  });
  stop.addEventListener("click", function() {
    video.pause();
    video.currentTime = 0;
    play.innerHTML = '>';
  })
  var stick1 = document.querySelector('.stick1');
  var stick2 = document.querySelector('.stick2');
  var stick3 = document.querySelector('.stick3');
  var stick4 = document.querySelector('.stick4');
  var stick5 = document.querySelector('.stick5');
  var stick6 = document.querySelector('.stick6');


  stick1.addEventListener('click', function() {
    videoPlayer.volume = '0.0';
  })
  stick2.addEventListener('click', function() {
    videoPlayer.volume = '0.15';
  })
  stick3.addEventListener('click', function() {
    videoPlayer.volume = '0.30';
  })
  stick4.addEventListener('click', function() {
    videoPlayer.volume = '0.50';
  })
  stick5.addEventListener('click', function() {
    videoPlayer.volume = '0.75';
  });
  stick6.addEventListener('click', function() {
    videoPlayer.volume = '1';
  });
  var update = function(videoPlayer) {
    var duration = video.duration; // Durée totale
    var time = video.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');
    document.querySelector('#progressTime').textContent = formatTime(time);

    progress.style.width = percent + '%';

  }
  var ihaveall = document.querySelector('.ihaveAll');
  var ihaveall2 = document.querySelector('.ihaveAll2');
  var describContainer = document.querySelector('.describContainer');
  fullscreenbtn.addEventListener('click', fullScreen);

  function fullScreen() {

    if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullscreenElement) {
      if (video.exitFullscreen) {
        video.exitFullscreen();
      } else if (video.mozExitFullScreen) {
        video.mozCancelFullScreen();
      } else if (video.webkitExitFullscreen) {
        video.webkitExitFullscreen();
      }


      video.classList.remove("videoFullScreen");
      menuPlayer.classList.remove('menuPlayerFull');
      menuPlayer.classList.add('menuPlayer');


    } else {
      if (video.requestFullScreen) {
        video.requestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      } else if (video.mozRequestFullScreen) {
        video.mozCancelFullScreen();
      }

      var timer;
      function menuFullscreeen() {
        timer = setTimeout(function() {
          menuPlayer.style.display = "none";
        }, 3000);
      }
      function menuStopFullscreeen() {
        clearTimeout(timer);
      }



      video.addEventListener('mousemove', function() {
        menuPlayer.style.display = "";
            menuStopFullscreeen();
        menuFullscreeen();


      })


      video.classList.add("videoFullScreen");
      menuPlayer.classList.remove('menuPlayer');
      menuPlayer.classList.add('menuPlayerFull');


    }


  }
}





var reductionFonction = function() {
  player.style.display = "none";
}

function formatTime(time) {
  var hours = Math.floor(time / 3600);
  var mins = Math.floor((time % 3600) / 60);
  var secs = Math.floor(time % 60);

  if (secs < 10) {
    secs = "0" + secs;
  }

  if (hours) {
    if (mins < 10) {
      mins = "0" + mins;
    }

    return hours + ":" + mins + ":" + secs; // hh:mm:ss
  } else {
    return mins + ":" + secs; // mm:ss
  }
}






var hetic = [];
var action = [];
var animation = [];
var comedy = [];
var horror = [];

for (var i = 0; i < data.films.length; i++) {
  document.querySelector('.all').insertAdjacentHTML('beforeend', '<img class="moviesPics" src="' + data.films[i].thumbnail + '">');
  if (data.films[i].category === 'Hetic') {
    document.querySelector('.hetic').insertAdjacentHTML('beforeend', '<img class="moviesPics heticMovie" src="' + data.films[i].thumbnail + '">');
    hetic.push(i);
  }
  if (data.films[i].category === 'Action') {
    document.querySelector('.action').insertAdjacentHTML('beforeend', '<img class="moviesPics actionMovie" src="' + data.films[i].thumbnail + '">');
    action.push(i);

  }
  if (data.films[i].category === 'Animation') {
    document.querySelector('.animation').insertAdjacentHTML('beforeend', '<img class="moviesPics animationMovie" src="' + data.films[i].thumbnail + '">');
    animation.push(i);
  }
  if (data.films[i].category === 'Comedy') {
    document.querySelector('.comedy').insertAdjacentHTML('beforeend', '<img class="moviesPics comedyMovie" src="' + data.films[i].thumbnail + '">');
    comedy.push(i);
  }
  if (data.films[i].category === 'Horror / Thriller') {
    document.querySelector('.horror').insertAdjacentHTML('beforeend', '<img class="moviesPics horrorMovie" src="' + data.films[i].thumbnail + '">');
    horror.push(i);
  }
}

var o = 0;
var ancre = document.querySelector('.dot__container');

var lienvideo = document.querySelectorAll('.moviesPics');
for (let i = 0; i < data.films.length; i++) {
  lienvideo[i].addEventListener('click', function() {
    if (o === 0) {
      ancre.scrollIntoView();

      playerFonction(i);
      o = 1;

      player.style.marginTop = '9rem';
    } else {
      reductionFonction();
      o = 0;
    }
  });

}

var compar = function(lienAction, action) {
  var o = 0;
  for (let i = 0; i < lienAction.length; i++) {

    lienAction[i].addEventListener('click', function() {
      if (o === 0) {
        ancre.scrollIntoView();

        playerFonction(action[i]);
        o = 1;
        player.style.marginTop = '9rem';

      } else {
        reductionFonction();
        o = 0;
      }
    });
  }
};


var moviesContainer = document.querySelectorAll('.moviesContainer');
var categoryMenu = document.querySelectorAll('.categoryMenu-item');

var filtre = function(x) {
  categoryMenu[x].addEventListener('click', function() {
    for (var i = 0; i < moviesContainer.length; i++) {
      moviesContainer[i].style.display = "none";
    }
    moviesContainer[x].style.display = "";
    moviesContainer[x].scrollIntoView();
  });

};

for (var i = 0; i < categoryMenu.length; i++) {
  filtre(i);
}




var lienAction = document.querySelectorAll('.actionMovie');
compar(lienAction, action);
var lienHetic = document.querySelectorAll('.heticMovie');
compar(lienHetic, hetic);
var lienAnimation = document.querySelectorAll('.animationMovie');
compar(lienAnimation, animation);
var lienComedy = document.querySelectorAll('.comedyMovie');
compar(lienComedy, comedy);
var lienHorror = document.querySelectorAll('.horrorMovie');
compar(lienHorror, horror);





//liste films carousel
var prev = document.querySelectorAll('.prev');
var next = document.querySelectorAll('.next');
var moviesSlider = document.querySelectorAll('.moviesSlider');
var total = [data.films, hetic, action, animation, comedy, horror];
var carousel = function(next, prev, i) {
  var count = 0;
  var stop = 4;

  if (stop >= total[i].length) {
    next.style.display = 'none';
  }

  next.addEventListener('click', function() {
    prev.style.display = 'block';
    stop += 4;
    count++;
    moviesSlider[i].style.transform = 'translateX(-' + count * 89.78707 + 'vw)';
    if (stop >= total[i].length) {
      next.style.display = 'none';
    }
  });

  prev.addEventListener('click', function() {
    next.style.display = '';
    stop -= 4;
    count--;
    moviesSlider[i].style.transform = 'translateX(-' + count * 89.78707 + 'vw)';
    if (stop <= 4) {
      prev.style.display = '';
    }
  });
};

for (let i = 0; i < moviesSlider.length; i++) {
  carousel(next[i], prev[i], i);
}
