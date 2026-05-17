export interface About {
  name: string;
  resume: string;
  available: boolean;
  city: string;
  email: string;
  phone: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export const about: About = {
  name: "Samuel Andres Duque Rios",
  resume:
    "I'm Samuel Andrés Duque, a Computer Engineering student from Colombia currently in my sixth semester. Since I started my degree, I discovered that what drives me most isn't just writing code, it's understanding how systems work, why they break, and how they can be built better. I'd describe myself as naturally curious, comfortable working in teams, and genuinely fascinated by the Blockchain space a technology I believe has the potential to reshape how people interact with digital systems and with each other. I'm at a stage in my career where every project is a chance to learn something new, and that excites me. I'm looking for spaces where I can contribute, grow, and collaborate with people who share that same mindset.",
  available: true,
  city: "Rionegro, Colombia",
  email: "samduque2311@gmail.com",
  phone: "+57 314 680 1823",
  social: {
    github: "https://github.com/Samuel-Duque",
    linkedin:
      "https://www.linkedin.com/in/samuel-andr%C3%A9s-duque-r%C3%ADos-96b79b341",
  },
};

export * from "./about";
export * from "./skill";
