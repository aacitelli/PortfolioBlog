import Link from 'next/link'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  return (
    <>
      {/* <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}> */}
      <Layout pageTitle={`Blog | ${frontmatter.title}`} description={`Hey! I'm Anden, a Software Developer looking to contribute my knowledge on all sorts of things back into the community. See more articles like '${frontmatter.title}' at my blog!`} >
        <div className="back">
          ←{' '}
          <Link href="/blog">
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
          <h3>Check Me Out</h3>
          <ul>
            <li><Link href="/blog"><a>List of Articles I've Written</a></Link></li>
            <li>Get in touch at <Link href="mailto:andenacitelli@gmail.com"><a>andenacitelli@gmail.com</a></Link></li>
            <li>GitHub <Link href="https://github.com/aacitelli"><a>@aacitelli</a></Link>, LinkedIn <Link href="https://linkedin.com/in/anden-acitelli"><a>/in/anden-acitelli</a></Link></li>
          </ul>
        </article>
      </Layout>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 2.5rem;
        }
        h3 {
          font-size: 1.75rem;
        }
        .hero {
          width: 100%;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: #00a395;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map((slug) => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
