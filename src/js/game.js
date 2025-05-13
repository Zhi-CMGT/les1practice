import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Game extends Engine {

    constructor() {
        super({ 
            width: 1280,
            height: 720,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        console.log("start de game!")
        for (let i = 0; i < 20; i++) {
        const fish = new Actor()
        fish.graphics.use(Resources.Fish.toSprite())
        fish.pos = new Vector(Math.random () * 1280, Math.random () * 720)
        fish.vel = new Vector(Math.random () * 200 - 100, Math.random () * 400 - 200)
        fish.events.on("exitviewport", (e) => this.fishLeft(e))
        this.add(fish)

        const fishTwo = new Actor()
        fishTwo.graphics.use(Resources.FishTwo.toSprite());
        fishTwo.pos = new Vector(Math.random () * 1280, Math.random () * 720);
        fishTwo.vel = new Vector(Math.random () * 200 - 100, Math.random () * 400 - 200);
        fishTwo.events.on("exitviewport", (e) => this.fishLeft(e));
        this.add(fishTwo);

        fish.scale = new Vector(0.5, 0.5);
        }
    }

    fishLeft(e) {
        e.tatget.pos = new Vector(Math.random () * 1280, Math.random () * 720)
        e.target.vel = new Vector(Math.random () * 200 - 100, Math.random () * 400 - 200)
    }
}

new Game()
