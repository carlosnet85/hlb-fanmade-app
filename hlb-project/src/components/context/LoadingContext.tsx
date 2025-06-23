import React, { createContext, ReactNode, useState, useEffect, useMemo } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

interface LoadingContextData {
  isContentLoading: boolean;
  showBackground: boolean;
  setShowBackground: React.Dispatch<React.SetStateAction<boolean>>;
  showParticles: boolean;
  setShowParticles: React.Dispatch<React.SetStateAction<boolean>>;
  showHeader: boolean;
  setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({ children }) => {
  const [isContentLoading, setIsContentLoading] = useState(true);
  const [showBackground, setShowBackground] = useLocalStorage<boolean>("showBackground", false);
  const [showParticles, setShowParticles] = useLocalStorage<boolean>("showParticles", true);

  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"));

    const handleImageLoad = () => {
      const allImagesLoaded = images.every(
        (img) => img.complete && img.naturalWidth > 0
      );

      if (allImagesLoaded) {
        setTimeout(() => {
          setIsContentLoading(false);
        }, 4000);
      }
    };

    images.forEach((img) => img.addEventListener("load", handleImageLoad));
    images.forEach((img) => img.addEventListener("error", handleImageLoad));

    handleImageLoad();

    return () => {
      images.forEach((img) => img.removeEventListener("load", handleImageLoad));
      images.forEach((img) => img.removeEventListener("error", handleImageLoad));
    };
  }, [setShowBackground, setShowHeader, setShowParticles]);

  const contextValue = useMemo(() => ({
    isContentLoading,
    showBackground,
    setShowBackground,
    showParticles,
    setShowParticles,
    showHeader,
    setShowHeader
  }), [isContentLoading, showBackground, setShowBackground, showParticles, setShowParticles, showHeader, setShowHeader]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};