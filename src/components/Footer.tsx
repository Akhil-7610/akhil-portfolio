import Link from "next/link";
import Socials from "./Socials";
import MusicPlayer from "./MusicPlayer";

export default function Footer() {
  return (
    <footer className="w-full pt-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-8 pb-20 sm:flex-row-reverse sm:justify-between">
        <Socials />
        <section className="mt-8 text-center sm:mt-0 sm:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()}{" "}
            <Link className="link" href="/">
              akkiwebdev.in
            </Link>{" "}
            |{" "}
            <Link className="link font-bold" href="/privacy">
              privacy?
            </Link>
          </p>
          {/* <div className="mt-2">
            <MusicPlayer showLastPlayed={true} />
          </div> */}
        </section>
      </div>
    </footer>
  );
}
