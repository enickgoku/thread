import { fetchPosts } from "@/lib/actions/thread.actions";

export default async function Home() {
  const result = await fetchPosts(1, 30);

  console.log(result);

  return (
    <div>
      <h1 className="head-text text-left">Threads for music people only</h1>
    </div>
  );
}
