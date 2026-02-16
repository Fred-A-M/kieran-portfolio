import { profile } from "../consts";
import FadeInPage from '../components/FadeInPage';


export default function About() {
  return (
    <FadeInPage>
      <div className="relative w-screen min-h-dvh flex justify-center">
          <div className="flex flex-col items-center justify-center pt-15 sm:pt-10">
            {profile.background.map((line, index) => (
              <p className='pb-5 w-[80%] lg:w-[50%] 2xl:w-[40%] whitespace-pre-line' key={index}>{line}</p>
            ))}
          </div>
      </div>
    </FadeInPage>
  );
}

