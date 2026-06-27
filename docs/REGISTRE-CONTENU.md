# REGISTRE DU CONTENU SENSIBLE — à garder exact et vérifié

Ce document liste les informations du site qui **engagent la responsabilité du cabinet** et
qui doivent rester **exactes et vérifiables**. Avant toute mise en avant publique du site,
chaque point ci-dessous devrait être confirmé par M. Ajavon.

> ⚠️ **Avertissement.** Claude n'est pas juriste. Ce registre sert à **signaler des points
> de vigilance**, pas à valider une conformité légale. Pour les sujets réglementés (médiation,
> mentions légales, RGPD, titre de « médiateur de la consommation »), une relecture par un
> professionnel du droit est recommandée.

---

## 1. Identité et immatriculation

- **Nom affiché sur le site** : « M. Emile Ajavon ».
- **Nom complet (couverture du livre)** : « Amah-Émile Ajavon ».
- ❓ **À vérifier** : le nom inscrit sur les **mentions légales** doit correspondre
  **exactement** à l'immatriculation officielle (INSEE / RNE). Si l'immatriculation est au
  nom complet, ajuster la page `mentions-legales.astro` en conséquence.

Données d'immatriculation **actuellement publiées** (à confirmer comme exactes et à jour) :

| Donnée | Valeur publiée |
|---|---|
| Statut | Entrepreneur individuel (micro-entreprise) |
| SIREN | 512 190 893 |
| SIRET | 512 190 893 00028 |
| TVA | Non applicable, art. 293 B du CGI (franchise en base) |
| Adresse | 81, rue René Messeaux, 77260 La Ferté-sous-Jouarre |
| Téléphone | +33 (0)7 66 63 64 60 |
| E-mail | contact@ajavon-mediation.com |

---

## 2. « Médiation de la consommation » — titre réglementé

La section « Autres domaines » présente une carte **« Médiation de la consommation »**.
En France, ce titre est **réglementé** : pour l'exercer et l'afficher, le médiateur doit
être **référencé par la CECMC** (Commission d'évaluation et de contrôle de la médiation de
la consommation) et figurer sur sa liste officielle.

- ❓ **À vérifier impérativement** avant toute promotion publique : ce référencement CECMC.
- Si le référencement n'est pas (ou pas encore) en place, il est prudent de **retirer ou
  reformuler** cette carte pour éviter tout risque.

---

## 3. Chiffres mis en avant

La section d'accueil affiche : **15+ ans d'expérience**, **300+ familles accompagnées**,
**40+ pays couverts**.

- ❓ **À vérifier** : ces chiffres doivent être **véridiques et justifiables**. Des chiffres
  inexacts pourraient être assimilés à de la publicité trompeuse. Les ajuster si besoin
  dans `src/i18n/fr.ts` (clés `hero.stat1_num`, `stat2_num`, `stat3_num`).

---

## 4. Témoignages

Trois témoignages nominatifs figurent sur le site :

- « Sophie & James T. » — médiation franco-britannique, 2024
- « Ahmed K. » — médiation franco-marocaine, 2023
- « Elena & Marco B. » — médiation franco-italienne, 2024

- ❓ **À vérifier** : leur **authenticité** et le **consentement** des personnes citées à
  être mentionnées (même sous initiales). Des témoignages inventés exposeraient le cabinet.
  S'ils ne sont pas réels/vérifiables, mieux vaut les **retirer** ou les remplacer par des
  témoignages authentiques (clés `testimonials.*` dans `src/i18n/fr.ts`).

---

## 5. Affiliations et mentions professionnelles

- Le **pied de page** et la section internationale mentionnent une participation aux travaux
  du **RJECC** (Réseau Judiciaire Européen en matière Civile et Commerciale) et l'**Autorité
  centrale française** (ministère de la Justice), ainsi qu'un enseignement à **Paris-Nanterre**.
- ❓ **À vérifier** : que ces affiliations et fonctions sont exactes et toujours d'actualité.

---

## 6. Le livre

Présenté dans la section « Publication » :

| Donnée | Valeur publiée |
|---|---|
| Titre | *Un autre regard sur l'intérêt supérieur de l'enfant* |
| Éditeur | Publibook |
| ISBN | 9782342374995 |
| Parution | Septembre 2024 |
| Pages | 240 |
| Prix | 18,50 € (papier) / 8,99 € (ebook) |
| Liens | Publibook et Amazon |

- ❓ **À vérifier** : exactitude des prix et **validité des liens** d'achat (ils peuvent
  changer). Les liens sont dans `src/pages/index.astro` (section « livre »).

---

## 7. Synthèse des actions de vérification

1. Confirmer le **nom exact d'immatriculation** pour les mentions légales.
2. Confirmer le **référencement CECMC** avant de promouvoir la médiation de la consommation.
3. Confirmer la **véracité des chiffres** (15+ / 300+ / 40+).
4. Confirmer l'**authenticité et le consentement** des témoignages.
5. Confirmer les **affiliations** (RJECC, Autorité centrale, Paris-Nanterre).
6. Vérifier **prix et liens** du livre.

*Dernière mise à jour : juin 2026.*
