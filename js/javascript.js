class Escena extends Phaser.Scene {

    preload() {
        this.load.image('fondo', '../Images/rocket.png');
    }

    create() {
        this.add.sprite(300, 300, 'fondo');

        const opcionNave = this.add.zone(125, 125, 300, 300);
        opcionNave.setOrigin(0);
        opcionNave.setInteractive();
        opcionNave.once('pointerdown', () => this.opcionPulsada('nave'));
        this.add.graphics().lineStyle(2, 0xff000).strokeRectShape(opcionNave);

        const opcionTierra = this.add.zone(400, 350, 350, 250);
        opcionTierra.setOrigin(0);
        opcionTierra.setInteractive();
        opcionTierra.once('pointerdown', () => this.opcionPulsada('tierra'));
        this.add.graphics().lineStyle(2, 0xff000).strokeRectShape(opcionTierra);
    }

    update() {
        console.log("upload");
    }

    opcionPulsada(opcion) {
        alert(opcion);
    }
}

const config = {
    type: Phaser.AUTO, /* Motor de renderizado es automatico */
    width: 960,
    height: 640,
    scene: Escena, /* El objeto solo tiene una sola Escena */
    scale: {
        mode: Phaser.Scale.FIT /* Ancho y alto se redimensiona respetando la proporcion definida anteriormente */
    }

    /*

    */
};

new Phaser.Game(config);