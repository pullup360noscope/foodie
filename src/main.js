// Import Phaser
import Phaser from './node_modules/phaser/dist/phaser.js';

// Create a new Phaser game instance
const config = {
    type: Phaser.AUTO,
    width: 800,  // Set width of the game
    height: 600, // Set height of the game
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }, // No gravity
            debug: false, // Set to true for debugging physics
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// Preload assets
function preload() {
    // Load images here
    this.load.image('skewer', '/public/unnamed.png');
}
// Create initial game setup
function create() {
    // Add game objects here
    this.add.image(400, 300, 'skewer'); // Example of adding a skewer image
}

// Update game elements
function update() {
    // Game logic goes here
}
