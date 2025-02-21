"use client";

import React, { ReactNode, useReducer, useMemo, useContext } from "react";

// State interface that holds the state shape
interface State {
  displayDrawer: boolean; // This controls the visibility of the cart drawer
}

// Interface for the props passed to UIProvider component
interface UIProviderProps {
  children: ReactNode;
}

// Initial state for the UIContext
const initialState: State = {
  displayDrawer: false, // Initially, the cart drawer is closed
};

// Action types for the reducer
type Action = { type: "OPEN_DRAWER" } | { type: "CLOSE_DRAWER" };

// UIContextType defines the shape of the context value (state + actions)
interface UIContextType extends State {
  openDrawer: () => void;
  closeDrawer: () => void;
}

// Create the UIContext with the initial value as undefined
export const UIContext = React.createContext<UIContextType | undefined>(
  undefined
);

UIContext.displayName = "UIContext";

// Reducer function to handle state changes based on dispatched actions
function uiReducer(state: State, action: Action): State {
  switch (action.type) {
    case "OPEN_DRAWER":
      return {
        ...state,
        displayDrawer: true, // Open the cart drawer
      };
    case "CLOSE_DRAWER":
      return {
        ...state,
        displayDrawer: false, // Close the cart drawer
      };
    default:
      return state; // Return unchanged state if no action is matched
  }
}

// UIProvider component that wraps children and provides the context value
export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // Action dispatch functions
  const openDrawer = () => dispatch({ type: "OPEN_DRAWER" });
  const closeDrawer = () => dispatch({ type: "CLOSE_DRAWER" });

  // Memoize the context value to avoid unnecessary re-renders
  const value = useMemo(
    () => ({
      ...state,
      openDrawer,
      closeDrawer,
    }),
    [state]
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

// Custom hook to access the UI context
export const useUI = (): UIContextType => {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};

// ManagedUIContext component that wraps children with UIProvider
export const ManagedUIContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <UIProvider>{children}</UIProvider>;
};
