# AJAVON Médiation — site du cabinet

Site vitrine **une page** du cabinet **AJAVON Médiation & Conseils** (médiation
familiale et familiale internationale), construit avec **Astro**, bilingue FR / EN,
hébergé sur **Cloudflare Pages** et déployé automatiquement depuis GitHub.

🌐 **En ligne** : https://ajavon-mediation.com (et https://ajavon-mediation.pages.dev)

---

## Documentation

| Document | Pour qui | Contenu |
|---|---|---|
| [`CLAUDE.md`](./CLAUDE.md) | Claude (l'assistant IA) | Règles à respecter pour modifier le site sans rien casser |
| [`docs/GUIDE-EMILE.md`](./docs/GUIDE-EMILE.md) | Emile (débutant) | Comment publier une modification, en langage simple + dépannage |
| [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) | Technique | Structure du code, traductions, formulaire, design, SEO |
| [`docs/INFRASTRUCTURE.md`](./docs/INFRASTRUCTURE.md) | Tous | Inventaire des comptes et services (GitHub, Cloudflare, domaine, e-mail, Formspree) |
| [`docs/REGISTRE-CONTENU.md`](./docs/REGISTRE-CONTENU.md) | Tous | Informations sensibles à garder exactes et vérifiées |
| [`docs/CHANGELOG.md`](./docs/CHANGELOG.md) | Tous | Historique des évolutions et pistes à venir |

> **Reprise par un nouveau Claude** : ce dépôt (ou son archive ZIP) suffit. Ouvre-le dans
> un nouveau projet Claude, demande-lui de lire `CLAUDE.md`, puis formule ta demande.

---

## Démarrage rapide (pour développer en local)

Prérequis : **Node.js 18+** (idéalement la version LTS) et **Git**.

```bash
npm install        # installe les dépendances (une fois)
npm run dev        # prévisualisation sur http://localhost:4321
npm run build      # compile le site final dans dist/
npm run preview    # prévisualise le résultat compilé
```

> Le dossier `node_modules/` n'est pas versionné : `npm install` le reconstruit.
> Le dossier `dist/` (site compilé) n'est pas versionné non plus : Cloudflare le
> régénère à chaque déploiement.

---

## Structure du projet

```
ajavon-mediation/
├─ CLAUDE.md              ← règles pour l'assistant IA
├─ README.md              ← ce fichier
├─ astro.config.mjs       ← configuration Astro (i18n FR/EN)
├─ package.json           ← dépendances (Astro uniquement)
├─ docs/                  ← documentation (voir tableau ci-dessus)
├─ src/
│  ├─ pages/              ← index.astro (FR), en/index.astro (ébauche),
│  │                        mentions-legales.astro, politique-de-confidentialite.astro
│  ├─ layouts/            ← Layout.astro (en-tête HTML commun)
│  ├─ components/         ← Nav.astro, Footer.astro, Icon.astro
│  ├─ i18n/               ← fr.ts, en.ts, index.ts (traductions)
│  └─ styles/             ← global.css (couleurs, polices)
└─ public/                ← images, favicons, og-image.jpg, fonts/, vendor/
```

---

## Déploiement

Le site se publie **tout seul** : chaque `git push` sur la branche `main` déclenche une
recompilation par Cloudflare Pages (1 à 2 minutes). Le détail du flux pas-à-pas
(extraction d'archive, commit, push) est dans **[`docs/GUIDE-EMILE.md`](./docs/GUIDE-EMILE.md)**.

---

## Crédits & licences des ressources tierces

- **Astro** — framework (MIT).
- **Polices** Cormorant Garamond et Jost — Open Font License, auto-hébergées (via Fontsource).
- **Icônes** [Lucide](https://lucide.dev) — licence ISC, intégrées en SVG dans `Icon.astro`.
- **intl-tel-input** — MIT, auto-hébergée dans `public/vendor/` (champ téléphone international).
- Aucune de ces ressources n'est chargée depuis un serveur externe (conformité RGPD).
