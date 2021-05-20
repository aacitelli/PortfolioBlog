import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  // Sort newest to oldest 
  posts.sort(function(a,b){return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)});

  return (
    <div>
      {!posts && <div>No posts!</div>}
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.slug}>
                {post.frontmatter.date}: {` `}
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
