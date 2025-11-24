import heroImg from "../assets/hero.png";

import highlightImg from "../assets/highlightimg.png";
import sneakerShoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vCover1 from "../assets/video/vcover1.png";
import vCover2 from "../assets/video/vcover2.png";
import vCover3 from "../assets/video/vcover3.png";

import pSale1 from "../assets/nike-air-red.png";
import pSale2 from "../assets/nike-adapt-bb.png";
import pSale3 from "../assets/nike-adapt-bb-smart.png";

import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";
import product11 from "../assets/product11.png";
import product12 from "../assets/product12.png";

import facebook from "../assets/facebook.svg";
import messenger from "../assets/messenger.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

const heroAPI = {
    title: "Juega con energía infinita",
    subtitle: "Nike PowerSole X",
    img: heroImg,
    alt: "hero-img",
    btnText: "Explorar producto",
    videos: [
        { imgSrc: vCover1, imgAlt: "video-cover-1", clip: clip },
        { imgSrc: vCover2, imgAlt: "video-cover-2", clip: clip },
        { imgSrc: vCover3, imgAlt: "video-cover-3", clip: clip },
    ],
    socialLinks: [
        { icon: facebook, alt: "icon-facebook" },
        { icon: messenger, alt: "icon-messenger" },
        { icon: instagram, alt: "icon-instagram" },
        { icon: twitter, alt: "icon-twitter" },
        { icon: youtube, alt: "icon-youtube" },
    ],
};

const popularSales = {
    title: "Ventas populares",
    items: [
        {
            id: "0p0x1",
            title: "Nike Adapt BB 2.0",
            text: "Zapatillas de correr para hombre",
            rating: "4.9",
            btn: "Comprar ahora",
            img: pSale2,
            imgAlt: "nike-adapt-bb-2-0",
            price: "200",
            color: "from-blue-600 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0p0x2",
            title: "Nike Martine Rose",
            text: "Zapatillas de correr para hombre",
            rating: "4.5",
            btn: "Comprar ahora",
            img: pSale1,
            imgAlt: "nike-martine-rose",
            price: "200",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0p0x3",
            title: "Nike Smart Shoe 2.0",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: pSale3,
            imgAlt: "nike-smart-shoe-2-0",
            price: "200",
            color: "from-violet-500 to-indigo-500",
            shadow: "shadow-lg shadow-violet-500",
        },
    ],
};

const topRatedSales = {
    title: "Ventas mejor valoradas",
    items: [
        {
            id: "0M0x1",
            title: "Nike Air Low Premium",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product7,
            imgAlt: "nike-air-low-premium",
            price: "150",
            color: "from-sky-600 to-indigo-600",
            shadow: "shadow-lg shadow-blue-500",
        },
        {
            id: "0M0x2",
            title: "Nike Air Force Green",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product2,
            imgAlt: "nike-air-force-green",
            price: "150",
            color: "from-green-500 to-emerald-500",
            shadow: "shadow-lg shadow-green-500",
        },
        {
            id: "0M0x3",
            title: "Nike Addapt BB Rose",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product3,
            imgAlt: "nike-addapt-bb-rose",
            price: "150",
            color: "from-red-500 to-rose-500",
            shadow: "shadow-lg shadow-rose-500",
        },
        {
            id: "0M0x4",
            title: "Nike Air Premium",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product4,
            imgAlt: "nike-air-premium",
            price: "150",
            color: "from-orange-500 to-amber-500",
            shadow: "shadow-lg shadow-orange-500",
        },
        {
            id: "0M0x5",
            title: "Nike Adapt BB Pro",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product5,
            imgAlt: "nike-adapt-bb-pro",
            price: "150",
            color: "from-gray-900 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x6",
            title: "Nike Air Jordan PR3",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product6,
            imgAlt: "air-jordan-pr3",
            price: "150",
            color: "from-blue-500 to-cyan-500",
            shadow: "shadow-lg shadow-cyan-500",
        },
        {
            id: "0M0x7",
            title: "Nike Multi Smart Shoe",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product1,
            imgAlt: "nike-multi-smart-shoe",
            price: "150",
            color: "from-yellow-500 to-yellow-500",
            shadow: "shadow-lg shadow-yellow-500",
        },
        {
            id: "0M0x8",
            title: "Nike Jordan Air Max",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product9,
            imgAlt: "nike-jordan-air-max",
            price: "150",
            color: "from-[#936550] to-orange-900",
            shadow: "shadow-lg shadow-orange-800",
        },
        {
            id: "0M0x9",
            title: "Nike Old Max-X",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product10,
            imgAlt: "nike-old-max-x",
            price: "150",
            color: "from-indigo-700 to-indigo-700",
            shadow: "shadow-lg shadow-indigo-500",
        },
        {
            id: "0M0x10",
            title: "Nike Lime Jordan 11",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product12,
            imgAlt: "nike-lime-jordan-11",
            price: "150",
            color: "from-green-600 to-lime-500",
            shadow: "shadow-lg shadow-lime-500",
        },
        {
            id: "0M0x11",
            title: "Nike Air Black Max",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product11,
            imgAlt: "nike-air-black-max",
            price: "150",
            color: "from-slate-900 to-black",
            shadow: "shadow-lg shadow-black",
        },
        {
            id: "0M0x12",
            title: "Nike Zoom Max",
            text: "Zapatillas de correr para hombre",
            rating: "5+",
            btn: "Comprar ahora",
            img: product8,
            imgAlt: "nike-zoom-max",
            price: "150",
            color: "from-blue-900 to-blue-500",
            shadow: "shadow-lg shadow-blue-500",
        },
    ],
};

