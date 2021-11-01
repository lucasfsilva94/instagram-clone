import Post from './Post';

const posts = [
  { 
    id: '1',
    username: 'lucasfsilva',
    userImg: 'https://randomuser.me/api/portraits/men/43.jpg',
    img: 'https://source.unsplash.com/user/erondu',
    caption: 'This is DOPE!',
  },
  { 
    id: '2',
    username: 'Laron_McDermott',
    userImg: 'https://randomuser.me/api/portraits/women/43.jpg',
    img: 'https://source.unsplash.com/random',
    caption: 'This is DOPE!',
  },
  { 
    id: '3',
    username: 'Kareem_Schultz',
    userImg: 'https://randomuser.me/api/portraits/women/22.jpg',
    img: 'https://source.unsplash.com/collection/190727',
    caption: 'This is DOPE!',
  },    
]

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} 
              id={post.id} 
              username={post.username} 
              userImg={post.userImg}
              img={post.img}
              caption={post.caption}
        />
      ))}

    </div>
  )
}

export default Posts
