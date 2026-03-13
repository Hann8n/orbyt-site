# Remove Cloudflare Pages (Worker-Only Setup)

This site is served exclusively by a Cloudflare Worker. If you have a Pages project, use this to remove it.

## Delete Pages deployments and project

If the Pages project has too many deployments to delete directly, prune deployments first:

```bash
./scripts/delete-pages-deployments.sh orbyt-site
```

Then delete the project:

```bash
npx wrangler pages project delete orbyt-site -y
```
