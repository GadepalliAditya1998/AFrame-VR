AFRAME.registerComponent('saber', {
    schema: {type: 'string'},
    
    init: function() {
      var saberEl = this.el;
      var saberColor = this.data;
      
      saberEl.addEventListener('hitstart', function () {
        var obj = saberEl.components['aabb-collider']['intersectedEls'][0];
        var mat = obj.getAttribute('material');
        
        if (saberColor == mat.color) {
          saberEl.emit('sabercollided');
          saberEl.sceneEl.components.pool__cubes.returnEntity(obj);
        }
      });
    }
  });