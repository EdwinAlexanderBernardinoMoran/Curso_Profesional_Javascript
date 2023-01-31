

      // Esto funciona como una clase...
      // Pasemos un objeto de configuracion
      function MediaPlayer(config) {
        // This guarda un valor en la instancia de MediaPlayer
        this.media = config.el;
      }
      // Cuando trabajamos con clases tenemos que agregar esos metodos al Prototype.
      MediaPlayer.prototype.play = function(){
        this.media.play();
      }

      MediaPlayer.prototype.pause = function () {
        this.media.pause();
      }

      MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
          this.play();
        } else {
          this.pause()
        }
      }
      const video = document.querySelector('video');
      const player = new MediaPlayer({el: video });
      
      const button = document.querySelector('button');
      button.onclick = () => player.togglePlay()