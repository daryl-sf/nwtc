import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NWTC | Buncrana Duathlon",
  description:
    "The Buncrana Duathlon is a great way to start the season. Taking place in the beautiful town of Buncrana, the duathlon consists of a 3.2km run, 16km bike and a 3.2km run. The course is flat and fast and is perfect for beginners and seasoned athletes alike.",
};
export default function BuncranaDuathlon() {
  return (
    <main>
      <section>
        <h1>Buncrana Duathlon</h1>
        <p>
          The Buncrana Duathlon is a great way to start the season. Taking place
          in the beautiful town of Buncrana, the duathlon consists of a 3.2km
          run, 16km bike and a 3.2km run. The course is flat and fast and is
          perfect for beginners and seasoned athletes alike.
        </p>
      </section>
    </main>
  );
}
