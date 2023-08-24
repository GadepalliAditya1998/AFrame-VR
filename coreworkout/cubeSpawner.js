// random num generator
function getRandomNumber(value, offset) {
  return Math.floor(Math.random() * value + offset);
}


AFRAME.registerComponent("cubespawner", {
  init: function () {
    this.timeStep = 0;
    this.isCrunch = true;
  },

  tick: function (time, timeDelta) {
    if (this.timeStep < 3000) {
      this.timeStep += timeDelta;
      return;
    }
    this.timeStep = 0;

    var cubeEl = this.el.components.pool__cubes.requestEntity();
    if (!cubeEl) { 
      return;
    }

    // var positionX = getRandomNumber(-3, 3);
    var positionX = 0;
    var positionY = 2;
    var positionZ = -25;

    var cubeColor = this.isCrunch ? "green" : "red";
    this.isCrunch = !this.isCrunch;

    cubeEl.setAttribute("position", {
      x: positionX,
      y: positionY,
      z: positionZ,
    });

    cubeEl.setAttribute("material", `color: ${cubeColor}`);
    cubeEl.setAttribute("class", "cubes");
    cubeEl.play();
  },
});
