import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

//changes done here
const feedbackVideos = [
  {
    team: "HackHub",
    description: "Winning team feedback on their hackathon journey.",
    link: "https://drive.google.com/file/d/1vly0HlUjF3E5OXM-GTgxjQKHR9kfqx4a/view?usp=sharing",
  },
  {
    team: "GuruGhantal",
    description: "Winning team feedback on their hackathon journey.",
    link: "https://drive.google.com/file/d/10yu61wAZaw7iRQZLKoOlNKwOQ7Rg9-F_/view?usp=sharing",
  },
  {
    team: "Tech Titans",
    description: "Winning team feedback on their hackathon journey.",
    link: "https://drive.google.com/file/d/11SzB1z8ts6fvlzrO2a6Ek4OlcFhDuhu9/view?usp=sharing",
  },
];

const ResultsPage = () => {
  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-[#f4fbf7] px-6 py-32">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h1 className="text-4xl font-bold text-[#1b4332]">
            OneEarth International Hackathon 2025
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Official results and feedback from our winning teams.
          </p>

          {/* Results Button */}
          <div className="mt-10">
            <a
              href="https://drive.google.com/file/d/1LoA2MD_DEQ4aF4amtGTodq-WBtZiqZz4/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2d6a4f] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1b4332] transition"
            >
              📄 See Results (PDF)
            </a>
          </div>

          {/* Feedback Videos */}
          <section className="mt-20">
            <h2 className="text-2xl font-semibold text-[#1b4332] mb-8">
              🎥 Feedback from Winning Teams
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {feedbackVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl shadow hover:shadow-lg transition p-6 text-left"
                >
                  {/* Thumbnail Placeholder */}
                  <div className="h-40 bg-[#e9f5ef] rounded-xl flex items-center justify-center text-5xl group-hover:scale-105 transition">
                    ▶️
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-[#1b4332]">
                    {video.team}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {video.description}
                  </p>

                  <span className="inline-block mt-4 text-[#2d6a4f] font-medium">
                    Watch Video →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ResultsPage;
