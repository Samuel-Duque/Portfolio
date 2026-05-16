import SectionTitle from "./SectionTitle";
import { about } from "../data";

function About() {
  return (
    <section>
      <SectionTitle title="About Me" />
      <div className="max-w-2xl">
        <p>{about.resume}</p>
        <p>{about.city}</p>
      </div>
      <div>
        <a href={about.social.github}>Github</a>
        <a href={about.social.linkedin}>Linkedin</a>
      </div>
    </section>
  );
}

export default About;
