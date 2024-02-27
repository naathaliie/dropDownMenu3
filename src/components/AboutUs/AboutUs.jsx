const AboutUs = ({ aboutUsInfo }) => {
  
  console.log("aboutus info", aboutUsInfo.backstory);
  
    return (
    <section className="aboutUsSection">
      <header className="aboutHeader"><h1>About Us</h1></header>
      <main className="aboutMain">
        <div className="company">Info about the company</div>
        <div className="backstory">The backstory</div>
        <div className="past_projects">All the past projects</div>
      </main>
    </section>
  );
};

export default AboutUs;
