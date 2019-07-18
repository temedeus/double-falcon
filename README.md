## Double Falcon

Double Falcon makes it possible for user to scan local directories for duplicate files. Double Falcon generates hashes based on content to detect identical files.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in development mode using hot reload.<br>
For development purposes [http://localhost:3000](http://localhost:3000)  is served through web server. In deployed application static files are used instead.

Run `yarn electron` to use actual application.

### `yarn electron`

Runs the electron application that points to local web server. `yarn start` must be run before this or else there is nothing to show.

Depending on configuration I've run into issues with starting electron via yarn due to certain files missing. As a quick solution I advise to just run `electron .` directly in this path.

### `yarn test`

Runs tests on the project.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.