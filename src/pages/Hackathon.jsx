import React from "react";
// import {motion} from "framer-motion";

const Hackathon = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-[#daa425] mb-2 drop-shadow-lg">
               Technovista Hackathon 2025
            </h1>
            {/* <p className="text-center text-lg sm:text-xl text-yellow-100 font-medium mb-2">
              Two Phases. One Challenge. Unlimited Innovation.
            </p> */}
            <p className="text-gray-400 text-base mt-4">
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
                src="https://www.youtube.com/embed/LCEmiRjPEtQ?si=-7C0O-UcfuTen-ny&amp;start=15" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
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
        
        </div>

        {/* Team Formation */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">👥</span>
              Team Formation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                <span className="font-semibold text-yellow-300 text-lg">Team Size:</span>
                <p className="text-gray-200 mt-1">Strictly 4 members per team</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                <span className="font-semibold text-yellow-300 text-lg">Flexibility:</span>
                <p className="text-gray-200 mt-1">Inter-college, inter-branch, inter-year</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                <span className="font-semibold text-yellow-300 text-lg">Requirement:</span>
                <p className="text-gray-200 mt-1">All members must be Technovista pass holders</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                <span className="font-semibold text-yellow-300 text-lg">Eligibility:</span>
                <p className="text-gray-200 mt-1">Open to students from any college, year, or branch</p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 1 and Phase 2 Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Phase 1 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🔍</span>
              Phase 1: Ideation Round
            </h3>
            
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 mb-6">
              <p className="text-yellow-200 font-semibold mb-3 text-lg flex items-center">
                <span className="mr-2">🗓</span>
                Timeline:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Problem Statements Released:</span>
                  <span className="text-yellow-300 font-semibold">10th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Submission Deadline:</span>
                  <span className="text-yellow-300 font-semibold">25th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Results Announcement:</span>
                  <span className="text-yellow-300 font-semibold">27th July</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <p className="text-yellow-200 font-semibold mb-4 text-lg flex items-center">
                <span className="mr-2">📌</span>
                What You Need to Do:
              </p>
              <ol className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  <span>Submit team and pass ID details via the released form.</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  <div>
                    <p className="mb-2">Prepare a PPT (template provided) and a 6–8 min recorded Zoom presentation with all team members.</p>
                    <p className="text-yellow-300 font-semibold">Submit Google Drive links to:</p>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• The presentation video</li>
                      <li>• The filled-in PPT</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  <div>
                    <p className="font-semibold text-yellow-300 mb-2">Evaluation Criteria:</p>
                    <ul className="ml-4 space-y-1">
                      <li>• Clarity of the idea</li>
                      <li>• Supporting points in PPT</li>
                      <li>• Presentation & communication skills</li>
                    </ul>
                  </div>
                </li>
              </ol>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">⚙️</span>
              Phase 2: Build & Solve
            </h3>
            
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 mb-6">
              <p className="text-yellow-200 font-semibold mb-3 text-lg flex items-center">
                <span className="mr-2">🗓</span>
                Timeline:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Preference Form Released:</span>
                  <span className="text-yellow-300 font-semibold">28th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Form Closes:</span>
                  <span className="text-yellow-300 font-semibold">29th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Problem Assignment:</span>
                  <span className="text-yellow-300 font-semibold">31st July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Hackathon Starts:</span>
                  <span className="text-yellow-300 font-semibold">1st August</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <p className="text-yellow-200 font-semibold mb-4 text-lg flex items-center">
                <span className="mr-2">📌</span>
                Key Info:
              </p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-200">Only shortlisted teams from Phase 1 proceed</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-200">Preference form for Phase 2 problem statements (first-come, first-served)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-200">Phase 2 problem statements are entirely different from Phase 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Finale */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🏁</span>
              Final Hackathon VNR VJIET Campus
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🏢</div>
                <p className="text-yellow-300 font-semibold mb-2">Location</p>
                <p className="text-gray-200">On-site at VNR Campus</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <p className="text-yellow-300 font-semibold mb-2">Problems</p>
                <p className="text-gray-200">4 distinct problem statements</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🎓</div>
                <p className="text-yellow-300 font-semibold mb-2">Support</p>
                <p className="text-gray-200">Dedicated mentor for every team</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">🏆</div>
                <p className="text-yellow-300 font-semibold mb-2">Winners</p>
                <p className="text-gray-200">1 winner per problem statement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Table */}
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">✅</span>
              Summary
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-gray-200">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-yellow-300 font-semibold text-lg">Phase</th>
                    <th className="px-6 py-4 text-yellow-300 font-semibold text-lg">Key Dates</th>
                    <th className="px-6 py-4 text-yellow-300 font-semibold text-lg">Deliverables</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold">Phase 1</td>
                    <td className="px-6 py-4">10–27 July</td>
                    <td className="px-6 py-4">PPT + 6–8 min Zoom video</td>
                  </tr>
                  <tr className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold">Phase 2</td>
                    <td className="px-6 py-4">28 July – 1 Aug (starts)</td>
                    <td className="px-6 py-4">Problem statement-based solution</td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors duration-200">
                    <td className="px-6 py-4 font-semibold">Finale</td>
                    <td className="px-6 py-4">On-site at VNR</td>
                    <td className="px-6 py-4">Live build with mentor support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#daa425]/10 to-yellow-400/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <p className="text-2xl text-yellow-200 font-bold mb-4 flex items-center justify-center">
              <span className="mr-3">🔗</span>
              Stay Ready. Stay Sharp.
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Bring your{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">creativity</span>,{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">coding</span>, and{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">communication</span> skills to the
              table.
            </p>
            <p className="text-xl font-bold text-[#daa425] mb-4">
              Technovista Hackathon 2025
            </p>
            <p className="text-gray-300 text-lg">
              is more than just code it's about turning ideas into impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
