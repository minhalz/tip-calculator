import Info from "./Info";
import Interactables from "./Interactables";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../../reducers";
import { save, load } from "redux-localstorage-simple";

const createStoreWithMiddleware = compose(applyMiddleware(save()))(createStore);

const store = createStoreWithMiddleware(
  rootReducer,
  load() // Loading done here
);

function Calculator() {
  return (
    <Provider store={store}>
      <div className="flex flex-wrap p-6 w-full max-w-[375px] md:max-w-[700px] bg-white rounded-xl">
        <Interactables />
        <Info />
      </div>
    </Provider>
  );
}

export default Calculator;
