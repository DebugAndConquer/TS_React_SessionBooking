import { createContext, useReducer, useContext, ReactNode } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  date: string;
  image: string;
  duration: number;
};

type SessionState = {
  upcomingSessions: Session[];
};

type SessionContextValue = SessionState & {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionContextValue | null>(null);

export const useSessionsContext = () => {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error(
      "useSessionsContext must be used within a SessionsContextProvider"
    );
  }
  return context;
};

type BookSessionAction = {
  type: "BOOK_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: string;
};

type SessionsAction = BookSessionAction | CancelSessionAction;

const sessionsReducer = (state: SessionState, action: SessionsAction) => {
  if (action.type === "BOOK_SESSION") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: [...state.upcomingSessions, action.session],
    };
  }

  if (action.type === "CANCEL_SESSION") {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return state;
};

export const SessionsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  const bookSession = (session: Session) => {
    dispatch({ type: "BOOK_SESSION", session });
  };

  const cancelSession = (sessionId: string) => {
    dispatch({ type: "CANCEL_SESSION", sessionId });
  };

  const ctxValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    bookSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
};
