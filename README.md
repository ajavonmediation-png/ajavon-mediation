# AJAVON Médiation — Site web

Site vitrine construit avec **Astro**, hébergé sur **Cloudflare Pages**.

---

## 🚀 Déploiement — Guide étape par étape

### ÉTAPE 1 — Prérequis locaux (une seule fois)
Installez Node.js (version 18 ou supérieure) depuis https://nodejs.org

### ÉTAPE 2 — Télécharger ce projet sur votre ordinateur
```bash
# Dans votre terminal :
cd Bureau   # ou le dossier de votre choix
# Décompressez le fichier ZIP fourni, puis :
cd ajavon-mediation
npm install
```

### ÉTAPE 3 — Tester en local
```bash
npm run dev
# Ouvrez http://localhost:4321 dans votre navigateur
```

### ÉTAPE 4 — Créer votre compte Formspree (formulaire de contact)
1. Allez sur https://formspree.io
2. Créez un compte gratuit avec votre Gmail
3. Créez un nouveau formulaire → copiez votre ID (ex: `xpwzabcd`)
4. Dans le fichier `src/pages/index.astro`, remplacez :
   ```
   YOUR_FORM_ID
   ```
   par votre vrai ID Formspree.

### ÉTAPE 5 — Pousser le code sur GitHub
```bash
git init
git add .
git commit -m "Premier déploiement AJAVON Médiation"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/ajavon-mediation.git
git push -u origin main
```

### ÉTAPE 6 — Connecter à Cloudflare Pages
1. Allez sur https://dash.cloudflare.com
2. **Pages** → **Create a project** → **Connect to Git**
3. Sélectionnez votre dépôt `ajavon-mediation`
4. Paramètres de build :
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Node.js version** : `18`
5. Cliquez **Save and Deploy** → attendez 2 minutes

### ÉTAPE 7 — Brancher votre domaine
1. Dans Cloudflare Pages → votre projet → **Custom domains**
2. Ajoutez `ajavon-mediation.com`
3. Cloudflare configure le DNS automatiquement (domaine chez Cloudflare)
4. Attendez 5-15 minutes → HTTPS actif automatiquement ✅

### ÉTAPE 8 — Configurer l'email (Email Routing)
1. Dans votre dashboard Cloudflare → sélectionnez `ajavon-mediation.com`
2. **Email** → **Email Routing** → **Get started**
3. Créez l'adresse : `contact@ajavon-mediation.com` → Forward to → votre Gmail
4. Cliquez le lien de vérification dans votre Gmail ✅

---

## 📁 Structure du projet

```
ajavon-mediation/
├── src/
│   ├── components/
│   │   ├── Nav.astro          ← Navigation + menu mobile
│   │   └── Footer.astro       ← Pied de page
│   ├── i18n/
│   │   ├── fr.ts              ← Textes français
│   │   ├── en.ts              ← Textes anglais
│   │   ├── mina.ts            ← Textes mina (à compléter)
│   │   └── index.ts           ← Helpers i18n
│   ├── layouts/
│   │   └── Layout.astro       ← Template HTML + SEO
│   ├── pages/
│   │   ├── index.astro        ← Page française (/)
│   │   └── en/
│   │       └── index.astro    ← Page anglaise (/en/)
│   └── styles/
│       └── global.css         ← Styles globaux
└── public/
    ├── robots.txt
    └── _redirects
```

---

## ✏️ Modifier le contenu

**Tous les textes** sont centralisés dans `src/i18n/fr.ts` (français),
`src/i18n/en.ts` (anglais) et `src/i18n/mina.ts` (mina).

Pour modifier un texte, éditez simplement le fichier correspondant.
Le site se redéploie automatiquement après chaque `git push`.

**Pour ajouter une vraie photo de Me Ajavon** :
1. Placez la photo dans `public/photo-ajavon.jpg`
2. Dans `src/pages/index.astro`, remplacez le bloc `portrait-placeholder` par :
   ```html
   <img src="/photo-ajavon.jpg" alt="Me Ajavon, médiatrice certifiée" class="portrait-photo" />
   ```

---

## 🌍 Multilingue

| URL | Langue |
|-----|--------|
| `ajavon-mediation.com` | Français |
| `ajavon-mediation.com/en/` | Anglais |
| `ajavon-mediation.com/mina/` | Mina (à activer) |

Pour activer la version Mina, faites traduire `src/i18n/mina.ts` par un traducteur
professionnel et créez `src/pages/mina/index.astro` sur le modèle de la page EN.

---

## 🛠️ Commandes utiles

```bash
npm run dev      # Développement local
npm run build    # Build de production
npm run preview  # Prévisualiser le build
```

---

## 📞 Support

Pour toute question technique, contactez votre développeur.
