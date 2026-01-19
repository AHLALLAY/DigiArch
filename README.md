# 📚 DigiArch - Digitalisation Intelligente des Archives
- **Assigné par** : _Zakaria Ziane_
- **Créé** : _19/01/26_

Plateforme GED basée sur la numérisation et l’intelligence artificielle (LLM) pour automatiser la structuration et l’organisation des documents
#### 💼 Situation professionnelle
- Création d'une application MERN Fullstack

#### 🎯 Besoin visé ou problème rencontré
- Dans le contexte web actuel, on recherche des solutions pour développer des applications web performantes et intuitives. Celles-ci doivent être à la fois simples à administrer et à déployer. Comment peut-on allier efficacement le rendu côté serveur, propre à la logique traditionnelle, à la flexibilité et la réactivité offertes par JavaScript et Node.js? La stack MERN, combinant MongoDB, Express.js, React.js et Node.js, semble être une réponse prometteuse à ce défi.
## 🎓 Compétences visées

> **Note :** Toutes les compétences sont évaluées au  ![Niveau 2](https://img.shields.io/badge/Niveau-2-green?style=plastic)

### 📋 Planification et gestion de projet
- **C01**. Planifier le travail à effectuer individuellement.
- **C02**. Définir le périmètre d’un problème rencontré en adoptant une démarche inductive.
- **C03**. Rechercher de façon méthodique une ou des solutions au problème rencontré.
- **C04**. Présenter un travail réalisé en synthétisant ses résultats, sa démarche.
- **C08**. Contribuer à la gestion d'un projet.

### 🎨 Analyse et conception
- **C09**. Analyser les besoins et maquetter une application.
- **C10**. Définir l’architecture logicielle d’une application.

### 💻 Développement
- **C05**. Installer et configurer son environnement de travail en fonction du projet.
- **C06**. Développer des interfaces utilisateur.
- **C07**. Développer des composants métier.
- **C12**. Développer des composants d’accès aux données.

### 🗄️ Base de données
- **C11**. Concevoir et mettre en place une base de données.

### 🧪 Tests et déploiment
- **C13**. Préparer et exécuter les plans de tests.
- **C14**. Préparer et documenter le déploiement d’une application.
- **C15**. Contribuer à la mise en production dans une démarche DevOps.

#### 📎 Ressources
![Exemple](https://simplonline-v3-prod.s3.eu-west-3.amazonaws.com/media/image/jpg/form-696d77e9d2190149571741.jpg)


## 📖 Contexte du projet
Notre entreprise dispose d’un volume important d’archives papier accumulées au fil des années. Ces documents sont actuellement mal classés, difficiles à retrouver, et nécessitent souvent une saisie manuelle chronophage
Afin de résoudre ces problématiques, nous avons décidé de mettre en place une plateforme de Gestion Électronique de Documents (GED) basée sur la numérisation et l’intelligence artificielle (LLM) pour automatiser la structuration et l’organisation des documents

## 🎯 Objectif du projet
Développer une plateforme capable de :
- 📄 Centraliser les documents scannés
- 🤖 Extraire et structurer automatiquement les informations clés
- 📁 Organiser les fichiers selon une arborescence logique
- 🔍 Faciliter la recherche et la consultation des archives
- ⚡ Réduire la saisie manuelle et les erreurs humaines

## ⚙️ Principe de fonctionnement
### 📸 Numérisation des documents
Les assistantes administratives scannent les documents papier et les importent sur la plateforme sous forme de fichiers PDF.
Des exemples de documents scannés seront fournis dans la section Resources.
Chaque document scanné est analysé afin de :

Vérifier la présence d’une signature
- ✍️ Vérifier la présence d'une signature
- 👤 Identifier le propriétaire du document
- 🔑 Détecter les informations clés (nom, prénom, CIN, département, type de document, etc.)

### 📂 Structuration des documents

Les documents sont automatiquement classés selon la structure suivante :

```
nom_prenom_cin/
 └── departement-responsable-du-formulaire/
     └── type-de-papier/
        └── document.pdf
        └── metadata.json
```

**Exemple :**

```
amou_oussama_AB123456/
 └── rh/
     └── demande_conge/
        ├── demande_conge.pdf
        └── metadata.json
```

### ⚠️ Gestion des cas particuliers

**Absence de CIN :**

Le classement commence par le département responsable
Puis : typepapiernom_prenom

**Fichier déjà existant :**

Incrément automatique :
- demande_conge1.pdf
- demande_conge2.pdf

### 📋 Métadonnées (JSON)
Dans chaque dossier, un fichier metadata.json est généré et contient :

```json
{
  "department_description": "",
  "document_description": "",
  "document_type": "",
  "document_status": "valid | incomplete | pending",
  "signature_detected": true,
  "human_verification_required": false,
  "scan_date": "",
  "archiving_manager": ""
}
```

## 👥 Rôles et responsabilités
### 🔐 Administrateurs

- 👥 Gestion des utilisateurs.
- 🔓 Accès complet à la plateforme.
- 👁️ Supervision globale des archives.
Responsables d’archives

- 📤 Upload des documents.
- ✏️ Modification des métadonnées.
- 🔍 Consultation et recherche avancée.

## 🚀 Fonctionnalités principales
- 📤 Upload de documents PDF
- 🤖 Analyse automatique par LLM
- 📁 Structuration dynamique des dossiers
- 🔍 Recherche par :
  - 👤 Nom / Prénom
  - 🆔 CIN
  - 🏢 Département
  - 📄 Type de document
  - 📂 Dossier
- 👁️ Visualisation des documents
- 📜 Historique des modifications

## 🛠️ Stack technique imposée
- 🔧 Backend : NestJS
- 🎨 Frontend : Next.js
- 🗄️ Base de données : MongoDB
- 💾 Stockage de fichiers : MinIO
- 🤖 IA / LLM : extraction et structuration des données
- 📄 Format de documents : PDF scannés

## 📚 Modalités pédagogiques
- 👤 Travail individuel
- ⏰ Deadline : 01 Février 2026.
## 📊 Modalités d'évaluation

Une durée de 25 min organisée comme suit :

- ⏱️ 5 minutes pour Démontrer le contenu et la fonctionnalité du site Web (très rapidement).
- 💻 Montrez le code source et expliquez brièvement comment il fonctionne. (5 minutes).
- 🎭 Mise en situation (10 minutes).
- 🔍 Code Review \ Questions culture Web (5 minutes).

## 📦 Livrables
**💻 Code Source :**
- 🔗 Lien GitHub de l'application- Code clair, modulaire et bien commenté **📋 Planification :**
- 🔗 Lien de la planification JIRA
**📖 Documentation technique :**
- Description de l’architecture de l’application- Guide d’installation et de configuration- Liste des dépendances externes utilisées et leur rôle
## ✅ Critères de performance
### 🏗️ Qualité du code et architecture
- 📁 Structure et organisation du projet.
- 🏷️ Nommage cohérent des dossiers et fichiers.
- 📖 Clarté et lisibilité du code.
- 🔄 Respect des principes DRY (éviter les répétitions).
- 🎯 Respect du SRP (Single Responsibility Principle).
- ✏️ Nommage explicite des fonctions et variables.
- ✅ Validation efficace des entrées (données utilisateur).
- 🛡️ Gestion robuste des erreurs (Error Handling).

### ⚡ Fonctionnalités
- 🌐 Application web fonctionnelle.
- 📦 Architecture de stockage automatisée.
- 📋 Génération de métadonnées JSON.
- 🔍 Interface de recherche et consultation.

### 📚 Documentation et planification
- 📖 Documentation technique et fonctionnelle.
- 📚 Capacité à lire et intégrer la documentation.
- Planification sur JIRA : inclure l’utilisation des Epics, User Stories / Tasks et Sub-tasks, relier JIRA avec GitHub.

### 🚀 DevOps
- 🔄 CI/CD avec Docker et GitHub Actions (lint, tests, build).