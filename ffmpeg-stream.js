const ffmpeg = require("fluent-ffmpeg");
const ffmpegPath = require("ffmpeg-static");
const readline = require("readline");
ffmpeg.setFfmpegPath(ffmpegPath);

const liveVideoURL = "";

const formatsAudio = ["mp3", "wav", "aac", "ogg"];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionFormat = `🔉 Choisissez le format de sortie audio :\n${formatsAudio
  .map((format, index) => `${index + 1}. ${format}`)
  .join("\n")}\n`;

rl.question(questionFormat, (answerIndex) => {
  const selectedFormatIndex = parseInt(answerIndex) - 1;
  if (selectedFormatIndex >= 0 && selectedFormatIndex < formatsAudio.length) {
    const selectedFormat = formatsAudio[selectedFormatIndex];
    console.log("👷 Extraction audio en cours...");
    console.log("🛑 Ctrl + C pour arrêter l'extraction.");
    extraireAudio(selectedFormat);
  } else {
    console.error("❌ Format audio invalide.");
    rl.close();
  }
});

function extraireAudio(format) {
  const outputAudioPath = `./audios/ffmpeg-stream/audio_${Date.now()}.${format}`;
  ffmpeg(liveVideoURL)
    .output(outputAudioPath)
    .noVideo()
    .on("end", () => {
      console.log("✅ Extraction audio terminée.");
      rl.close();
    })
    .on("error", (err) => {
      console.error("❌ Erreur lors de l'extraction audio:", err);
      rl.close();
    })
    .run();
}
