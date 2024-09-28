import type { MetaFunction } from "@remix-run/node";
import SocialLinks from "~/components/SocialLinks";

export const meta: MetaFunction = () => {
  return [
    { title: "Uchkun Rakhimov - Homepage" },
    { name: "description", content: "Uchkun's homepage" },
  ];
};

export default function Index() {
  const experienceYears = new Date().getFullYear() - 2021 + 0.5;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-sm text-white px-[1rem]">
      <header className="text-center font-mplus mb-[5rem]">
        <p className="text-4xl font-bold mb-2">Uchkun Rakhimov</p>
        <p className="text-lg">
          Software engineer (Developer / Music lover / Movie lover)
        </p>
      </header>
      <main className="font-mono max-w-2xl p-6 rounded-lg bg-alpha-200 shadow-lg">
        <h2 className="text-lg font-semibold underline mb-2">About Me</h2>
        <p className="mb-4">
          Welcome to my portfolio! With {experienceYears.toFixed(1)} years of
          experience in Node.js, JavaScript, and TypeScript, I have successfully
          developed 10 projects as a freelancer. My work focuses on creating
          dynamic and scalable applications that solve real-world problems and
          enhance user experiences. I’m passionate about leveraging technology
          to drive innovation and empower clients. Explore my projects to see
          how I can bring your vision to life!
        </p>

        <h2 className="text-lg font-semibold underline mb-2">Links</h2>
        <SocialLinks />
      </main>
    </div>
  );
}
