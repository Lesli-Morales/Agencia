
    let heroContenedor = document.getElementById("hero");
    let heroImagen = document.getElementById("heroImagen");

    const imagenesHero = ["movil_1.avif","movil_2.avif","movil_3.avif","movil_4.avif"];
    let indexImagen = 0;

    const sliderHero = () =>{
        heroContenedor.style.backgroundImage = `url(../imagenes/${imagenesHero[indexImagen]})`;
        indexImagen++;
        if(indexImagen>=imagenesHero.length)
            indexImagen=0;
    };

    setInterval(sliderHero,3000)