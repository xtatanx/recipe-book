# Everlywell test - Jhonnatan

This project is an small app to retrieve and display recipes based on these [instructions](https://github.com/EverlyWell/react-challenge)

The project is deployed [here]

## Dependencies

- Node 16.0.0
- Yarn 1.22.5

## Tech stack

- React
- Storybook
- CSS modules
- Sass

## How to run the project

- Make sure you are using the correct node version
- Make sure you are using the correct Yarn version
- Run `yarn` in the root folder

After all the dependencies are installed you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn storybook`

Launches an storybook server so you can work your components isolated from the UI.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## What could I have done better

### Less componetization

I spent to much time creating components, I could have used this time better for working on the funcitonality.

### Unit testing

Unit tests are missing, I could have used jest and react testing library to test the components are correctly rendering all their props.

```js
// Text.test.js
const sizes = ['headline', 'primary', 'secondary', 'tertiary'];
const text = 'this is a test';

describe('<Text />', () => {
  sizes.forEach((size) => {
    it(`renders ${size} correctly `, () => {
      const { getByText, container } = render(<Text>{text}</Text>);
      expect(getByText(text)).toBeInTheDocument();
      expect(container.firstChild).toHaveClass(size);
    });
  });
});
```

### Loading random recipes

Right now there is a bug in which sometimes we could get duplicated recipes. To solve this we could create an interceptor in Axios to actually check the result before resolving the promise, at this point maybe we are able to remove the duplicated item and call again the api to get the one thats is missing. That or paying the $2 for getting the random endpoint.

### Organize SCSS utils

I could have created a single file so I can import all the shareable partials from there. Even better, we could eject the app and modify the CSS loader so we can import this files on top so its accessible to all SCSS files.

### Add documentation to storybook

With some more time I could have added some documentation to improve how the components look in storybook.

### Add a better fallback for code splitting

Create a component to use as a fallback while we lazy load pages
