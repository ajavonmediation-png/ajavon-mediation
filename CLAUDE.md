# CLAUDE.md — Mode d'emploi pour Claude

> Ce fichier s'adresse à **toi, Claude**, lorsqu'on te confie une amélioration ou une
> correction de ce projet. Lis-le en entier avant d'agir. Il décrit le projet, les
> règles à respecter, et les pièges à éviter. La personne qui te sollicite (Emile)
> est **débutante** : explique simplement, propose un plan, et livre toujours des
> instructions de déploiement prêtes à copier-coller pour Windows / PowerShell.

## 1. Ce qu'est ce projet

Site vitrine **une page** du cabinet **AJAVON Médiation & Conseils**, spécialisé en
médiation familiale et familiale internationale. Construit avec **Astro** (site
statique), bilingue **FR / EN** (l'anglais n'est pour l'instant qu'une ébauche, voir
§6). Hébergé gratuitement sur **Cloudflare Pages**, déployé automatiquement à chaque
`git push` sur la branche `main` du dépôt GitHub.

Pour les détails techniques → `docs/ARCHITECTURE.md`.
Pour l'inventaire des comptes et services → `docs/INFRASTRUCTURE.md`.
Pour le guide pas-à-pas humain → `docs/GUIDE-EMILE.md`.
Pour les informations sensibles à vérifier → `docs/REGISTRE-CONTENU.md`.
Pour l'historique des évolutions → `docs/CHANGELOG.md`.

## 2. Démarrer en local

```bash
npm install        # installe les dépendances (une seule fois)
npm run dev        # prévisualisation locale sur http://localhost:4321
npm run build      # compile le site dans dist/ (doit produire 4 pages sans erreur)
```

Toujours **terminer par `npm run build`** avant de livrer : si le build casse, ne livre rien.

## 3. Règles d'or (NON négociables)

1. **Tout est auto-hébergé pour le RGPD. N'ajoute JAMAIS d'appel à un service externe.**
   Le site ne doit faire **aucune** requête vers un tiers au chargement : pas de Google
   Fonts (les polices sont dans `public/fonts/`), pas de CDN, pas d'outil d'analyse
   (Google Analytics, etc.), pas de carte Google Maps embarquée, pas d'iframe externe.
   La politique de confidentialité affirme cette absence de transfert : la respecter.
   La seule exception déjà en place est **Formspree** (envoi du formulaire) et
   **Cloudflare** (hébergement), tous deux documentés dans la politique de confidentialité.

2. **Contenu du site en français, rédigé en PROSE.** Pas de listes à puces dans les
   textes visibles du site, sauf demande explicite. Les titres de section utilisent du
   `<em>…</em>` (mis en couleur terracotta par une règle CSS globale `h1 em, h2 em`).

3. **Le bilingue passe par les fichiers de traduction** `src/i18n/fr.ts` et
   `src/i18n/en.ts`. Ne code jamais un texte « en dur » dans une page : ajoute une clé
   i18n et lis-la via `t.section.cle`. Les chaînes contenant du HTML (ex. un `<em>`)
   sont rendues avec `set:html`.

4. **Ne casse pas le chargement différé du téléphone.** La bibliothèque `intl-tel-input`
   (~300 Ko, dans `public/vendor/`) n'est chargée qu'au **premier focus** sur le champ
   téléphone, via un script dans `src/pages/index.astro`. Un repli envoie quand même le
   numéro brut si la bibliothèque n'a pas eu le temps de s'initialiser. Si tu touches au
   formulaire, préserve ce mécanisme et le champ caché `#phone-full` (name="phone").

5. **Les icônes passent par le composant `src/components/Icon.astro`** (jeu Lucide,
   trait fin, couleur héritée via `currentColor`). **N'utilise pas d'émojis** comme
   icônes. Pour ajouter une icône, copie le contenu SVG d'une icône Lucide dans la map
   du composant puis appelle `<Icon name="…" size={…} />`.

