const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const readline = require("readline");
ffmpeg.setFfmpegPath(ffmpegPath);

const inputVideoPath = "./videos/mp4/video.mp4";

const formatsAudio = ["mp3", "wav"];
const audioCodecs = {
  mp3: "libmp3lame",
  wav: "pcm_s16le",
  aac: "aac",
  ogg: "libvorbis",
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🔉 Début de l'extraction de l'audio");

const questionFormat = `🔉 Choisissez le format de sortie audio :\n${formatsAudio
  .map((format, index) => `${index + 1}. ${format}`)
  .join("\n")}\n`;

rl.question(questionFormat, (answerIndex) => {
  const selectedFormatIndex = parseInt(answerIndex) - 1;
  if (selectedFormatIndex >= 0 && selectedFormatIndex < formatsAudio.length) {
    const selectedFormat = formatsAudio[selectedFormatIndex];
    const audioCodec = audioCodecs[selectedFormat];
    extractAudio(inputVideoPath, selectedFormat, audioCodec)
      .then((audioPath) => {
        console.log(`✅ Audio extrait avec succès: ${audioPath}`);
      })
      .catch((err) => {
        console.error("Erreur:", err);
      })
      .finally(() => {
        rl.close();
      });
  } else {
    console.error("❌ Format audio invalide.");
    rl.close();
  }
});

function extractAudio(input, format = "mp3", audioCodec = "libmp3lame") {
  const outputAudioPath = `./audios/ffmpeg/audio_${Date.now()}.${format}`;
  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .noVideo()
      .format(format)
      .audioCodec(audioCodec)
      .output(outputAudioPath)
      .on("end", () => {
        console.log("✅ Extraction terminée");
        resolve(outputAudioPath);
      })
      .on("error", (err) => {
        console.error("❌ Erreur lors de l'extraction de l'audio:", err);
        reject(err);
      })
      .run();
  });
}
