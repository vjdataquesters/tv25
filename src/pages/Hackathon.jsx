import React from "react";
import FooterTV from "../components/FooterTV";
import NavbarTv from "../components/NavbarTv";
const Hackathon = () => {
  const [showVideo, setShowVideo] = React.useState(false); // Show video by default
  return (<>
    <div className="bg-black min-h-screen text-white font-sans pt-12">
      <NavbarTv />
      <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-[#daa425] mb-2 drop-shadow-lg">
               Technovista Hackathon 2025
            </h1>              
            <div className="mt-4">
<p className="text-gray-200 text-lg leading-relaxed p-4">
            This isn&apos;t a regular hackathon — it&apos;s a{" "}
            <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
              Software 3.0 Hackathon
            </span>
            . The software industry is changing: LLMs are junior devs, AI is
            building everything. In this era, focussing on the{" "}
            <span className="text-yellow-300 font-semibold">core problem</span> that you are solving is important
          </p>
                    {/* Info about Software 3.0 */}
          <div className="mt-6 rounded-xl p-6 shadow-lg">
            <div className="flex items-start space-x-3">
              <div className="text-blue-400 text-2xl mt-1">
                ℹ️
              </div>
              <div>
                <h4 className="text-blue-300 font-semibold text-lg mb-2">Don't know about Software 3.0?</h4>
                <p className="text-gray-200 leading-relaxed">
                  I don't know what about software 3.0, I wanna learn about it
                </p>
              </div>
            </div>
          </div>
              <button
                onClick={() => setShowVideo(!showVideo)}
                className="bg-yellow-900`/20 hover:bg-yellow-900/30 border border-yellow-600/50 text-yellow-300 px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                {showVideo ? "Hide Video" : "Show Video"}
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

       

        {/* Team Formation */}
         <div className="mb-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
            <span className="mr-3">💰</span>
            Prize Pool
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <p className="text-yellow-300 font-semibold mb-2 text-xl">Total Prize Pool</p>
              <p className="text-gray-200 text-3xl font-bold">₹30,000</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <div className="text-3xl mb-3 text-center">🎯</div>
              <p className="text-yellow-300 font-semibold mb-3 text-lg">Prize Distribution</p>
              <p className="text-gray-200 leading-relaxed">
                Each problem statement will have one winner, and the prize pool will be split equally among all the problem statement winners.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3"></span>
              Team Formation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4">
                <span className="font-semibold text-yellow-300 text-lg">Team Size:</span>
                <p className="text-gray-200 mt-1 text-4xl">4</p>
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
              <span className="mr-3"></span>
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
                <span className="mr-2"></span>
                What You Need to Do:
              </p>
              <ol className="space-y-3 text-gray-200">
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                  <span>Pick a problem statement when they are released, form a team, prepare PPT, and record a 6-8 min presentation video ( Zoom is convenient for this ).</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                  <div>
                    <p className="mb-2">Then fill the submission form which requires:</p>
                    <ul className="ml-4 mt-1 space-y-1">
                      <li>• Team Name</li>
                      <li>• Team members details</li>
                      <li>• The presentation video (Uploaded to drive)</li>
                      <li>• PPT file link</li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                  <div><p className="mb-2">Wait for the results</p></div>
                  {/*
                  MEtrics phase 1
                  <div>
                    <ul className="ml-4 space-y-1">
                      <li>• Clarity of the idea</li>
                      <li>• Supporting points in PPT</li>
                      <li>• Presentation & communication skills</li>
                    </ul>
                  </div> */}
                </li>
              </ol>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3"></span>
              Phase 2: Build & Solve
            </h3>
            
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 mb-6">
              <p className="text-yellow-200 font-semibold mb-3 text-lg flex items-center">
                <span className="mr-2">🗓</span>
                Timeline:
              </p>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Problem statements Released:</span>
                  <span className="text-yellow-300 font-semibold">28th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Preference Form:</span>
                  <span className="text-yellow-300 font-semibold">28th July - 29th July</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 rounded-lg p-3">
                  <span className="text-gray-300">Problem Statement Assignment:</span>
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
                <span className="mr-2"></span>
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

        {/* Finale
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
        </div> */}

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
          </div>
        </div>
      </div>
    </div>
        <FooterTV/>
        </>
  );
};

export default Hackathon;
