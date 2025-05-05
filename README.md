# HTMA (HTML To Markdown API)

This is a simple Express API that uses [turndown](https://github.com/mixmark-io/turndown) to fetch an HTML page and convert it to Markdown. This project is intended for educational and study purposes only, and any use for unauthorized web scraping is strictly prohibited.

**N.B.** This project does not promote or encourage web scraping in any way. It was created out of a personal need to access certain online documentation that was not available through official APIs. The tool itself is minimal—just a few lines of code and a couple of libraries—and is easily replicable for legitimate, private use cases.

## Getting Started

```sh
curl --location 'https://htma.vercel.app/?url=https://en.wikipedia.org/wiki/Web_scraping'
```

## Deployment

- **Install [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)** (node version manager):

- **Use the same node version from the `.nvmrc` file**:
  - For Windows:
    ```sh
    nvm use $(Get-Content .nvmrc)
    ```
  - For Other Systems:
    ```sh
    nvm use
    ```
- **Install the necessary packages**:

```sh
npm install
```

- **Install vercel globally**: vercel is used to start the development server

```sh
npm install -g vercel
```

- **Start the development server**

```sh
vercel dev
```

## Contributing

If you want to contribute to **HTMA**, follow these steps:

1. Create a new branch for your changes (`git checkout -b your-branch-name`).
2. Make your changes and commit them (`git commit -m 'Changed something'`).
3. Push your branch (`git push origin your-branch-name`).
4. Open a pull request.
