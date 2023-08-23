AFRAME.registerComponent('cubedestroyer', {
    init: function() {
      this.position = this.el.getAttribute('position');
    },
    
    tick: function () {
      if (this.position.z >= 10) {
        this.el.sceneEl.components.pool__cubes.returnEntity(this.el);
      }
    }
  });