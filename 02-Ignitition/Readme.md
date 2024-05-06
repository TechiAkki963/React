# Step involve

1. `npm init`
2. name : folder-name
3. description: Project Description
4. test: jest
5. keywords : any suitable keyword
6. Author : coder name
7. License : "ISC";

   - we get to see `package.json ` file in the file explorer

# Next Step

- Add dependencies

1. Adding a Bundler as dependencies (Webpack, Vite , Parcel) - currently using Parcel as it is easy to configure

(There are 2 type of dependencies Dev and Normal dependencies : for Dev Dependencies we use '-D' )

- for Parcel : ` npm install -D parcel`
  (parcel can also have its own dependencies )

  - we get to see `package lock.json` in the file explorer

  - There is a difference between `package.json` and `package lock.json`
    `package.json` can give the upgradable version of the dependencies.
    `package-lock.json` can give the exact version of the dependencies.

# Important !

- if you have `package.json` or `package-lock.json` , you can recreate the `node-modules` by using `npm install`. This can create Security issues as well. So better to keep it in `.gitignore`.

- Whatever we can re-generate don't put it on github !
