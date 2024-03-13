const activoBD = [
    {
        id: 1,
        serie: "activo-01",
        serieUABC: "UABC-activo-01",
        tipo: "Computadora",
        descripcion: "Computadora potente con CPU multicore, 16 GB de RAM, SSD de 512 GB y pantalla Full HD de 15.6'. Sistema operativo: Windows 10 Pro. Conectividad: Wi-Fi 6, Bluetooth 5.0.",
        ubicacion: 1,
        responsable: 1,
        imagen: "https://images.unsplash.com/photo-1606625000171-fa7d471da28c?q=80&w=1170"
    },
    {
        id: 2,
        serie: "activo-02",
        serieUABC: "UABC-activo-02",
        tipo: "Impresora",
        descripcion: "Impresora láser compacta con velocidad de impresión de 30 ppm, resolución de 1200 dpi y capacidad de papel de 250 hojas. Conexión USB 3.0 para una fácil integración.",
        ubicacion: 2,
        responsable: 1,
        imagen: "https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1170"
    },
    {
        id: 3,
        serie: "activo-03",
        serieUABC: "UABC-activo-03",
        tipo: "Laptop",
        descripcion: "Portátil ligera con procesador dual-core, 8 GB de RAM y SSD de 256 GB. Pantalla HD de 14 pulgadas y sistema operativo Windows 10 Home.",
        ubicacion: 3,
        responsable: 1,
        imagen: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1064"
    },
    {
        id: 4,
        serie: "activo-04",
        serieUABC: "UABC-activo-04",
        tipo: "Smartwatch",
        descripcion: "Wearable con pantalla táctil a color, monitoreo de salud, seguimiento de actividad física, y resistencia al agua. Compatible con smartphones y diversas aplicaciones.",
        ubicacion: 1,
        responsable: 2,
        imagen: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?q=80&w=1032"
    },
    {
        id: 5,
        serie: "activo-05",
        serieUABC: "UABC-activo-05",
        tipo: "Proyector",
        descripcion: "Proyector de alta definición con resolución Full HD, 3000 lúmenes y tecnología LED para imágenes brillantes y nítidas. Conectividad versátil, incluyendo HDMI y USB, y altavoces integrados para una experiencia audiovisual completa.",
        ubicacion: 2,
        responsable: 2,
        imagen: "https://images.unsplash.com/photo-1535016120720-40c646be5580?q=80&w=1170"
    },
    {
        id: 6,
        serie: "activo-06",
        serieUABC: "UABC-activo-06",
        tipo: "Chromebook",
        descripcion: "Chromebook resistente con procesador dual-core, 4 GB de RAM y almacenamiento eMMC de 32 GB. Pantalla HD de 11 pulgadas, teclado resistente a derrames y sistema operativo Chrome OS.",
        ubicacion: 3,
        responsable: 2,
        imagen: "https://images.unsplash.com/photo-1522202757859-7472b0973c69?q=80&w=1170"
    },
    {
        id: 7,
        serie: "activo-07",
        serieUABC: "UABC-activo-07",
        tipo: "Laptop",
        descripcion: "Laptop ultraligera con procesador de última generación, 8 GB de RAM, SSD de 256 GB y pantalla táctil de 13.3 pulgadas. Diseño elegante de aluminio, teclado retroiluminado y autonomía de batería de hasta 10 horas.",
        ubicacion: 1,
        responsable: 3,
        imagen: "https:/https://images.unsplash.com/photo-1625961332771-3f40b0e2bdcf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        serie: "activo-08",
        serieUABC: "UABC-activo-08",
        tipo: "Altavoz Bluetooth",
        descripcion: "Altavoz portátil resistente al agua con conectividad Bluetooth. Diseñado para su uso en exteriores, con batería recargable y calidad de sonido nítida.",
        ubicacion: 2,
        responsable: 3,
        imagen: "https://images.unsplash.com/photo-1593906106036-9fa76d556af3?q=80&w=1287"
    },
    {
        id: 9,
        serie: "activo-09",
        serieUABC: "UABC-activo-09",
        tipo: "Osciloscopio",
        descripcion: "Osciloscopio Tektronix de alto rendimiento con ancho de banda de 100 MHz, pantalla a color de 7 pulgadas y tecnología de visualización avanzada. Incluye cuatro canales, funciones de análisis de forma de onda y conectividad USB y LAN para fácil integración en sistemas de medición.",
        ubicacion: 3,
        responsable: 3,
        imagen: "https://images.unsplash.com/photo-1527167151437-87cf28fb6b38?q=80&w=1074"
    },
]

const getAll = function() {
    return activoBD
}

const getById = function(id) {
    return activoBD.find((activo) => activo.id == id)
}

const getBySerie = function(serie) {
    return activoBD.find((activo) => activo.serie == serie)
}

const getBySerieUABC = function(serieUABC) {
    return activoBD.find((activo) => activo.serieUABC == serieUABC)
}

const getByTipo = function(tipo) {
    return activoBD.filter((activo) => activo.tipo == tipo)
}

const getByUbicacion = function(ubicacion) {
    return activoBD.filter((activo) => activo.ubicacion == ubicacion)
}

const getByResponsable = function(responsable) {
    return activoBD.filter((activo) => activo.responsable == responsable)
}

const postActivo = function(activo) {
    activoBD.push(activo)
}

const deleteActivo = function(activo) {
    activoBD.splice(activoBD.indexOf(activo), 1)
}

const putActivo = function(activo, activoNuevo) {
    activoBD[activoBD.indexOf(activo)] = activoNuevo
}

const patchActivoId = function(index, id) {
    activoBD[index].id = id
}

const patchActivoSerie = function(index, serie) {
    activoBD[index].serie = serie
}

const patchActivoSerieUABC = function(index, serieUABC) {
    activoBD[index].serieUABC = serieUABC
}

const patchActivoTipo = function(index, tipo) {
    activoBD[index].tipo  = tipo
}

const patchActivoDescripcion = function(index, descripcion) {
    activoBD[index].descripcion = descripcion
}

const patchActivoUbicacion = function(index, ubicacion) {
    activoBD[index].ubicacion = ubicacion
}

const patchActivoResponsable = function(index, responsable) {
    activoBD[index].responsable = responsable
}

const patchActivoImagen = function(index, imagen) {
    activoBD[index].imagen = imagen
}

export default { 
    getAll, getById, getByResponsable, getBySerie, getBySerieUABC, getByTipo, getByUbicacion,
    postActivo, deleteActivo, putActivo,
    patchActivoDescripcion, patchActivoId, patchActivoImagen, patchActivoResponsable, patchActivoResponsable, patchActivoSerie, patchActivoSerieUABC, patchActivoTipo, patchActivoUbicacion
}