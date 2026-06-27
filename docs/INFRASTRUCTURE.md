# INFRASTRUCTURE — comptes, services et points de vigilance

Inventaire de tout ce qui fait fonctionner le site. À tenir à jour.

> 🔒 **Sécurité — à lire absolument.** Ce fichier ne contient **aucun mot de passe** et ne
> doit **jamais** en contenir (il est versionné dans GitHub, public). Les mots de passe se
> conservent dans un **gestionnaire de mots de passe** (Bitwarden, 1Password, le
> gestionnaire de votre navigateur, etc.). Ici, on note seulement *quel* service et *sous
> quel compte*. Il est fortement recommandé d'activer la **double authentification (2FA)**
> sur GitHub, Cloudflare et Gmail.

---

## Vue d'ensemble

| Service | Rôle | Coût | Compte / identifiant de connexion |
|---|---|---|---|
| **Nom de domaine** | L'adresse `ajavon-mediation.com` | Annuel (~10–12 €/an, à confirmer) | Cloudflare Registrar — *connexion : à compléter* |
| **Cloudflare Pages** | Hébergement + mise en ligne automatique | Gratuit | Cloudflare — *connexion : à compléter* |
| **Cloudflare Email Routing** | Boîte aux lettres (réexpédition) | Gratuit | Cloudflare (même compte) |
| **GitHub** | Coffre-fort du code + historique | Gratuit | Compte **`ajavonmediation-png`** — *mot de passe : à compléter (gestionnaire)* |
| **Formspree** | Réception des messages du formulaire | Gratuit (formule de base) | *connexion : à compléter* |
| **Gmail** | Boîte de destination réelle | Gratuit | **`ajavon.mediation@gmail.com`** — *mot de passe : à compléter (gestionnaire)* |

---

## Détail par service

### Nom de domaine — `ajavon-mediation.com`
- **Registrar** : Cloudflare Registrar (géré dans le même compte Cloudflare que l'hébergement).
- **⚠️ Renouvellement** : *date à compléter*. **C'est le point de vigilance numéro un** :
  un domaine non renouvelé fait disparaître le site et l'e-mail du jour au lendemain.
  Vérifier que le **renouvellement automatique** est activé et qu'un moyen de paiement
  valide est enregistré.

### Cloudflare Pages — hébergement
- **Projet** : le site est déployé en continu depuis le dépôt GitHub.
- **Branche de production** : `main`.
- **Commande de build** : `npm run build`.
- **Dossier de sortie** : `dist`.
- **URL technique** : https://ajavon-mediation.pages.dev
- **Domaine personnalisé** : https://ajavon-mediation.com (à vérifier comme bien rattaché).
- Aucune variable d'environnement n'est nécessaire au build.

### Cloudflare Email Routing — boîte aux lettres
- **Adresse publique (alias)** : `contact@ajavon-mediation.com` — c'est l'adresse affichée
  sur le site et dans les mentions légales.
- **Réexpédition vers** : `ajavon.mediation@gmail.com` (boîte réellement consultée).
- À vérifier de temps en temps : que la règle de routage est active et que l'adresse Gmail
  de destination reste « vérifiée » côté Cloudflare.

### GitHub — code et historique
- **Dépôt** : https://github.com/ajavonmediation-png/ajavon-mediation
- **Compte propriétaire** : `ajavonmediation-png`
- **Visibilité** : public. *(Ne jamais committer de secret : ce dépôt est lisible par tous.)*
- **Branche** : `main` (chaque `push` déclenche un déploiement Cloudflare).

### Formspree — formulaire de contact
- **Identifiant du formulaire** : `mdargqov`
- **Point d'accès** : `https://formspree.io/f/mdargqov`
- **Notifications envoyées à** : *à compléter* (vraisemblablement `ajavon.mediation@gmail.com`).
- **Formule** : gratuite. ⚠️ **Limite mensuelle** du nombre de soumissions (de l'ordre de
  quelques dizaines par mois selon l'offre en vigueur) : au-delà, les envois peuvent être
  bloqués. À surveiller si le trafic augmente ; sinon, envisager une formule payante.

### Gmail — boîte de destination
- **Adresse** : `ajavon.mediation@gmail.com`
- C'est là qu'arrivent, via la réexpédition Cloudflare, les e-mails adressés à
  `contact@ajavon-mediation.com`, ainsi que (probablement) les notifications Formspree.
- Pensez à vérifier le dossier **Spam** si un message attendu n'apparaît pas.

### Environnement de développement local (poste d'Emile)
- **Système** : Windows, terminal **PowerShell**.
- **Dossier du projet** : `C:\Users\jrang\Downloads\ajavon-mediation`
- **Outils installés** : Node.js et Git.
- C'est depuis ce dossier que se lancent les commandes de publication (voir `GUIDE-EMILE.md`).

---

## Points uniques de défaillance (à connaître)

1. **Renouvellement du domaine** — si oublié, tout tombe (site + e-mail). *Priorité absolue.*
2. **Accès au compte Cloudflare** — il concentre l'hébergement, le domaine et l'e-mail. Une
   perte d'accès serait critique : 2FA + codes de secours conservés précieusement.
3. **Accès au compte GitHub `ajavonmediation-png`** — sans lui, plus de publication possible.
4. **Quota Formspree** — un dépassement silencieux peut interrompre la réception des messages.
5. **Accès à la boîte Gmail** — c'est le point de réception final de tous les contacts.

---

## À compléter par Emile

Pour rendre cet inventaire pleinement opérationnel, compléter (sans y mettre les mots de
passe) :

- la **date de renouvellement** du domaine `ajavon-mediation.com` ;
- l'**adresse e-mail de connexion** au compte Cloudflare ;
- l'**adresse e-mail de connexion** au compte Formspree, et l'adresse de notification configurée ;
- confirmer le **coût annuel** réel du domaine.

*Dernière mise à jour : juin 2026.*
