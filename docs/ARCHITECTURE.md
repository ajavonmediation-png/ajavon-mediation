# ARCHITECTURE — carte technique du site

Document de référence pour Claude et pour un lecteur curieux. Il décrit comment le site
est construit. Pour les comptes et services, voir `INFRASTRUCTURE.md`.

## Pile technique

- **Astro** (site statique) : génère des pages HTML pré-rendues, sans serveur applicatif.
  Choisi pour sa légèreté, sa rapidité, et un hébergement gratuit et simple.
- **TypeScript** pour les fichiers de traduction et la logique des composants.
- **CSS « maison »** (pas de framework CSS), avec des variables de couleur/police dans
  `src/styles/global.css` et des styles « scoped » par page/composant.
- **Aucune dépendance externe chargée à l'exécution** : polices, icônes et bibliothèque
  téléphone sont toutes auto-hébergées (voir RGPD dans `CLAUDE.md`, règle n°1).
- Seule dépendance npm : **astro** (voir `package.json`).

## Arborescence

```
src/
├─ pages/
│  ├─ index.astro                       ← page d'accueil FR (contenu + <style> + script formulaire)
│  ├─ en/index.astro                    ← ébauche EN (placeholder, non fonctionnelle)
│  ├─ mentions-legales.astro            ← mentions légales (LCEN)
│  └─ politique-de-confidentialite.astro← politique de confidentialité (RGPD)
├─ layouts/
│  └─ Layout.astro                      ← <head> commun : SEO, Open Graph, favicons, JSON-LD, polices
├─ components/
│  ├─ Nav.astro                         ← barre de navigation + sélecteur de langue (logo SVG « globe »)
│  ├─ Footer.astro                      ← pied de page (liens légaux + colonnes)
│  └─ Icon.astro                        ← jeu d'icônes Lucide en SVG (voir « Icônes »)
├─ i18n/
│  ├─ fr.ts                             ← tous les textes français (source de vérité du contenu)
│  ├─ en.ts                             ← textes anglais (utilisés par l'ébauche EN)
│  └─ index.ts                          ← helpers : languages, translations, useTranslations, getLocalePath
└─ styles/
   └─ global.css                        ← variables de couleur/police + @font-face auto-hébergés
public/
├─ photo-ajavon.jpg                     ← portrait (section À propos)
├─ livre-couverture.jpg                 ← couverture du livre (section Publication)
├─ og-image.jpg                         ← image de partage social (1200×630)
├─ favicon.svg / favicon-32.png / favicon.ico / apple-touch-icon.png
├─ robots.txt, _redirects
├─ fonts/                               ← 8 fichiers .woff2 (Cormorant Garamond + Jost)
└─ vendor/intl-tel-input/               ← bibliothèque téléphone (css, js, drapeaux)
```

## Internationalisation (i18n)

- Configurée dans `astro.config.mjs` : `defaultLocale: 'fr'`, `locales: ['fr', 'en']`,
  `prefixDefaultLocale: false` (le français est à la racine `/`, l'anglais sous `/en/`).
- Les helpers sont dans `src/i18n/index.ts` : `useTranslations(lang)` renvoie l'objet de
  textes ; `getLocalePath(lang, path)` construit les URLs.
- **Toujours** lire les textes via `t.section.cle` dans les pages — jamais de texte en dur.
- Les chaînes contenant du HTML (par ex. un titre avec `<em>…</em>`) sont injectées avec
  l'attribut `set:html`.
- **État de l'anglais** : `src/pages/en/index.astro` est un simple placeholder (un
  paragraphe « English version — content loading »). Le sélecteur de langue propose EN
  mais la page n'est pas construite. Le fichier `en.ts` contient des traductions partielles
  prêtes à l'emploi le jour où l'on bâtira réellement la page EN.

## Composants

- **`Nav.astro`** : navigation principale + sélecteur de langue (FR / EN) + bouton CTA. Le
  logo est un SVG « globe » dessiné à la main (cercle + méridien + parallèles, monogramme
  « AEDA »), en doré sur fond sombre.
- **`Footer.astro`** : pied de page à colonnes (Services / Ressources / Cabinet) + liens
  légaux (`/mentions-legales`, `/politique-de-confidentialite`) + année. **Trois liens sont
  encore morts** (`href="#"`) : « Blog & articles », « Annuaire des médiateurs »,
  « Partenaires ». À brancher ou retirer.
- **`Icon.astro`** : voir « Icônes » ci-dessous.

## Charte visuelle (design tokens)

