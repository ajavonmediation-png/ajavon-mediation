# CHANGELOG — historique des évolutions

Journal des changements, du plus récent au plus ancien. Les identifiants entre parenthèses
sont les « commits » GitHub correspondants (utile pour retrouver ou annuler un changement).

---

## Juin 2026

### Documentation (présent lot)
- Ajout de la documentation complète du projet : `CLAUDE.md` (règles pour l'assistant),
  `README.md` enrichi, et le dossier `docs/` (`GUIDE-EMILE.md`, `ARCHITECTURE.md`,
  `INFRASTRUCTURE.md`, `REGISTRE-CONTENU.md`, `CHANGELOG.md`). Objectif : permettre la
  reprise de la maintenance par Emile, aidé de Claude, et le rechargement du projet dans un
  nouveau projet Claude.

### Forme : icônes, favicon, partage social, performance, contraste (`a7adef4`)
- Remplacement de **tous les émojis** par un vrai jeu d'icônes en trait fin (Lucide),
  auto-hébergées dans le composant `Icon.astro` — rendu homogène sur tous les appareils.
- Création du **favicon** (vectoriel + PNG + .ico + icône Apple) au motif « globe » du logo.
- Création de l'**image de partage social** `og-image.jpg` (1200×630, police Cormorant du
  site) et branchement Open Graph + Twitter — les liens partagés affichent désormais un aperçu.
- **Chargement différé** de la bibliothèque téléphone (~300 Ko) : elle n'est plus chargée
  qu'au premier focus sur le champ, allégeant le chargement initial.
- **Contraste** du texte secondaire assombri (`--text-light`) pour respecter le seuil WCAG AA.

### Téléphone international, retrait du mina, année (`2fadf85`)
- Champ **téléphone international** (intl-tel-input v29, auto-hébergé) : sélecteur de pays
  à drapeau, mise en forme automatique du numéro, envoi au format international, noms de
  pays localisés en français via `Intl.DisplayNames`.
- **« Pays concernés »** transformé en liste déroulante, pré-remplie selon l'indicatif choisi.
- **Retrait complet de la langue mina** (menu, configuration, contenu, fichier de traduction).
- **Année du pied de page** passée de 2025 à 2026.

### Formulaire RGPD + validation (`73beaff` puis affiné)
- Reconstruction du formulaire de contact : **case de consentement RGPD** obligatoire,
  astérisques sur les champs requis, **validation accessible** sous chaque champ, ligne de
  réassurance, correction de l'affichage des messages de succès/erreur.

### Pages légales + polices auto-hébergées (`73beaff`)
- Création des pages **mentions légales** (LCEN) et **politique de confidentialité** (RGPD),
  reliées au pied de page.
- **Auto-hébergement des polices** (Cormorant Garamond + Jost) : suppression de tout appel à
  Google Fonts (conformité RGPD).

### Contenu et images (`51934e8`, `9c8c5ca`)
- Restauration intégrale du contenu fidèle au HTML d'origine (section « Autres domaines »,
  biographie détaillée, statistiques, expertise internationale, présentation du livre).
- Ajout de la **photo** de M. Ajavon et de la **couverture du livre** (cliquable vers Publibook).
- Nom affiché harmonisé en « **M. Emile Ajavon** » sur tout le site.

### Mise en place initiale (`66ac726`, `01c308b`)
- Reconstruction du site en **Astro** à partir du HTML fourni, bilingue FR/EN.
- Déploiement : dépôt **GitHub** + **Cloudflare Pages** + formulaire **Formspree** +
  **Email Routing** vers Gmail.

---

## Pistes / à faire (non réalisé)

Idées identifiées mais **non mises en œuvre**. Certaines touchent au **fond** et ne doivent
pas être improvisées sans validation de M. Ajavon (voir `REGISTRE-CONTENU.md`).

### Forme / technique
- **Construire réellement la version anglaise** (`src/pages/en/index.astro` n'est qu'une
  ébauche ; le sélecteur propose EN mais la page est vide).
- **Brancher ou retirer les 3 liens morts** du pied de page (« Blog & articles »,
  « Annuaire des médiateurs », « Partenaires »).
- Ajouter une **page 404** personnalisée (facultatif).

### Fond (à valider avant toute action)
- **Prise de rendez-vous en ligne** (type Calendly) en complément du formulaire.
- **Lien WhatsApp** (utile pour une clientèle internationale / diasporique).
- **Blog / ressources** pour le référencement et la crédibilité (articles sur la Convention
  de La Haye, le règlement Bruxelles II ter, etc.).
- **Preuves de crédibilité** : logos de certification, appartenance à un réseau de médiateurs,
  mentions presse.
- **Témoignages** authentiques et attribués, en remplacement des témoignages actuels (à vérifier).
- Enrichissement **émotionnel** du contenu (répondre aux peurs concrètes des familles).

---

*Pour ajouter une entrée : décrire brièvement le changement, dater (mois/année), et indiquer
le message de commit associé.*
