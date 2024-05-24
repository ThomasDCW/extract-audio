# Audio Extract

Ce script utilise la bibliothèque `fluent-ffmpeg` pour extraire l'audio d'une vidéo.

## Installation

Assurez-vous d'avoir Node.js installé sur votre machine.

1. Clonez ce dépôt
2. Accédez au répertoire du projet : `cd audio-extract`
3. Installez les dépendances : `npm install`

## Utilisation

1. Placez votre vidéo dans un répertoire par exemple `videos/mp4` puis et nommez-la `video.mp4`.
2. Exécutez le script : `npm run ffmpeg-stream.js`
3. Choisissez le format de sortie parmit les propositions.
4. L'audio extrait sera enregistré dans le répertoire `audios` avec un nom de fichier unique basé sur la date et l'extension spécifiée.
