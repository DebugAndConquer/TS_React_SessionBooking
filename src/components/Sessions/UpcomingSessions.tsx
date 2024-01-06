import React, { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../UI/Modal.tsx";
import UpcomingSession from "./UpcomingSession.tsx";
import { useSessionsContext } from "../../store/sessions-context.tsx";
import Button from "../UI/Button.tsx";

type UpcomingSessionsProps = {
  onClose: () => void;
};

const UpcomingSessions: React.FC<UpcomingSessionsProps> = ({ onClose }) => {
  const modal = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  const handleCancelSession = (sessionId: string) => {
    sessionsCtx.cancelSession(sessionId);
  };

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button onClick={onClose}>Close</Button>
      </p>
    </Modal>
  );
};

export default UpcomingSessions;
