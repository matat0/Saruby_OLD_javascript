export default class Player extends Phaser.Physics.Matter.Sprite {
    constructor(data){
        let {scene,x,y,texture,frame} = data;
        super(scene.matter.world,x,y,texture,frame);
        this.scene.add.existing(this);
    }

    static preload(scene){
        scene.load.atlas('matato','Assets/Matato/matato.png','Assets/Matato/matato_atlas.json');
        scene.load.animation('matato_anim','Assets/Matato/matato_anim.json');
        console.log("loaded!!!!");
    }

    get velocity() {
        return this.body.velocity;
    }

    update(){
        const speed = 2.5;
        let playerVelocity = new Phaser.Math.Vector2();
        if(this.keyboardman.left.isDown) {
            playerVelocity.x = -1;
        }
        else if (this.keyboardman.right.isDown) {
            playerVelocity.x = 1;
        }
        if (this.keyboardman.up.isDown) {
            playerVelocity.y = -1;
        }
        else if (this.keyboardman.down.isDown) {
            playerVelocity.y = 1;
        }
        playerVelocity.normalize();
        playerVelocity.scale(speed);
        this.setVelocity(playerVelocity.x,playerVelocity.y);
        if(Math.abs(this.velocity.x) > 0.1 || Math.abs(this.velocity.y) > 0.1) {
            if(this.keyboardman.left.isDown) {
                playerVelocity.x = -1;
                this.anims.play('matato_poopoowalk',true);
            }
            else if (this.keyboardman.right.isDown || this.keyboardman.down.isDown || this.keyboardman.up.isDown) {
                playerVelocity.x = 1;
                this.anims.play('matato_rightwalk',true);
            } 
        }
        else {
            this.anims.play('matato_idle',true);
        }
        
    }
}