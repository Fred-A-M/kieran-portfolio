import { profile } from "../consts";


export default function Contact() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center "
    >
      {profile.background.map((line, index) => (
        <p className='py-3 w-[80%] sm:w-[50%] ' key={index}>{line}</p>
      ))}
    </div>
  );
}

