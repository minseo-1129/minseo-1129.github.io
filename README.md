# Minseo Cho — Portfolio

Personal portfolio for HCI research and design work.

## Design-system migration

The `design-system-migration-v1` branch is the staged migration of the portfolio to the locked design-system baseline.

### Typography

- Roboto Mono: structure, navigation, labels, headings, metadata, metrics
- DM Sans: prose, descriptions, explanatory text
- Weights: 400 / 500 only

### Visual grammar

- horizontal rules = structured information (Data Table + Key–Value)
- bordered boxes = independent units (Card)
- neutral soft fill `#f6f7f8` = sequence / Process
- lavender `#f2f1f8` = Takeaway / semantic emphasis
- solid rules = information boundaries / facts / metadata
- dashed rules = narrative section transitions

### Research primitives

1. Data Table
2. Key–Value
3. Card
4. Process
5. Chart
6. Metric Group
7. Callout

`.repair-list` remains a local exception until a second reusable use-case appears.

### Responsive baseline

- Wide: 901px+
- Medium: 721–900px
- Compact: ≤720px
- Tiny Key–Value stack: ≤420px

### Migration status

- Shared design tokens: migrated
- Home / About / Design typography override: migrated
- Research index responsive grammar: migrated
- Research detail CSS: consolidated around the seven primitives
- Legacy Research classes: temporarily supported as compatibility aliases
- F-01: migrated to the new primitive class vocabulary as the markup pilot
- Design detail facts: solid metadata rules applied

The compatibility layer is intentional: remaining Research HTML can be migrated page-by-page without changing the visual result or risking a large all-at-once rewrite.
