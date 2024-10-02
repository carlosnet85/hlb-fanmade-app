import React, { createContext, ReactNode, useEffect, useState } from "react";

interface ContextData {
  isAnimating: boolean;
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Context = createContext<ContextData>({} as ContextData);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating]);

  return (
    <Context.Provider
      value={{ isAnimating, setIsAnimating }}
    >
      {children}
    </Context.Provider>
  );
};
