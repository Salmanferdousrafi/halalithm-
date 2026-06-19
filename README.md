# Halalithm

Halalithm is a functional web prototype for halal and ethical product intelligence. It demonstrates how a product scanner could combine ingredient signals, certification records, regional context, and clear explanations into a decision-support interface.

Important: this project is a prototype. It is not a fatwa, halal certification authority, or production verification engine. The included data is sample data for software demonstration only.

## Features

- Product scan form with sample products
- Transparent rule-based decision engine
- Region selector for future localization
- Explainable results with confidence and detected signals
- Demo dashboard for decision mix and risk signals
- Clean GitHub-ready structure with documentation and tests

## Project Structure

```text
halalithm/
|-- index.html
|-- package.json
|-- src/
|   |-- data/
|   |   `-- products.js
|   |-- engine.js
|   |-- main.js
|   `-- styles.css
|-- tests/
|   `-- engine.test.js
|-- docs/
|   `-- ARCHITECTURE.md
|-- README.md
|-- LICENSE
`-- .gitignore
```

## Run Locally

Run with a local web server so the JavaScript modules load correctly:

```bash
npm start
```

Then open the local URL shown in your terminal.

You can also use any static server, such as VS Code Live Server, GitHub Pages, Netlify, or Vercel.

## Run Tests

```bash
npm test
```

The tests check the core decision engine with sample product scenarios.

## How The Demo Works

The prototype uses a small rule-based engine:

1. Normalize the product name.
2. Match the product against sample data.
3. Detect ingredient risk signals such as gelatin, alcohol, enzymes, and ambiguous flavorings.
4. Combine signals and sample certification records into a provisional decision.
5. Display the reasoning so users can see why a result was produced.

## What Would Be Needed For Production

A real Halalithm platform would need:

- Verified ingredient and supplier database
- Trusted halal certification authority integrations
- Region-specific rulings and governance
- Scholar review workflows
- Audit logs and evidence trails
- Human escalation for uncertain results
- Strong disclaimers and user safety controls

## Deployment

Because this is a static web project, it can be deployed with GitHub Pages, Netlify, Vercel, or any static hosting provider.

## License

MIT License. See `LICENSE`.
