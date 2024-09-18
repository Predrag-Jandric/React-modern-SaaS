import { SiDatabricks, SiGoogleassistant } from "react-icons/si";

const Insights = () => {
  const insightsData = [
    {
      title: "Productivity Enhancer",
      date: "July 2023",
      icon: SiGoogleassistant,
      description: "Dynamic visibility tools built to drive engagement.",
    },
    {
      title: "Remote Assistance",
      date: "Oct 2024",
      icon: SiDatabricks,
      description: "Dynamic visibility tools built to drive engagement.",
    },
  ];

  return (
    <section className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <h2 className="text-2xl font-bold">Industry Insights</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          corporis alias amet ab sint provident quos vel.{" "}
        </p>
        <div className="flex items-center space-x-2">
          <img className="w-12 h-12 rounded-full object-cover border-4"
            src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1726617600&semt=ais_hybrid"
            alt=""
          />
          <div>
            <h1 className="font-bold text-lg">Michael Runer</h1>
            <p className="text-sm text-gray-400">CEO, founder</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 md:space-y-0">
        {insightsData.map((insight, index) => (
          <div className="w-full p-4 border-4 border-white/50 rounded-xl space-y-4" key={index}>
            <div className="flex justify-between">
              <div className="space-y-2">
                <button className="p-3 rounded-full bg-violet-300 text-violet-800">{insight.icon()}</button>
                <h1 className="text-xl font-bold">{insight.title}</h1>
              </div>
              <p>{insight.date}</p>
            </div>
            <p className="text-lg leading-loose">{insight.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Insights;
