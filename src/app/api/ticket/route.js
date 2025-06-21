import { promises as fs } from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "ticketNumber.json");

async function readTicketData() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    const initialData = { ticketNumber: 1 };
    await fs.writeFile(FILE_PATH, JSON.stringify(initialData, null, 2));
    return initialData;
  }
}

async function writeTicketData(data) {
  await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
}

export async function POST(req) {
  const { count } = await req.json();
  const ticketCount = parseInt(count, 10) || 1;

  const data = await readTicketData();
  const startNumber = data.ticketNumber;
  const tickets = Array.from(
    { length: ticketCount },
    (_, i) => startNumber + i
  );

  data.ticketNumber = startNumber + ticketCount;
  await writeTicketData(data);

  return Response.json({ tickets });
}

export async function GET() {
  const data = await readTicketData();
  return Response.json(data);
}
