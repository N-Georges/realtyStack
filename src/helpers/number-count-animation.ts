import { useEffect, useState } from "react";

const NumberCountAnimation = ({ targetNumber }: { targetNumber: number }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        if (currentNumber < targetNumber) {
          setCurrentNumber(currentNumber + 1);
        }
      },
      targetNumber > 50 ? 2 : 20
    );

    return () => {
      clearInterval(intervalId);
    };
  }, [currentNumber, targetNumber]);

  return currentNumber;
};

export default NumberCountAnimation;
