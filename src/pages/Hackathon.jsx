import React from "react";
// import {motion} from "framer-motion";

const Hackathon = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#daa425] mb-2 drop-shadow-lg">
               Technovista Hackathon 2025
            </h1>
            <p className="text-lg sm:text-xl text-yellow-100 font-medium mb-2">
              ⚡ Two Phases. One Challenge. Unlimited Innovation.
            </p>
            <p className="text-gray-400 text-base mt-2">
              Heard about{" "}
              <span className="text-[#daa425] font-semibold">Software 3.0</span>?{" "}
              <a
                href="https://www.youtube.com/watch?v=zjkBMFhNj_g"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-yellow-300 hover:text-yellow-400 transition"
              >
                Watch Andrej Karpathy{"'"}s talk at YCombinator
              </a>
            </p>
            <div className="mt-4">
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="bg-yellow-900`/20 hover:bg-yellow-900/30 border border-yellow-600/50 text-yellow-300 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                {showVideo ? "Hide Video" : "Watch Video"}
              </button>
            </div>
            {showVideo && (
              <div className="mt-6 bg-yellow-900/10 border border-yellow-600/30 rounded-xl p-6 shadow-lg">
                <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/zjkBMFhNj_g"
              title="Software 3.0 - Andrej Karpathy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
                </div>
              </div>
            )}
          </div>

          {/* Theme */}
        <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#daa425] mb-2">
            What’s Different?
          </h2>
          <p className="text-gray-200 mb-2">
            This isn’t a regular hackathon — it’s a{" "}
            <span className="text-yellow-300 font-semibold">
              Software 3.0 Hackathon
            </span>
            . The software industry is changing: LLMs are junior devs, AI is
            building everything. In this era, focus on the{" "}
            <span className="text-yellow-300">core problem</span> you’re solving,
            not just the frontend!
          </p>
        </div>

        {/* Team Formation */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#daa425] mb-1">
            👥 Team Formation
          </h3>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>
              <span className="font-semibold text-yellow-300">Team Size:</span>
              {" Strictly 4 members per team"}
            </li>
            <li>
              Teams can be{" "}
              <span className="text-yellow-300">
                inter-college, inter-branch, inter-year
              </span>
            </li>
            <li>All team members must be Technovista pass holders</li>
            <li>Open to students from any college, year, or branch</li>
          </ul>
        </div>

        {/* Phase 1 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#daa425] mb-2">
            🔍 Phase 1: Ideation Round
          </h3>
          <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-lg p-4 mb-2">
            <p className="text-yellow-200 font-semibold mb-1">🗓 Timeline:</p>
            <ul className="list-disc list-inside text-gray-200 text-sm mb-2">
              <li>
                Problem Statements Released:{" "}
                <span className="text-yellow-300">10th July</span>
              </li>
              <li>
                Submission Deadline:{" "}
                <span className="text-yellow-300">25th July</span>
              </li>
              <li>
                Results Announcement:{" "}
                <span className="text-yellow-300">27th July</span>
              </li>
            </ul>
            <p className="text-yellow-200 font-semibold mb-1">
              📌 What You Need to Do:
            </p>
            <ol className="list-decimal list-inside text-gray-200 text-sm space-y-1 mb-2">
              <li>Submit team and pass ID details via the released form.</li>
              <li>
                Prepare a PPT (template provided) and a 6–8 min recorded Zoom
                presentation with all team members.
                <br />
                <span className="text-yellow-300">
                  Submit Google Drive links to:
                </span>
                <ul className="list-disc list-inside ml-5">
                  <li>The presentation video</li>
                  <li>The filled-in PPT</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold text-yellow-300">
                  Evaluation Criteria:
                </span>
                <ul className="list-disc list-inside ml-5">
                  <li>Clarity of the idea</li>
                  <li>Supporting points in PPT</li>
                  <li>Presentation & communication skills</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#daa425] mb-2">
            ⚙ Phase 2: Build & Solve
          </h3>
          <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-lg p-4 mb-2">
            <p className="text-yellow-200 font-semibold mb-1">🗓 Timeline:</p>
            <ul className="list-disc list-inside text-gray-200 text-sm mb-2">
              <li>
                Problem Statement Preference Form Released:{" "}
                <span className="text-yellow-300">28th July</span>
              </li>
              <li>
                Form Closes: <span className="text-yellow-300">29th July</span>
              </li>
              <li>
                Problem Statement Assignment:{" "}
                <span className="text-yellow-300">31st July</span>
              </li>
              <li>
                Phase 2 Hackathon Starts:{" "}
                <span className="text-yellow-300">1st August</span>
              </li>
            </ul>
            <p className="text-yellow-200 font-semibold mb-1">📌 Key Info:</p>
            <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
              <li>Only shortlisted teams from Phase 1 proceed</li>
              <li>
                Preference form for Phase 2 problem statements
                (first-come, first-served)
              </li>
              <li>Phase 2 problem statements are entirely different from Phase 1</li>
            </ul>
          </div>
        </div>

        {/* Finale */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#daa425] mb-2">
            🏁 Final Hackathon VNR VJIET Campus
          </h3>
          <div className="bg-yellow-900/10 border border-yellow-600/30 rounded-lg p-4">
            <ul className="list-disc list-inside text-gray-200 text-sm space-y-1">
              <li>Phase 2 hackathon is on-site at VNR</li>
              <li>Each team gets 1 of 4 distinct problem statements</li>
              <li>Dedicated mentor for every team</li>
              <li>1 winner team per problem statement</li>
            </ul>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-[#daa425] mb-2">✅ Summary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-200 border border-yellow-600/30 rounded-lg">
              <thead className="bg-yellow-900/30 text-yellow-300">
                <tr>
                  <th className="px-4 py-2">Phase</th>
                  <th className="px-4 py-2">Key Dates</th>
                  <th className="px-4 py-2">Deliverables</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-yellow-600/30">
                  <td className="px-4 py-2">Phase 1</td>
                  <td className="px-4 py-2">10–27 July</td>
                  <td className="px-4 py-2">PPT + 6–8 min Zoom video</td>
                </tr>
                <tr className="border-t border-yellow-600/30">
                  <td className="px-4 py-2">Phase 2</td>
                  <td className="px-4 py-2">28 July – 1 Aug (starts)</td>
                  <td className="px-4 py-2">Problem statement-based solution</td>
                </tr>
                <tr className="border-t border-yellow-600/30">
                  <td className="px-4 py-2">Finale</td>
                  <td className="px-4 py-2">On-site at VNR</td>
                  <td className="px-4 py-2">Live build with mentor support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <p className="text-lg text-yellow-200 font-semibold mb-2">
            🔗 Stay Ready. Stay Sharp.
          </p>
          <p className="text-gray-300 mb-4">
            Bring your{" "}
            <span className="text-yellow-300">creativity</span>,{" "}
            <span className="text-yellow-300">coding</span>, and{" "}
            <span className="text-yellow-300">communication</span> skills to the
            table.
            <br />
            <span className="font-bold text-[#daa425]">
              Technovista Hackathon 2025
            </span>
            {" is more than just code — it’s about turning ideas into impact."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
