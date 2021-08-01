# vue-template-babel-compiler-nuxt-project

## DEMO
![DEMO](https://user-images.githubusercontent.com/14243906/127767756-0091218a-5dd4-46d8-9472-ac28cd822085.png)

## Config for [vue-template-babel-compiler](https://github.com/JuniorTour/vue-template-babel-compiler)
``` js
// nuxt.config.js
export default {
  // ...
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compiler: require('vue-template-babel-compiler')
      }
    },
  },
  // ...
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

