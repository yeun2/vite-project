export default function Friends() {
  const datas = [
    {
      image: "🧑🏻‍⚕️",
      name: "Bill Rizer",
      job: "Planet Designer",
      invite: true,
      color: "bg-white",
    },
    {
      image: "🤵🏻",
      name: "Genbei Yagy",
      job: "Planet Designer",
      invite: true,
      color: "bg-red-500",
    },
    {
      image: "👨🏻‍✈️",
      name: "Lancy Neo",
      job: "Rogue Corp",
      invite: false,
      color: "bg-teal-400",
    },
    {
      image: "👨🏻‍✈️",
      name: "Konami",
      job: "Xenon Creator",
      invite: true,
      color: "bg-red-500",
    },
    {
      image: "👨🏻‍✈️",
      name: "Bill Rizer",
      job: "planet Desingers",
      invite: true,
      color: "bg-teal-400",
    },
  ];

  return (
    <div className="flex h-[700px] w-full flex-col bg-amber-400 p-6">
      <div className="flex items-center gap-16 mt-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-800 bg-white text-3xl">
          ◀️
        </span>
        <span className="text-center text-[28px] font-semibold">Friends</span>
      </div>
      <div className="mt-11 flex h-[550px] flex-col gap-4">
        <div className="h-10 w-full rounded-xl border-2 border-zinc-950 bg-white flex px-3 items-center justify-between">
          <input
            className="w-full focus-visible:outline-none"
            placeholder="Serch with love ..."
          />
          <span>🔍</span>
        </div>

        {datas.map((item) => {
          return (
            <div className={`friend-card`}>
              <div className="flex items-center gap-2">
                <p
                  className={`h-10 w-10 rounded-full  ${item.color} text-center text-4xl`}
                >
                  {item.image}
                </p>
                <div className="flex flex-col">
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.job}</p>
                </div>
              </div>
              <button
                className={`invite-btn ${item.invite}? bg-amber-400 : bg-slate-950 text-white`}
              >
                invite
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
