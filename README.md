# How to run :

- Install Node.js dan NPM
- Type in command line : `npm install`
- Running : `npm run start-dev`

- Install http-server global

```
npm install -g http-server
```

- Running Development Mode

```
npm run start-dev
```

- Running Production Mode

```
npm run build
http-server ./dist
```

- Solve error Uncaught ReferenceError: regeneratorRuntime is not defined

```
npm install regenerator-runtime
```

- Don't forget to import regenerator-runtime into entry-point, following this sample

```
import "regenerator-runtime";
import "./styles/style.css";
import "./script/component/app-bar.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);
```
