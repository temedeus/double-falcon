## Double Falcon

Double Falcon is a desktop application that scans local directories for duplicate files. Double Falcon generates hashes based on content to detect identical files. Front-end is React with hooks + context to manage state. Front-end is wrapped as an Electron application. Back-end is written in C++ that needs to be compiled to a native node module for each platform.

All React components are written as functional components.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

Recommended build tool is npm since yarn appeared to have issues with node-gyp that is used to build the native node module for this project. (Likely a version mismatch with the combination of yarn, node, node-gyp etc.)

In the project directory, you can run:

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

Builds included native node module for backend as well. This could be separate project at some point, but not worthwile at this moment.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-native`

Build native module only.

Requires

- gcc 8.0

### `npm start`

Runs the app in development mode using hot reload.<br>
For development purposes [http://localhost:3000](http://localhost:3000) is served through web server. In deployed application static files are used instead.

Run `npm run electron` to use actual application.

### `npm run electron`

Runs the electron application that points to local web server. `npm start` must be run before this or else there is nothing to show.

Depending on configuration I've run into issues with starting electron via yarn due to certain files missing. As a quick solution I advise to just run `electron .` directly in this path.

### `npm run test`

Runs tests on the project.

### Testing duplicatefinder local backend

Test utility for duplicatefinder "backend" requires only one parameter: path to scan.

- node testUtility.js /path/to/scan/dir/
