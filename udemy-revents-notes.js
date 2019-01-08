//Section 7: Redux

//Key Components of Redux:
// 1. Store (use a store configuration file to be able to combine all the things you need in your store)
// 2. reducer (use a root reducer to combine many other reducers)
// 3. Use the Provider component from react-redux to get redux to work with your react app - place Provider around everything in the index.js file
// 4. To add the store to the Provider, you call the configureStore.js module that was imported and it returns a store with all the whistles and bells from that file.
// 5. to use redux in any components you need the following:
// -Use Connect from react-redux 
// -mapState to bring in any state items you need from the rootReducer and stores them in props with whatever key names you want to store them as.
// 6. Actions 

// Here's the path from the testReducer where the data comes from to the component where mapState is used: testReducer is a state object with keys (e.g. yoyo) that contain any data you want to keep, which gets imported and saved in rootReducer's key called 'propKeyfromRoot', which gets placed into mapState object with keys you can name (e.g. mapStateKeyOne) 

// the configureStore file is used to create the store with middlewares that all get tied together with compose function. The createStore function is the key part - it creates the store that gets used by the app. It has 3 args: the main reducer, an initial state, and the composedEnhancer that has all the middleware

// The rootReducer uses combineReducers function to create a single root reducer from as many reducers as you want or need. 

// Tips:
// Create a test component that you can use to see if redux is working (with sample data you put in it)