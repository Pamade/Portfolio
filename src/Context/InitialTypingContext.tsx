import { createContext, useState } from "react";

interface ContextType {
  state: {
    isInitialTyping: boolean;
    setIsInitialTyping: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export const IsTypingInitial = createContext<ContextType>({
  state: {
    isInitialTyping: true,
    setIsInitialTyping: () => {},
  },
});

export const IsTypingInitialProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isInitialTyping, setIsInitialTyping] = useState(true);
  const state = {
    isInitialTyping,
    setIsInitialTyping,
  };
  return (
    <IsTypingInitial.Provider value={{ state }}>
      {children}
    </IsTypingInitial.Provider>
  );
};
