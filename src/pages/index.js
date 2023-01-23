import CourseCards from "@/components/CourseCards";
import JobsDisplay from "@/components/JobsDisplay";
import NewsCards from "@/components/NewsCards";
import Presentation from "@/components/Presentation";
import PresentationCards from "@/components/PresentationCard";

export default function Home() {
  return (
    <main>
      <Presentation />
      <PresentationCards />
      <CourseCards />
      <JobsDisplay />
      <NewsCards />
    </main>
  );
}
