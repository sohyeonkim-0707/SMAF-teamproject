import DetailPlanAddModalHTML from "./detailPlanAddModal.presenter";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import {
  CREATE_PROCESS_CATEGORY,
  FETCH_PROJECT_SCHEDULES_CATEGORY,
} from "./detailPlanAddModal.querys";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { triger } from "../../../../../commons/store/index";

export default function DetailPlanAddModal(props: any) {
  const router = useRouter();
  const [createSchedule] = useMutation(CREATE_PROCESS_CATEGORY);
  const [, setDataTriger] = useRecoilState(triger);
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const CreateNewSchedule = async (data: any) => {
    try {
      await createSchedule({
        variables: {
          createScheduleInput: {
            ...data,
            processCategoryId: props.categoryId,
            projectId: router.query.projectId,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PROJECT_SCHEDULES_CATEGORY,
            variables: {
              processCategoryId: props.categoryId,
            },
          },
        ],
      });
      alert("얍얍");
      props.onToggleModal();
    } catch (error) {
      alert("error");
    } finally {
      setDataTriger((prev) => !prev);
    }
  };
  return (
    <DetailPlanAddModalHTML
      register={register}
      handleSubmit={handleSubmit}
      CreateNewSchedule={CreateNewSchedule}
    />
  );
}

// 14px
