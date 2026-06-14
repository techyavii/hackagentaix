import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

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
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="px-6 py-24 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-16">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-card">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-earth-green">Event Results</p>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                OneEarth International Hackathon 2025
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Official results and feedback from our winning teams.
              </p>
              <div>
                <a
                  href="https://drive.google.com/file/d/1LoA2MD_DEQ4aF4amtGTodq-WBtZiqZz4/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-primary/90"
                >
                  📄 See Results (PDF)
                </a>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground">Feedback from Winning Teams</h2>
                <p className="text-muted-foreground mt-2">
                  Hear from the teams who built winning autonomous AI solutions.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {feedbackVideos.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-earth"
                >
                  <div className="flex h-40 items-center justify-center rounded-3xl bg-earth-green/10 text-5xl text-earth-green transition group-hover:scale-105">
                    ▶️
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{video.team}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {video.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-earth-green">
                    Watch Video →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResultsPage;
