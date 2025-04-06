import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  courseCode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: String,
  credits: { type: Number, required: true },
  instructor: { type: String, required: true },
  maxStudents: { type: Number, required: true },
  enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, {
  timestamps: true
});

export default mongoose.model('Course', courseSchema);