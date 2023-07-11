import './App.css'
import Hero from './components/Hero'
import { Availability, Colors, Music, Team, Todo } from './components/features/card';
import FeatureTitle from './components/features/title';

const features = [
  {
    title: "Use your calendar as a todo-list",
    id: "todo-list",
    card: Todo
  },
  {
    title: "Instantly sync your files",
    id: "file-sync",
    card: Colors
  },
  {
    title: "Collaborate with team members in real-time",
    id: "team-collaboration",
    card: Team
  },
  {
    title: "Easily manage your social media accounts",
    id: "social-media-management",
    card: Music
  },
  {
    title: "Effortlessly track your expenses",
    id: "expense-tracking",
    card: Availability
  }
];

function App() {

  return (
    <div className='mx-auto max-w-6xl px-4'>
      <Hero />
      <div className='flex w-full items-start gap-20'>
        <div className='w-full py-[50vh]'>
          <ul>
            {features.map((feature) => (
              <li key={feature.id}>
                <FeatureTitle id={feature.id}>
                  {feature.title}
                </FeatureTitle>
              </li>
            ))}
          </ul>
          
        </div>
        <div className='w-full sticky top-0 flex h-screen items-center'>
          <div className='relative w-full aspect-square rounded-2xl bg-gray-100'>
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id}/>
            ))}
          </div>
        </div>
      </div>
      <div className='h-screen'>
        More scrolling
      </div>
    </div>
  )
}

export default App
