import {useState, useEffect} from 'react';
import AudioUploader, {UploadedFile} from './AudioUploader';

interface NewTranscriptOptions {
    onFileUploaded: (file: UploadedFile) => void;
}

export default function NewTranscription({onFileUploaded}: NewTranscriptOptions) {
    const [file, setFile] = useState<UploadedFile | null>(null);

    useEffect(() => {
        if (file) {
            const controller = new AbortController();

            (async () => {
                await fetch('/api/transcriptions', {
                    signal: controller.signal,
                    method: 'POST',
                    body: file,
                });

                onFileUploaded(file);
            })();
    
            return () => controller.abort();
        }
    }, [file]);

    return (
        <AudioUploader onDropAccepted={files => setFile(files[0])} />
    );
}
