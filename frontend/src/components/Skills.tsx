import SectionTitle from "./SectionTitle";
import { skill } from "../data";
import type { SkillCategory, SkillItem } from "../data";

function Skills() {
  return (
    <section>
      <SectionTitle title="Skills" />
      <div className="grid grid-cols-3 gap-6">
        {skill.map((category: SkillCategory) => (
          <div key={category.category}>
            <h3 className="font-bold mb-3">{category.category}</h3>
            <div className="space-y-2">
              {category.items.map((item: SkillItem) => (
                <div key={item.name}>
                  <p className="text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.level}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
