import AudioPlayer from './AudioPlayer';
import VideoPlayer from './VideoPlayer';

export default function Perfil() {
    return (
        <div className="bg-red flex flex-col items-center justify-center min-h-screen px-4 py-8 space-y-8 text-center">

            <h1 className="text-4xl font-bold text-amber-50">Demos</h1>

            <p className="max-w-xl text-lg text-amber-200">
                Escucha algunos de mis últimos trabajos musicales. Puedes reproducir los demos de audio y video directamente desde aquí.
            </p>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 items-center justify-center w-full max-w-4xl">
                <div className="w-full md:w-1/2">
                    <VideoPlayer />
                </div>
                <div className="w-full md:w-1/2">
                    <AudioPlayer />
                </div>
            </div>
        </div>

    )


}
