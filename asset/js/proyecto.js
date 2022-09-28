let autos = ['Etios','Yaris','Corolla','Hilux',2022,false]
    console.log('indice autos[3] --->', autos[3])
    console.log('autos.length', autos.length);

for(let inicio = 0; inicio < autos.length; inicio++){
        console.log('Salida de inicio--->', autos[inicio])
}

console.log()
console.log()
console.log()

for(index in autos){
    console.log('Salida de for in', autos[index])
}

console.log()
console.log()
console.log()

for( index of autos ){
    console.log(index)
}


console.log()
console.log()
console.log()

let marcas = [

    {
        marca: 'Etios',
        imagen: 'etios',
        descripcion: 'El Etios incorporó en toda la gama el control electrónico de estabilidad (VSC, en la nomenclatura de Toyota) o ESP, control de tracción (TRC) y asistente de arranque en pendiente (HAC).'
    },

    {
        marca: 'Yaris',
        imagen: 'yaris',
        descripcion: 'El Toyota Yaris se caracteriza por contar con una versión híbrida en su gama, por contar con un amplio equipamiento tecnológico en toda la gama y tener un precio de partida muy económico.'
    },

    {
        marca: 'Corolla',
        imagen: 'corolla',
        descripcion: 'El nuevo Corolla Apex 2022 te da un manejo y rendimiento con un estilo indiscutible. Se caracteriza por ser un coche que ha acercado la tecnología híbrida al común de los conductores con un buen diseño, calidad interior, eficiencia, bajos consumos y un precio razonable.'
    },

    {
        marca: 'Hilux',
        imagen: 'hilux',
        descripcion: 'Toyota Hilux siempre se ha caracterizado por enfocarse más en destacar sus capacidades que en lucir sobresaliente en el apartado estético y es precisamente ahí, donde ahora decide poner más énfasis'
    }

]
console.log('Salida de marcas--->', marcas)

document.write('<div class="container mb-5">')
document.write('<div class="row">')
document.write('<h2 class= "bienvenida"> Elegí tu Toyota y llevate con la mejor contización del mercado</h2>')
document.write('<hr>')
for (let i = 0; i < marcas.length; i++) {
    console.log('Salida-->', marcas[i])
    document.write(`<div class="col-md-3">
    <div class="card h-100">
        <img src="./imagenes/img/${marcas[i].imagen}.jpg" class="card-img-top" alt="${marcas[i].marca}"></img>
        <div class="card-body">
            <h5 class="card-title">${marcas[i].marca}</h5>
            <p class="card-text">${marcas[i].descripcion}</p>
            <a href="#" class="btn btn-primary">Solicitar cotización</a>
        </div>
    </div>
    </div>`)
}


document.write('</div>')
document.write('</div>')