const highlight = {
    heading: "Destacados",
    title: "Nike Air: Tu Estilo, Tu Elección",
    text: "Nuestra misión es mover el mundo hacia adelante. Actuamos construyendo comunidades, protegiendo nuestro planeta y aumentando el acceso al deporte.",
    btn: "Explorar más",
    url: "https://www.nike.com/id/launch/t/nocta-hot-step-black-gold",
    img: highlightImg,
    imgAlt: "nike-air-con-opciones-ilimitadas"
};

const sneaker = {
    heading: "Recomendados",
    title: "Zapatillas Nike Air Lancing",
    text: "El brillo sigue vivo en las zapatillas Nike Air Lancing, el clásico del baloncesto que aporta un giro fresco a lo que mejor conoces: capas cosidas con durabilidad, acabados limpios y el toque justo de estilo para que destaques.",
    btn: "Explorar más",
    url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
    img: sneakerShoe,
    imgAlt: "zapatillas-nike-air-lancing"
};

const story = {
    title: "Historias destacadas",
    news: [
        {
            title: "Jayson Tatum debutó",
            text: "El modelo insignia de Jordan Brand en los últimos años, Jayson Tatum, usará las Air Jordan 37 esta temporada antes de posiblemente obtener su primera zapatilla exclusiva con Jumpman, algo que él mismo insinuó recientemente en Twitter.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/air-jordan-37-low.jpg?w=540&h=380&crop=1",
            imgAlt: "news-1",
            url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
            time: "11 minutos",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Leer más",
        },
        {
            title: "Nike Zoom Freak 4 Edición Otoño",
            text: "Llegando justo a tiempo para el otoño, esta próxima versión de las Zoom Freak 4 parece inspirarse en el Día de Acción de Gracias. Naranja y marrón, dos colores clásicos de la festividad, se utilizan en la parte superior, complementados con tonos grises.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003-2.jpg?w=540&h=380&crop=1",
            imgAlt: "news-2",
            url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
            time: "41 minutos",
            like: "5/5",
            by: "Michael Lee",
            btn: "Leer más",
        },
        {
            title: "Nike Air Max Plus",
            text: "Las Nike Air Max Plus han revelado varias combinaciones de colores en los últimos meses. Con la llegada del otoño, se suma una nueva versión en gris y naranja a la colección.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Max-Plus-FB3358-001-2.jpg?w=540&h=380&crop=1",
            imgAlt: "news-3",
            url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
            time: "2 horas",
            like: "5/5",
            by: "Michael Lee",
            btn: "Leer más",
        },
        {
            title: "Nike Air Jordan Retro High OG",
            text: "La popular serie AJ1 presenta el clásico esquema de color 'Yellow Toe'. Tras su primera aparición hace cuatro años de la mano del músico Zach Myers, los fanáticos por fin podrán conseguir esta versión.",
            img: "https://sneakernews.com/wp-content/uploads/2022/03/yellow-toe-jordan-1-release-date-2.jpg",
            imgAlt: "news-4",
            url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
            time: "7 meses",
            like: "5/5",
            by: "Sneaker News",
            btn: "Leer más",
        },
        {
            title: "Nike Air Zoom GT Cut 2",
            text: "La versión Bred de las Zoom GT Cut 2 será la primera en lanzarse este viernes para miembros de Nike a nivel mundial, mientras que el modelo de Sabrina Ionescu llegará el 13 de octubre. Mientras tanto, disfruta de las imágenes oficiales de ambas versiones.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-zoom-gt-cut-2-release-date.jpg?w=540&h=380&crop=1",
            imgAlt: "news-5",
            url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
            time: "1 mes",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Leer más",
        },
        {
            title: "Puma presenta a Breanna Stewart",
            text: "Por primera vez en más de una década, se lanza una zapatilla de baloncesto exclusiva para una de las máximas estrellas de la WNBA, la medallista olímpica Breanna Stewart. La Puma Stewie 1 Quiet Fire estará disponible este viernes.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/puma-stewie-1-quiet-fire-breanna-stewart-release-date-lead.jpg?w=540&h=380&crop=1",
            imgAlt: "news-6",
            url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
            time: "25 días",
            like: "3/5",
            by: "Jared Ebanks",
            btn: "Leer más",
        },
        {
            title: "Nike Air Force 1 Negro y Naranja Láser",
            text: "Desde cierres de cordones hasta diseños inspirados en ciudades, las Nike Air Force 1 han presentado múltiples variaciones. En esta ocasión, apuestan por un diseño simple en negro con detalles en naranja láser.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/Nike-Air-Force-1-Black-Yellow-FB7162-081-8.jpg?w=540&h=380&crop=1",
            imgAlt: "news-7",
            url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
            time: "6 días",
            like: "4/5",
            by: "Michael Lee",
            btn: "Leer más",
        },
        {
            title: "Hello Kitty y Adidas",
            text: "El mundo de Sanrio está lleno de personajes icónicos, pero pocos igualan la influencia de Hello Kitty, quien ha colaborado en productos que van desde snacks hasta zapatillas.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/hello-kitty-adidas-superstar-GW7168-2.jpg?w=540&h=380&crop=1",
            imgAlt: "news-8",
            url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
            time: "5 días",
            like: "4/5",
            by: "Michael Lee",
            btn: "Leer más",
        },
        {
            title: "Nike Air Force 1 Low Versión Nocturna",
            text: "El diseño nocturno se refleja en los paneles de cuero negro texturizado y la malla perforada de la lengüeta, con detalles en azul royal y swooshes delanteros para añadir contraste.",
            img: "https://sneakernews.com/wp-content/uploads/2022/09/nike-air-force-1-low-worldwide-black-royal-fb1840-001-lead.jpg?w=540&h=380&crop=1",
            imgAlt: "news-9",
            url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
            time: "5 días",
            like: "4/5",
            by: "Michael Lee",
            btn: "Leer más",
        },
    ],
};

const footerAPI = {
    titles: [
        { title: "Acerca de Nike" },
        { title: "Obtener ayuda" },
        { title: "Compañía" },
    ],
    links: [
        [
            { link: "Noticias", url: "#" },
            { link: "Carreras", url: "#" },
            { link: "Inversores", url: "#" },
            { link: "Propósito", url: "#" },
            { link: "Sostenibilidad", url: "#" },
        ],
        [
            { link: "Estado del pedido", url: "#" },
            { link: "Envío y entrega", url: "#" },
            { link: "Opciones de pago", url: "#" },
            { link: "Saldo de tarjeta de regalo", url: "#" },
            { link: "Contáctanos", url: "#" },
            { link: "Preguntas frecuentes", url: "#" },
            { link: "Blog", url: "#" },
        ],
        [
            { link: "Tarjetas de regalo", url: "#" },
            { link: "Promociones", url: "#" },
            { link: "Buscar tienda", url: "#" },
            { link: "Registro", url: "#" },
            { link: "Nike Journal", url: "#" },
            { link: "Enviar comentarios", url: "#" },
        ],
    ],
};

export {
    heroAPI,
    footerAPI,
    story,
    sneaker,
    highlight,
    topRatedSales,
    popularSales,
};