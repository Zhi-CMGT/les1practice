import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Fish: new ImageSource('images/fish.png'),
    FishTwo: new ImageSource('images/vis2.png')
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }