import React from "react";
import SessionItem from "./SessionItem.tsx";

type SessionsListProps = {
  sessions: {
    id: string;
    title: string;
    summary: string;
    image: string;
  }[];
};

const SessionsList: React.FC<SessionsListProps> = ({ sessions }) => {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
};

export default SessionsList;
