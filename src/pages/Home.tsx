import studentsImg from "../assets/students.jpg";
import listImg from "../assets/list.jpg";
import certificateImg from "../assets/certificate.jpg";

const HomePage = () => {
  return (
    <main id="home-page">
      <h2>Our Mission: Your Success</h2>
      <section>
        <img src={studentsImg} alt="A group of students" />
        <div>
          <h3>What we do</h3>
          <p>
            Pulvinar pellentesque habitant morbi tristique senectus. Non
            curabitur gravida arcu ac tortor dignissim convallis aenean.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna.
          </p>
        </div>
      </section>

      <section>
        <img src={listImg} alt="A list of sessions" />
        <div>
          <h3>What we offer</h3>
          <p>
            Pulvinar pellentesque habitant morbi tristique senectus. Non
            curabitur gravida arcu ac tortor dignissim convallis aenean.
            Pharetra massa massa ultricies mi quis hendrerit dolor magna.
          </p>
        </div>
      </section>
      <section>
        <img src={certificateImg} alt="A certificate" />
        <div>
          <h3>What you get</h3>
          <p>
            Pulvinar pellentesque habitant morbi tristique senectus. Non
            curabitur gravida arcu ac tortor dignissim convallis aenean.
          </p>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
