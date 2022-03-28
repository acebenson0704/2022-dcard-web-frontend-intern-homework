<div id="top"></div>

<!-- PROJECT SHIELDS -->

[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<div align="center">
  <h3 align="center">Explore GitHub</h3>
  <p align="center">
    2022 Dcard Web Frontend Intern Homwwork
    <br />
    <a href="https://2022-dcard-web-frontend-intern-homework.vercel.app/"><strong>Visit the web</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Demo][demo-gif]](https://2022-dcard-web-frontend-intern-homework.vercel.app/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [chakra-ui](https://chakra-ui.com)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

1. Clone the repos

```bash
git clone https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework.git
```

2. Install NPM packages

```bash
npm Install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">(<a href="#top">back to top</a>)</p>

## Folder Structure

Similar to monorepo.

- `components`: react components for reuse or layout.
  - `data-display`: components which receive **user data** or **repo data** as props
- `libs`: There are two types of files here:
  1. Theme files.
  2. Fetch data functions, including `user.ts`, `repo.ts`, `readme.ts`.
- `pages`: There are three pages, index page, list repos page, and single repo page. In each page:
  1. In useEffect, get current paths by dynamic routes feature and call get data function in `libs/`
  2. Pass data as props to components in `components/data-display/`

<details>
  <summary>structure</summary>

```text
root/
├── components/
│   ├── data-display/
│   │   ├── repo-card.tsx
│   │   ├── repo-item.tsx
│   │   ├── repo-list.tsx
│   │   └── user-card.tsx
│   ├── layout.tsx
│   ├── logo.tsx
│   ├── navbar.tsx
│   ├── official-web.tsx
│   ├── searchbar.tsx
│   └── web-card.tsx
├── libs/
│   ├── markdown-theme.tsx
│   ├── readme.ts
│   ├── repo.ts
│   ├── theme.ts
│   └── user.ts
├── pages/
│   ├── users/
│   │   └── [username]/
│   │       ├── repos/
│   │       │   └── [repo].tsx  # Single repository page
│   │       └── repos.tsx       # User repositories list page
│   ├── _app.tsx
│   └── index.tsx               # Index page
└── public/
    └── favicon.ico
```

</details>

<p align="right">(<a href="#top">back to top</a>)</p>

## Features

### Dynamic routes

- Next.js has a file-system based router.
- The router paths are determined by **pages** folder structure rather than a single file such as `routes.ts`.

### Infinite Scroll

- Implement infinite scroll by [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component).
- Get only 10 repos at first, and get 10 more repos when scrolling to bottom.

### Catch 404 Error

- Show _Not Found_ when request path are not a valid user or repo.
- Directly change the URL to invalid user or repo won't cause _Internal Server Error_.

### Deploy

- [Deploy to vercel](https://2022-dcard-web-frontend-intern-homework.vercel.app/)

### Cache data in local storage

In get data functions

- Before sending request, check local storage first.
- Cache data in local storage after sending a api request.

### Render README.md

- Convert base64 data to raw markdown by [js-base64](https://github.com/dankogai/js-base64)
- Render the markdown data by [chakra-ui-markdown-renderer](https://github.com/mustaphaturhan/chakra-ui-markdown-renderer) and design my own markdown-theme.

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

- [axios](https://github.com/axios/axios)
- [framer-motion](https://github.com/framer/motion)
- [chakra-ui-markdown-renderer](https://github.com/mustaphaturhan/chakra-ui-markdown-renderer)
- [js-base64](https://github.com/dankogai/js-base64)
- [react-icons](https://github.com/react-icons/react-icons)
- [react-infinite-scroll-component](https://github.com/ankeetmaini/react-infinite-scroll-component)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[stars-shield]: https://img.shields.io/github/stars/acebenson0704/2022-dcard-web-frontend-intern-homework.svg?style=for-the-badge
[forks-shield]: https://img.shields.io/github/forks/acebenson0704/2022-dcard-web-frontend-intern-homework.svg?style=for-the-badge
[issues-shield]: https://img.shields.io/github/issues/acebenson0704/2022-dcard-web-frontend-intern-homework.svg?style=for-the-badge
[license-shield]: https://img.shields.io/github/license/acebenson0704/2022-dcard-web-frontend-intern-homework?label=license&style=for-the-badge
[stars-url]: https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework/stargazers
[forks-url]: https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework/network/members
[issues-url]: https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework/issues
[license-url]: https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework/blob/main/LICENSE.txt
[demo-gif]: https://github.com/acebenson0704/2022-dcard-web-frontend-intern-homework/blob/main/.github/images/demo.gif
