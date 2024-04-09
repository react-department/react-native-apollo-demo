import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';

import HomeView from './HomeView';

import type { THandleCreateScreen } from './interfaces/IHome';

const USER_QUERY = gql`
  query {
  user {
    username
    email
    projects(first: 3) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          pk
          name
          prototypeUrl
        }
      }
    }
  }
}
`;

const PROJECT_MUTATION = gql`
mutation CreateProject($name: String!) {
  createProject(
    input: { name: $name, settings: { deviceFrame: IPHONEX } }
  ) {
    ok
    project {
      pk
      name
      prototypeUrl
      settings {
        deviceFrame
      }
    }
  }
}
`;

const SCREEN_MUTATION = gql`
mutation CreateScreen($name: String!, $projectPk: Int!) {
  createScreen(input: { projectPk: $projectPk, name: $name }) {
    ok
    screen {
      pk
      uploadUrl
      content {
        ... on ImageScreen {
          url
        }
      }
    }
  }
}
`;

function Home() {
  const { data } = useQuery(USER_QUERY);
  const [createProject] = useMutation(PROJECT_MUTATION);
  const [createScreen] = useMutation(SCREEN_MUTATION);

  const handleCreateProject = () => {
    createProject({ variables: { name: 'My project Name' } });
  };

  const handleCreateScreen: THandleCreateScreen = (projectPk) => {
    createScreen({ variables: { name: 'My screen Name', projectPk } });
  };

  return (
    <HomeView
      onCreateProject={handleCreateProject}
      onCreateScreen={handleCreateScreen}
      projects={data?.user.projects.edges}
    />
  );
}

export default Home;
