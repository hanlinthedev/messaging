import { VideoFeed } from './components/VideoFeed';
import { useLocalCameraStream } from './hooks/useLocalCameraStream';

export default function App() {
  const { localStream } = useLocalCameraStream();

  if (!localStream) {
    return null;
  }

  return <VideoFeed mediaStream={localStream} isMuted={true} />;
}
