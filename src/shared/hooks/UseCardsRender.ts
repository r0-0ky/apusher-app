import React from "react";

export function useCardsRender() {
  const [CardsCount, setCardsCount] = React.useState(0);

  const checkCardsCount = () => {
    const resolution = document.documentElement.clientWidth;
    if (resolution >= 1320) {
      setCardsCount(8)
    }
    else if (resolution < 1320) {
      setCardsCount(4)
    }
  }

  React.useEffect(() => {
    checkCardsCount()
  },[])
  
  return { CardsCount, checkCardsCount }
}