# Deployment guide

Everything runs on GitHub. You never need a terminal.

## How it works

When a change reaches the **main** branch, GitHub builds the site and publishes it to GitHub Pages. This takes about two minutes. Changes made in any other branch are only tested, never published.

One-time setting: **Settings > Pages > Build and deployment > Source > GitHub Actions**.

## Review and publish the redesign (pull request)

1. Open your repository on github.com.
2. Click the branch menu (it says **main**), type `rebrand/premium-redesign`, and click **Create branch**.
3. Click **Add file > Upload files**. Drag in everything from the unzipped redesign folder (the *contents*, not the folder itself; it contains only the changed files). Leave the box set to **Commit directly to the rebrand/premium-redesign branch** and click **Commit changes**.
4. Open `src/components/ui`, click the **⋯** menu at the top right and choose **Delete directory**, then commit to the same branch. (Optional: this removes unused files. The site works either way.)
5. Click **Compare & pull request**, then **Create pull request**.
6. Wait for the checks at the bottom of the page. A green tick on **Build and deploy** means the site builds. A red cross means it does not, so do not merge yet.
7. Happy? Click **Merge pull request > Confirm merge**. The live site updates in about two minutes.
8. Not happy? Click **Close pull request**. Nothing changes on the live site.

GitHub Pages cannot show a preview of a pull request, so the live site changes only after you merge.

## Check that a deployment worked

Open the **Actions** tab. The top run is the latest. A green tick means it is live. A red cross means it failed: click the run, click the red step, and read the last lines. Copy them into a new issue if you need help.

## Roll back

1. Open **Pull requests > Closed** and pick the merged pull request.
2. Click **Revert**, then **Create pull request**, then merge it. The previous version returns.

## Custom domain (optional)

**Settings > Pages > Custom domain**: type your domain and save. At your domain provider, add a `CNAME` record pointing `www` to `babatundeawo.github.io`. Tick **Enforce HTTPS** once it appears.

## Security features

Turn on **Settings > Code security > Secret scanning** and **Push protection**. Dependency and code-scanning updates are already set up and appear under **Pull requests** and the **Security** tab.
