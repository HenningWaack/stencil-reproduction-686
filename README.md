Run app:

```shell
npm install

cd packages/stencil-library
npm install
npm run build

cd ../vue-library
npm install
npm run build

cd ../vue-project
npm install
npm run dev
```

In app, the toogle button should display and hide the div with text "Hello World". The first toggle works, the class "show" which sets the opacity of the div to 1 is not part of the div anymore. Toggle again, and "show" is added to the div class again, but the "hydrated" class is now missing, therefore visibility is hidden.
