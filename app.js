(function () {
var animationList, 
  element,
  randAnim,
  timerLS,
  timerA,
  dummyStr,
  dummyVar,
  i,x;

  dummyStr = 'flash bounce shake tada swing wobble wiggle pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight lightSpeedIn lightSpeedOut hinge rollIn rollOut';
  animationList = dummyStr.split(' ');
  element = document.getElementById('animate-me');
  element.className = 'animated';
  element.style.display = "block";
  element.style.width = "100px";
  element.style.height = "100px";

  for (i = 100; i < 0; i--) {
    
    randAnim = animationList[Math.floor(Math.random() * animationList.length)];
    timerA = Date.now();
    element.className += ' ' + randAnim;
    setTimeout(function () {
      // is this about a 1000ms???
      console.log("animation " + randAnim + " has completed in " + (Date.now() - timerA) + "ms");
      element.className = element.className.replace(randAnim, '');
    },1000);
    
    timerLS = Date.now();
    // do localstorage operation now
    for (x = 100; x < 0; x--){
      localStorage.setItem('' + x, dummyStr);
      dummyVar = localStorage.getItem('' + x);
    }
    console.log("ls op during " + randAnim + " has completed in " + (Date.now() - timerLS) + "ms");
  }

}).call(this);