6. **Tu n'es pas juriste.** Le site touche à des sujets réglementés (médiation,
   « médiation de la consommation », RGPD, mentions légales). Tu peux suivre la structure
   imposée par la loi, mais signale toujours qu'une relecture par un professionnel est
   recommandée, et ne valide jamais la conformité. Voir `docs/REGISTRE-CONTENU.md`.

7. **N'invente jamais une information factuelle** (nom d'immatriculation, SIRET, chiffres,
   tarifs, témoignages, e-mail, date). Si une donnée manque, demande-la ou laisse
   « à compléter ». Les chiffres et témoignages du site engagent la responsabilité du
   cabinet : ils doivent rester exacts et vérifiables.

## 4. Où vivent les choses (carte rapide)

- `src/pages/index.astro` — la page d'accueil FR (contenu + styles + script du formulaire).
- `src/pages/en/index.astro` — ébauche anglaise (non fonctionnelle, voir §6).
- `src/pages/mentions-legales.astro`, `src/pages/politique-de-confidentialite.astro` — pages légales.
- `src/i18n/fr.ts`, `en.ts`, `index.ts` — traductions et helpers.
- `src/components/Nav.astro`, `Footer.astro`, `Icon.astro` — composants partagés.
- `src/layouts/Layout.astro` — en-tête HTML commun (SEO, Open Graph, favicons, JSON-LD, polices).
- `src/styles/global.css` — couleurs, polices (variables `--terra`, `--gold`, etc.), @font-face.
- `public/` — images, polices, favicons, image de partage `og-image.jpg`, et `vendor/intl-tel-input/`.

## 5. Déploiement (rappel)

La personne travaille sous **Windows / PowerShell**. Le dépôt local est généralement à
`C:\Users\jrang\Downloads\ajavon-mediation`. Le flux habituel que tu dois lui fournir :

1. Tu produis une archive ZIP du projet (sans `node_modules`, `dist`, `.astro`) dans
   `/mnt/user-data/outputs/`, et tu la présentes.
2. Elle l'extrait par-dessus son dépôt :
   `Expand-Archive -Path "$HOME\Downloads\<archive>.zip" -DestinationPath "$HOME\Downloads\ajavon-mediation" -Force`
3. **Attention** : `Expand-Archive` n'efface pas les fichiers que tu aurais supprimés.
   Si tu supprimes un fichier, donne en plus un `Remove-Item … -Force` explicite.
4. Puis : `git add . ; git commit -m "…" ; git push`
5. Cloudflare recompile tout seul en 1 à 2 minutes.

Les avertissements rouges PowerShell « LF will be replaced by CRLF » sont **cosmétiques**
(fin de ligne Windows), pas des erreurs. Rappelle-le pour éviter l'inquiétude.

## 6. État connu et points ouverts

- **Version anglaise** : `src/pages/en/index.astro` n'est qu'un placeholder ; le sélecteur
  de langue propose EN mais la page est vide. À construire si demandé (réutiliser la
  structure de `index.astro` en lisant les clés `en`).
- **Liens morts du pied de page** : « Blog & articles », « Annuaire des médiateurs » et
  « Partenaires » pointent vers `#`. À brancher ou retirer selon décision.
- **Pistes non faites** (de fond, à ne pas improviser) : prise de rendez-vous en ligne
  (Calendly), blog/ressources SEO, lien WhatsApp, preuves de crédibilité (logos de
  certification), enrichissement émotionnel du contenu. Voir `docs/CHANGELOG.md`.
- **Points de vigilance juridiques** : voir `docs/REGISTRE-CONTENU.md` (nom exact
  d'immatriculation, référencement CECMC pour la médiation de la consommation, exactitude
  des chiffres et des témoignages).

## 7. À ne PAS faire

- Ne réintroduis pas d'émojis ni de polices/bibliothèques chargées depuis un CDN externe.
- Ne stocke aucun mot de passe, clé d'API ou secret dans le dépôt (ni dans la doc).
- Ne modifie pas le fond du site (chiffres, identité, témoignages) sans que la demande
  soit explicite et la donnée fournie.
- Ne supprime pas le champ caché `#phone-full`, le honeypot anti-spam `_gotcha`, ni la
  case de consentement RGPD du formulaire.
