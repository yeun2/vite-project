import Friends from "./Friends";
import Picture from "./Picture";
import Weather from "./Weather";

export default function Index() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-fuchsia-50 p-20">
      <div className="grid grid-cols-3 gap-7">
        <Weather />
        <Picture />
        <Friends />
      </div>
    </div>
  );
}
