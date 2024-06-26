class Escena extends Phaser.Scene {

    preload() {
        this.load.image('fondo', '../Images/rocket.png');
        this.load.audio('sonido', ['../sounds/navesound.mp3']);  
        //this.input.setDefaultCursor(url(''), pointer);      
    }

    create() {
        this.add.sprite(300, 300, 'fondo');    
        this.sound.play('sonido');    

        const opcionNave = this.add.zone(125, 125, 300, 300);
        opcionNave.setOrigin(0);
        opcionNave.setInteractive();
        opcionNave.once('pointerdown', () => this.opcionPulsada('nave'));
        // this.add.graphics().lineStyle(2, 0xff000).strokeRectShape(opcionNave);

        const opcionTierra = this.add.zone(400, 350, 350, 250);
        opcionTierra.setOrigin(0);
        opcionTierra.setInteractive();
        opcionTierra.once('pointerdown', () => this.opcionPulsada('tierra'));
        // this.add.graphics().lineStyle(2, 0xff000).strokeRectShape(opcionTierra);

        this.input.setDefaultCursor('url(../cursor/cursor.cur), pointer');

    }

    update() {
        console.log("upload");
    }

    opcionPulsada(opcion) {
        if(opcion == 'nave') {
            this.scene.start('naveScene');
        }

        if(opcion == 'tierra') {
            this.scene.start('tierraScene');
        }
    }
}

class EscenaTierra extends Phaser.Scene {

    constructor() {
        super('tierraScene');
    }

    preload() {
        this.load.image('earth', '../Images/earthplanet.png');
    }

    create() {
        this.add.sprite(300, 300, 'earth');
    }

}

class EscenaLuna extends Phaser.Scene {

    constructor() {
        super('lunaScene');
    }

    preload() {
        this.load.image('luna', '../Images/moon.png');
    }

    create() {
        this.add.sprite(300, 300, 'luna');
    }
}

class EscenaNave extends Phaser.Scene {

    constructor() {
        super('naveScene');
    }

    preload() {
        this.load.image('nave', '../Images/spacecraft.png');
    }

    create() {
        this.add.sprite(300, 300, 'nave');
    }
}

const config = {
    type: Phaser.AUTO, /* Motor de renderizado es automatico */
    width: 960,
    height: 640,
    scene: [Escena, EscenaTierra, EscenaLuna, EscenaNave], /* El objeto solo tiene una sola Escena */
    scale: {
        mode: Phaser.Scale.FIT /* Ancho y alto se redimensiona respetando la proporcion definida anteriormente */
    }

    /*

    */
};

new Phaser.Game(config);