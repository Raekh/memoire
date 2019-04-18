# Contexte de l'alternance & activités
Portail négoce
API Lengow V3

# Sujets des missions d'alternance
Création d'un portail interne en Symfony et AngularJS

# Sujet ou projet d'étude envisagé
De la donnée à l'interface
OU
Comment concevoir une interface et une source de données évolutives ? (bof bof)

# Compétences professionnelles acquises/en cours d'acquisition pour ce sujet ou projet d'étude
2.1
- Mettre en place...

3.1
- Interroger...

4
- Développer des composants logiciels en environnement objet
- Réaliser... ~
- Concevoir... ~


# Ebauche de plan

## Sources de données

### Base de données
Base classique phpmyadmin, oracle, db2

NoSQL MongoDB

### Mappage
SQL, GraphQL

### Importance d'async
Faire un point sur comment les données sont récupérées (changement de page, ajax ?) et l'importance de l'état de l'interface utilisateur

### Structure du retour
Stockage direct en backend

Utilisation d'api, retour en JSON
## Stockage en backend
### Stockage à proprement parler
Comment stocke-t-on un certain type de résultat ?
### Retour des méthodes
- Quoi retourner dans le cas d'une requête ? 
- Quel est le résultat recherché ? 
- Que doit savoir l'utilisateur ?
### Mappage en fonction de la structure
Parler de la notion matricielle de transformation des données :

#### Exemple :
("clé" => "valeur") => Simple affichage à deux slots

("clé" => [valeurs]) => Liste simple

("clé1" => [valeurs], "clé2" => [valeurs2]) => Plusieurs listes

("clé1" => [valeurs], "clé2" => [valeurs]) => Liste transversale*

**Dans le cas où le second tableau de valeurs contient des valeurs identiques, ayant pour rôle d'avoir des détails sur les premières valeurs*

### Que choisir en premier ?
- Quelle approche faut-il choisir pour mapper son backend et son front-end ?
- Dans quel cas faut-il privilégier l'immutabilité du front-end au détriment du backend ? 
- Quand dispose-t-on d'assez de marge de manœuvre pour modifier la vue ?

## Interface

### Zoom sur les frameworks front-end
- Quel type de framework vise-t-on ?
- Faut-il utiliser des composants pré-faits ou bien concevoir les siens ?
#### Références
Frameworks/Librairies : Angular, Vue, React
Utilitaires auxiliaires : Redux, RxJs, NgRx

#### Fonctionnement 
- Comment chacun d'entre eux gère-t-il la donnée et l'affichage ?
- Quel choix ?

### Qu'afficher à l'utilisateur
#### Choix de la structure de l'information
#### Style matters
- Parler de la politique "Less is more"
- Parler de l'UX/UI design
#### Notion d’état de l'UI
- Un utilisateur doit être au courant de ce qui se passe (parler d'ajax, du dynamisme du DOM)
- Mais éviter la pollution de l'UI (popups intempestifs, page bloquée)
#### Contrôle de l'utilisateur sur l'UI
- Bouton = pouvoir localisé
- Comment simplifier une opération sur l'UI ? (UX design)
# Premiere liste bibliographique
- *User Interface Design*, Soren Lauesen
- Dev Bundle - O'Reilly books