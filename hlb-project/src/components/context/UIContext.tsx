import React, { createContext, ReactNode, useState, useEffect, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface UIContextData {
  isContentLoading: boolean;
  showBackground: boolean;
  setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
  showParticles: boolean;  
  setShowParticles: React.Dispatch<React.SetStateAction<boolean>>;
  isImmersiveMode: boolean;
  setIsImmersiveMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UIContext = createContext<UIContextData>({} as UIContextData);

interface UIContextProviderProps { 
  children: ReactNode;
}

export const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [showBackground, setShowBackground] = useLocalStorage<boolean>("showBackground", true);
  const [showParticles, setShowParticles] = useLocalStorage<boolean>("showParticles", true);
  const [isImmersiveMode, setIsImmersiveMode] = useState(false);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"));

    const handleImageLoad = () => {
      const allImagesLoaded = images.every(
        (img) => img.complete && img.naturalWidth > 0
      );
      if (allImagesLoaded) {
        setIsContentLoading(false);
      }
    };

    images.forEach((img) => {
      img.addEventListener("load", handleImageLoad);
      img.addEventListener("error", handleImageLoad);
    });

    handleImageLoad();

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
    };
  }, []);

  const contextValue = useMemo(() => ({
    isContentLoading,
    showBackground,
    setShowBackground,
    showParticles,
    setShowParticles,
    isImmersiveMode,
    setIsImmersiveMode
  }), [
    isContentLoading,
    showBackground,
    setShowBackground,
    showParticles,
    setShowParticles,
    isImmersiveMode,
    setIsImmersiveMode
  ]);

  return (
    <UIContext.Provider value={contextValue}>
      {children}
    </UIContext.Provider>
  );
};
