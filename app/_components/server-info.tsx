import { connection } from "next/server";

export async function ServerInfo() {
  await connection();
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <ul>
      <li>Rendered at {new Date().toISOString()}</li>
      <li>Node {process.version}</li>
      <li>Listening on {process.env.HOSTNAME ?? "default host"}, port {process.env.PORT ?? "3000"}</li>
    </ul>
  );
}
