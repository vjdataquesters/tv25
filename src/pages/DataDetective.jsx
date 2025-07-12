import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DataDetective = () => {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = React.useState(false);

  return (
    <div className="bg-black min-h-screen text-white font-sans pt-12">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-10">
          <div className="relative text-center mb-4">
            <ArrowLeft
              onClick={() => navigate("/technovista/events")}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 hover:text-yellow-500 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-[#daa425] mb-2 drop-shadow-lg">
            🕵️‍♀️ Data Detective
          </h1>
          <p className="text-center text-lg text-gray-300 mb-6">
            As part of Technovista – The Technical Fest
          </p>
          <div className="mt-4">
            <p className="text-gray-200 text-lg leading-relaxed p-4 text-justify">
              Data Detective is a hands-on, problem-solving challenge where
              participants act as{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                "data detectives"
              </span>
              . Each team receives a dataset and a corresponding{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                mystery/crime/problem scenario
              </span>
              . They are expected to analyze the data, uncover hidden patterns
              or insights, and submit a structured report with their findings.
              This event tests both{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                analytical depth
              </span>{" "}
              and{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                creative storytelling
              </span>{" "}
              based on data.
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">📅</div>
            <p className="text-yellow-300 font-semibold mb-2 text-xl">Date</p>
            <p className="text-gray-200 text-lg font-bold">31st July 2025</p>
            <p className="text-gray-300 text-sm">(Thursday)</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">🕙</div>
            <p className="text-yellow-300 font-semibold mb-2 text-xl">Time</p>
            <p className="text-gray-200 text-lg font-bold">
              10:00 AM – 1:00 PM
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">💰</div>
            <p className="text-yellow-300 font-semibold mb-2 text-xl">
              Prize Pool
            </p>
            <p className="text-gray-200 text-lg font-bold">₹2,500</p>
          </div>
        </div>

        {/* Team Formation */}
        <div className="mb-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
            <span className="mr-3">👥</span>
            Team Formation & Participation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">👤</span>
                <span className="font-semibold text-yellow-300 text-lg">
                  Team Size:
                </span>
              </div>
              <p className="text-gray-200 text-2xl font-bold">
                3 members per team
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🏆</span>
                <span className="font-semibold text-yellow-300 text-lg">
                  Total Teams:
                </span>
              </div>
              <p className="text-gray-200 text-2xl font-bold">40 teams</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🎯</span>
                <span className="font-semibold text-yellow-300 text-lg">
                  Total Participants:
                </span>
              </div>
              <p className="text-gray-200 text-2xl font-bold">
                120 participants
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🎫</span>
                <span className="font-semibold text-yellow-300 text-lg">
                  Eligibility:
                </span>
              </div>
              <p className="text-gray-200 text-lg">
                All participants must hold a Technovista Pass
              </p>
            </div>
          </div>
        </div>

        {/* Tools & Skills and Event Type Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tools & Skills */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🧰</span>
              Tools & Skills You Can Use
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🤖</span>
                  <p className="text-yellow-300 font-semibold">
                    Machine Learning
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  Advanced algorithms for pattern recognition
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📊</span>
                  <p className="text-yellow-300 font-semibold">
                    Data Visualization
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  Power BI, Tableau, and other tools
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🐍</span>
                  <p className="text-yellow-300 font-semibold">Programming</p>
                </div>
                <p className="text-gray-200 text-sm">
                  Data analysis using Python or R
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📈</span>
                  <p className="text-yellow-300 font-semibold">
                    Statistical Analysis
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  Exploratory Data Analysis techniques
                </p>
              </div>
            </div>
          </div>

          {/* Event Type & What Makes It Special */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              What Makes This Event Special
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🔍</span>
                  <p className="text-yellow-300 font-semibold">
                    Mystery Scenarios
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  Each team gets a unique crime/mystery to solve
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">📝</span>
                  <p className="text-yellow-300 font-semibold">Storytelling</p>
                </div>
                <p className="text-gray-200 text-sm">
                  Combine data analysis with creative narrative
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">🏆</span>
                  <p className="text-yellow-300 font-semibold">
                    Real-world Application
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  Apply data science to practical problem-solving
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">⚡</span>
                  <p className="text-yellow-300 font-semibold">
                    Time Challenge
                  </p>
                </div>
                <p className="text-gray-200 text-sm">
                  3-hour intensive problem-solving session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Event Process */}
        <div className="mb-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
          <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
            <span className="mr-3">📋</span>
            Event Process
          </h3>
          <div className="space-y-4">
            {[
              {
                number: "1",
                title: "Registration",
                description:
                  "A Google Form will be released for team registrations. Teams must register with accurate member information.",
              },
              {
                number: "2",
                title: "WhatsApp Group Addition",
                description:
                  "All registered teams will be added to an official WhatsApp group for event-related updates.",
              },
              {
                number: "3",
                title: "Problem Statement Allocation",
                description:
                  "Each team will receive a unique dataset and mystery/crime scenario. These will be shared via a document on 30th July 2025.",
              },
              {
                number: "4",
                title: "Sample Template & Example Sharing",
                description:
                  "A submission template will be shared on 30th July 2025, which teams must strictly follow. A solved example will also be provided for clarity.",
              },
              {
                number: "5",
                title: "Event Day Execution",
                description:
                  "Teams analyze their assigned data, work on solving the problem, and prepare their reports using the shared template. Each team presents their solution to the evaluation panel.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6"
              >
                <div className="flex items-start">
                  <span className="bg-[#daa425] text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-yellow-300 font-semibold mb-2 text-lg">
                      {step.title}
                    </h4>
                    <p className="text-gray-200">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submission Guidelines and Communication Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Submission Guidelines */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">📤</span>
              Submission Guidelines
            </h3>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 mb-6">
              <p className="text-yellow-200 font-semibold mb-4 text-lg">
                Your submission must include:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Assigned Problem Statement
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Tools & Techniques Used
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Data Analysis Process
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Visualizations & Graphs
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Final Insights/Conclusions
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <p className="text-yellow-200 font-semibold mb-3 text-lg">
                Evaluation Process:
              </p>
              <p className="text-gray-200">
                Submit your report and present your work to the evaluation
                panel.
              </p>
            </div>
          </div>

          {/* Communication Channel */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">📲</span>
              Communication Channel
            </h3>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6 mb-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">💬</div>
                <p className="text-yellow-300 font-semibold text-lg">
                  WhatsApp Group
                </p>
              </div>
              <p className="text-gray-200 text-center text-sm">
                All registered participants will be added to a WhatsApp group
                for official communications.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-6">
              <p className="text-yellow-200 font-semibold mb-3 text-lg">
                What you'll receive:
              </p>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Problem statements
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Templates & examples
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Instructions & updates
                </li>
                <li className="flex items-center">
                  <span className="text-yellow-300 mr-2">•</span>
                  Important announcements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline and Skills Required Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Timeline */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🗓️</span>
              Important Timeline
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📋</span>
                    <div>
                      <p className="text-yellow-300 font-semibold">
                        Problem Release
                      </p>
                      <p className="text-gray-400 text-sm">
                        Statements & Templates
                      </p>
                    </div>
                  </div>
                  <span className="text-yellow-300 font-semibold">
                    30th July
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📄</span>
                    <div>
                      <p className="text-yellow-300 font-semibold">
                        Sample Materials
                      </p>
                      <p className="text-gray-400 text-sm">
                        Templates & Examples
                      </p>
                    </div>
                  </div>
                  <span className="text-yellow-300 font-semibold">
                    30th July
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🚀</span>
                    <div>
                      <p className="text-yellow-300 font-semibold">Event Day</p>
                      <p className="text-gray-400 text-sm">
                        10:00 AM - 1:00 PM
                      </p>
                    </div>
                  </div>
                  <span className="text-yellow-300 font-semibold">
                    31st July
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Required */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:bg-white/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#daa425] mb-6 flex items-center">
              <span className="mr-3">🎯</span>
              Skills That Will Help You Win
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <p className="text-yellow-300 font-semibold">
                      Critical Thinking
                    </p>
                    <p className="text-gray-400 text-sm">
                      Analytical problem-solving approach
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <p className="text-yellow-300 font-semibold">
                      Data Analysis
                    </p>
                    <p className="text-gray-400 text-sm">
                      Pattern recognition & insights
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎨</span>
                  <div>
                    <p className="text-yellow-300 font-semibold">
                      Creative Storytelling
                    </p>
                    <p className="text-gray-400 text-sm">
                      Narrative building from data
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-yellow-600/10 to-yellow-400/5 backdrop-blur-lg border border-yellow-400/20 rounded-xl p-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🎤</span>
                  <div>
                    <p className="text-yellow-300 font-semibold">
                      Presentation Skills
                    </p>
                    <p className="text-gray-400 text-sm">
                      Clear communication of findings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#daa425]/10 to-yellow-400/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <p className="text-2xl text-yellow-200 font-bold mb-4 flex items-center justify-center">
              <span className="mr-3">🔍</span>
              Ready to Solve the Mystery?
            </p>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed text-justify">
              Put on your detective hat and bring your{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                analytical skills
              </span>
              ,{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                creativity
              </span>
              , and{" "}
              <span className="text-yellow-300 font-semibold bg-yellow-300/20 px-2 py-1 rounded-lg">
                storytelling
              </span>{" "}
              abilities to uncover the truth hidden in the data.
            </p>
            <p className="text-xl font-bold text-[#daa425] mb-4">
              🕵️‍♀️ Data Detective - Technovista 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDetective;
