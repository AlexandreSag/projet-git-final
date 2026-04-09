# Contribution

## Workflow

1. Creer une issue
2. Partir de `develop`
3. Creer une branche
4. Faire un commit signe
5. Ouvrir une pull request vers `develop`

## Regles de contribution

- faire des changements simples et limites a une tache
- utiliser un nom de branche clair
- verifier le code avant de commit
- garder des messages de commit lisibles

## Verification locale

Avant de proposer une pull request :

```bash
npm run lint
```

Le hook local peut aussi etre active avec :

```bash
git config core.hooksPath .githooks
chmod +x .githooks/pre-commit
```

## Integration

Les changements sont integres dans `develop`, puis `main` est synchronisee quand l'etat du projet est stable.

## Branches

- `docs/...`
- `fix/...`
- `feat/...`
- `chore/...`
