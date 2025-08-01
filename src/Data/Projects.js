const projects = [
    {
        title: "Portfolio en ligne",
        description: "Ce portfolio a été conçu avec React.js en architecture single-page, offrant une navigation fluide entre les différentes sections. L’interface est claire, responsive et pensée pour une expérience agréable sur tous les écrans.\n" +
            "J’y ai intégré plusieurs composants pour enrichir le front-end et renforcer le dynamisme, comme Embla Carousel, Fast Marquee, React Compare Image, ainsi que des composants développés sur mesure. La navigation est intuitive grâce à une barre fixe et des ancres internes.",
        tech: "React js / JavaScript / CSS / HTML / Embla Carousel",
        image: "./projects_assets/portfolioReact.png",
        github:"https://github.com/karimhantaou/portfolio-react",
    },
    {
        title: "Helios WeatherApp",
        description: "Helios est une application web Flutter qui utilise l’API météo de open-meteo.com pour afficher les conditions météorologiques en temps réel d’une ville saisie par l’utilisateur. Elle affiche des données comme la température actuelle et ressentie, l’humidité, le vent, les précipitations ou encore la couverture nuageuse. L’interface visuelle s’adapte dynamiquement selon les conditions météo (ensoleillé, nuageux, nuit claire, pluie, vent…).",
        tech: "Flutter / Dart / API Open-Meteo",
        image: "./projects_assets/helios.gif",
        github:"https://github.com/karimhantaou/Helios_WeatherApp",
    },
    {
        title: "Password Manager",
        description: "Application web de gestion de comptes et de mot de passe. Permet de gérer les différents comptes et mots de passe de manière sécurisée. Les mots de passe sont cryptés et stockés dans une base de données MySQL.\n" +
            "J'ai développé ce projet seul en suivant une architecture MVC, en utilisant PHP pour le back-end avec l'aide de Composer pour les dépendances, et JavaScript pour le front-end. Les données sont stockées dans une base de données MySQL et les mots de passe sont hashés et les autres données sont cryptées. ",
        tech: "PHP / MySQL / Composer /JavaScript / HTML / CSS",
        image: "./projects_assets/pm.gif",
        site: "https://hantaoukarim.fr/PasswordManager2/Login"
    },
    {
        title: "Site web Lasloc",
        description: "Développement d'un site web pour l'agence Lasloc, permettant aux utilisateurs de réserver des véhicules en ligne de manière intuitive et sécurisée. Ce projet inclut un espace administrateur pour la gestion des réservations et des utilisateurs.\n" +
            "Le projet a été réalisé avec des technologies modernes telles que HTML, CSS, JavaScript, et PHP, avec une base de données MySQL pour la gestion des données.",
        tech: "PHP / JavaScript / MySQL / Stripe",
        image: "./projects_assets/lasloc.gif",
        site: "https://hantaoukarim.fr/Lasloc/"
    },
    {
        title: "Pokedex en ligne",
        description: "Dans le cadre de nos cours de développement j'ai utilisé l'API de Tyradex.tech afin de créer un pokedex en ligne, fluide et complet de la première génération de pokemon.\n" +
            "Le site web à été créer en grande partie en Javascript afin d'afficher touts les pokemons.",
        tech: "HTML / CSS / JavaScript / API Tyradex",
        image: "./projects_assets/pokedex.gif",
        github:"https://github.com/karimhantaou/API-POKEMON",
        site: "https://hantaoukarim.fr/PasswordManager2/Login"
    },
    {
        title: "Convertisseur mathématique",
        description: " Application web permettant de faire des conversions mathématique d'une base mathématique à une autre.",
        tech: "HTML / CSS / JavaScript",
        image: "./projects_assets/calculator.gif",
        github:"https://github.com/karimhantaou/Convertisseur",
        site: "https://karimhantaou.github.io/Convertisseur/"
    },
    {
        title: "Interface Windows 95",
        description: "Un site web recréant l'interface nostalgique de Windows 95 avec des fonctionnalités interactives",
        tech: "HTML / CSS / JavaScript",
        image: "./projects_assets/windows95.png",
        github:"https://github.com/karimhantaou/windows95",
        site: "https://karimhantaou.github.io/windows95/"
    }
];

export default projects;