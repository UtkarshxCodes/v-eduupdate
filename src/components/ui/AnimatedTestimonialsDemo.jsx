import { assets } from "../../assets/assets";
import { AnimatedTestimonials } from "./animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      name: "Aisha Rodriguez",
      designation: "Cybersecurity Analyst @ Deloitte",
      quote:
        "As someone who transitioned from finance into cybersecurity, V-EDU’s structured bootcamp and mentorship made all the difference. The mock interviews and resume help really boosted my chances.",
      src: assets.aisha,
    },
    {
      name: "Michael Zhang",
      designation: "Cloud Solutions Architect @ IBM",
      quote:
        "V-EDU’s Cloud & DevOps program covered everything from AWS to CI/CD pipelines. The flexible learning schedule allowed me to study while working full time — and the job support was phenomenal.",
      src: assets.michael,
    },
    {
      name: "Priya Menon",
      designation: "Data Analyst @ Infosys",
      quote:
        "I joined V-EDU with a non-tech background. The way they broke down complex topics like SQL and Python made learning easy. I now work as a data analyst at Infosys and I love it!",
      src: assets.priya,
    },
    {
      name: "Jamal Thompson",
      designation: "DevOps Engineer @ Accenture",
      quote:
        "V-EDU's hands-on labs and real-world projects were game changers. Learning tools like Docker, Kubernetes, and Jenkins gave me a massive edge. I landed a DevOps role just 2 weeks after completing the course.",
      src: assets.jamal,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
