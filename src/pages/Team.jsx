import { faculty, coreteam, actionteam } from "../data/team";
import Reveal from "../components/Reveal";

const PersonDiv = ({ name, role, image, linkedin }) => {
  return (
    <div className="flex flex-col justify-around m-4 p-4 min-w-[17rem] min-h-60 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-all duration-300">
      <p className="text-left p-[2px] w-full mb-2 text-lg font-medium">
        {role}
      </p>
      <img
        className="w-52 h-52 rounded-[20%] mx-auto"
        src={image ? image : "https://picsum.photos/200"}
        alt={name}
      />
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <p className="px-[2px] text-right w-full mt-2 hover:underline">
          {name}
        </p>
      </a>
    </div>
  );
};

export default function Team() {
  return (
    <div className="w-full py-20 px-4 text-center">
      <section className="mb-16">
        <h1 className="font-semibold text-3xl mb-2">Who are we?</h1>
        <p className="text-lg text-gray-600 mb-8">The people behind DQ</p>
        <div className="mx-auto flex flex-wrap justify-center max-w-7xl">
          {faculty.map((member, index) => (
            <PersonDiv
              key={index}
              name={member.name}
              role={member.role}
              image={member.image ? `teamImages/${member.image}` : undefined}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h1 className="font-semibold text-3xl mb-8" id="coreteam">
          Core Team
        </h1>
        <div className="mx-auto flex flex-wrap justify-center max-w-7xl">
          {coreteam.map((member, index) => (
            <Reveal key={index}>
              <PersonDiv
                name={member.name}
                role={member.role || "Team Member"}
                image={member.image ? `teamImages/${member.image}` : undefined}
                linkedin={member.linkedin}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <h1 className="font-semibold text-3xl mb-8" id="actionteam">
          Action Team
        </h1>
        <div className="mx-auto flex flex-wrap justify-center max-w-7xl">
          {actionteam.map((member, index) => (
            <Reveal key={index}>
              <PersonDiv
                name={member.name}
                role={member.domain || "Team Member"}
                image={
                  member.image
                    ? `teamImages/actionteam/${member.image}`
                    : undefined
                }
                linkedin={member.linkedin}
              />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
