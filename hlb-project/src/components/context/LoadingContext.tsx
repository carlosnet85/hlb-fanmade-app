import React, { createContext, ReactNode, useState, useEffect, useMemo } from "react";

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
  const [showBackground, setShowBackground] = useState(false);
  const [showParticles, setShowParticles] = useState(true);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"));

    const handleImageLoad = () => {
      const allImagesLoaded = images.every(
        (img) => img.complete && img.naturalWidth > 0
      );

      if (allImagesLoaded) {
        setTimeout(() => {
          setShowBackground(true);
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
  }, []);

  const contextValue = useMemo(() => ({
    isContentLoading,
    showBackground,
    setShowBackground,
    showParticles,
    setShowParticles,
    showHeader,
    setShowHeader
  }), [isContentLoading, showBackground, showParticles, showHeader]);

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
};