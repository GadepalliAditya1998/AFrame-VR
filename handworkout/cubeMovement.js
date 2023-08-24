AFRAME.registerComponent('cubemovement', {
    init: function() {
      this.position = this.el.getAttribute('position');
      this.rotation = this.el.getAttribute('rotation');
    },
    
    tick: function (time, timeDelta) {
      this.position.z += 0.02 * timeDelta;
      this.rotation.y += 1;
      this.rotation.y = (this.rotation.y % 90);
    }
  });