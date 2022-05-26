import HeaderUI from "./LayoutHeader.presenter";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import { FETCH_LOGIN_USER } from "../../userInfoCard/01/userInfoCard01.queris";

export default function HeaderContainer(props: any) {
    const { data } = useQuery(FETCH_LOGIN_USER);
    const router = useRouter();

    const onClickMain = () => {
        router.push(`/`);
    };

    const onClickQna = () => {
        router.push(`/QuestionAnswer`);
    };

    const onClickSignUp = () => {
        router.push(`/signup`);
    };

    return (
        <HeaderUI
            onClickMain={onClickMain}
            onClickQna={onClickQna}
            onClickSignUp={onClickSignUp}
            data={data}
        />
    );
}
