export default function Weather() {
  const datas = [
    {
      city: "Casius",
      time: "mars, 12AM",
      weather: "🌧️",
      temperature: "85°",
      color: "bg-white",
    },
    {
      city: "Dlacria",
      time: "mars, 12AM",
      weather: "🌧️",
      temperature: "85°",
      color: "bg-amber-400",
    },
    {
      city: "New York",
      time: "USA, 12AM",
      weather: "🌞",
      temperature: "85°",
      color: "bg-teal-400",
    },
    {
      city: "Zomato",
      time: "India, 12AM",
      weather: "🌧️",
      temperature: "85°",
      color: "bg-red-500",
    },
  ];
  return (
    <div>
      <div className="flex h-[700px] w-full flex-col gap-4 bg-white p-6">
        <div className="mb-6 text-5xl font-semibold">weather</div>
        {datas.map((data, index) => {
          return (
            <div key={index} className={`weather-card ${data.color}`}>
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-extrabold">{data.city}</p>
                <p className="font-medium">{data.time}</p>
              </div>
              <div className="flex gap-2">
                <div className="text-4xl">{data.weather}</div>
                <div className="text-4xl font-extrabold">
                  {data.temperature}
                </div>
              </div>
            </div>
          );
        })}
        <div className="m-auto flex h-12 w-12 pt-0 justify-center rounded-full border-2 border-zinc-800 text-3xl">
          +
        </div>
      </div>
    </div>
  );
}
