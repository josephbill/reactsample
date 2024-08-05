# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

'''' 

Single page applications (SPA's) : 1 HTML DOCUMENT 

Component : reusable user interface
state : create and managing data inside a component JSX
props : communication between components : sharing of data 


HOOKS in react 
These are features/functions introduced in react 16.8 that allows devs to use state and other react features without writing a class.

1. State hook :create and managing data inside a component JSX

const [referenceVariable, functiontosetthe_value_for_the_reference_variable] = useState(false)

2. UseEffect hook : allows us as react devs to perform side effects in functional components
     - Data Fetching : Communication with the server 
     - Subscriptions : GraphQL 
     - Manually changing the DOM  etc.

3. Context API : useContext() 
    - To handle prop drilling. 
    - Allows devs to access the context/ shared info in functional components 


    APP -> ComponentA , ComponentB, CompentC  ->  ComponentA will load these -> ComponentD, ComponentE, ComponentF  

4. Custom Hooks : are functions that let you extract hook logic into reusable pieces. : useSth.

useReducer , useMemo, useCallback , useLayoutEffect

