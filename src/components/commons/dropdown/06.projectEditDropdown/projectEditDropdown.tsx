import { Menu, Dropdown, Space } from "antd";
import { useMutation, gql } from "@apollo/client";
import * as S from "./projectEditDropdown.styles";
import { useRouter } from "next/router";

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $projectId: String!
    $updateProjectInput: UpdateProjectInput!
  ) {
    updateProject(
      projectId: $projectId
      updateProjectInput: $updateProjectInput
    ) {
      projectId
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation deleteProject($projectId: String!) {
    deleteProject(projectId: $projectId)
  }
`;
export const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      projectId
    }
  }
`;

export default function ProjectEditDropdown(props: any) {
  const [updataProject] = useMutation(UPDATE_PROJECT);
  const [deleteProject] = useMutation(DELETE_PROJECT);

  const router = useRouter();

  const MoveEdit = () => {
    router.push(`./${router.query.projectId}/edit`);
  };

  const DeleteProject = async () => {
    await deleteProject({
      variables: {
        projectId: router.query.projectId,
      },
    });
  };

  const EndProject = async () => {
    try {
      await updataProject({
        variables: {
          projectId: router.query.projectId,
          updateProjectInput: {
            projectName: props.projectData?.fetchProject.projectName,
            projectIntro: props.projectData?.fetchProject.projectIntro,
            projectDetailIntro:
              props.projectData?.fetchProject.projectDetailIntro,
            projectImageURL: props.projectData?.fetchProject.projectImageURL,
            projectColor: props.projectData?.fetchProject.projectColor,
            startDate: props.projectData?.fetchProject.startDate,
            endDate: props.projectData?.fetchProject.endDate,
            projectAddress: {
              address: props.projectData?.fetchProject.address.address,
              detailAddress:
                props.projectData?.fetchProject.address.detailAddress,
            },
            status: false,
          },
        },
      });
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  const ReOpenProject = async () => {
    try {
      await updataProject({
        variables: {
          projectId: router.query.projectId,
          updateProjectInput: {
            projectName: props.projectData?.fetchProject.projectName,
            projectIntro: props.projectData?.fetchProject.projectIntro,
            projectDetailIntro:
              props.projectData?.fetchProject.projectDetailIntro,
            projectImageURL: props.projectData?.fetchProject.projectImageURL,
            projectColor: props.projectData?.fetchProject.projectColor,
            startDate: props.projectData?.fetchProject.startDate,
            endDate: props.projectData?.fetchProject.endDate,
            projectAddress: {
              address: props.projectData?.fetchProject.address.address,
              detailAddress:
                props.projectData?.fetchProject.address.detailAddress,
            },
            status: true,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT,
            variables: {
              projectId: router.query.projectId,
            },
          },
        ],
      });
    } catch (error) {
      alert(error);
    }
  };
  // console.log(props.projectData?.fetchProject.status, "111");/
  const menu = (
    <Menu>
      <Menu.Item onClick={MoveEdit}>프로젝트 수정하기</Menu.Item>
      <Menu.Item onClick={DeleteProject}>프로젝트 삭제하기</Menu.Item>
      <Menu.Item
        onClick={
          props.projectData?.fetchProject.status ? EndProject : ReOpenProject
        }
      >
        {props.projectData?.fetchProject.status
          ? "프로젝트 종료하기"
          : "프로젝트 재시작"}
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <div style={{ width: "1.3rem" }}></div>
          <S.Setting />
          {/* <DownOutlined style={{ color: "#E5E5E5" }} /> */}
        </Space>
      </a>
    </Dropdown>
  );
}
