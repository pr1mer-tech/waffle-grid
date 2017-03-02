<h1 align="center">Waffle grid</h1>
<p align="center">
  <img src="./docs/img/waffle-logo.png"/>
</p>
<p align="center">
An easy to use flexbox grid system.
</p>

<p align="center">
  <a href="https://github.com/lucasgruwez/waffle-grid/releases">
    <img src="https://img.shields.io/github/release/lucasgruwez/waffle-grid.svg" alt="GitHub release" data-pin-nopin="true">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/downloads/lucasgruwez/waffle-grid/total.svg" alt="Github All Releases" data-pin-nopin="true">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/lucasgruwez/waffle-grid.svg" alt="License" data-pin-nopin="true">
  </a>
  <a href="">
    <img src="https://img.shields.io/david/dev/lucasgruwez/waffle-grid.svg" alt="David" data-pin-nopin="true">
  </a>
  <a href="http://gulpjs.com/">
    <img src="https://img.shields.io/badge/Built%20with-Gulp-%23CF4646.svg" alt="Built with Gulp" data-pin-nopin="true">
  </a>
</p>


## Getting Started

To get the waffle grid system in your web page, simply pste this code into the `head` of your document,
```html
<link rel="stylesheet" href="https://cdn.rawgit.com/lucasgruwez/waffle-grid/31785e54/dist/waffle-grid.min.css">
<!-- or -->
<link rel="stylesheet" href="https://cdn.rawgit.com/lucasgruwez/waffle-grid/31785e54/dist/waffle-grid.css">
```
or you can install the waffle grid system using a package manager like npm
```
$ npm install waffel-grid
```
If you want you can still download the waffle grid [here](https://github.com/lucasgruwez/waffle-grid/releases/download/1.2.0/waffle-grid.min.css).

## Docs

```html
<div class="grid">
  <div class="row">
    <!-- For column width, use col-n-of-p. By default, p can be 4, 8, or 12 -->
    <div class="col col-1-of-4"></div>
    <div class="col col-1-of-4"></div>
    <div class="col col-1-of-4"></div>
    <div class="col col-1-of-4"></div>
  </div>
  <div class="row">
    <!-- The center class centers the column. -->
    <div class="col col-7-of-12 center"></div>
  </div>
  <div class="row">
    <!-- use col-m- and col-s- as well as m-hide, s-hide, m-only and s-only to make your grid responsive -->
    <div class="col col-2-of-8 col-m-1-of-4 col-s-1-of-2"></div>
    <div class="col col-3-of-8 col-m-2-of-4 col-s-1-of-2"></div>
    <div class="col col-1-of-8 m-hide"></div>
    <div class="col col-2-of-8 col-m-1-of-4 s-hide"></div>
  </div>
  <div class="row">
    <div class="col col-1-of-4"></div>
    <div class="col col-1-of-2"></div>
    <div class="col col-1-of-4"></div>
  </div>
  <div class="row">
    <!-- Pushes and pulls are used in the same way as col-n-of-p. They can also be responsive, like pull-m-1-of-4 -->
    <div class="col col-1-of-8"></div>
    <div class="col col-2-of-8 push-2-of-12"></div>
    <div class="col col-3-of-8 pull-1-of-12"></div>
  </div>
</div>
```

The full docs can be found [here](https://github.com/lucasgruwez/waffle-grid/wiki)

## Built With

* [Gulp](http://gulpjs.com/) - Build system
* [Sass](https://sass-lang.com/) - Language
* [Jekyll](https://jekyllrb.com/) - Used for the website

## Contributing

Please read [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lucasgruwez/waffle-grid/tags). 

## Authors

- **Lucas Gruwez** - *Initial work* - [@lucasgruwez](https://github.com/lucasgruwez)

See also the list of [contributors](https://github.com/lucasgruwez/waffle-grid/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

Copyright &copy; 2017 lucasgruwez All Rights Reserved.
