import { education } from "../data";
import SectionTitle from "./SectionTitle";

function Education() {
  return (
    <section>
      <SectionTitle title="Education" />
      <div>
        <h3>Studies</h3>
        <span>
          {education.startYear} -{" "}
          {education.current ? "Present" : education.endYear}
        </span>
        <h4>{education.degree}</h4>
        <p>{education.institution}</p>
      </div>
    </section>
  );
}
