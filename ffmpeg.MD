# Audio Extract

Ce script utilise la bibliothèque `fluent-ffmpeg` pour extraire l'audio d'une vidéo.

## Installation

Assurez-vous d'avoir Node.js installé sur votre machine.

1. Clonez ce dépôt.
2. Accédez au répertoire du projet : `cd audio-extract`.
3. Installez les dépendances : `npm install`.

## Utilisation

1. Placez votre vidéo dans un répertoire, par exemple `videos/mp4`, et nommez-la `video.mp4`.
2. Renseignez le chemin du fichier dans la variable `inputVideoPath`.
3. Exécutez le script : `npm run ffmpeg.js`.
4. Choisissez le format de sortie parmi les propositions.
5. L'audio extrait sera enregistré dans le répertoire `audios` avec un nom de fichier unique basé sur la date et l'extension spécifiée.
