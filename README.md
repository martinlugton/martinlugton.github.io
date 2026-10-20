# martinlugton.github.io

Personal website for [www.martinlugton.com](https://www.martinlugton.com), built with Jekyll and hosted on GitHub Pages.

## Structure

- `index.md` — homepage bio and highlights
- `_posts/` — blog posts in markdown
- `_layouts/` — HTML templates
- `_includes/` — HTML partials
- `_config.yml` — Jekyll configuration (uses the Minima remote theme)

## Deployment

Pushing to `main` triggers an automatic GitHub Pages build. No manual deploy step required.

## Automated content updates

The GOV.UK Forms stat on the homepage is rendered by Liquid in `index.md` from `site.data.dashboard.forms.forms_published`, rounded down to the nearest 10. `_data/dashboard.json` is refreshed every 6 hours by `.github/workflows/update-dashboard.yml`, so the homepage figure updates on the same builds as the [dashboard](/dashboard). If the scrape fails ("N/A"/"Error"), the homepage falls back to a static figure in `index.md`. Counts of 1,000+ will render without a thousands separator.

Source data comes from the [GOV.UK Performance Dashboard](https://github.com/martinlugton/govuk-performance-dashboard).
