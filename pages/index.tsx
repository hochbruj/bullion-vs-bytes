import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { PerformanceData } from "../types/rates";
import Post from "../interfaces/post";
import Header from "../components/header";
import CurrentTable from "../components/current-table";
import Performance from "../components/performance";

type Props = {
  allPosts: Post[];
  performanceData: PerformanceData;
};

export const getServerSideProps = (async () => {
  const res = await fetch(
    "https://us-central1-bullion-vs-bytes.cloudfunctions.net/getPerformance"
  );
  const performanceData: PerformanceData = await res.json();

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);
  return { props: { performanceData, allPosts } };
}) satisfies GetServerSideProps<{
  performanceData: PerformanceData;
  allPosts;
}>;

export default function Index({ allPosts, performanceData }: Props) {
  return (
    <>
      <Layout showComments={false} title={null} identifier={null}>
        <Head>
          <title>Bullion vs Bytes</title>
        </Head>
        <Container>
          <Intro />
          <div className="flex justify-center">
            <CurrentTable performanceData={performanceData} />
          </div>
          <Performance performanceData={performanceData} />
          <MoreStories posts={allPosts} />
        </Container>
      </Layout>
    </>
  );
}
