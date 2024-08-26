### Next js

1. if folder name `_lib` so its a private folder.
2. if folder name `[folder_name]` so its dynamic route.
3. if folder name `(folder_name)` so next js not showing it in url, this kind of folder structure not affect the url .

### Different files methods

1. page.jsx or page.tsx
2. template.jsx or template.tsx
3. not-found.jsx or not-found.tsx
4. layout.jsx or layout.tsx

### Difference between template and layout pages =>

     1.They both are similar they wrap each child layout or pages .

2.  but with the template, when a user navigates between routes that share a template a new instance of the component is mounted,
3.  DOM element are recreated, state is not preserved, and effect are re-synchronized
4.  They both accept children prop and which will return the nested segment .
