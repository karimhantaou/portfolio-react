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
        title: "WoodTrack",
        description: "WoodTrack est une application web moderne développée avec Next.js et Supabase pour la gestion des chargements de bois. \n" +
            "Réalisée en seulement quelques jours dans le cadre d’un test technique pour une entreprise de livraison de bois, cette application a été conçue sur des technologies que je n’avais encore jamais utilisées auparavant. \n" +
            "\n" +
            "Elle permet d’ajouter, consulter et organiser les clients, transports et produits à travers une interface claire et responsive, optimisée avec Tailwind CSS et shadcn/ui.\n",
        tech: "Next.js / TypeScript / Supabase / Tailwind CSS / shadcn/ui",
        image: "./projects_assets/woodtrack.gif",
        github: "https://github.com/karimhantaou/woodtrack",
        site: "https://woodtrack-git-master-karimhantaous-projects.vercel.app/"
    },
    {
        title: "Stanley's Job",
        description: "Stanley's Job est une plateforme de job board développée en équipe de trois sur deux semaines. \n" +
            "Réalisée avec Vue.js, Express.js et MariaDB, elle permet aux utilisateurs de créer un compte, se connecter, postuler à des offres d’emploi et gérer leurs informations personnelles ainsi que l’historique de leurs candidatures.\n",
        tech: "Vue.js / Express.js / MariaDB",
        image: "./projects_assets/stanleysjob.gif"
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
        title: "video tracker",
        description: "Application web permettant de faire des conversions mathématique d'une base mathématique à une autre.",
        tech: "HTML / CSS / JavaScript",
        image: "./projects_assets/calculator.gif",
        github:"https://github.com/karimhantaou/Convertisseur",
        site: "https://karimhantaou.github.io/Convertisseur/"
    },
    {
        title: "Mineword",
        description: "Mineword est un mini-jeu développé avec Python et Pygame, inspiré de l’univers de Minecraft.\n" +
            "Le joueur doit retrouver des mots cachés liés au thème du jeu, accompagné de sons et musiques issus du jeu original. \n" +
            "Un système de score permet de suivre les meilleures performances.",
        tech: "Python / Pygame",
        image: "./projects_assets/mineword.png",
        github:"https://github.com/karimhantaou/Mineword",
    },
];

export default projects;