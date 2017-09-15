# Simple blog - Vue2-pwa
Simple blog based on django-tastypie REST apis built with Vuejs2-pwa. 
It covers on how a vue js app can be structured along with basic authentication in place. How components can be built to achieve overall desired functionality without repeating the code everytime.

Plugins used: 
  - [Vuetify](https://vuetifyjs.com/)
  - [axios](https://github.com/mzabriskie/axios) (For http) 
  - [Isotope](https://isotope.metafizzy.co/) (For grid)
  - [VeeValidate](http://vee-validate.logaretm.com/) (Validations)

### Note:
 - The App is currently deployed on heroku hence it is little slow. Even the backend is deployed on Heroku.

### Items covered:
  - Authentication
  - Creating posts
  - Manipulating UI as per STATE

### To do:
 - Add comments functionality
 - Redirect if not authenticated or donot show the content
 - Add tags functionality

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
