const projects = [
    {
        title: "Portfolio en ligne",
        description: "Ce portfolio en ligne a été conçu avec React.js en utilisant une architecture single-page pour une navigation fluide entre les différentes sections (présentation, compétences, projets, parcours, contact). L’interface est claire, épurée et pensée pour offrir une lecture agréable sur tous types d’écrans.\n" +
            "\n" +
            "Le projet intègre Embla Carousel pour la présentation des projets de manière dynamique, et React Icons pour enrichir visuellement les éléments interactifs. Chaque section est accessible via une barre de navigation fixe ou des ancres internes, rendant l’exploration rapide et intuitive.",
        tech: "React js / JavaScript / CSS / HTML / Embla Carousel",
        image: "./projects_assets/portfolio.png",
        github:"https://github.com/karimhantaou/portfolio-react",
    },
    {
        title: "Helios WeatherApp",
        description: "Helios est une application web Flutter qui utilise l’API météo de open-meteo.com pour afficher les conditions météorologiques en temps réel d’une ville saisie par l’utilisateur. Elle affiche des données comme la température actuelle et ressentie, l’humidité, le vent, les précipitations ou encore la couverture nuageuse. L’interface visuelle s’adapte dynamiquement selon les conditions météo (ensoleillé, nuageux, nuit claire, pluie, vent…).\n" +
            "\n" +
            "L’utilisateur peut ajouter des villes en favoris grâce à une icône cœur, avec une gestion des favoris sauvegardée localement. Une page dédiée permet de consulter ou supprimer facilement les villes enregistrées. L’expérience est simple, rapide et visuellement immersive.",
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