Définie dans `src/styles/global.css`, sous `:root` :

| Variable | Valeur | Rôle |
|---|---|---|
| `--cream` | `#F5F0E8` | fond principal clair |
| `--sand` | `#E8DCC8` | fonds secondaires, puces |
| `--terra` | `#8B6B4A` | terracotta — accent principal, titres `<em>` |
| `--deep` | `#2C2416` | brun très foncé — fonds sombres, texte fort |
| `--gold` | `#C4A35A` | doré — logo, accents sur fonds sombres |
| `--text` | `#5a4e3a` | texte courant |
| `--text-light` | `#6f5f46` | texte secondaire (assombri pour respecter le contraste WCAG AA) |
| `--font-serif` | `'Cormorant Garamond'` | titres |
| `--font-sans` | `'Jost'` | texte courant |

- Les polices sont déclarées en `@font-face` dans `global.css` et servies depuis
  `public/fonts/` (aucun appel à Google Fonts).
- Règle globale notable : `h1 em, h2 em { color: var(--terra) }` — d'où l'usage de `<em>`
  dans les titres pour colorer un mot.

## Formulaire de contact

Situé dans `src/pages/index.astro` (balisage + script en bas de page).

- **Envoi** : Formspree, point d'accès `https://formspree.io/f/mdargqov` (méthode POST,
  réponse JSON). Identifiant du formulaire : `mdargqov`.
- **Consentement RGPD** : case à cocher obligatoire (`name="consent"`, valeur `oui`),
  reliée à la politique de confidentialité. L'envoi est bloqué tant qu'elle n'est pas cochée.
- **Validation accessible** : messages d'erreur affichés sous chaque champ
  (`aria-invalid`, `aria-describedby`), au lieu des bulles natives du navigateur.
- **Anti-spam** : champ « honeypot » caché `name="_gotcha"`. Ne pas le retirer.
- **Sujet de l'e-mail** : champ caché `_subject`.
- **Téléphone international** : géré par **intl-tel-input v29** (auto-hébergé dans
  `public/vendor/intl-tel-input/`). Le champ visible `#phone` n'a pas d'attribut `name` ;
  un champ caché `#phone-full` (`name="phone"`) reçoit le numéro complet au format
  international (`getNumber()`) au moment de l'envoi. Les noms de pays sont localisés selon
  la langue de la page via `Intl.DisplayNames` (option `countryNameLocale`).
- **Chargement différé** : la bibliothèque (~300 Ko) n'est téléchargée qu'au **premier
  focus** sur le champ téléphone, pour alléger le chargement initial. Un **repli** envoie le
  numéro brut saisi si la bibliothèque n'a pas eu le temps de s'initialiser. Préserver ce
  mécanisme.
- **Synchronisation des pays** : choisir un indicatif pré-remplit le menu « Pays concernés »
  (sauf si l'utilisateur a déjà modifié ce menu manuellement).

## Icônes

- Composant `src/components/Icon.astro` : contient une « map » d'icônes **Lucide**
  (https://lucide.dev, licence ISC) sous forme de contenu SVG. Chaque icône hérite de la
  couleur de son contexte via `stroke="currentColor"` (épaisseur de trait 1.75).
- Usage : `<Icon name="phone" size={18} />`. La couleur se règle en CSS sur le conteneur.
- Pour **ajouter** une icône : récupérer le contenu interne du SVG Lucide correspondant et
  l'ajouter à la map du composant, puis l'appeler par son nom. **Pas d'émojis.**

## SEO, partage social et favicons

Tout est dans le `<head>` de `src/layouts/Layout.astro` :

- Balises **SEO** (title, description, canonical, robots).
- **hreflang** fr / en / x-default.
- **Open Graph** + **Twitter Card**, avec `og:image` et `twitter:image` pointant vers
  `https://ajavon-mediation.com/og-image.jpg` (image 1200×630 aux couleurs du cabinet).
- **JSON-LD** de type `LocalBusiness` (données structurées pour les moteurs de recherche).
- **Favicons** : `favicon.svg` (vectoriel), `favicon-32.png`, `favicon.ico` (navigateurs
  anciens) et `apple-touch-icon.png` (écran d'accueil iOS).
- **Polices** : préchargement (`preload`) de deux fichiers `.woff2`.

## Compilation

`npm run build` produit le site dans `dist/` — actuellement **4 pages** : accueil FR,
ébauche EN, mentions légales, politique de confidentialité. Cloudflare exécute cette même
commande à chaque déploiement.
