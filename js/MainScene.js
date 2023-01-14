import Player from "./Player.js";

export default class MainScene extends Phaser.Scene {
    constructor(){
        super("MainScene");
    }


    preload() {
        Player.preload(this);
        this.load.image('tiles', 'Assets/Nature/Tilesets/Tileset-Terrain2.png');
        this.load.tilemapTiledJSON('braukmap','assets/Bosses/Brauk/BraukTileset.tmj');
    }

    create() {
        
        const map = this.make.tilemap({key: 'braukmap'});
        const tileset = map.addTilesetImage('Brauk Level', 'tiles',32,32);
        const layer1 = map.createStaticLayer('Tile Layer 1',tileset,0,0);
        this.player = new Player({scene:this,x:0,y:0,texture:'matato',frame:'matato_right_1'});
        this.add.existing(this.player);
        this.player.keyboardman = this.input.keyboard.addKeys({ 
            'up': Phaser.Input.Keyboard.KeyCodes.W, 
            'down': Phaser.Input.Keyboard.KeyCodes.S,
            'left': Phaser.Input.Keyboard.KeyCodes.A,
            'right': Phaser.Input.Keyboard.KeyCodes.D,
        
        });
        const camera = this.cameras.main;
		camera.startFollow(this.player);
		camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    }

    update(){
        this.player.update();
    }
}