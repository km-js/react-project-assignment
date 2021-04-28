import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

function Content (){
return(
    <div>
        <img src={image1} alt="image1" className="image" width="200px" height="190px" />
    <p className="content">
        My latest crafting adventures resulted in a pokeball moss terrarium housing a small, sleeping bulbasaur. It was a fun project, which I believe also resulted in a happy recipient.
The project’s inception came about while watching family members play Pokemon Go. I began to wonder about life inside a pokeball. My first thoughts weren’t too rosy, but then I tried to imagine a larger, life-sustaining, extra-dimensional space that would be far less likely to be mistaken for animal cruelty.
    </p>

<img src={image2} alt="image2" className="image" />
    <p className="content">
        I sourced a spherical glass planter and began building a moss terrarium. The mosses used were wild foraged. I also added a really cool pixie cup lichen to the setup.

Next, I needed to sculpt a sleeping bulbasaur. Admittedly I don’t know all that much about pokemon and slowly began to realize bulbasaur’s model is based on a frog. I did my best shaping it out of polymer clay so that it would be able to withstand the environment’s humidity. It was was pretty small and difficult for me to really get the details I envisioned.
    </p>

    <h2> The Pokeball Casing </h2>
    <p className="content"> Next, I needed to craft the lower-half of the pokeball. My first attempts involved 3D printing. It seemed easy enough to build some 3D models that would get me pretty close to the shape and smoothness I would need. I attempted several 3D printings, but my printer’s print bed was not large enough to accommodate the job. I attempted breaking the print up into several pieces, which did not seem to provide the stability I needed without more work.

Eventually I returned to papier-mâché. Using the planter itself, I built the lower casing out for a perfect fit. After a few coats of paint, I mounted the final model on a piece of stained wood. The casing, wood stand, and all crevices were sealed so water would not eventually wreak havoc.
</p>
</div>
)
}

export default Content;