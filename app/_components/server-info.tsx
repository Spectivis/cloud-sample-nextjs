import { connection } from "next/server";

export async function ServerInfo() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <>
      <span className="state ok">Arrived</span> &middot; waited 1.5 s, rendered{" "}
      <code>{new Date().toISOString().slice(11, 19)} UTC</code>
    </>
  );
}
