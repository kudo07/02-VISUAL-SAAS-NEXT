// export function GET() {
//   return Response.json('tst');

import { Feedback } from '@/app/models/Feedback';
import mongoose from 'mongoose';

// }
export async function POST(request) {
  const jsonBody = await request.json();
  const { title, description } = jsonBody;
  const mongoUrl = process.env.MONGO_URL;
  mongoose.connect(mongoUrl);
  await Feedback.create({ title, description });
  return Response.json(jsonBody);
}
// terraform,devops, aws, cicd, docker, kubrenates
