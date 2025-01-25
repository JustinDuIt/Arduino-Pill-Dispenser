import ProjectOverview from "./components/ProjectOverview"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Arduino-based Smart Dispenser Project</h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore the intersection of hardware and software in automated dispensing
        </p>
        <div className="flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="/instructions">
              Get Started <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/components">View Components</Link>
          </Button>
        </div>
      </section>
      <ProjectOverview />
      <section>
        <h2 className="text-2xl font-semibold mb-4">Explore Further</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ExploreCard
            title="Components"
            description="Discover the hardware that powers this project"
            link="/components"
          />
          <ExploreCard
            title="Schedules"
            description="Learn about configurable dispensing intervals"
            link="/schedules"
          />
          <ExploreCard
            title="Instructions"
            description="Step-by-step guide to build your own smart dispenser"
            link="/instructions"
          />
        </div>
      </section>
    </div>
  )
}

function ExploreCard({ title, description, link }) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="ghost">
          <Link href={link}>
            Learn More <ArrowRight className="ml-2" size={16} />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

