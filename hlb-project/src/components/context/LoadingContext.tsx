import React, { createContext, ReactNode, useState, useEffect, useMemo } from "react";

interface LoadingContextData {
  isContentLoading: boolean;
}

export const LoadingContext = createContext<LoadingContextData>({} as LoadingContextData);

interface LoadingContextProviderProps {
  children: ReactNode;
}

export const LoadingContextProvider: React.FC<LoadingContextProviderProps> = ({ children }) => {
  const [isContentLoading, setIsContentLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img"));

    const handleImageLoad = () => {
      const allImagesLoaded = images.every(
        (img) => img.complete && img.naturalWidth > 0
      );

      if (allImagesLoaded) {
        setTimeout(() => {
          setIsContentLoading(false);
        }, 3000);
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

  return (
    <LoadingContext.Provider value={useMemo(() => ({ isContentLoading }), [isContentLoading])}>
      {children}
    </LoadingContext.Provider>
  );
};
