* Whole global state of app is stored in object tree inside a single store
* Use action to change state tree
    * Action is an object that descibes what happened
* Then dispatch action to store
* In order to specify how state gets updated when an action is dispatched, we have to write reducer functions to calculate the new state
    * Reducers must follow rules:
        - only calculate new state based on state and action args
        - not allowed to modify existing state -- must make immutable updates by coping existing state and making changes there
        - no asynchonous logic or anything that could cause side effects


* Utlize Redux Toolkit to simplify process of writing Redux Logic

* State descibes condition of app, UI is rednered based on state, when something happens, state updates, then UI re-renders based on new state

* Slice = collection of redux reducer logic and actions for a single features - THIS COULD BE USEFUL FOR USERS!

Goals for Redux: make code predictable; functions output is only falcaulated from the input args, 

* Reducers are never allowed to mutate the original/current state values


https://redux.js.org/tutorials/essentials/part-2-app-structure


vs a context:
 - context allows us to handle state without passing down props to every component (redux = more in depth explicit)
 - only need one component to consume the context
 - redux requires many extra librarys
 - we only really needed to keep up with user auth so contexts are easier
 - more updates, we should lean toward redux (contexts trigger a re-render on each update)