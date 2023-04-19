'use client';
import Head from "next/head";
import Layout from "../../layout/Layout";
import NoSSRWrapper from "../../layout/noSSR";
import Playground from "../../components/json-diff-playground/playground";

export default function JsonDiff() {
  return (
    <NoSSRWrapper>
      <Layout>
        <Head>
          <title>Diff Json</title>
        </Head>
        <section>
          <Playground onSwitch={() => { }} />
        </section>
      </Layout>
    </NoSSRWrapper>
  );
}
