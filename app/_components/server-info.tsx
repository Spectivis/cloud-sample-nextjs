import { connection } from "next/server";

export async function ServerInfo() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <dl className="status">
      <div>
        <dt>Streamed</dt>
        <dd>
          <span className="state ok">Arrived.</span> This block waited 1.5 seconds on the server, then
          streamed in.
        </dd>
      </div>
      <div>
        <dt>Rendered at</dt>
        <dd>
          <code>{new Date().toISOString()}</code>
        </dd>
      </div>
    </dl>
  );
}
