import Transcription from './Transcription';

export default function parseTranscription(rawTranscription: string): Transcription {
    const transcription: Transcription = JSON.parse(rawTranscription);
    transcription.date = new Date(transcription.date);

    return transcription;
}