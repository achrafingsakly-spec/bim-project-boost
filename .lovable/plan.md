
## Plan : Logo plus grand + Arrière-plan blanc

### Modifications prévues

#### 1. Augmenter la taille du logo
**Fichier** : `src/components/Header.tsx`
- Passer de `h-20` (80px) à `h-28` (112px) pour le logo dans le header
- Le logo sera 40% plus grand qu'actuellement

#### 2. Changer l'arrière-plan en blanc
**Fichier** : `src/components/Header.tsx`
- Remplacer `bg-transparent` par `bg-white` quand non scrollé
- Remplacer `bg-card/70` par `bg-white` quand scrollé
- Adapter les couleurs du texte de navigation pour qu'elles restent lisibles sur fond blanc (utiliser `text-foreground` au lieu de `text-primary-foreground`)

---

### Détails techniques

```text
Avant (ligne 27-31):
┌─────────────────────────────────────────────────┐
│  isScrolled ? bg-card/70 : bg-transparent       │
│  Logo: h-20                                     │
│  Texte: text-primary-foreground (clair)         │
└─────────────────────────────────────────────────┘

Après:
┌─────────────────────────────────────────────────┐
│  bg-white (toujours blanc)                      │
│  Logo: h-28                                     │
│  Texte: text-foreground (foncé, lisible)        │
└─────────────────────────────────────────────────┘
```

### Fichiers modifiés
- `src/components/Header.tsx` : Logo et arrière-plan
