export default function Picture() {
  const datas = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
  return (
    <div className="flex h-[700px] w-full flex-col bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-zinc-800 text-3xl">
        ✕
      </div>
      <p className="text-center text-[18px] font-bold text-gray-700">
        SIMPLE TAG
      </p>
      <p className="text-center text-[32px] font-extrabold">
        Work with best desingers
      </p>
      <div className="mt-[30px] grid grid-cols-2 gap-3">
        {datas.map((item) => {
          return (
            <div className="tag-card" key={item.id}>
              🂡
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex h-12 w-full items-center justify-center rounded-xl border bg-blue-700 text-center font-bold text-white">
        Let`s get it done
      </div>
    </div>
  );
}
