AFRAME.registerComponent('cubemovement', {
    init: function() {
      this.position = this.el.getAttribute('position');
    },
    
    tick: function (time, timeDelta) {
      this.position.z += 0.01 * timeDelta;
    }
  });