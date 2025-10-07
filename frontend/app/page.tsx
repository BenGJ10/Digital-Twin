import Twin from '@/components/twin';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-3">
              Personal Digital Twin
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              Connect with your personal AI companion, designed to reflect your unique personality and insights.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Twin />
          </div>

          <footer className="mt-10 text-center text-sm text-gray-500">
            <p>Powered by GJ | Built with Next.js & FastAPI</p>
          </footer>
        </div>
      </div>
    </main>
  );
}