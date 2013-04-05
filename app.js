(function () {
  var animationList,
    element,
    randAnim,
    timerLS,
    timerA,
    dummyStr,
    dummyVar,
    interval,
    i, x, s;

  dummyStr = 'flash bounce shake tada swing wobble wiggle pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight lightSpeedIn lightSpeedOut hinge rollIn rollOut';
  animationList = dummyStr.split(' ');
  element = document.getElementById('animate-me');

  element.addEventListener("webkitAnimationStart", function () {
    timerA = Date.now();
    console.log('animation start');
    doLSOP();
  }, false);

  element.addEventListener("webkitAnimationEnd", function () {
      // is this about a 1000ms???
      console.log("animation " + randAnim + " has completed in " + (Date.now() - timerA) + "ms");
      element.className = element.className.replace(' ' + randAnim, '');
  }, false);
  localStorage.clear();

  for (x = 3; x > 0; x--) { dummyStr += dummyStr; }

  function testAnim (countLeft) {
    if (countLeft <= 0) {
      console.log("v 1.0.3");
      return;
    }
    randAnim = animationList[Math.floor(Math.random() * animationList.length)];
    //timerA = Date.now();
    element.className += ' ' + randAnim;

    interval = setInterval(function() {
      if (element.className.indexOf(randAnim) == -1) {
        clearInterval(interval);
        setTimeout(function () {
          console.log('next animation');
          testAnim(countLeft - 1);
        }, 1000);
      }
    }, 100);
  }

  function doLSOP () {
    timerLS = Date.now();
    console.log('ls op started ' + (Date.now() - timerA) + "ms later");

    // do localstorage operation now
    for (s = 100; s > 0; s--) {
      for (x = 200; x > 0; x--) {
        localStorage.setItem('' + x, dummyStr);
        dummyVar = localStorage.getItem('' + x);
      }
    }
    console.log("ls op during " + randAnim + " has completed in " + (Date.now() - timerLS) + "ms");
  }

  testAnim(100);
}).call(this);
