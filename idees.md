- Que faut-il modifier en priorité, l'interface ou la structure des données ?

- Idée de transformation de la structure :
	- Une liste dans une variable va se transformer en ligne dans un tableau
	- Deux listes dans une variable peuvent permettre de parcourir deux fois, s'il y a un lien entre elles


- Parler du DOM, du DOM virtuel et comment les frameworks front-end s'en servent


- A l'exemple de React et Angular, comment gérer la data dans la vue ?
- Pour react, l'idée est d'avoir des composants spécifiques "stupides", dits stateless, qui ne font qu'afficher la donnée. Les méthodes leur sont passées par argument, et ces composants ne font que remonter l'appel dans des composants plus hauts hiérarchiquement, qui eux contiennent la logique principale. Il vaut mieux regrouper la logique dans le composant principal de l'application pour ne pas disperser le code applicatif dans tous les fichiers.

- Parler des design patterns, autant UI que software
- 