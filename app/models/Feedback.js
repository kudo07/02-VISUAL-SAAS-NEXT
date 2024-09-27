import { model, models, Schema } from 'mongoose';
const feedbackSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    // ip: { type: String, required: true },
  },
  { timestamps: true }
);

export const Feedback = models?.Feedback || model('Feedback', feedbackSchema);
