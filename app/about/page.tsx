import { profile } from "../consts";


export default function About() {
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center mt-9">
        {profile.background.map((line, index) => (
          <p className='pb-5 w-[80%] lg:w-[50%] 2xl:w-[40%] whitespace-pre-line' key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

