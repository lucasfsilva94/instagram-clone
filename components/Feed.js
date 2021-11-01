import Stories from '../components/Stories'
import Posts from '../components/Posts'
import MiniProfile from '../components/MiniProfile'
import Suggestions from '../components/Suggestions'

function Feed() {
  return (
    <main className="grid grid-cols-1 
                     md:grid-cols-1 md:max-w-screen-md
                     xl:grid-cols-3 xl:max-w-6xl 
                     mx-auto">
      
      <section className="xl:col-span-2">
        <Stories />
        <Posts  />
      </section>

      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-20 ml-20">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>        
    </main>
  )
}


export default Feed
