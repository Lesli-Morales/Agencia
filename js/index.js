
    let heroContenedor = document.getElementById("hero");

    const imagenesHero = ["desktop1.avif","desktop2.avif","desktop3.avif","desktop4.avif"];
    let indexImagen = 0;

    const sliderHero = () =>{
        heroContenedor.style.backgroundImage = `url(../imagenes/${imagenesHero[indexImagen]})`;
        indexImagen++;
        if(indexImagen>=imagenesHero.length)
            indexImagen=0;
    };

    setInterval(sliderHero,3000)