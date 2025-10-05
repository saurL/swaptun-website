# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Swaptun Website** - a Nuxt 3 application with TypeScript support. The project serves as the web presence for the Swaptun mobile app, including Apple Universal Links support for deep linking.

## Tech Stack

- **Framework**: Nuxt 3 (v3.16.1)
- **UI Library**: Nuxt UI (v3.0.1)
- **Styling**: Tailwind CSS v4
- **Runtime**: Node.js 20
- **Deployment**:
  - GitHub Pages (main branch) - static site
  - CapRover via Docker (release branch) - containerized app

## Development Commands

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Generate static site
npm run generate
```

## Project Structure

```
├── app.vue                 # Root component with UApp and NuxtLayout wrapper
├── pages/                  # File-based routing
│   ├── index.vue          # Homepage (currently "Work in Progress")
│   └── privacyPolicy.vue  # Privacy policy page
├── layouts/
│   └── default.vue        # Default layout (simple slot wrapper)
├── server/
│   └── routes/
│       └── .well-known/
│           └── apple-app-site-association.ts  # Apple Universal Links config
├── assets/
│   └── css/
│       └── main.css       # Tailwind + Nuxt UI imports
├── public/                # Static assets (favicon, robots.txt)
└── nuxt.config.ts         # Nuxt configuration
```

## Key Architecture Notes

### Apple Universal Links

The server route at `server/routes/.well-known/apple-app-site-association.ts` handles Apple deep linking for the iOS app:

- **App ID**: `TJGS234P96.com.swaptun.app`
- **Supported paths**:
  - `/open/*` - Generic deep link handler
  - `/reset-password` - Password reset flow

This is a Nuxt server route that returns JSON with proper `Content-Type` headers.

### Deployment Workflows

**Two separate deployment pipelines:**

1. **GitHub Pages** (`.github/workflows/nuxtjs.yml`)

   - Trigger: Push to `main` branch
   - Process: `npm run generate` → static export to `dist/`
   - Deploys to GitHub Pages

2. **CapRover** (`.github/workflows/deploy.yml`)
   - Trigger: Push to `release` branch
   - Process: Multi-stage Docker build → push to GHCR → deploy to CapRover
   - Uses secrets: `CAPROVER_SERVER`, `APP_NAME`, `APP_TOKEN`, `TOKEN_GITHUB`

### Docker Setup

Three-stage build in `Dockerfile`:

1. **deps**: Install dependencies
2. **builder**: Build Nuxt app (`.output/` directory)
3. **runner**: Production runtime with healthcheck on port 3000

Runs via `node .output/server/index.mjs` in production.

### Styling

Tailwind CSS v4 with Nuxt UI components. Main CSS imports are in `assets/css/main.css`:

```css
@import "tailwindcss";
@import "@nuxt/ui";
```

## Branch Strategy

- `main` - Auto-deploys to GitHub Pages (static site)
- `release` - Auto-deploys to CapRover (Docker container)

When working on features, create branches off `main` and merge to appropriate target based on deployment destination.

## Style

Pour le style on utilise [Tailwind CSS](https://tailwindcss.com/).
L'application doit être en anglais
le maitre mot est la simplicité.

La palette de couleurs est la suivante :
| Élément | Couleur Hex | Usage | Notes UI |
| --------------------- | ----------------------------------- | ----------------------------- | --------------------------------------- |
| Couleur principale | #CB5520 | Accents, logo, headers | Base de la marque |
| Couleur secondaire | #F4C9A6 | Background secondaire, badges | Plus clair pour créer hiérarchie |
| Bouton normal | #E87A3A | CTA | Utiliser léger dégradé pour profondeur |
| Bouton hover / actif | #FF985C | CTA interactif | Ajouter ombre subtile et gradient |
| Fond principal | #FFFFFF | Fond général | UI claire, neutre, lisible |
| Fond secondaire | #FFF8F3 | Cartes, sections | Légèrement chaud pour profondeur |
| Texte principal | #2E2E2E | Titres, paragraphes | Contraste fort sur fond clair |
| Texte secondaire | #7D7D7D | Placeholder, info secondaire | Hiérarchie textuelle |
| Texte sur bouton | #FFFFFF | Boutons principaux | Contraste élevé |
| Couleur d’erreur | #E74C3C | Alertes, erreurs | Accent chaud pour signaler importance |
| Couleur de succès | #27AE60 | Confirmation | Accent positif |
| Couleur info / neutre | #3498DB | Info, notifications | Pour attirer attention sans agressivité |
| Ombres légères | rgba(0,0,0,0.05) à rgba(0,0,0,0.15) | Profondeur | Utiliser sur cartes, boutons, menus |
| Gradient subtil | #FF985C → #E87A3A | Boutons / cartes | Crée impression de lumière et relief |

⚡ Astuce : Pour créer de la profondeur, utiliser 2-3 nuances d’orange clair à foncé sur les boutons et cartes, avec ombres portées légères et inner shadows.

🖌️ Guidelines UI

1. Profondeur et hiérarchie

Utiliser plusieurs nuances de la couleur principale pour les boutons, cartes et éléments interactifs.

Appliquer ombres légères (top light / bottom dark) pour simuler lumière naturelle.

Ajouter gradient subtil sur boutons et éléments survolés pour donner un effet tactile.

2. Contraste et lisibilité

Texte sur fond clair → couleur sombre (#2E2E2E).

Texte secondaire → gris clair (#7D7D7D) pour indiquer moins d’importance.

Boutons → texte blanc (#FFFFFF) pour contraste maximal.

3. États interactifs

Hover / actif : augmenter ombre et légèrement la luminosité du bouton pour signaler interactivité.

Focus / sélection : ajouter léger glow ou inner shadow pour UX tactile.

4. Utilisation des fonds

Fond principal : blanc (#FFFFFF).

Cartes et sections secondaires : légèrement chaud (#FFF8F3).

Les éléments plus importants doivent “flotter” visuellement par rapport aux sections secondaires grâce aux ombres et nuances.

5. Typographie et espacement

Respecter hiérarchie : titres > sous-titres > texte secondaire.

Padding généreux pour respirabilité.

Espacement cohérent entre boutons et cartes pour guider l’œil.

6. Accentuation des éléments

Utiliser les couleurs d’erreur, succès, info uniquement pour les messages ou notifications.

Ne pas introduire de nouvelles couleurs fortes → garder palette harmonieuse.

7. Mode clair et sombre

Mode clair : privilégier fonds clairs, ombres discrètes.

Mode sombre : inverser luminosité des couleurs neutres, garder orange principal pour accents et boutons.
