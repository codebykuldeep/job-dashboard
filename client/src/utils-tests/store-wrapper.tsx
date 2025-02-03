import React, { PropsWithChildren } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { Provider } from "react-redux";

import { AppStore, RootState, setupStore } from "./store-init";
import { BrowserRouter } from "react-router-dom";

// export function renderWithProviders(
//   ui,
//   {
//     preloadedState = {},
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: { listReducers: ListSlice.reducer },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return <Provider store={store}>{children}</Provider>;
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
//}


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: AppStore
  }
  
  export function renderWithProviders(
    ui: React.ReactElement,
    extendedRenderOptions: ExtendedRenderOptions = {}
  ) {
    const {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = setupStore(preloadedState),
        ...renderOptions
      } = extendedRenderOptions
  
    const Wrapper = ({ children }: PropsWithChildren) => (
      <Provider store={store}>
        <BrowserRouter>
            {children}
        </BrowserRouter>
        </Provider>
    );
  
    // Return an object with the store and all of RTL's query functions
    return {
      store,
      ...render(ui, { wrapper: Wrapper, ...renderOptions })
    }
  }