# Guide d'Emile — comprendre et faire évoluer le site, sereinement

Ce guide est écrit pour vous, **sans jargon** (ou alors expliqué). Son but : que vous
compreniez de quoi votre site est fait, et que vous puissiez le faire évoluer en toute
confiance, avec l'aide de Claude, sans crainte de « tout casser ».

Une chose à garder en tête dès maintenant et qui devrait vous rassurer : **rien de ce
que vous faites ne peut détruire définitivement le site.** Tout son historique est
conservé (c'est le rôle de GitHub, expliqué plus bas) ; en cas de problème, on peut
toujours revenir à une version précédente.

---

## 1. De quoi votre site est fait : les pièces du puzzle

Votre site repose sur quelques services qui travaillent ensemble. Voici chacun, avec une
image simple.

**Le nom de domaine — `ajavon-mediation.com` — c'est votre adresse.** Comme une adresse
postale : c'est ce que les gens tapent pour vous trouver. Il se loue à l'année (voir le
point sur le renouvellement dans `INFRASTRUCTURE.md` : c'est le piège classique à ne pas
oublier).

**GitHub — c'est le coffre-fort et la mémoire.** Tout le « code » de votre site y est
rangé, avec l'historique complet de chaque modification (qui a changé quoi, et quand).
C'est ce qui permet de revenir en arrière si besoin. On n'y touche pas à la main : on y
« pousse » les nouvelles versions avec une commande (voir §2).

**Cloudflare Pages — c'est l'hébergeur, celui qui affiche le site.** Dès que GitHub
reçoit une nouvelle version, Cloudflare la « compile » (la transforme en pages web) et la
met en ligne automatiquement, en 1 à 2 minutes. Vous n'avez rien à faire de ce côté.

**Le routage d'e-mail de Cloudflare — c'est votre boîte aux lettres.** L'adresse affichée
sur le site, `contact@ajavon-mediation.com`, est une adresse « de façade » : les messages
qu'on y envoie sont automatiquement réexpédiés vers votre vraie boîte Gmail,
`ajavon.mediation@gmail.com`. Vous lisez donc tout dans Gmail, comme d'habitude.

**Formspree — c'est le facteur du formulaire.** Quand un visiteur remplit le formulaire de
contact du site, c'est Formspree qui récupère le message et vous l'envoie par e-mail. Sans
lui, un site « statique » comme le vôtre ne pourrait pas recevoir de formulaire.

**Astro — c'est l'usine qui fabrique le site.** C'est l'outil technique qui, à partir du
code rangé dans GitHub, fabrique les pages web finales. Vous n'avez pas à le manipuler
directement ; c'est surtout l'affaire de Claude.

L'inventaire précis de ces comptes (adresses, identifiants à compléter, coûts) est dans
**`INFRASTRUCTURE.md`**.

---

## 2. Comment faire une modification, avec l'aide de Claude

C'est la partie la plus importante. Le principe est toujours le même, en cinq temps.

**1. Vous décrivez à Claude ce que vous voulez changer.** Par exemple : « change le numéro
de téléphone », « ajoute un paragraphe dans la section À propos », « corrige cette faute ».
Le mieux est d'ouvrir un projet Claude contenant l'archive du site (le fichier ZIP) et de
demander à Claude de lire d'abord le fichier `CLAUDE.md` : il saura ainsi comment travailler
proprement.

**2. Claude vous prépare le travail.** Il vous renvoie en général un **fichier ZIP** (la
nouvelle version du site) et une petite liste de commandes à copier-coller.

**3. Vous mettez la nouvelle version en place.** Vous téléchargez le ZIP dans votre dossier
« Téléchargements », puis vous ouvrez **PowerShell** (le terminal de Windows) et vous collez
la commande d'extraction. Elle ressemble à ceci :

```powershell
Expand-Archive -Path "$HOME\Downloads\nom-de-l-archive.zip" -DestinationPath "$HOME\Downloads\ajavon-mediation" -Force
```

Cette commande « déballe » le contenu du ZIP par-dessus votre dossier de projet (`-Force`
autorise à remplacer les anciens fichiers). Rien n'est encore publié à ce stade.

**4. Vous publiez.** Toujours dans PowerShell, vous vous placez dans le dossier du projet
puis vous envoyez la nouvelle version vers GitHub :

```powershell
cd "$HOME\Downloads\ajavon-mediation"
git add .
git commit -m "Une courte description de ce que j'ai changé"
git push
```

Décortiqué : `cd` vous place dans le bon dossier ; `git add .` prépare tous les changements ;
`git commit -m "…"` les enregistre avec une étiquette (le texte entre guillemets, que vous
choisissez librement) ; `git push` les envoie vers GitHub. C'est ce dernier `git push` qui
déclenche la mise en ligne par Cloudflare.

**5. Vous patientez 1 à 2 minutes, puis vous vérifiez.** Le temps que Cloudflare recompile.
Ensuite, ouvrez votre site et faites un **rafraîchissement forcé** avec **Ctrl + F5** pour
être sûr de voir la dernière version (voir §3).

> 💡 Claude adapte ces commandes à chaque fois (le nom du ZIP change, et il ajoute parfois
> une commande supplémentaire). **Copiez toujours les commandes qu'il vous donne**, plutôt
> que de les retaper de mémoire.

---

## 3. Prévisualiser et vérifier que ça a marché

Après un `git push`, deux lignes confirment que tout s'est bien passé dans PowerShell :
une qui commence par `[main …]` avec le nombre de fichiers changés (le commit), et une qui
ressemble à `xxxxxxx..yyyyyyy  main -> main` (l'envoi vers GitHub). Si vous voyez ces deux
lignes, **c'est réussi** — même si beaucoup de texte rouge apparaît autour (voir §4).

Pour voir le résultat en ligne, attendez 1 à 2 minutes puis ouvrez votre site et faites
**Ctrl + F5**. Si vous voyez encore l'ancienne version, c'est presque toujours une question
de **mémoire du navigateur** (le « cache ») : ouvrez alors le site dans une **fenêtre de
navigation privée**, qui affiche toujours la version la plus fraîche.

---

## 4. Les messages rouges dans PowerShell : faut-il s'inquiéter ?

**Non, presque jamais.** Windows affiche en rouge tout ce que Git lui raconte, même quand
ce sont de simples informations. Le message que vous verrez le plus souvent est :

> `warning: in the working copy of '…', LF will be replaced by CRLF the next time Git touches it`

C'est purement **cosmétique** : cela concerne une différence de « fin de ligne » entre
Windows et le reste du monde, sans aucune conséquence sur votre site. Vous pouvez l'ignorer.

La règle simple : ce qui compte, ce sont les **deux lignes de succès** décrites au §3. Si
elles sont là, tout va bien, quel que soit le rouge autour.

---

## 5. Petit dépannage des soucis les plus courants

**« Le site affiche encore une vieille version. »** C'est le cache du navigateur. Faites
**Ctrl + F5**, ou ouvrez une fenêtre de navigation privée. Pour le favicon (la petite icône
de l'onglet), le navigateur est particulièrement têtu : la navigation privée le confirmera.

**« Je ne reçois plus les messages du formulaire. »** Vérifiez d'abord vos **spams** dans
Gmail. Ensuite, connectez-vous à **Formspree** et à **Cloudflare** pour vérifier que tout
est actif (voir `INFRASTRUCTURE.md`). Astuce : faites de temps en temps un **test** en
remplissant vous-même le formulaire pour confirmer que le message arrive bien dans
`ajavon.mediation@gmail.com`. À noter : la formule gratuite de Formspree est **limitée en
nombre de messages par mois** ; au-delà, les envois peuvent être bloqués (voir
`INFRASTRUCTURE.md`).

**« Une icône s'affiche mal ou a disparu. »** C'est un point à confier à Claude : les icônes
sont gérées par un composant dédié (`Icon.astro`). Décrivez-lui simplement quelle icône, à
quel endroit, et ce qui ne va pas.

**« J'ai fait une bêtise, je veux annuler. »** Rien n'est perdu : tout l'historique est dans
GitHub. Décrivez à Claude ce qui s'est passé (et copiez-lui les messages d'erreur s'il y en
a) ; il pourra vous aider à revenir à l'état précédent.

**« Le site est complètement inaccessible. »** Vérifiez la date de **renouvellement du nom
de domaine** (voir `INFRASTRUCTURE.md`) : un domaine non renouvelé est la cause la plus
fréquente d'un site qui « disparaît » d'un coup.

---

## 6. Ce qu'il vaut mieux NE PAS faire seul

Quelques gestes valent mieux d'être confiés à Claude plutôt que tentés à la main : modifier
le code des pages, toucher au formulaire de contact, ou changer les réglages techniques sur
Cloudflare ou GitHub. Ce n'est pas grave d'essayer (l'historique protège), mais demander à
Claude vous fera gagner du temps et évitera les allers-retours.

En revanche, **vous pouvez sans crainte** : lire vos e-mails, faire des tests d'envoi du
formulaire, consulter vos comptes, et lancer les commandes de publication que Claude vous
fournit.

---

## 7. Où retrouver quoi

- Les **identifiants et adresses** de tous les services : `INFRASTRUCTURE.md`
  (les mots de passe, eux, ne sont **jamais** écrits ici — gardez-les dans un gestionnaire
  de mots de passe).
- Les **informations à garder exactes** (chiffres, nom légal, témoignages, points
  juridiques) : `REGISTRE-CONTENU.md`.
- L'**historique** de ce qui a déjà été fait : `CHANGELOG.md`.
