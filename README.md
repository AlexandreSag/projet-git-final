# projet-git-final

Petit projet Node.js.

## Prerequis

- Node.js
- npm

## Installation

```bash
npm install
```

## Utilisation

```bash
npm start
```

## Verification

Le projet contient une verification simple du code.

Commande :

```bash
npm run lint
```

## Structure

- `src/index.js` : point d'entree simple
- `scripts/lint.js` : script de verification
- `.githooks/pre-commit` : hook local avant commit
- `.github/workflows/lint.yml` : verification automatique sur GitHub

## Workflow Git

Le depot suit une organisation simple :

- `main` : branche stable
- `develop` : branche d'integration
- une branche par tache
- une pull request pour integrer les changements

## Documentation

Le depot contient aussi :

- `CONTRIBUTING.md` pour la methode de contribution
- `CODE_OF_CONDUCT.md` pour les regles de comportement
