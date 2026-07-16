# PhD academic profile for GitHub Pages

This is a responsive, single-page academic website designed for a PhD student. It includes placeholders for:

- biography and research interests
- doctoral project and supervision
- publications and preprints
- ORCID, Google Scholar, GitHub, and LinkedIn
- conferences, attended sessions, workshops, talks, and training
- teaching responsibilities and teaching philosophy
- academic service and public engagement
- CV, contact details, office, funding, and expected completion date

## Files

- `index.html` — page structure and all placeholder content
- `styles.css` — design, mobile layout, dark mode, and print styles
- `scripts.js` — mobile navigation, theme toggle, publication filtering, and citation copying
- `research-explained.html`, `research-explained.css`, and `research-explained.js` — interactive research explainer page

## Replace the placeholders

Search `index.html` for square brackets, for example:

```text
[YOUR NAME]
[YOUR ORCID]
[UNIVERSITY]
[EMAIL]
```

Replace each placeholder with your information.

For ORCID, use the 16-digit identifier in this format:

```text
0000-0000-0000-0000
```

## Add a profile photograph

The template currently uses a styled placeholder. To use an image:

1. Add an image named `profile.jpg` to the project folder.
2. Replace this block in `index.html`:

```html
<div class="portrait-placeholder" role="img" aria-label="Profile photograph placeholder">
  <span>Add your<br />photo here</span>
</div>
```

with:

```html
<img class="profile-photo" src="profile.jpg" alt="Portrait of YOUR NAME" />
```

3. Add this to `styles.css`:

```css
.profile-photo {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 4.25;
  object-fit: cover;
}
```

## Add your CV

Place your PDF in the project folder, for example as `cv.pdf`, then change:

```html
href="[CV FILE OR URL]"
```

to:

```html
href="cv.pdf"
```

## Publish at `username.github.io`

1. Create a public GitHub repository named exactly:

   ```text
   your-github-username.github.io
   ```

2. Upload `index.html`, `styles.css`, `scripts.js`, and any images or PDFs.
3. Commit the files to the repository's default branch.
4. Open:

   ```text
   https://your-github-username.github.io
   ```

GitHub normally publishes a user-site repository from the root of the default branch.

## Publish as a project site

You may also use a repository with another name:

```text
academic-profile
```

Then open the repository's **Settings → Pages**, choose **Deploy from a branch**, select the default branch and `/ (root)`, and save.

The resulting address will usually be:

```text
https://your-github-username.github.io/academic-profile/
```

## Customise colours

At the top of `styles.css`, edit these variables:

```css
--background
--surface
--text
--accent
```

The site includes a separate dark-mode palette directly below the default palette.

## Add publications

Duplicate an `<article class="publication">...</article>` block. Use one of these values:

```html
data-type="journal"
data-type="conference"
data-type="preprint"
```

The filter buttons will work automatically.

## Notes

- The site is plain HTML, CSS, and JavaScript. It requires no build system.
- It works with GitHub Pages without Jekyll.
- The metadata and Schema.org block in `index.html` should also be updated.
- Test every placeholder link before publishing.
