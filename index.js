import Layout from '@components/Layout'
import PostList from '@components/PostList'
import Head from 'next/head'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Head>
          <meta charset="utf-8" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />

          <title>Anden Acitelli - Software Engineer & Web Developer</title>
          <meta content="Hey! I'm a Computer Science major at Ohio State graduating Fall 2021. I primarily do software development, robotics, and web development." name="description" />
          <meta content="anden, acitelli, software engineer, software developer, web developer, ohio state, the ohio state university, computer science" name="keywords" />
          <link href="../assets/img/favicon.png" rel="icon" />
          <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y70JBTCJ1"></script>
      </Head>
      <Layout pageTitle={title} description={description}>
    </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = ((context) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
