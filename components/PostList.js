import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  // Sort newest to oldest 
  posts.sort(function(a,b){return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)});

  // Used for date formatting 
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                {months[new Date(post.frontmatter.date).getMonth()] + " " + (new Date(post.frontmatter.date).getDate() + 1) + ", " + new Date(post.frontmatter.date).getFullYear()}: {` `}
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <a>{post?.frontmatter?.title}</a>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
