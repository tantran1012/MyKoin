import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="headingMd">
        <p>Blockchain</p>
      </section>
      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <Link href="/blockchain">Blockchain</Link>
      </section>
    </Layout>
  );
}
