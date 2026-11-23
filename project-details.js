window.PROJECT_DETAILS = {
    clients: {
        stats: [
            { value: "CRUD", label: "Clients & villes" },
            { value: "2", label: "Tables liées" },
            { value: "5", label: "Clients par page" },
            { value: "Laravel 11", label: "Framework" }
        ],
        context: [
            "Gestion des clients est l'un de mes premiers projets Laravel. L'objectif était de passer d'une application PHP « classique », où chaque page mélange HTML et requêtes SQL, à une vraie architecture MVC avec un framework professionnel.",
            "L'application gère une liste de clients, chacun rattaché à une ville. On peut consulter la liste paginée, ajouter un client via un formulaire d'inscription et ouvrir sa fiche pour la modifier. Les villes sont stockées dans leur propre table et proposées dans une liste déroulante, ce qui évite les fautes de saisie.",
            "Ce projet m'a servi de terrain d'apprentissage pour les bases de Laravel : routes, contrôleurs, modèles Eloquent, migrations, seeders, factories et vues Blade."
        ],
        objectives: [
            "Comprendre le modèle MVC avec Laravel",
            "Modéliser une relation un-à-plusieurs (une ville possède plusieurs clients)",
            "Générer des données de test réalistes avec Faker",
            "Construire une interface propre avec Bootstrap"
        ],
        features: [
            "Liste des clients paginée (5 par page)",
            "Formulaire d'ajout avec choix de la ville",
            "Fiche client pré-remplie pour la modification",
            "Message de confirmation après chaque ajout",
            "Jeu de données de test généré automatiquement"
        ],
        architecture: [
            { label: "Back-end", text: "Laravel 11 et PHP 8.2 : routes web, ClientController et CityController, modèles Eloquent Client et City." },
            { label: "Base de données", text: "Migrations pour les tables cities et clients (prénom, nom, email unique, mot de passe, ville). Relation City hasMany Client / Client belongsTo City." },
            { label: "Données de test", text: "ClientFactory avec Faker et ClientSeeder qui crée 10 clients en une commande." },
            { label: "Interface", text: "Vues Blade et Bootstrap 5 : tableau des clients, liens de pagination, formulaires et messages flash." }
        ],
        sections: [
            { title: "Liste des clients", text: "L'écran principal présente les clients dans un tableau (identifiant, prénom, nom, email). La pagination Laravel découpe la liste en pages de 5 clients : la page reste rapide et lisible même si la base grossit.", images: ["01-liste-clients", "02-liste-clients-pagination"] },
            { title: "Fiche client", text: "En cliquant sur un client, on ouvre sa fiche avec un formulaire pré-rempli. C'est la base de la fonctionnalité de modification.", images: ["03-fiche-client"] },
            { title: "Ajout d'un client", text: "Le formulaire d'inscription demande le prénom, le nom, l'email, le mot de passe et la ville. La ville est choisie dans une liste alimentée par la table cities. Après l'enregistrement, l'utilisateur est redirigé vers la liste avec un message de succès.", images: ["04-ajouter-client"] }
        ],
        challenges: [
            { title: "Relation entre tables", text: "Relier chaque client à une ville avec une clé étrangère, puis afficher les villes dans le formulaire grâce aux relations Eloquent." },
            { title: "Passer du PHP natif à Laravel", text: "Remplacer les pages PHP séparées par des routes et des contrôleurs, et apprendre l'organisation d'un projet Laravel." }
        ],
        learnings: [
            "Les fondamentaux de Laravel : routes, contrôleurs, Eloquent, Blade",
            "Les migrations et les seeders pour versionner la base",
            "La pagination et les messages flash",
            "Ce projet m'a préparé aux plateformes plus complètes réalisées ensuite (stages ANP et SRM-MS)"
        ]
    },

    cahier: {
        stats: [
            { value: "2", label: "Rôles (Admin, Prof)" },
            { value: "13", label: "Routes" },
            { value: "5", label: "Classes de démo" },
            { value: "Laravel 11", label: "Framework" }
        ],
        context: [
            "Dans beaucoup d'établissements, le cahier de texte est encore un registre papier : chaque professeur y note le contenu de ses séances. Il est difficile à consulter, à contrôler et il peut se perdre.",
            "Cahier de Texte est une plateforme web qui numérise ce registre. L'administration gère les comptes des professeurs et leurs emplois du temps. Chaque professeur dispose de son espace : il voit son emploi du temps, ses classes, et rédige le rapport et le cahier de texte de chaque classe.",
            "L'application redirige automatiquement chaque utilisateur vers l'espace correspondant à son rôle après la connexion."
        ],
        objectives: [
            "Remplacer le cahier de texte papier par une solution en ligne",
            "Donner à l'administration une vue sur les professeurs et les emplois du temps",
            "Offrir à chaque professeur un espace simple pour rédiger ses séances",
            "Protéger l'accès avec une authentification par rôle"
        ],
        features: [
            "Connexion avec redirection selon le rôle (admin ou prof)",
            "Inscription d'un nouveau professeur",
            "Admin : ajout, modification et suppression des professeurs",
            "Admin : consultation et modification des emplois du temps",
            "Prof : emploi du temps, classes et rapports en onglets",
            "Prof : rédaction et modification du cahier de texte"
        ],
        architecture: [
            { label: "Back-end", text: "Laravel 11 : AuthController, AdminController et ProfController. Routes protégées par le middleware auth." },
            { label: "Base de données", text: "Tables classes, schedules (jour, heure, séance), reports (rapport et cahier de texte) et table pivot prof_classe pour la relation plusieurs-à-plusieurs entre professeurs et classes." },
            { label: "Sécurité", text: "Authentification Laravel (Auth::attempt), mots de passe hashés avec bcrypt, protection CSRF et validation des formulaires côté serveur." },
            { label: "Interface", text: "Vues Blade avec un CSS personnalisé. Le tableau de bord du professeur est organisé en onglets gérés en JavaScript." }
        ],
        sections: [
            { title: "Connexion et inscription", text: "L'utilisateur se connecte avec son email et son mot de passe. Selon son rôle, il arrive sur le tableau de bord administrateur ou sur l'espace professeur. Un nouveau professeur peut aussi créer son compte depuis la page d'inscription.", images: ["01-connexion", "02-inscription"] },
            { title: "Espace administrateur", text: "L'administrateur voit la liste des professeurs, en ajoute de nouveaux (nom, email unique, mot de passe) et modifie leurs informations directement dans le tableau. Il consulte aussi l'emploi du temps de chaque professeur et peut changer le jour, l'heure ou la matière d'une séance.", images: ["03-admin-professeurs", "04-admin-ajout-professeur", "05-admin-emplois-du-temps", "06-admin-emplois-du-temps-suite"] },
            { title: "Espace professeur", text: "Le professeur retrouve trois onglets : son emploi du temps de la semaine, la liste de ses classes, et les rapports avec le cahier de texte de chaque classe. Le bouton « Modifier » ouvre un formulaire où il rédige le contenu de la séance et le cahier de texte.", images: ["07-prof-tableau-de-bord", "08-prof-classes", "09-prof-rapports-cahier", "10-prof-modifier-cahier"] }
        ],
        challenges: [
            { title: "Relation professeurs / classes", text: "Un professeur enseigne dans plusieurs classes et une classe a plusieurs professeurs : il a fallu une table pivot et les relations belongsToMany d'Eloquent." },
            { title: "Séparer les espaces par rôle", text: "Rediriger chaque utilisateur vers le bon tableau de bord après la connexion et empêcher un professeur d'accéder aux pages d'administration." }
        ],
        learnings: [
            "Modéliser des relations plusieurs-à-plusieurs avec Laravel",
            "Mettre en place une authentification avec plusieurs rôles",
            "Construire des seeders pour avoir une démo prête à l'emploi (classes et emplois du temps)"
        ]
    },

    sportof: {
        stats: [
            { value: "20", label: "Pages HTML" },
            { value: "4", label: "Championnats" },
            { value: "12", label: "Clubs" },
            { value: "0", label: "Framework" }
        ],
        context: [
            "Sportof est une boutique en ligne de maillots de football des grands clubs européens, avec des prix en dirhams. C'est mon premier projet web complet, réalisé uniquement en HTML, CSS et JavaScript, sans framework.",
            "Le but était de concevoir une vitrine moderne et agréable à parcourir : le visiteur choisit un championnat, puis un club, puis découvre la fiche du maillot avec le choix de la taille et un formulaire de commande.",
            "Le site comprend 20 pages : accueil, menu des championnats, 4 pages de ligues, 12 fiches produit, ainsi que les pages de connexion et de création de compte."
        ],
        objectives: [
            "Maîtriser HTML5 et CSS3 sur un vrai projet multi-pages",
            "Concevoir une navigation claire par catégories",
            "Créer une identité visuelle cohérente",
            "Ajouter de l'interactivité en JavaScript (inscription et connexion)"
        ],
        features: [
            "Page d'accueil avec bannière, présentation et contact",
            "Navigation par championnat : LaLiga, Premier League, Bundesliga, Serie A",
            "12 fiches produit (Real Madrid, Barça, Man City, Liverpool, Bayern, Inter…)",
            "Choix de la taille (S à XXL) et formulaire de commande",
            "Inscription et connexion en JavaScript avec localStorage",
            "Option « afficher le mot de passe »"
        ],
        architecture: [
            { label: "Structure", text: "HTML5 sémantique : une page par championnat et par club, avec un en-tête fixe commun à tout le site." },
            { label: "Style", text: "CSS3 personnalisé avec Flexbox, police Google « Overpass », couleur principale orange (#fb911f) et effets au survol des boutons." },
            { label: "Interactivité", text: "JavaScript natif : vérification des mots de passe à l'inscription, enregistrement du compte dans le localStorage du navigateur et vérification à la connexion." }
        ],
        sections: [
            { title: "Accueil et navigation", text: "La page d'accueil présente la boutique avec une grande bannière, une section « À propos » et un formulaire de contact. Le menu donne accès aux quatre grands championnats européens.", images: ["01-accueil", "02-menu-ligues"] },
            { title: "Championnats et clubs", text: "Chaque championnat présente trois clubs. En cliquant sur un club, on arrive sur la fiche du maillot : photo, prix en dirhams, choix de la taille de S à XXL, et un formulaire avec téléphone et adresse de livraison.", images: ["03-laliga", "04-real-madrid", "05-premier-league", "06-manchester-city", "07-bundesliga", "08-serie-a"] },
            { title: "Compte client", text: "Le visiteur peut créer un compte (nom d'utilisateur, email, mot de passe, téléphone, date de naissance). Le JavaScript vérifie que les deux mots de passe correspondent, enregistre le compte, puis le redirige vers la page de connexion.", images: ["09-connexion", "10-creer-compte"] }
        ],
        challenges: [
            { title: "Cohérence sur 20 pages", text: "Garder le même en-tête, les mêmes couleurs et la même mise en page sur toutes les pages sans framework, grâce à une feuille de style commune." },
            { title: "Logique sans serveur", text: "Simuler l'inscription et la connexion uniquement côté navigateur avec le localStorage." }
        ],
        learnings: [
            "Les bases solides du HTML, du CSS et du JavaScript",
            "L'organisation d'un site multi-pages",
            "Les limites d'un site sans back-end, ce qui m'a poussé à apprendre PHP et Laravel ensuite"
        ]
    },

    foot: {
        stats: [
            { value: "48", label: "Sélections suivies" },
            { value: "104", label: "Matchs prédits" },
            { value: "1 615", label: "Joueurs analysés" },
            { value: "58 %", label: "Précision (test)" }
        ],
        context: [
            "Web Mining Foot (nom de code « ArenA Intelligence ») est un projet de data science autour de la Coupe du Monde 2026. Il collecte automatiquement des données sur les 48 sélections qualifiées, construit des indicateurs de forme et entraîne un modèle qui prédit l'issue de chaque match : victoire, nul ou défaite.",
            "Les données viennent de l'API de SofaScore (calendrier, 15 derniers matchs de chaque équipe, effectifs et statistiques des joueurs) et du classement FIFA officiel. SofaScore bloque les requêtes simples (erreur 403) : j'ai donc utilisé Playwright pour ouvrir un vrai navigateur, récupérer les cookies, puis appeler l'API.",
            "Le pipeline complet tourne en une commande et peut se relancer automatiquement toutes les 3 heures. Les résultats sont présentés dans un dashboard Streamlit à 4 onglets."
        ],
        objectives: [
            "Collecter automatiquement des données sportives à jour (web mining)",
            "Construire des variables pertinentes sans fuite de données",
            "Prédire les résultats 1/N/2 des 104 matchs de la Coupe du Monde",
            "Rendre les prédictions compréhensibles dans un dashboard interactif"
        ],
        features: [
            "Scraping de SofaScore avec Playwright (contournement du blocage 403)",
            "Récupération du classement FIFA en direct",
            "48 variables par match : forme, classement FIFA, qualité de l'effectif",
            "Random Forest calibré avec validation croisée répétée",
            "Détection des « surprises » (favori du modèle moins bien classé FIFA)",
            "Dashboard Streamlit : prédictions, équipes, insights, comparateur"
        ],
        architecture: [
            { label: "Collecte", text: "Python et Playwright (Chromium headless) pour l'API SofaScore, API publique de la FIFA pour le classement. 580 matchs historiques, 1 615 joueurs et 211 équipes classées." },
            { label: "Préparation", text: "Pandas : pour chaque match, seuls les matchs strictement antérieurs sont utilisés (pas de fuite de données). Forme sur 15 matchs, écarts de rang et de points FIFA, âge moyen, valeur marchande et note moyenne de l'effectif." },
            { label: "Modèle", text: "scikit-learn : RandomForestClassifier (200 arbres, profondeur 12, classes équilibrées), découpage chronologique, calibration des probabilités et validation croisée 5 × 5." },
            { label: "Visualisation", text: "Streamlit avec un thème sombre personnalisé : cartes de match avec drapeaux, barres de probabilités, filtres, tri par confiance et export CSV." },
            { label: "Automatisation", text: "Script qui enchaîne collecte, construction des variables, entraînement, prédiction et rapport d'audit, avec mise à jour automatique toutes les 3 heures." }
        ],
        sections: [
            { title: "Accueil du dashboard", text: "Une page d'accueil présente le projet avant d'entrer dans l'interface principale, organisée en quatre onglets.", images: ["01-accueil"] },
            { title: "Prédictions de la Coupe du Monde", text: "Chaque match à venir est affiché sous forme de carte : drapeaux, date, heure locale du stade, ville hôte et probabilités de victoire, nul ou défaite. On peut filtrer par équipe, trier par date, par confiance ou par incertitude, et exporter les prédictions en CSV. Un tableau signale les matchs « surprises ».", images: ["03-predictions-cdm-2026", "04-predictions-matchs", "05-predictions-matchs-suite"] },
            { title: "Équipes nationales", text: "La fiche de chaque sélection rassemble son rang et ses points FIFA, ses 15 derniers matchs et les indicateurs de son effectif (âge moyen, valeur marchande en millions d'euros). Un onglet joueurs permet de filtrer par poste et par nombre de sélections.", images: ["07-equipes-nationales", "08-equipes-15-derniers-matchs", "09-equipes-suite"] },
            { title: "Insights et comparateur", text: "Le centre d'insights affiche la confiance moyenne du modèle, la répartition des pronostics, les matchs les plus sûrs et les plus incertains. Le comparateur oppose deux équipes sur tous leurs indicateurs et donne un verdict, avec la prédiction du modèle si elles se rencontrent.", images: ["10-centre-insights", "11-centre-insights-suite", "12-comparateur-equipes", "13-comparateur-equipes-suite"] }
        ],
        challenges: [
            { title: "Blocage du scraping", text: "SofaScore renvoie une erreur 403 aux requêtes classiques. Solution : piloter un vrai navigateur avec Playwright pour obtenir les cookies de session." },
            { title: "Éviter la fuite de données", text: "Pour chaque match, les variables ne sont calculées qu'avec les matchs joués avant, sinon le modèle « tricherait » en voyant le futur." },
            { title: "Peu de données labellisées", text: "Seulement 157 matchs exploitables : j'ai utilisé une validation croisée répétée (25 entraînements) pour obtenir une mesure fiable." }
        ],
        learnings: [
            "Précision de 58 % sur les matchs de test et 54 % en validation croisée, contre 42 % en prédisant toujours le résultat le plus fréquent",
            "Le modèle prédit bien les victoires mais très mal les matchs nuls, qui restent le résultat le plus difficile à anticiper",
            "Concevoir un pipeline de données de bout en bout, de la collecte au dashboard"
        ]
    },

    anp: {
        stats: [
            { value: "3", label: "Rôles" },
            { value: "~70", label: "Routes" },
            { value: "40", label: "Vues" },
            { value: "IA", label: "XGBoost intégré" }
        ],
        context: [
            "Ce projet a été réalisé pendant mon stage à l'Agence Nationale des Ports (ANP). Les agents des différentes divisions signalaient leurs problèmes (matériel, sécurité, infrastructure, informatique, opérationnel) de façon dispersée, ce qui rendait le suivi et la traçabilité difficiles.",
            "J'ai développé une plateforme web interne qui centralise toutes les réclamations. Chaque agent dépose sa réclamation et suit son statut en temps réel. L'administrateur la traite, et quand elle est terminée, il la signe électroniquement : un PDF officiel avec le logo de l'ANP est alors généré et archivé.",
            "Pour aider les agents à bien formuler leurs demandes, j'ai intégré un assistant IA. À partir de quelques mots-clés, il rédige une réclamation structurée en quatre parties (contexte, problème, impact, demande) et prédit automatiquement sa catégorie et sa priorité grâce à un modèle XGBoost."
        ],
        objectives: [
            "Centraliser les réclamations de toutes les divisions",
            "Assurer un suivi transparent avec des statuts clairs",
            "Garder une trace de chaque action (audit) et archiver les dossiers en PDF signés",
            "Aider les agents à rédiger des réclamations complètes grâce à l'IA"
        ],
        features: [
            "Trois rôles : Administrateur, Directeur et Personnel (5 grades)",
            "Inscription validée par l'administrateur, qui assigne division et grade",
            "Cycle de vie : En attente, En cours, Rejetée, Terminée",
            "Signature dessinée à la souris et PDF d'archive généré automatiquement",
            "Assistant IA : rédaction structurée et prédiction catégorie / priorité",
            "Notifications internes, historique complet et exports Excel / PDF",
            "Suivi en temps réel (rafraîchissement automatique toutes les 5 secondes)"
        ],
        architecture: [
            { label: "Back-end", text: "Laravel 12 et PHP 8.2 : 20 contrôleurs organisés par espace (Admin, Directeur, Utilisateur, Auth, IA), 3 services et 3 middlewares personnalisés (rôle, compte actif, changement de mot de passe obligatoire)." },
            { label: "Base de données", text: "MySQL : divisions, utilisateurs, réclamations, notifications et journal d'activité. Les réclamations stockent aussi les données de l'IA et les informations d'archive (PDF, signataire, date, signature)." },
            { label: "Intelligence artificielle", text: "Python : pipelines scikit-learn TF-IDF + XGBoost pour la priorité (4 classes) et la catégorie (5 classes), plus un modèle multi-label qui vérifie si la réclamation précise le lieu, la date, l'impact et la demande. Laravel appelle le script Python et échange les données en JSON." },
            { label: "PDF et signature", text: "Dompdf génère le PDF d'archive au format A4 avec le logo ANP. La signature est dessinée dans un canvas HTML5 puis intégrée au document." },
            { label: "Interface", text: "Blade, Tailwind CSS 4 et Vite. Tableaux de bord adaptés à chaque rôle, cloche de notifications et filtres de recherche." }
        ],
        sections: [
            { title: "Accès à la plateforme", text: "Un agent crée son compte, qui reste « en attente » tant que l'administrateur ne l'a pas validé. Quand l'administrateur crée lui-même un compte, l'utilisateur doit changer son mot de passe à la première connexion.", images: ["01-connexion", "02-inscription"] },
            { title: "Espace administrateur", text: "L'administrateur supervise toute l'activité. Il valide ou rejette les inscriptions, gère les utilisateurs, consulte et filtre toutes les réclamations. Sur la fiche d'une réclamation, il change le statut avec une note, et pour la clôturer il dessine sa signature : le PDF signé est généré et rangé dans les archives. Chaque action est enregistrée dans l'historique, exportable en Excel ou en PDF.", images: ["03-admin-tableau-de-bord", "04-admin-utilisateurs", "05-admin-demandes-inscription", "06-admin-reclamations", "07-admin-detail-reclamation", "08-admin-detail-reclamation-suite", "09-admin-archives", "10-admin-historique"] },
            { title: "Espace directeur", text: "Le directeur dispose d'une vue d'ensemble sur l'activité. Il consulte toutes les réclamations en lecture, exporte des rapports et accède aux archives et à l'historique.", images: ["11-directeur-tableau-de-bord", "12-directeur-reclamations"] },
            { title: "Espace agent", text: "L'agent voit ses réclamations et leur statut, mis à jour automatiquement sans recharger la page. Il est notifié à chaque changement, télécharge le PDF quand le dossier est clôturé et gère son profil. Un chef de division voit en plus les réclamations de toute sa division.", images: ["13-utilisateur-tableau-de-bord", "14-utilisateur-mes-reclamations", "17-utilisateur-suivi-reclamation", "18-profil"] },
            { title: "Assistant IA de rédaction", text: "L'agent écrit quelques mots-clés, par exemple « fuite d'eau bureau 3 depuis lundi ». L'assistant extrait le lieu, l'objet et la date, rédige une réclamation structurée, prédit la catégorie et la priorité avec XGBoost, puis indique les informations manquantes. L'agent relit, ajuste et envoie.", images: ["15-nouvelle-reclamation-assistant-ia", "19-assistant-ia-reclamation-generee", "20-assistant-ia-reclamation-generee-suite"] }
        ],
        challenges: [
            { title: "Relier Laravel et Python", text: "Le modèle est en Python et l'application en PHP. Laravel lance le script Python et échange en JSON, avec un système de repli (API FastAPI, puis moteur de règles) si Python n'est pas disponible." },
            { title: "Traçabilité complète", text: "Chaque création, changement de statut ou suppression est journalisé, et une réclamation terminée est verrouillée pour garantir l'intégrité des archives." },
            { title: "Sécurité des accès", text: "Middlewares personnalisés, validation des comptes par l'administrateur, contrôle de propriété sur chaque réclamation et changement de mot de passe obligatoire." }
        ],
        learnings: [
            "Développer une application complète pour un vrai client, en entreprise",
            "Intégrer un modèle de machine learning dans une application web",
            "Concevoir le projet en UML (cas d'utilisation, classes, états, séquences) avant de coder",
            "Rédiger un rapport de stage et présenter le projet devant l'encadrant"
        ]
    },

    sphp: {
        stats: [
            { value: "4", label: "Espaces utilisateurs" },
            { value: "26", label: "Pages" },
            { value: "10", label: "Tables" },
            { value: "Auto", label: "Planning des interventions" }
        ],
        context: [
            "SPHP est une plateforme de gestion pour une société d'hygiène qui propose des services de désinsectisation, dératisation, désinfection, nettoyage et hygiène alimentaire. Elle gère des clients qui peuvent avoir plusieurs sites, et des contrats qui prévoient un certain nombre d'interventions par mois.",
            "Le cœur du projet est l'automatisation. Quand un contrat est créé, la plateforme calcule toute seule le planning des interventions sur toute sa durée, en les répartissant régulièrement dans chaque mois. Elle affecte ensuite automatiquement les techniciens selon leur disponibilité et leur charge de travail.",
            "Le projet est développé en PHP natif, sans framework, ce qui m'a obligé à construire moi-même l'authentification, les rôles, la sécurité et l'organisation du code."
        ],
        objectives: [
            "Centraliser clients, sites, contrats et interventions",
            "Générer automatiquement le planning à partir de la durée et de la fréquence du contrat",
            "Affecter les techniciens sans conflit d'horaires",
            "Offrir un espace en ligne aux clients (abonnements, demandes, contrats)"
        ],
        features: [
            "Quatre espaces : Admin, Manager, Technicien et Client",
            "Planning des interventions calculé automatiquement",
            "Affectation automatique des techniciens (créneaux 8h, 12h, 16h)",
            "Abonnement en ligne avec signature électronique du client et de l'admin",
            "Contrat PDF généré automatiquement (Dompdf)",
            "Compte-rendu d'intervention avec photos",
            "Alertes automatiques : contrats qui expirent, interventions du lendemain, retards",
            "Statistiques avec Chart.js"
        ],
        architecture: [
            { label: "Back-end", text: "PHP 8 natif organisé par rôle (un dossier de pages par espace), fonctions métier centralisées et contrôle d'accès sur chaque page." },
            { label: "Base de données", text: "MySQL : utilisateurs, clients, sites, services, contrats, demandes, interventions, photos, alertes et demandes d'abonnement. Accès avec PDO et requêtes préparées." },
            { label: "Algorithme de planning", text: "Pour chaque mois du contrat et une fréquence N, les interventions sont placées aux jours « nombre de jours du mois / (N + 1) × i ». Exemple : 2 interventions par mois tombent vers le 10 et le 20." },
            { label: "Affectation automatique", text: "Pour chaque intervention, l'algorithme teste chaque technicien sur chaque créneau libre (pas d'autre intervention à moins de 4 heures) et choisit celui qui a la charge la plus faible. Le manager confirme ensuite pour verrouiller." },
            { label: "Outils", text: "Dompdf pour les contrats PDF, Chart.js pour les graphiques, signatures dessinées dans un canvas HTML5." }
        ],
        sections: [
            { title: "Site public et accès", text: "Une page d'accueil présente la société et ses services. Un client peut s'inscrire : la plateforme crée à la fois son compte et sa fiche client, puis il accède à son espace.", images: ["01-accueil", "02-accueil-suite", "03-connexion", "04-inscription-client"] },
            { title: "Administration", text: "L'administrateur pilote l'activité depuis un tableau de bord avec des graphiques (interventions prévues et réalisées sur 12 mois, services les plus demandés, performance des techniciens). Il confirme les abonnements en vérifiant le paiement et en signant : le contrat, son planning et les affectations sont alors créés automatiquement. Il suit aussi les interventions, les alertes et le personnel.", images: ["05-admin-dashboard", "07-admin-abonnements", "08-admin-contrats", "09-admin-detail-contrat", "10-admin-suivi-interventions", "12-admin-alertes", "13-admin-personnel"] },
            { title: "Espace manager", text: "Le manager organise le travail. Il voit le planning dans un calendrier mensuel, vérifie et confirme les affectations proposées automatiquement, planifie les demandes ponctuelles et gère les clients.", images: ["14-manager-dashboard", "15-manager-calendrier", "16-manager-interventions", "17-manager-clients"] },
            { title: "Espace technicien", text: "Le technicien consulte ses interventions et son calendrier. Après chaque intervention, il remplit le compte-rendu : heures d'arrivée et de départ, produits utilisés, travail effectué, observations et photos. L'intervention passe alors à « terminée ».", images: ["18-technicien-dashboard", "19-technicien-interventions", "20-technicien-calendrier"] },
            { title: "Espace client", text: "Le client consulte ses contrats et télécharge le PDF. Il peut demander un nouvel abonnement en choisissant le service, la durée et la fréquence, puis en signant à la souris. Il peut aussi demander une intervention ponctuelle, accepter ou refuser la date proposée, et noter les interventions terminées.", images: ["21-client-espace", "22-client-contrats", "23-client-demande-abonnement", "24-client-demande-intervention"] }
        ],
        challenges: [
            { title: "Planifier automatiquement", text: "Répartir régulièrement les interventions dans des mois de 28 à 31 jours, en respectant les dates de début et de fin du contrat, et permettre de régénérer le planning." },
            { title: "Éviter les conflits d'horaires", text: "Un technicien ne peut pas avoir deux interventions trop proches : l'algorithme vérifie la disponibilité, équilibre la charge et corrige les conflits." },
            { title: "Sécurité sans framework", text: "Requêtes préparées PDO contre les injections SQL, mots de passe hashés, échappement contre le XSS et contrôle du rôle sur chaque page." }
        ],
        learnings: [
            "Concevoir des algorithmes métier (planification et affectation)",
            "Structurer une application PHP importante sans framework",
            "Utiliser des transactions SQL pour garantir la cohérence (contrat, planning et affectations créés ensemble)"
        ]
    },

    location: {
        stats: [
            { value: "3", label: "Rôles" },
            { value: "10", label: "Contrôleurs" },
            { value: "26", label: "Vues Razor" },
            { value: ".NET 9", label: "Framework" }
        ],
        context: [
            "Location de voitures est une plateforme qui met en relation des clients qui veulent louer une voiture et des loueurs qui mettent leurs véhicules en location, sous la supervision d'un administrateur.",
            "Tout le processus est automatisé : le client réserve en ligne avec sa pièce d'identité et la photo de son permis, le loueur accepte ou refuse, puis un contrat de location officiel est généré en PDF. Les statuts des locations évoluent automatiquement selon les dates.",
            "Le projet est développé en ASP.NET Core MVC avec Entity Framework Core et MySQL. C'est mon projet le plus complet dans l'écosystème Microsoft .NET."
        ],
        objectives: [
            "Digitaliser tout le parcours de location, de la réservation au contrat",
            "Gérer trois types d'utilisateurs avec des droits différents",
            "Générer automatiquement des contrats PDF professionnels",
            "Permettre de signaler les incidents et de les traiter"
        ],
        features: [
            "Catalogue de voitures avec filtres (marque, prix, année)",
            "Réservation avec dates, pièce d'identité et photo du permis",
            "Prix calculé côté serveur (prix par jour × nombre de jours)",
            "Acceptation ou refus par le loueur",
            "Contrat PDF avec 10 clauses, généré avec QuestPDF",
            "Statuts automatiques : En attente, Acceptée, En cours, Terminée, Annulée",
            "Signalements d'incidents et notifications à l'administrateur"
        ],
        architecture: [
            { label: "Back-end", text: "ASP.NET Core MVC (.NET 9) : 10 contrôleurs, un service de mise à jour des statuts et un service de génération de contrats." },
            { label: "Base de données", text: "Entity Framework Core avec MySQL (Pomelo), 7 migrations. Tables : utilisateurs, voitures, locations, contrats, signalements, notifications et paiements." },
            { label: "Contrats PDF", text: "QuestPDF génère un contrat A4 complet : parties, vérification d'identité, véhicule, période, prix total et conditions. Chaque contrat a un numéro unique." },
            { label: "Sécurité", text: "Mots de passe hashés avec BCrypt, session sécurisée de 30 minutes, protection anti-falsification (CSRF) sur tous les formulaires et contrôle de propriété sur chaque voiture, location et contrat." },
            { label: "Interface", text: "Vues Razor, Bootstrap 5 et jQuery Validation pour la validation côté client." }
        ],
        sections: [
            { title: "Connexion et inscription", text: "L'utilisateur s'inscrit comme client ou comme loueur, puis il arrive dans l'espace correspondant à son rôle.", images: ["01-connexion", "02-inscription"] },
            { title: "Parcours client", text: "Le client parcourt le catalogue et filtre par marque, prix ou année, avec les voitures disponibles en premier. Pour réserver, il choisit les dates, saisit son numéro de pièce d'identité et envoie la photo de son permis. Il suit ensuite ses locations, télécharge ses contrats et peut signaler un problème sur un véhicule.", images: ["03-client-voitures-disponibles", "04-client-catalogue-voitures", "05-client-reservation", "06-client-historique", "07-client-mes-contrats", "08-client-signalement"] },
            { title: "Espace loueur", text: "Le loueur ajoute et gère ses voitures (marque, modèle, année, prix par jour, photo). Il reçoit les demandes de réservation et les accepte ou les refuse. Une fois la location acceptée, le contrat PDF est généré automatiquement avec toutes les informations des deux parties.", images: ["09-locataire-tableau-de-bord", "10-locataire-tableau-de-bord-suite", "11-locataire-detail-location", "12-contrat-de-location", "13-locataire-ajouter-voiture"] },
            { title: "Administration", text: "L'administrateur supervise toute la plateforme : locations, clients, loueurs, voitures disponibles ou non, et contrats. Il reçoit une notification pour chaque signalement, le traite et peut créer d'autres comptes administrateurs.", images: ["14-admin-tableau-de-bord", "15-admin-tableau-de-bord-suite", "17-admin-notifications", "18-profil"] }
        ],
        challenges: [
            { title: "Statuts automatiques", text: "Une demande sans réponse depuis 3 jours est annulée, une location démarre à la date prévue, et à la date de retour elle se termine et la voiture redevient disponible." },
            { title: "Fiabilité du prix", text: "Le prix affiché en JavaScript n'est qu'une estimation : le montant final est toujours recalculé côté serveur pour éviter toute manipulation." },
            { title: "Upload sécurisé", text: "La photo du permis est contrôlée (format jpg, png ou pdf, 5 Mo maximum) et renommée avec un identifiant unique." }
        ],
        learnings: [
            "Maîtriser ASP.NET Core MVC et Entity Framework Core",
            "Générer des documents PDF professionnels",
            "Modéliser un processus métier complet avec ses statuts"
        ]
    },

    srm: {
        stats: [
            { value: "4", label: "Rôles" },
            { value: "20", label: "Types de demandes" },
            { value: "48", label: "Vues" },
            { value: "48 h", label: "Objectif de traitement" }
        ],
        context: [
            "Ce projet a été réalisé pendant mon stage à la SRM-MS (Société Régionale Multiservices), qui distribue l'eau et l'électricité dans la région de Safi. Les clients font de nombreuses demandes techniques : abonnement, changement de compteur, fuite, coupure, contrôle… Leur suivi était difficile et peu transparent.",
            "J'ai développé une plateforme qui suit chaque demande de son dépôt par le client jusqu'à sa réalisation par un technicien. Elle couvre 20 types de demandes et mesure le délai de traitement, avec un objectif de 48 heures.",
            "Une fois la demande réalisée, le client évalue le technicien. Ces évaluations alimentent un classement et des statistiques qui aident la direction à piloter le service."
        ],
        objectives: [
            "Centraliser toutes les demandes techniques des clients",
            "Suivre chaque demande avec des statuts et des dates précises",
            "Mesurer la performance (délais, évaluations des techniciens)",
            "Faciliter la communication entre clients, agents et techniciens"
        ],
        features: [
            "Quatre rôles : Administrateur, Agent, Technicien et Client",
            "Cycle de vie : En attente, En cours, Réalisée, Annulée",
            "Affectation des techniciens et calendrier des interventions",
            "Évaluation du technicien par le client (note, qualité, ponctualité, politesse)",
            "Messagerie interne avec règles selon le rôle",
            "Statistiques, graphiques et rapports PDF / CSV archivés",
            "Bulletins d'information et notifications"
        ],
        architecture: [
            { label: "Back-end", text: "Laravel 10 : 21 contrôleurs, 10 modèles, 4 policies et une trentaine de règles d'autorisation (Gates) pour contrôler précisément qui peut faire quoi." },
            { label: "Base de données", text: "MySQL, 10 tables métier : utilisateurs, types de demandes, demandes, commentaires, évaluations, notifications, conversations, messages, bulletins et archives." },
            { label: "Rapports", text: "Dompdf pour 4 modèles de rapports PDF (demandes, évaluations, techniciens, statistiques) et exports CSV, tous archivés." },
            { label: "Interface", text: "Tailwind CSS, Alpine.js, Chart.js pour les graphiques et FullCalendar pour le calendrier des interventions." },
            { label: "Sécurité", text: "Authentification par session, mots de passe hashés, protection CSRF, policies Laravel, transactions SQL et limitation du nombre de requêtes sur l'API." }
        ],
        sections: [
            { title: "Accueil et connexion", text: "Une page d'accueil présente le service. Chaque utilisateur se connecte et arrive sur un tableau de bord adapté à son rôle.", images: ["01-accueil", "02-connexion"] },
            { title: "Pilotage des demandes", text: "L'administrateur et les agents voient toutes les demandes avec leur statut. Quand un technicien est affecté, la demande passe « en cours » et il est notifié. Les statistiques montrent les délais moyens, le taux de traitement en moins de 48 heures et la répartition par type de demande.", images: ["03-admin-dashboard", "04-admin-dashboard-suite", "05-admin-demandes", "06-admin-detail-demande", "07-admin-statistiques", "08-admin-statistiques-graphiques"] },
            { title: "Gestion et suivi", text: "L'administrateur gère les utilisateurs, consulte le classement des techniciens selon les évaluations des clients, génère des rapports PDF, planifie les interventions dans un calendrier, consulte les archives et publie des bulletins d'information.", images: ["09-admin-utilisateurs", "10-admin-evaluations-techniciens", "11-admin-rapports", "12-admin-calendrier-interventions", "13-admin-archives", "14-bulletins-information"] },
            { title: "Techniciens et clients", text: "Le technicien voit uniquement les demandes qui lui sont affectées. Il les marque comme réalisées avec un rapport d'intervention et peut demander l'aide d'un collègue. Le client dépose ses demandes (type, adresse, urgence, description), suit leur avancement, échange par messagerie et évalue le technicien.", images: ["15-technicien-dashboard", "16-technicien-interventions", "17-client-dashboard", "18-client-mes-demandes", "19-client-nouvelle-demande", "20-messagerie"] }
        ],
        challenges: [
            { title: "Autorisations fines", text: "Quatre rôles avec des droits très différents : j'ai utilisé les policies et les Gates de Laravel pour centraliser les règles d'accès." },
            { title: "Mesurer la performance", text: "Calculer automatiquement les délais de traitement et de réalisation, et la note moyenne de chaque technicien." },
            { title: "Messagerie contrôlée", text: "Un client ne peut écrire qu'aux administrateurs et aux techniciens de ses demandes, un technicien qu'à ses clients et aux administrateurs." }
        ],
        learnings: [
            "Ma première expérience en entreprise sur un projet réel",
            "Recueillir les besoins des utilisateurs et les traduire en fonctionnalités",
            "Maîtriser les autorisations avancées de Laravel (policies et Gates)"
        ]
    },

    ia: {
        stats: [
            { value: "1 500", label: "Épisodes d'entraînement" },
            { value: "1 835", label: "États appris" },
            { value: "−25 %", label: "File d'attente pendant l'apprentissage" },
            { value: "3", label: "Membres d'équipe" }
        ],
        context: [
            "Ce projet d'intelligence artificielle distribuée, réalisé en équipe de trois, s'attaque à un problème urbain concret : les embouteillages aux carrefours. Les feux classiques changent à intervalle fixe, même quand une voie est vide et l'autre saturée.",
            "Nous avons modélisé un carrefour à quatre branches comme un processus de décision markovien (MDP), puis programmé from scratch un agent de Q-learning qui apprend à piloter les feux. À chaque instant, l'agent observe les files d'attente et décide de garder ou de changer la phase du feu, dans le but de réduire l'attente totale.",
            "L'agent est comparé à un feu classique à cycle fixe sur deux scénarios de trafic. Une interface graphique Tkinter permet de voir la simulation en temps réel."
        ],
        objectives: [
            "Formaliser un problème réel en MDP (états, actions, récompenses)",
            "Implémenter le Q-learning sans bibliothèque d'apprentissage par renforcement",
            "Comparer l'agent à une solution classique sur plusieurs scénarios",
            "Visualiser le comportement de l'agent en temps réel"
        ],
        features: [
            "Simulation d'un carrefour Nord / Sud / Est / Ouest",
            "Arrivées de véhicules aléatoires (loi de Poisson)",
            "Agent Q-learning avec exploration ε-greedy",
            "Scénarios de trafic équilibré et asymétrique",
            "Comparaison avec un feu à cycle fixe",
            "Interface graphique animée avec contrôle de la vitesse"
        ],
        architecture: [
            { label: "État", text: "Taille des quatre files d'attente (de 0 à 4 et plus) et phase du feu (vert Nord-Sud, vert Est-Ouest ou orange) : 1 875 états possibles." },
            { label: "Actions et récompense", text: "Deux actions : garder la phase ou la changer (avec un passage à l'orange). Récompense égale à moins le nombre total de véhicules en attente, avec une petite pénalité à chaque changement." },
            { label: "Agent", text: "Q-learning tabulaire : taux d'apprentissage α = 0,1, facteur d'actualisation γ = 0,95, exploration ε qui décroît de 1 à 0,05." },
            { label: "Outils", text: "Python, NumPy, Pandas, Matplotlib et Seaborn pour les courbes, Tkinter pour la démo graphique, LaTeX pour le rapport." }
        ],
        sections: [
            { title: "Simulation du carrefour", text: "L'interface affiche le carrefour, les feux et les voitures animées. On choisit la politique (Q-learning ou cycle fixe) et le scénario, puis on lance, met en pause ou avance pas à pas. Les métriques s'affichent en direct : phase, action choisie, récompense et attente totale.", images: ["01-interface-initiale", "02-simulation-qlearning", "03-simulation-qlearning-trafic"] },
            { title: "Scénarios de test", text: "Deux scénarios sont testés : un trafic équilibré où les quatre directions reçoivent autant de voitures, et un trafic asymétrique où l'axe Nord-Sud est beaucoup plus chargé. Le feu à cycle fixe change de phase tous les 10 pas.", images: ["04-scenario-asymetrique", "05-baseline-cycle-fixe"] },
            { title: "Apprentissage de l'agent", text: "Sur 1 500 épisodes, la récompense augmente et la file d'attente moyenne diminue d'environ 25 % entre le début et la fin de l'entraînement : l'agent apprend bien une stratégie.", images: ["06-courbe-recompense-entrainement", "07-courbe-attente-entrainement"] },
            { title: "Comparaison avec le feu fixe", text: "Sur 100 épisodes d'évaluation, le feu à cycle fixe reste légèrement meilleur dans les deux scénarios (environ 70 véhicules en attente contre 76). Nous avons analysé ce résultat : l'état simplifié (files limitées à 4) empêche l'agent de distinguer une file moyenne d'une file très longue.", images: ["08-comparaison-qlearning-vs-baseline-equilibre", "09-comparaison-qlearning-vs-baseline-asymetrique"] }
        ],
        challenges: [
            { title: "Taille de l'espace d'états", text: "Une file peut contenir jusqu'à 50 véhicules : il a fallu regrouper les valeurs pour garder une table Q de taille raisonnable." },
            { title: "Équilibrer exploration et exploitation", text: "Régler la décroissance de ε pour que l'agent explore assez au début puis exploite ce qu'il a appris." }
        ],
        learnings: [
            "Un agent qui apprend n'est pas forcément meilleur qu'une règle simple bien choisie : il faut toujours comparer à une référence",
            "Pistes d'amélioration identifiées : un état plus riche, plus d'épisodes, ou un Deep Q-Network",
            "Ce travail prépare la partie 2 du projet : plusieurs carrefours coordonnés en système multi-agents"
        ]
    },

    strategies: {
        stats: [
            { value: "1,2 M", label: "Avis dans le corpus" },
            { value: "20 000", label: "Avis analysés" },
            { value: "12", label: "Thèmes détectés" },
            { value: "3", label: "Membres d'équipe" }
        ],
        context: [
            "Ce projet de web mining, réalisé en équipe de trois, répond à une question marketing : qu'est-ce qui rend les clients d'un site e-commerce insatisfaits, et quelles actions faut-il prioriser ?",
            "Nous sommes partis du corpus Amazon Reviews multilingue (1,2 million d'avis) et avons gardé un échantillon équilibré de 20 000 avis en français. Chaque avis est nettoyé puis classé en négatif, neutre ou positif selon sa note.",
            "Nous avons ensuite regroupé les avis par thème avec du clustering, mesuré le lien entre thèmes et satisfaction, et construit un tableau de bord Streamlit. Un module d'explicabilité SHAP montre quels mots rendent un avis négatif."
        ],
        objectives: [
            "Identifier les principaux irritants des clients",
            "Relier chaque thème à la satisfaction (note moyenne, part d'avis négatifs)",
            "Prioriser des actions marketing concrètes",
            "Rendre les prédictions du modèle explicables"
        ],
        features: [
            "Nettoyage des textes : HTML, URL, emojis, doublons",
            "Détection de 12 thèmes par TF-IDF et clustering K-Means",
            "Test statistique du χ² entre thèmes et notes",
            "Heat-maps thème × note",
            "Top des problèmes avec niveau d'urgence et action recommandée",
            "Explication des prédictions mot par mot avec SHAP",
            "Essai de fine-tuning de DistilBERT multilingue"
        ],
        architecture: [
            { label: "Données", text: "Amazon Reviews multilingue (Kaggle) : 1,2 million d'avis. Filtrage du français et échantillonnage équilibré par note, soit environ 20 000 avis d'entraînement et 5 000 de test." },
            { label: "Thèmes", text: "TF-IDF (5 000 termes, mots seuls et paires de mots) puis MiniBatchKMeans en 12 groupes. Le test du χ² confirme un lien très fort entre thème et note (χ² = 966,85)." },
            { label: "Explicabilité", text: "Régression logistique sur TF-IDF pour détecter les avis négatifs, expliquée avec SHAP (LinearExplainer) : mots à risque et mots rassurants pour chaque avis." },
            { label: "Deep learning", text: "Fine-tuning de distilbert-base-multilingual-cased avec Hugging Face Transformers sur 3 classes." },
            { label: "Dashboard", text: "Streamlit et Plotly : filtres par catégorie et produit, indicateurs clés, graphiques interactifs." }
        ],
        sections: [
            { title: "Indicateurs clés", text: "Le tableau de bord résume l'analyse : nombre d'avis, note moyenne (2,99 sur 5), part d'avis négatifs (40 %) et nombre de problèmes critiques, avec une alerte colorée selon la gravité. Les filtres permettent de cibler une catégorie ou un produit.", images: ["01-dashboard-kpis"] },
            { title: "Analyse par thème", text: "Les heat-maps croisent les 12 thèmes avec les notes, en volume ou en pourcentage. On voit tout de suite les thèmes les plus problématiques : 6 thèmes sur 12 ont une note moyenne inférieure à 3. Des exemples d'avis réels illustrent chaque thème.", images: ["02-heatmap-theme-note", "03-heatmap-pourcentage", "04-exemples-avis-clients"] },
            { title: "Explicabilité avec SHAP", text: "Pour un avis donné, SHAP indique le risque qu'il soit négatif et montre les mots qui ont pesé dans la décision : en rouge ceux qui poussent vers le négatif, en vert ceux qui rassurent. Le modèle n'est plus une « boîte noire ».", images: ["05-explications-shap", "07-lecture-rapide-shap"] }
        ],
        challenges: [
            { title: "Entraîner un Transformer sans GPU", text: "Le fine-tuning de DistilBERT sur un ordinateur portable a donné des résultats faibles (F1 de 0,19) faute de puissance. Nous l'avons documenté comme une piste à poursuivre sur GPU (Google Colab)." },
            { title: "Des textes bruités", text: "Avis avec HTML, emojis, fautes et doublons : un nettoyage rigoureux a été indispensable avant toute analyse." }
        ],
        learnings: [
            "Un modèle simple mais explicable (TF-IDF + SHAP) est souvent plus utile pour la décision qu'un modèle complexe",
            "Le pire thème (produits qui ne fonctionnent pas) a une note moyenne de 2,55 et 54 % d'avis négatifs",
            "Rédiger un rapport scientifique et présenter les résultats en vidéo"
        ]
    },

    prison: {
        stats: [
            { value: "~7 500", label: "Lignes de TypeScript" },
            { value: "3", label: "Niveaux jouables" },
            { value: "4", label: "États de l'IA des gardiens" },
            { value: "3D", label: "Three.js" }
        ],
        context: [
            "Prison Escape est un jeu vidéo d'infiltration en 3D à la troisième personne. Le joueur incarne le détenu n° 456 : il doit ramasser trois clés, ouvrir les portes et la grille de sortie, puis atteindre la zone EXIT sans se faire attraper par les gardiens.",
            "J'ai développé le jeu entièrement en TypeScript avec Three.js pour le rendu 3D et React pour les menus et l'interface. Le jeu tourne dans le navigateur ou comme application de bureau grâce à Electron.",
            "Le point fort du projet est l'intelligence artificielle des gardiens : ils patrouillent, deviennent suspicieux, poursuivent le joueur en coordonnant leurs rôles et le recherchent quand ils le perdent de vue."
        ],
        objectives: [
            "Créer un jeu 3D complet dans le navigateur",
            "Programmer une IA de gardiens crédible et coordonnée",
            "Séparer proprement la logique du jeu et le rendu 3D",
            "Soigner l'ambiance : menus, sons, musique et interface"
        ],
        features: [
            "Déplacement à la troisième personne avec caméra qui suit le joueur",
            "Gardiens IA : patrouille, suspicion, poursuite et recherche",
            "Autres détenus avec leur propre comportement (errer, fuir, se cacher)",
            "Jauge d'alerte qui rend les gardiens plus vigilants",
            "Mode histoire : 3 niveaux jouables avec progression sauvegardée",
            "Mini-carte radar, musique, effets sonores et menu d'options"
        ],
        architecture: [
            { label: "Logique du jeu", text: "Moteur en 2D indépendant du rendu (1 178 lignes) : grille de la carte, déplacements, collisions, IA, clés, portes, conditions de victoire et de défaite." },
            { label: "Rendu 3D", text: "Three.js : scène, lumières, ombres, caméra « bras à ressort », modèles FBX animés par programmation (os des jambes et des bras) et décor généré en code." },
            { label: "Interface", text: "React 19 : machine d'états du jeu (menu, chargement, partie, attrapé, évadé), HUD avec clés et jauge d'alerte, mini-carte et options." },
            { label: "Audio", text: "Musiques d'ambiance et effets sonores (pas, saut, portes) avec WebAudio pour une latence minimale." },
            { label: "Outils", text: "TypeScript en mode strict, Vite pour le développement et Electron pour l'application de bureau." }
        ],
        sections: [
            { title: "Menus", text: "Le menu principal plonge dans l'ambiance avec des projecteurs, un mirador, un effet de caméra de surveillance et une musique dédiée. Les options règlent la sensibilité de la caméra et les volumes de la musique et des effets, sauvegardés dans le navigateur.", images: ["01-menu-principal", "02-credits", "03-options"] },
            { title: "Choix de la partie", text: "Le mode histoire propose une progression par niveaux : la Cour (extérieur, 6 gardiens), le Bloc A et les Douches (intérieurs). Chaque victoire débloque le niveau suivant. Un écran de chargement affiche la progression pendant la préparation des modèles 3D.", images: ["04-modes-de-jeu", "05-selection-stages", "06-chargement"] },
            { title: "Gameplay", text: "Le joueur part de sa cellule et se déplace avec ZQSD ou les flèches, saute avec Espace et ouvre les portes avec E. Les gardiens repèrent le joueur dans leur champ de vision ou l'entendent s'il court trop près. Ils se répartissent les rôles pendant la poursuite : l'un suit, l'autre coupe la route, le troisième prend à revers. Se cacher dans une cellule leur fait perdre la trace.", images: ["07-stage-1-cellule", "08-deplacement-joueur", "09-exploration-prison", "11-exploration-suite"] }
        ],
        challenges: [
            { title: "Une IA coordonnée", text: "Quatre états (patrouille, suspicion, poursuite, recherche) et trois rôles de poursuite. Les gardiens proches sont alertés par « radio » quand l'un d'eux repère le joueur." },
            { title: "Performance", text: "Collisions sur une grille plutôt qu'un moteur physique, résolution plafonnée, ombres simplifiées et décor animé une image sur deux pour rester fluide." },
            { title: "Modèles 3D", text: "Les modèles FBX étaient exportés couchés et sans animation exploitable : je les ai redressés et animés par programmation." }
        ],
        learnings: [
            "Programmer une boucle de jeu et une IA comportementale",
            "Maîtriser Three.js et le rendu 3D temps réel",
            "Architecturer un projet TypeScript de grande taille"
        ]
    },

    devmobile: {
        stats: [
            { value: "15", label: "Écrans mobiles" },
            { value: "28", label: "Endpoints API" },
            { value: "2", label: "Profils" },
            { value: "JWT", label: "Authentification" }
        ],
        context: [
            "Emploi Public est une application mobile de recrutement qui met en relation candidats et employeurs. Les employeurs publient des offres d'emploi, les candidats les recherchent, postulent avec une lettre de motivation et suivent leurs candidatures.",
            "Quand un employeur accepte une candidature, un contrat est créé automatiquement et les deux parties sont notifiées. Un refus doit être justifié, pour que le candidat sache pourquoi.",
            "L'application mobile est développée en React Native avec Expo et TypeScript. Elle communique avec une API REST Laravel sécurisée par des jetons JWT."
        ],
        objectives: [
            "Simplifier la recherche d'emploi et le recrutement sur mobile",
            "Automatiser le passage de la candidature au contrat",
            "Sécuriser les échanges entre l'application et le serveur",
            "Offrir une expérience fluide (recherche instantanée, rafraîchissement, notifications)"
        ],
        features: [
            "Inscription en tant que candidat ou employeur",
            "Recherche d'offres avec filtres (catégorie, lieu, type, télétravail, salaire)",
            "Candidature avec lettre de motivation",
            "Favoris et suivi des candidatures",
            "Employeur : publication, modification et clôture des offres",
            "Acceptation (contrat généré) ou refus justifié d'une candidature",
            "Notifications avec badge de non-lus"
        ],
        architecture: [
            { label: "Application mobile", text: "React Native 0.81, Expo 54, React 19 et TypeScript. Navigation par onglets (Accueil, Notifications, Contrats, Employeur, Profil), 15 écrans et 9 services d'accès à l'API." },
            { label: "API", text: "Laravel 10 : 7 contrôleurs, 28 endpoints REST avec un format de réponse uniforme et des messages en français." },
            { label: "Base de données", text: "MySQL : utilisateurs, catégories, offres, candidatures, favoris, notifications et contrats." },
            { label: "Sécurité", text: "Authentification JWT : le jeton est stocké sur le téléphone et ajouté automatiquement à chaque requête par un intercepteur Axios. Contrôles de propriété sur les offres, candidatures et contrats." }
        ],
        sections: [
            { title: "Authentification", text: "L'utilisateur se connecte ou crée un compte en choisissant son profil. Un employeur doit indiquer le nom de son entreprise. Après la connexion, l'application affiche les onglets adaptés au profil.", images: ["01-authentification"] },
            { title: "Espace candidat", text: "Le candidat parcourt les offres et les filtre ; la recherche se met à jour pendant la saisie. Sur une offre, il postule avec sa lettre de motivation. L'application vérifie qu'il n'a pas déjà postulé et que l'offre est toujours ouverte. Il suit ensuite ses candidatures et gère son profil.", images: ["02-candidat-offres", "03-candidat-candidature", "04-candidat-profil"] },
            { title: "Espace employeur", text: "L'employeur publie ses offres (salaire, type de contrat, niveau, lieu, télétravail, date limite) et consulte les candidatures reçues. S'il accepte, un contrat est créé automatiquement avec un numéro unique et une date de début. S'il refuse, il doit écrire une justification envoyée au candidat.", images: ["05-employeur-offres", "06-employeur-candidatures-contrats", "07-employeur-profil"] }
        ],
        challenges: [
            { title: "Sécuriser une API mobile", text: "Mise en place de JWT, stockage du jeton sur le téléphone et déconnexion automatique si le jeton expire." },
            { title: "Cohérence des données", text: "L'acceptation, la notification et la création du contrat se font dans une transaction : soit tout réussit, soit rien n'est enregistré." }
        ],
        learnings: [
            "Développer une application mobile multiplateforme avec React Native",
            "Concevoir et sécuriser une API REST",
            "Rédiger une documentation technique complète en LaTeX"
        ]
    },

    java: {
        stats: [
            { value: "24", label: "Classes Java" },
            { value: "5", label: "Entités" },
            { value: "3", label: "Rôles" },
            { value: "PDF", label: "Bulletin de notes" }
        ],
        context: [
            "Gestion d'école est une application de bureau qui gère la vie académique d'un établissement : étudiants, enseignants, modules avec leur coefficient, et notes.",
            "Elle calcule automatiquement la moyenne pondérée de chaque étudiant, lui attribue un statut (validé, rattrapage ou redoublement) et génère son bulletin de notes en PDF.",
            "L'application est développée en Java 21 avec JavaFX pour l'interface et Hibernate pour accéder à la base MySQL. Elle suit une architecture en couches : modèle, accès aux données (DAO), services et contrôleurs."
        ],
        objectives: [
            "Mettre en pratique la programmation orientée objet sur un vrai projet",
            "Utiliser un ORM (Hibernate) pour la persistance des données",
            "Construire une interface de bureau avec JavaFX",
            "Automatiser le calcul des moyennes et l'édition des bulletins"
        ],
        features: [
            "Connexion avec trois rôles : administrateur, enseignant et étudiant",
            "Gestion des étudiants, enseignants et modules avec recherche",
            "Saisie des notes par l'enseignant sur ses modules",
            "Moyenne générale pondérée par les coefficients",
            "Statut : Validé (≥ 10), Rattrapage, Redoublement",
            "Bulletin de notes PDF généré avec iText"
        ],
        architecture: [
            { label: "Modèle", text: "5 entités JPA : Etudiant, Enseignant, Module, Inscription et Note. L'inscription relie un étudiant à un module et porte ses notes." },
            { label: "Accès aux données", text: "Hibernate 5.6 avec un DAO générique (enregistrer, supprimer, rechercher) et 5 DAO spécialisés, avec gestion des transactions." },
            { label: "Services", text: "AuthService pour la connexion et SchoolService pour la logique métier : inscriptions, notes, moyennes et vérification que toutes les notes sont saisies." },
            { label: "Interface", text: "JavaFX 21 : 8 vues FXML avec leurs contrôleurs et une feuille de style CSS. Les onglets s'activent selon le rôle de l'utilisateur." },
            { label: "Outils", text: "Maven pour les dépendances et la compilation, MySQL pour la base et iText 7 pour les PDF." }
        ],
        sections: [
            { title: "Connexion", text: "L'utilisateur se connecte et l'application adapte les onglets à son rôle. L'administrateur gère tout, l'enseignant arrive directement sur la saisie des notes, et l'étudiant ne voit que ses moyennes et son tableau de bord.", images: ["01-connexion"] },
            { title: "Gestion académique", text: "Chaque onglet présente un tableau avec un formulaire de détail : on sélectionne une ligne, on modifie, on enregistre. Une recherche permet de filtrer rapidement. Un module qui contient déjà des notes ne peut pas être supprimé, pour protéger les données.", images: ["02-etudiants", "03-enseignants", "04-modules"] },
            { title: "Moyennes et tableau de bord", text: "La moyenne générale est calculée en pondérant la moyenne de chaque module par son coefficient. Le tableau de bord affiche le statut de chaque étudiant en couleur : vert pour validé, jaune pour rattrapage, rouge pour redoublement. L'administrateur génère le bulletin PDF, uniquement quand toutes les notes ont été saisies.", images: ["06-moyennes", "07-tableau-de-bord"] }
        ],
        challenges: [
            { title: "Chargement des données avec Hibernate", text: "Les relations entre entités provoquaient des erreurs de chargement différé (lazy loading). J'ai ajusté les stratégies de chargement pour les notes." },
            { title: "Bulletin fiable", text: "Avant de générer un bulletin, l'application vérifie qu'aucune note ne manque et indique les modules en attente avec leur enseignant." }
        ],
        learnings: [
            "Structurer une application Java en couches (MVC et DAO)",
            "Maîtriser Hibernate et le mapping objet-relationnel",
            "Générer des documents PDF avec iText"
        ]
    },

    "systeme-distribue": {
        stats: [
            { value: "2", label: "Instances d'API" },
            { value: "3", label: "Conteneurs Docker" },
            { value: "7", label: "Endpoints" },
            { value: "Groupe 7", label: "Projet d'équipe" }
        ],
        context: [
            "Ce projet de systèmes distribués répond à une question que se posent toutes les entreprises qui font de l'IA : comment mettre un modèle de machine learning en production, de façon fiable et capable de supporter beaucoup de requêtes ?",
            "Nous avons entraîné un modèle Random Forest, puis nous l'avons exposé via une API FastAPI. L'API tourne en deux instances identiques, derrière une passerelle Nginx qui répartit les requêtes. Si une instance est surchargée, l'autre prend le relais.",
            "Une console web permet d'envoyer des données à scorer et d'afficher les résultats, avec le nom du serveur qui a répondu. Toute l'infrastructure se lance en une commande avec Docker Compose."
        ],
        objectives: [
            "Servir un modèle de machine learning via une API REST",
            "Répartir la charge entre plusieurs instances",
            "Conteneuriser toute l'infrastructure",
            "Surveiller le service (santé, métriques, latence)"
        ],
        features: [
            "Modèle Random Forest entraîné avec scikit-learn",
            "API FastAPI avec documentation Swagger automatique",
            "Deux instances derrière un répartiteur de charge Nginx",
            "Scoring par lot en CSV ou JSON",
            "Endpoints de santé et métriques Prometheus",
            "Limitation du nombre de requêtes et clé API optionnelle",
            "Console web de scoring"
        ],
        architecture: [
            { label: "Modèle", text: "RandomForestClassifier (50 arbres, profondeur 8) entraîné sur 12 variables. Il est sauvegardé avec ses métadonnées (version, nombre de variables, empreinte SHA-256)." },
            { label: "API", text: "FastAPI : /predict, /predict/from-text (CSV, JSON ou format métier), /health, /ready et /metrics. Chaque réponse indique le serveur qui l'a traitée et un identifiant de requête." },
            { label: "Répartition de charge", text: "Nginx 1.27 avec la stratégie « least_conn » : chaque requête part vers l'instance qui a le moins de connexions en cours." },
            { label: "Conteneurs", text: "Docker Compose avec 3 services : la passerelle Nginx et deux instances de l'API construites à partir de la même image. Le modèle est entraîné pendant la construction de l'image." },
            { label: "Observabilité", text: "Métriques Prometheus (nombre de requêtes, histogramme de latence) et journalisation du temps de réponse de chaque requête." }
        ],
        sections: [
            { title: "Console de scoring", text: "La console web présente l'architecture et permet de saisir des données en CSV ou en JSON. Des exemples prêts à l'emploi facilitent la démonstration : lot court, lot métier (âge, salaire, expérience) et classes variées.", images: ["01-console-scoring", "02-donnees-exemple-court"] },
            { title: "Résultats des prédictions", text: "Chaque ligne reçoit un score de probabilité affiché avec une jauge. Une pastille indique quel serveur a répondu (serving-1 ou serving-2), ce qui montre la répartition de charge en action.", images: ["03-resultats-exemple-court", "05-resultats-lot-metier", "07-resultats-classes-variees"] },
            { title: "Documentation de l'API", text: "FastAPI génère automatiquement une documentation Swagger interactive : on peut tester chaque endpoint directement depuis le navigateur.", images: ["08-api-swagger", "09-api-endpoint-predict"] }
        ],
        challenges: [
            { title: "Répartition de la charge", text: "Choisir la bonne stratégie Nginx et transmettre les bons en-têtes pour savoir quel serveur a traité chaque requête." },
            { title: "Formats d'entrée variés", text: "Accepter du CSV avec différents séparateurs, du JSON ou un format métier, et adapter automatiquement le nombre de variables." },
            { title: "Tester la montée en charge", text: "Un script de benchmark asynchrone envoie des centaines de requêtes en parallèle et mesure le débit et les latences (médiane, p95)." }
        ],
        learnings: [
            "Les bases du MLOps : passer d'un modèle dans un notebook à un service en production",
            "Conteneuriser une architecture avec Docker Compose",
            "Comprendre la répartition de charge et l'observabilité"
        ]
    },

    bi: {
        stats: [
            { value: "112 650", label: "Lignes de faits" },
            { value: "6", label: "Dimensions" },
            { value: "8", label: "Jobs Talend" },
            { value: "3", label: "Devises" }
        ],
        context: [
            "Ce projet de Business Intelligence, réalisé en équipe de trois, construit un entrepôt de données complet pour Olist, une plateforme e-commerce brésilienne. Les données brutes (commandes, produits, clients, avis, géolocalisation) sont dispersées dans plusieurs fichiers CSV, dont certains dépassent un million de lignes.",
            "Nous avons conçu un modèle en étoile, alimenté par des jobs ETL Talend, et chargé le tout dans PostgreSQL. L'entrepôt permet d'analyser les ventes par produit, catégorie, période et région, de suivre les délais de livraison et de convertir les montants en plusieurs devises.",
            "Les analyses OLAP sont réalisées en SQL (ROLLUP et CUBE) et les résultats sont présentés dans un tableau de bord Power BI connecté directement à l'entrepôt."
        ],
        objectives: [
            "Concevoir un entrepôt de données en modèle en étoile",
            "Automatiser l'extraction, la transformation et le chargement (ETL)",
            "Historiser les changements de catégorie des produits",
            "Fournir des indicateurs clés pour la prise de décision"
        ],
        features: [
            "7 jobs Talend pour les dimensions et la table de faits",
            "Historisation des produits (SCD de type 2)",
            "Conversion des montants en réais, dollars et euros",
            "KPI de vente, client, livraison et satisfaction",
            "Analyses OLAP : ROLLUP année / trimestre / mois, CUBE catégorie / état",
            "Tableau de bord Power BI"
        ],
        architecture: [
            { label: "Sources", text: "Jeu de données Olist : environ 99 000 commandes, 112 650 lignes de commande, 32 951 produits, 1 million de points de géolocalisation, plus des taux de change en JSON." },
            { label: "Modèle en étoile", text: "Table de faits des ventes (une ligne par article commandé) avec quantité, prix, frais de livraison et montants en 3 devises. 6 dimensions : temps, produit, catégorie, client, localisation et devise." },
            { label: "ETL", text: "Talend Open Studio 7.3 : lecture des CSV et du JSON, transformations avec tMap, suppression des doublons, recherche des clés dans les dimensions et chargement dans PostgreSQL." },
            { label: "Entrepôt", text: "PostgreSQL (base olist_dw), administré avec pgAdmin. La dimension produit conserve l'historique avec des dates de début et de fin et un indicateur de version actuelle." },
            { label: "Restitution", text: "Requêtes OLAP en SQL et tableau de bord Power BI connecté directement à PostgreSQL." }
        ],
        sections: [
            { title: "Tableau de bord", text: "Le tableau de bord Power BI présente les indicateurs clés : chiffre d'affaires global, nombre de ventes, panier moyen, nombre de clients. On suit aussi l'évolution mensuelle du chiffre d'affaires et sa répartition par état du Brésil.", images: ["01-indicateurs-cles", "02-ca-par-mois-et-etat"] },
            { title: "Analyse OLAP", text: "L'opération ROLLUP calcule le chiffre d'affaires à tous les niveaux de la hiérarchie du temps (année, trimestre, mois) en une seule requête : on peut descendre du total annuel au détail mensuel.", images: ["03-cube-olap-annee-trimestre-mois"] },
            { title: "Modélisation et ETL", text: "Le modèle en étoile place la table de faits au centre, reliée aux 6 dimensions. Les jobs Talend chargent d'abord les dimensions, puis la table de faits en retrouvant les bonnes clés. Le résultat final est vérifié dans PostgreSQL.", images: ["04-modele-en-etoile", "05-etl-talend-chargement-faits", "06-etl-talend-dimensions", "07-entrepot-postgresql"] }
        ],
        challenges: [
            { title: "Explosion du nombre de lignes", text: "Une jointure mal configurée produisait 2,3 millions de lignes au lieu de 112 650. Nous l'avons corrigée avec l'option « Unique Match » de Talend." },
            { title: "Données sales", text: "Guillemets dans les identifiants, formats de nombres invalides dans les avis, doublons : chaque problème a demandé une règle de nettoyage." },
            { title: "Historisation", text: "Mettre en place une dimension à évolution lente (SCD 2) pour garder l'historique des catégories de produits." }
        ],
        learnings: [
            "Concevoir un entrepôt de données de A à Z",
            "Maîtriser un outil ETL professionnel (Talend)",
            "Transformer des données brutes en indicateurs utiles à la décision"
        ]
    }
};
