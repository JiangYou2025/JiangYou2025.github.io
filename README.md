# Jiang You — Personal Homepage

Personal academic homepage built with [Jekyll](https://jekyllrb.com/) and hosted on
GitHub Pages: <https://jiangyou2025.github.io/>

## Layout

A single-page researcher homepage with four sections:

- **About** — short bio and research interests
- **News** — dated timeline of recent updates
- **Publications** — paper list with thumbnails and links
- **Teaching** — courses taught / assisted

## How to edit

Most personal details live in `_config.yml` under `author:` (name, title,
affiliation, email, Scholar / GitHub / LinkedIn links) and update across the
whole site. Page content (bio, news items, publications, teaching) lives in
`index.markdown` — look for `<!-- EDIT -->` comments.

- **Profile photo:** drop `assets/images/profile.jpg`, then swap the
  `<div class="avatar">JY</div>` in `index.markdown` for the `<img>` snippet in
  the comment just above it.
- **CV:** add `assets/cv.pdf` (the header already links to it).
- **Styling:** `assets/css/styles.css`.

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000/>.
