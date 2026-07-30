# Praticello delle Idee: Digital Garden

This repository houses a Quartz v5 digital garden synchronized with an Obsidian Vault.

## Local Development

### Installation

Install Node.js 22+ and set up dependencies:

```bash
npm install
npx quartz plugin install
```

### Run Local Server

Compile and serve the digital garden locally with hot-reloading:

```bash
npx quartz build --serve -d praticello_delle_idee
```

Access the preview in your browser at: http://localhost:8080

---

## Daily Gardening Workflow

Only files explicitly tagged with "garden" are parsed and built. All other files remain completely private.

### 1. Tag a Public Note

To publish a note, add "garden" to the tags array in its YAML frontmatter:

```yaml
---
title: "My Public Note"
tags:
  - garden
---
Content goes here.
```

### 2. Save a Private Note

To keep a note private, simply do not add the "garden" tag. It will be ignored by the Quartz build engine.

### 3. Sync and Publish

To publish your public notes, commit and push changes to GitHub:

```bash
git add .
git commit -m "Publish: update notes"
git push origin main
```

---

## Deployment to GitHub Pages

Deployment is automated via GitHub Actions.

### Setup Instructions

1. Create a public repository on GitHub.
2. Link your local directory to the remote repository:
   ```bash
   git remote add origin https://github.com/your-username/your-repo-name.git
   ```
3. Navigate to your repository settings on GitHub.com.
4. Go to Settings -> Pages.
5. Under "Build and deployment" -> "Source", select "GitHub Actions".
6. Pushing to the "main" branch triggers the deployment pipeline automatically.
