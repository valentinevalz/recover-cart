import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    await dbConnect();
    const existing = await User.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 });
    }

    const user = new User({ name, email, password });
    await user.save();

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (err) {
    console.error("Register error:", err);
    return new Response(JSON.stringify({ error: "Server error" }), { status: 500 });
  }
}