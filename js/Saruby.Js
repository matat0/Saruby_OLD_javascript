import MainScene from "./MainScene.js";

const config = {
    width: 910,
    height:512,
    backgroundColor:'#333333',
    type: Phaser.AUTO,
    parent: 'Saruby',
    scene:[MainScene],
    scale: {
        zoom:1.5,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:false,
            gravity:{y:0},
        }
    },
    plugins: {
        scene: [
          {
            plugin: PhaserMatterCollisionPlugin.default, // The plugin class
            key: "matterCollision", // Where to store in Scene.Systems, e.g. scene.sys.matterCollision
            mapping: "matterCollision" // Where to store in the Scene, e.g. scene.matterCollision
          }
        ]
      }
    };

new Phaser.Game(config);