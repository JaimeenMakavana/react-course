1.**what is npm?**
-not, node package manager
-it does not have name
-standard repo for the all the packages, all the packages are hosted here.

- ie. create-react-app 2.**how to add npm to my project?**
- npm init 3.**what is package.json?**
- its just configuration for our npm 4.**why do we need package.json?**
-
-
- 5.**what is bundler?**
  ie: webPack, parcel, vite more
  -cleaning, minified so that it shipped to the productions
  -parcel is easy to configured
  -its like muscle

  6.**why -D in npm i -D parcel?**

- there are two types of dependencies/packages:dev and normal
  -normal one also used in production

  7.**what is carat in this : "parcel": "^2.12.0"**

  - tommorow new version release, 2.12.1, parcel will be automatically upgraded to 2.12.1(minor version)

  8. **what is difference between tilde and carat?**
     -if you put ~(tilde), it will upgrade if major available , like 3.0.0 ,
     it good to use carat because if tilde is used then there are chances of breaking up of an app.

  9.**what is package-lock.json? what is difference between package and package-lock**
  -keep a track of exact version
  ie: 2.12.1 is released, so package-lock will lock the version and keep the record of exact version
  --> its working on my local, but not working in production : package-lock -> integrity
  -what ever in my local, it should be in production

  10.**what is node_modules?**
  -actual code of dependencies from npm
  -kind of life database

- parcel have own dependecies, and those dependencies have own dependency, _transitive dependencies_

  11.**how many package.json are there in project?**

- 12.**should I put all the node_module to github or in production**
  -no

  13.**should I put package.json**
  -yes , i can regenerate all node_module , so there is no need to node_module

  14.**npx parcel index.html?**
  -npx:means executing a package

  15.**what parcel did by above command**

- build development build and host it
  -one way to add react is via cdn, another way is npm
  -cdn is not preferred way , **why ?**
  -fetching , costly operation, network call and get unpkg
- if i have already in my nodu_module,it will be easy
- tommorow , new version is came then new cdn link needs to change
  -auto reload on save /refreshing page
  -HMR:hot module replacement
  -development experience smooth

  -_*how it is doing *_
  : file watching algorithm written in c++
  -it is caching, faster build
  _where does it cache_

- in .parcel-cache file, so that next build build faster
  -image optimaztion :most expensive things
  -minification of file for production
  -bundling
  -compressing a file -_consistent hashing_ read about this, keep track of
  -code splitting
  -differential bundling: mobile, web , older browser
  -diaganostic
  -error handling
  -HTTPs
  -read percel doc, its beautiful
  -tree shaking algorithm

- 16.**script type="module"**

  17.**how to create production build**
  -npx parcel build index.html
  -why does it take more time to build production build, then dev build

  18.**lets make it compatible to older version**
  -browserlist.dev
  -needs some configuration

  - now you need to tell your project, about the browser you need to support

{'browserlist':"last 2 chrome version"}
-what are the adavanges: it creates different bundle
