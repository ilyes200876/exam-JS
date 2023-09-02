**1. Mise en place, allure du code, respect des consignes**<br>
Merci de créer un dossier EXAM galerie votreNom , d'y ajouter les fichiers index.html, css /styles.css, et
js /main.js puis un dossier img contenant les images du présent sujet.<br>
La notation prendra en compte l’allure du code (indentations, syntaxe, etc.), et le respect des consignes (noms des
fichiers/dossiers, arborescence, etc.)<br>

**2. 2 grandes zones en HTML**<br>
Placer 2 conteneurs `<div>` d’ids « zone1 » et « zone2 ».
En javascript, réaliser 2 sélections, afin de créer 2 variables qui font référence à chacune de ces zones.<br>

**3. Tableaux d’objets**<br>
En JS, créer un tableau d’objets « elements ». Chaque case du tableau contient un objet décrivant une image de votre dossier img , avec 4 propriétés :
- la propriété « image » fait référence au fichier d’image. Ex : « img /animal1.jpg »
- la propriété « nom » est le nom de l’image. Ex : Animal 1
- la propriété « categorie » est la catégorie de l’image. Il y en a 3 : Animaux / Personnes / Paysages.
- la propriété « prix » est le prix de l’image. Les paysages sont à 100, les animaux à 200, les personnes à 300. Utiliser ici des nombres, pas des chaines de caractères.<br>

**4. Génération des vignettes**<br>
Parcourir avec un boucle le tableau « elements » précédemment créé, afin de récupérer tour à tour chacun de ses objets.
A chaque boucle, créer puis ajouter à la zone2 une vignette. Chaque vignette a une classe «
vignette » et un id « v0 », « v1 », « v2 », « v3 ». Elle contient l’image parcourue ainsi que son titre.
Il peut être pratique ici de générer entre autres des balises `<figure>` et `<figcaption>`.<br>

**5. Evènements de survol et de sortie**<br>
Lors de leur création, ajouter à chaque vignette les écouteurs d’évènements permettant de détecter un survol ou une sortie du pointeur de souris.
Faire apparaitre une ombre ou une bordure sur la vignette en cas de survol.
Elle doit disparaitre lorsque la vignette n’est plus survolée.<br>

**6. Evènement de clic**<br>
Lors de leur création, ajouter à chaque vignette l’écouteur d’évènement permettant de détecter un clic.
Chaque clic sur une vignette doit modifier le contenu de la zone1. Celle
ci comprend :
* une image
* un encart précisant le nom, la catégorie, et le prix de l’image
Evidemment l’image et les informations liées doivent correspondre à la vignette cliquée.
Il peut être pratique ici que la fonction exécutée en cas de clic appelle elle
même une autre fonction afficherImage () s’occupant de modifier la zone1, en lui transmettant le(s) bon(s) paramètre(s).<br>

**7. Chargement automatique de la 1 ère image**<br>
Lors du chargement de l’application, faire en sorte que par défaut la grande image de la zone1 ainsi que ses infos liées, correspondent à la 1 ère vignette de la zone2.<br>
**8. Amélioration de l’affichage**<br> 

Styliser l’interface pour qu’elle ressemble à l’image en début de document.
* Au niveau des vignettes
* Au niveau de la grande image
* Au niveau des infos liées à la grande image. L’encart prend ici un fond semi
transparent et est super
posé à l’image, plaqué à droite. Par ailleurs interface est responsive
Si vous n’arrivez pas à refaire pareil que la capture, faites au mieux pour que l’affichage rende bien.

**9. Filtres**<br>
Ajoutez un système de filtres permettant par une liste déroulante d’afficher toutes les images, ou bien seulement celles appartenant à une certaine catégorie (Animaux / Personnes / Paysages).
Comme vous risquez de bien modifier votre code, faites une copie de main.js, appelée mainV1.js au cas où.<br>

**10. Améliorations**
Vous pouvez améliorer la galerie, par exemple en ajoutant des transitions / animations lors d’un survol de vignette ou de la modification de la zone1. Ou bien selon vos idées.
