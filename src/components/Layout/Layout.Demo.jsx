import React from "react";
import { Layout } from "./Layout";
import styled from "styled-components";

const Wrapper = styled.div`
  hover: 1px dotted blue;
  height: 500px;
`;

export const Demo = () => {
  return (
    <div>
      <Wrapper>
        <Layout title="Namhla Mthi"> Namhla Mthi</Layout>
      </Wrapper>

      <Wrapper>
        <Layout title="Namhla Mthi" primary={["primary", "#"]}>
          Namhla Mthi
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Namhla Mthi"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
        >
          Namhla Mthi
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Namhla Mthi"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
        >
          Namhla Mthi
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Namhla Mthi"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'resolving'
          }}
        >
          Namhla Mthi
        </Layout>
      </Wrapper>

      <Wrapper>
        <Layout
          title="Namhla Mthi"
          primary={["primary", "#"]}
          secondary={["secondary", "#"]}
          extra={["extra", "#"]}
          alert={{
            tittle: 'Hello',
            nature: 'error',
            description: 'what ever'
          }}
        >
          Namhla Mthi
        </Layout>
      </Wrapper>
    </div>
  );
};

export default Demo;
