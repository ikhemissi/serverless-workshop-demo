import React from 'react';
import {useDropzone, DropzoneOptions, FileWithPath} from 'react-dropzone';

export default function AudioUploader({onDropAccepted}: Pick<DropzoneOptions, 'onDropAccepted'>) {
  const {
    getRootProps,
    getInputProps
  } = useDropzone({
    onDropAccepted,
    accept: {
      'audio/wav': [],
      'audio/wave': []
    }
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag and drop an audio file here, or click to select it from your computer</p>
        <em>Only *.wav files will be accepted</em>
      </div>
    </section>
  );
}

export type UploadedFile = FileWithPath
