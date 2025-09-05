import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseServiceClient } from "@/lib/supabase/server";

const Body = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  support_type: z.string().optional(),
  preferred_mode: z.string().optional(),
  priority: z.string(),  
  preferred_time: z.string().optional(),
  urgency: z.string().optional(),
  message: z.string().optional(),
  consent_terms: z.boolean(),
  consent_privacy: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const data = Body.parse(json);

    const supabase = supabaseServiceClient();
    const { error } = await supabase.from("consultations").insert(data);
    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Failed to submit" }, { status: 400 });
  }
}
