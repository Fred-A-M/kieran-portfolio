import { profile } from "../consts";


export default function About() {
  return (
    <div className="relative w-screen h-screen">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        {profile.background.map((line, index) => (
          <p className='pb-5 w-[80%] sm:w-[50%] whitespace-pre-line' key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
}

