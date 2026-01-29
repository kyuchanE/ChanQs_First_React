import { TopBar } from "@/presentation/components/TopBar";
import { Footer } from "@/presentation/components/Footer";
import { HomeContents } from "@/presentation/components/home/HomeContents";

export default function HomePage() {
  return (
    <main className="relative min-h-screen max-w-screen bg-white">
      {/* TopBar */}
      <TopBar />
      <div id="topbar-sentinel" className="h-0.1 w-full bg-transparent" />

      <HomeContents />

    </main>
  );
}
