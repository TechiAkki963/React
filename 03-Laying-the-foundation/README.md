# Start our project in production ready app

- to run our project in Development mode
- We will create Scripts in `Package.json` :

```

 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },


```

- To run the Project after this we will use command - `npm run start` or `npm start`
- To build the Project - `npm run build`

---

# JSX

- JSX is not a part of React , its introduce to make the development easy.

  ### How to create a H1 tag in JSX

  ```
    const jsxHeading = <h1>Hello World</h1>;

  ```

  - JSX is not HTML inside Javascript , it a HTML like syntax.
  - JSX is not pure Javascript.
  - JSX when run in a browser console `const jsxHeading = <h1>Hello World</h1>;` it will prompt an error! , as JSX is not pure Javascript.
  - PARCEL - transpil the code

  ## How JSX works

  - JSX => React.createElement => React.createElement - JS-Object => HTML
  - `Babel` which is present in `Parcel`, convert the `JSX` to `React.createElement` then the `React.createElement` is transpiled to `JS-Object`and the browser to `HTML`

  - ## Babel - https://babeljs.io/
