import { mkdirSync, writeFileSync } from "node:fs";

const outputDirectory = new URL("../assets/audio/", import.meta.url);
mkdirSync(outputDirectory, { recursive: true });

function createWav(filename, notes, bpm, ambience = 0, duration = 16) {
  const sampleRate = 22050;
  const samples = sampleRate * duration;
  const buffer = Buffer.alloc(44 + samples * 2);
  buffer.write("RIFF", 0); buffer.writeUInt32LE(36 + samples * 2, 4); buffer.write("WAVE", 8);
  buffer.write("fmt ", 12); buffer.writeUInt32LE(16, 16); buffer.writeUInt16LE(1, 20); buffer.writeUInt16LE(1, 22);
  buffer.writeUInt32LE(sampleRate, 24); buffer.writeUInt32LE(sampleRate * 2, 28); buffer.writeUInt16LE(2, 32); buffer.writeUInt16LE(16, 34);
  buffer.write("data", 36); buffer.writeUInt32LE(samples * 2, 40);
  const beat = 60 / bpm;
  for (let index = 0; index < samples; index++) {
    const time = index / sampleRate;
    const noteIndex = Math.floor(time / beat) % notes.length;
    const phase = (time % beat) / beat;
    const frequency = notes[noteIndex];
    const envelope = Math.exp(-phase * 3.1) * (0.78 + 0.22 * Math.sin(Math.PI * phase));
    const tone = Math.sin(2 * Math.PI * frequency * time) * .52 + Math.sin(2 * Math.PI * frequency * 2 * time) * .16 + Math.sin(2 * Math.PI * frequency * .5 * time) * .16;
    const shimmer = ambience * Math.sin(2 * Math.PI * (frequency * 3.01) * time) * .12;
    const value = Math.max(-1, Math.min(1, (tone + shimmer) * envelope * .42));
    buffer.writeInt16LE(Math.round(value * 32767), 44 + index * 2);
  }
  writeFileSync(new URL(filename, outputDirectory), buffer);
}

createWav("lan-dau-tien.wav", [261.63, 329.63, 392.0, 523.25, 440.0, 392.0, 329.63, 293.66], 88, .2, 16);
createWav("cua-so-mau-xanh.wav", [196.0, 246.94, 293.66, 369.99, 293.66, 246.94, 220.0, 246.94], 76, .34, 18);
createWav("mo-ve-mot-ngay.wav", [220.0, 277.18, 329.63, 440.0, 493.88, 440.0, 329.63, 277.18], 96, .12, 14);
