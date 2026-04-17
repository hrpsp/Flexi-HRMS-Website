import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  industry?: string;
  headcount?: string;
  role?: string;
  notes?: string;
  consent?: string;
};

const REQUIRED: (keyof Payload)[] = ["name", "email", "phone", "company", "industry", "headcount", "role"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  for (const field of REQUIRED) {
    const value = body[field];
    if (!value || typeof value !== "string" || value.trim().length === 0) {
      return NextResponse.json({ error: `Missing field: ${field}` }, { status: 400 });
    }
  }

  if (!EMAIL_RE.test(body.email!)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  if (!body.consent) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  // TODO — wire up CRM / email notification
  // For now, log to server and succeed.
  // Replace with HubSpot / Salesforce / Zoho CRM / email integration.
  console.log("[demo-request]", {
    company: body.company,
    email: body.email,
    industry: body.industry,
    headcount: body.headcount,
    role: body.role,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
