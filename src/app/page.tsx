import Image from "next/image";

export default function Home() {
  return (
    //Here We Need To Use This NavBar For Every Page So This May Cause To Duplication Of Code
    //We Need To Avoid This
    //By Using The Feature Of Layouts In Next Js We Can Remove Duplication
    //So Paste It Above Children Component Of Body Part
    <>
      <h1>Welcome to elib client app</h1>
    </>
  );
}
