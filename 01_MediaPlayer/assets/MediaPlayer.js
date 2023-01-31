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

export default MediaPlayer;