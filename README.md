# Sillon — Design System

> Design éditorial & data pour l'agronomie. *Du champ au code.*

Sillon est un design system React + Tailwind CSS v4, illustré par un Storybook complet. Il documente la direction artistique d'un site de présentation d'**ingénieur agronome et développeur web** : lisibilité, confiance, données chiffrées mises en scène.

## Direction artistique (résumé)

| Principe | Choix |
|---|---|
| Palette claire | Papier `#F5F1E8` · Encre `#1A2E1A` · Accent forêt `#4A7C59` · Brun `#A67C52` |
| Palette sombre | Fond `#121A12` · Texte `#E8EDE8` · Accent `#7BAE7F` · Brun clair `#C8A67E` |
| Titres | **Fraunces** (serif organique, axe optique) |
| Texte | **Inter** (sans, lisible) |
| Données chiffrées | **IBM Plex Mono** (aspect technique, `tabular-nums`) |
| Espacement | Grille large et généreuse (sections `py-24 md:py-32`, conteneur `max-w-6xl`) |
| Images | Photographies de terrain traitées avec un léger grain (SVG `feTurbulence`), légendes façon documentaire (mono, capitales) |
| Récit utilisateur | accueil → double expertise → projets sélectionnés → compétences → contact |

## Démarrage

```bash
pnpm install
pnpm dev              # site (page d'accueil)
pnpm storybook        # Storybook (port 6006)
pnpm build            # tsc -b + production build
pnpm typecheck        # vérification TypeScript stricte
pnpm build-storybook  # build statique du Storybook
```

## Architecture

```
src/
├── index.css          # @theme (tokens), @theme inline (sémantiques dark), @utility, base
├── lib/icons.tsx      # système d'icônes SVG (trait 1.8, viewBox 24, currentColor)
├── data/content.ts    # TOUT le contenu éditorial (textes d'UI listés mot pour mot)
├── components/
│   ├── ui/            # primitives : Button, Badge, Tag, Metric, SectionHeader,
│   │                  #               Breadcrumb, Pagination
│   ├── FieldFigure.tsx# placeholder « photographie de terrain » (SVG + grain + légende)
│   ├── Header.tsx     # fixe, burger mobile, toggle clair/sombre
│   ├── Hero.tsx       # titre serif sur photo assombrie + bandeau de chiffres
│   ├── DoubleExpertise.tsx  # deux colonnes reliées par un sillon
│   ├── ProjectCard.tsx / ProjectsGrid.tsx
│   ├── Skills.tsx     # barres de progression animées
│   ├── Contact.tsx    # formulaire simple (démo) + coordonnées
│   └── Footer.tsx     # forêt profonde
├── pages/
│   ├── HomePage.tsx   # le récit complet
│   └── ProjectPage.tsx# gabarit d'étude de cas (fil d'Ariane, métriques, graphique…)
└── stories/
    ├── Fondations/    # palette, typographie, icônes, images
    ├── UI/            # primitives (avec contrôles)
    └── Patterns|Pages # sections composées et page entière
```

## Tokens & thème

- **Rampes statiques** (`@theme`) : `paper-50…600`, `forest-50…950`, `bark-50…900` — classes `bg-forest-500`, `text-bark-300`…
- **Sémantiques** (`@theme inline` + variables runtime) : `surface`, `surface-raised`, `surface-sunken`, `ink`, `ink-soft`, `accent`, `accent-strong`, `accent-soft`, `bark`, `bark-soft`, `line`, `overlay` — elles **basculent en mode sombre** via la classe `.dark` sur `<html>`.
- Mode sombre : classe `.dark` (custom variant `dark:`), toggle dans le header (`useDarkMode`, persistance `localStorage['sillon-theme']`, défaut : préférence système). Dans Storybook : menu « Thème » en haut à droite.
- Ombre portée : teintée par la couleur d'encre (variable `--sillon-shadow-tint`), pour rester cohérente en sombre.

## Images

Les figures sont des placeholders SVG générés (4 variantes : `field`, `plots`, `macro`, `data`), grain `feTurbulence` + vignette + légende documentaire. **Pour la production, remplacez le SVG par de vraies photographies de terrain** (`<FieldFigure>` accepte déjà n'importe quel contenu via ses props SVG — ou remplacez-le par un `<img>` en conservant `className` et la légende).

## Récit projet (page d'accueil)

1. **Hero** — « L'agronomie a besoin de meilleurs outils. » (mot clé en italique serif clair), CTA, bandeau `−30 % / 12 structures / 8 ans`.
2. **Double expertise** — « Ingénieur agronome » / « Développeur web », reliés par un sillon (ligne + semence).
3. **Études de cas** — 4 projets avec métrique clé en mono (`−30 % de temps de saisie`…), pagination.
4. **Compétences** — barres de progression (agronomie / développement).
5. **Contact** — formulaire simple → confirmation inline (aucune popup), disponibilité pulsante.

La page **étude de cas** ajoute le fil d'Ariane, la méta client/durée/année, le contexte, les objectifs, les solutions techniques, les résultats chiffrés (métriques + graphique en barres SVG animé), les outils en tags et la navigation précédent/suivant.

## Scripts utiles

- `pnpm typecheck` — TypeScript strict (`noUnusedLocals`, `noUnusedParameters`) sur le code applicatif ; les stories ont leur propre `tsconfig` plus tolérant.
- Storybook : les stories sont exclues du build applicatif (`tsconfig.app.json` → `exclude: ["src/stories"]`).