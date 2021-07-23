import React, { createContext, useEffect, useReducer } from "react";
// import { get } from "../APIs/Get";

export const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  // const initialState = {
  //   loading: false,
  //   snackbar: {
  //     value: false,
  //     type: "",
  //     message: "",
  //   },
  //   token: false,
  //   user: {},
  // };
  const initialState = { image: {}, loading: false };
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_IMAGE":
        return { ...state, image: action.payload };
      case "loading":
        return { ...state, loading: action.payload };
      // case "snackbar":
      //   return { ...state, snackbar: action.payload };
      // case "loggedIn":
      //   if (!action.payload) {
      //     return initialState;
      //   }
      //   return { ...state, token: action.payload };
      // case "usrDetails":
      //   return { ...state, user: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const initialFetch = async () => {
  //   if (localStorage.getItem("Secret")) {
  //     dispatch({ type: "loggedIn", payload: true });
  //     dispatch({ type: "loading", payload: true });
  //     const { result } = await get("/admin/profile");
  //     if (!result.success) {
  //       dispatch({
  //         type: "snackbar",
  //         payload: {
  //           value: true,
  //           type: "error",
  //           message: result.message,
  //         },
  //       });
  //     } else {
  //       dispatch({ type: "usrDetails", payload: result.user });
  //     }
  //     dispatch({ type: "loading", payload: false });
  //   }
  // };

  useEffect(() => {
    // if (state.image.result) {
    //   dispatch({ type: "loggedIn", payload: true });
    // }
    // if (state.token) {
    //   initialFetch();
    // }
    // return () => {};
  }, []);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};
