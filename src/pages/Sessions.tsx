import SessionsList from "../components/Sessions/SessionsList.tsx";
import { SESSIONS } from "../dummy-sessions.ts"; // normally, we would probably load that from a server

const SessionsPage = () => {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          Id interdum velit laoreet id donec. Amet volutpat consequat mauris
          nunc congue nisi vitae.
        </p>
      </header>
      <SessionsList sessions={SESSIONS} />
    </main>
  );
};

export default SessionsPage;
