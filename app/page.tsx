import { getChatResponse } from "@/util/getChatResponse";
import ReactMarkdown from "react-markdown";
import { Form } from "./Form";

type Source = {
  chunk: string;
  id: string;
  datetime: number;
  name: string;
  avatarUrl: string;
  handle: string;
  text: string;
};

export const maxDuration = 300;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const answer = searchParams.q
    ? await getChatResponse(searchParams.q)
    : { result: "", sources: [] };

  return (
    <main className="flex min-h-screen max-w-screen-lg w-full mx-auto flex-col items-center justify-center gap-8 p-8">
      <img
        alt="DanGPT"
        src="/jsoncohen.png"
        width="200"
        height="200"
        className="rounded-full"
      />
      <Form query={searchParams.q} />
      {searchParams.q && (
        <>
          <div className="grid text-lg gap-4">
            <ReactMarkdown>{answer.result}</ReactMarkdown>
          </div>
          <hr />
          <h2 className="text-2xl font-semibold">Sources</h2>
          <ul className="w-full gap-4 space-y-2">
            {answer.sources.map((source: Source, i) => (
              <div className="bg-gray-300 rounded-md p-2">{source.chunk}</div>
            ))}
          </ul>
        </>
      )}
      <div className="text-xs">
        Even with RAG, this still may be inaccurate.{" "}
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://x.com/dan_abramov2"
        >
          Real Dan
        </a>{" "}
        is always the truest source of information. Built as a side hobby
        project by{" "}
        <a
          className="underline underline-offset-2"
          href="https://x.com/tejaskumar_"
        >
          Tejas
        </a>
        .
      </div>
    </main>
  );
}
