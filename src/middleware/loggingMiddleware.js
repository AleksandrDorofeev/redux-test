const loggingMiddleware = ({ dispatch, getState }) => next => action => {
  // console.log("%c Action 👉 ", "background:yellow;color:black", action);
  console.log("%c getState 👉 ", "background:purple;color:white", getState());
  // console.log("%c dispatch 👉 ", "background:green;color:white", dispatch);
  // console.log("%c next 👉 ", "background:teal;color:white", next);
  next(action);
  console.log(
    "%c current state of the app 👉 ",
    "background:purple;color:white",
    getState()
  );
};

export default loggingMiddleware;
