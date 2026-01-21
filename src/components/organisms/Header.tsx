import React from "react";
import "../../styles/Header.scss";
import { Box } from "@mui/system";
import { CustomMenu } from "../atoms/Menu";
import { ContainedButton, OutlinedButton, TextButton } from "../atoms/Button";

export default function Header(){
  return (
    <Box className="header">
      <div className="left">
        <CustomMenu buttonLabel="メニュー" menu1="フォーム" />
        <ContainedButton>
          <img src="/logo192.png" alt="logo" />
        </ContainedButton>
        <TextButton>フォーム</TextButton>
      </div>
      <div className="right">
        <OutlinedButton>ログイン</OutlinedButton>
      </div>
    </Box>
  );
}