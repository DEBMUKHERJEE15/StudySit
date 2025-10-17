# Contributing to StudySit

Welcome! We are thrilled that you are interested in contributing to the **StudySit** project.  
Every contribution, whether it's fixing a typo, improving CSS, or updating documentation, is valued!

---

## Contribution Workflow

The StudySit project uses the standard GitHub **"fork and pull request"** workflow.

---

### Prerequisites

You need:

* A **GitHub account**  
* **Git** installed on your local machine

---

### Step 1: Fork the Repository

Start by forking the official **StudySit** repository to your personal GitHub account.

---

### Step 2: Clone Your Fork Locally

Clone your forked repository to your local development environment.  
Remember to replace `YOUR_USERNAME` with your actual GitHub username.

```bash
git clone https://github.com/YOUR_USERNAME/StudySit.git
cd StudySit
```

---

### Step 3: Keep Your Fork Synchronized (Important)

Ensure your local copy and fork are **up-to-date** with the main project to avoid conflicts.

**Option 1 – Sync via GitHub UI:**

1. In your forked repository on GitHub, click **“Fetch upstream”**  
2. Then click **“Fetch and merge”** to update your fork’s main branch

**Option 2 – Pull Locally:**

```bash
git checkout main
git pull origin main
```

---

### Step 4: Create a New Branch

Before making any changes, create a **new branch** to keep your work organized and separated from the `main` branch.

Use descriptive branch names such as:

* `feat/add-mobile-nav`
* `fix/typo-in-readme`
* `docs/update-contributing-guide`

```bash
# Create a new branch
git branch YourBranchName

# Switch to the new branch
git checkout 
```

Or combine both steps:
```
git checkout -b YourBranchName
```

---

### Step 5: Make Your Changes

Now, you can start making the necessary changes to the project files.

You may edit:

* **HTML files** (`.html`)  
* **CSS files** (`.css`)  
* **JavaScript files** (`.js`)  
* **Documentation files** (`.md`)

For **Static Sites:**  
You can test your changes by opening the `index.html` file directly in your browser.

####  Make sure your changes:
* Don’t break the existing layout or functionality.  
* Follow the coding and formatting conventions used in the project.  
* Include proper comments or documentation where necessary.

---

### Step 6: Stage and Commit Your Changes

After making your edits, you’ll need to **stage and commit** them.

```bash
# Stage specific files you modified
git add path/to/file

# OR stage all modified files
git add .

git commit -m "commit message"
```

---

### Step 7: Push Your Changes to Your Fork

Once you’ve committed your changes locally, **push them** to your fork on GitHub.

```bash
git push origin YourBranchName
```

---

### Step 8: Create a Pull Request (PR)

1. Go to your **forked repository** on GitHub.  
2. You’ll see a prompt like **“Compare & pull request”** — click it.  
3. Provide a **clear and descriptive title** for your Pull Request (PR).  
4. In the description, briefly explain:
   *  **What changes you made**
   *  **Why you made them**
   *  **Any additional context** if needed  


Congratulations!
You’ve officially contributed to StudySit!