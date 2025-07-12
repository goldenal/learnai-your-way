import React, { useRef, useState } from 'react';
import { Button } from './button';
import { Card, CardContent } from './card';
import { Mic, StopCircle, Play } from 'lucide-react';

interface AudioRecorderProps {
  onRecordingComplete?: (audioUrl: string, audioBlob: Blob) => void;
  className?: string;
}

const AudioRecorder: React.FC<AudioRecorderProps> = ({ onRecordingComplete, className }) => {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [error, setError] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    setError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunks.current = [];
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.current.push(event.data);
        }
      };
      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setAudioBlob(blob);
        if (onRecordingComplete) onRecordingComplete(url, blob);
      };
      mediaRecorder.start();
      setRecording(true);
    } catch (err) {
      setError('Microphone access denied or not available.');
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <Card className={className}>
      <CardContent className="flex flex-col items-center gap-4 p-4">
        <div className="flex gap-2">
          {!recording ? (
            <Button onClick={startRecording} variant="outline" type="button">
              <Mic className="w-5 h-5 mr-2" /> Record
            </Button>
          ) : (
            <Button onClick={stopRecording} variant="destructive" type="button">
              <StopCircle className="w-5 h-5 mr-2" /> Stop
            </Button>
          )}
        </div>
        {audioUrl && (
          <audio controls src={audioUrl} className="w-full mt-2" />
        )}
        {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
      </CardContent>
    </Card>
  );
};

export default AudioRecorder; 