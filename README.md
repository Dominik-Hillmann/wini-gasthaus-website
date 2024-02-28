# wini-gasthaus-website 🏖️

- [View demo](https://gasthaus-wini.com)
- [Issues](https://github.com/Dominik-Hillmann/wini-gasthaus-website/issues)

## About The Project

A simple website to present the Gasthaus Wini to potential customers.
It contains:

- detailed descriptions and photos,
- customer reviews,
- a booking system and
- the house rules.


### Built With

Major frameworks and technologies:

* Hugo
* npm
* Docker

## Getting Started

Setting up a website with Hugo is simple.

### Prerequisites

You need to have [npm](https://www.npmjs.com/), [Hugo](https://gohugo.io/)
and [Docker](https://www.docker.com/) installed.

### Direct installation

First, we need to get the submodule with Git to provide the theme [Tella](https://tella.pages.dev/).

```shell
git submodule update --init --remote
```

Then we need to install the CSS preprocessor.

```shell
npm install
```

Run the website locally.

```shell
hugo serve
```

You should now be able to access the website via [http://localhost:1313/](http://localhost:1313/).

### Installation via Docker

```shell
docker build -t wini-gasthaus-website .
docker run -d -p 80:80 wini-gasthaus-website
```

## Usage

No special instructions, the website should speak for itself.

## Roadmap

- [ ] Beauty adjustments, e.g. the gallery
- [ ] Better viewable estimate of price
- [ ] Add support for Stripe payment
- [ ] Add support for PayPal payment

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Hugo documentation](https://gohugo.io/getting-started/)
* [Tella theme](https://themes.gohugo.io/themes/tella/)

[hugo-url]: https://gohugo.io
[Hugo]: https://img.shields.io/badge/hugo.svg?style=
