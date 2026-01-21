import React, { useState } from "react";
import "../../styles/FormField.scss";
import { Box, FormControl, FormLabel, FormGroup} from "@mui/material";
import { NormalCheckBox } from "../atoms/Checkbox";
import { NormalRadio } from "../atoms/Radio";
import { OutlinedTextField } from "../atoms/TextField";
import { OutlinedButton } from "../atoms/Button";

export default function FormField(){
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [gender, setGender] = useState<string>("");
  const [text, setText] = useState<string>("");

  // チェックボックス変更
  const handleCheckboxChange = (value: string) => {
    setCheckedValues(prev =>
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };
  
  //クリア
  const handleClear = () => {
    setCheckedValues([]);
    setGender("");
    setText("");
  };

  // 検索
  const handleSubmit = () => {
    console.log({
      checkedValues,
      gender,
      text,
    });
  };

  return (
    <Box id="formField">
      <Box className="form">
        {/* チェックボックス */}
        <FormControl className="formContent">
          <FormLabel className="label">チェックボックス: </FormLabel>
          <FormGroup className="group">
            <NormalCheckBox 
              size="medium" 
              label="box1"
              checked={checkedValues.includes("box1")}
              onChange={()=>handleCheckboxChange("box1")}
            />
            <NormalCheckBox 
              size="medium" 
              label="box2"
              checked={checkedValues.includes("box2")}
              onChange={()=>handleCheckboxChange("box2")}
            />
            <NormalCheckBox 
              size="medium" 
              label="box3"
              checked={checkedValues.includes("box3")}
              onChange={()=>handleCheckboxChange("box3")}
            />
          </FormGroup>
        </FormControl>

        {/* ラジオボタン */}
        <FormControl className="formContent">
          <FormLabel className="label">ラジオボタン: </FormLabel>
          <FormGroup className="group">
            <NormalRadio
              label="Female"
              value="female"
              size="medium"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            <NormalRadio
              label="Male"
              value="male"
              size="medium"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <NormalRadio
              label="Other"
              value="other"
              size="medium"
              checked={gender === "other"}
              onChange={() => setGender("other")}
            />
          </FormGroup>
        </FormControl>

        {/* テキストフィールド */}
        <FormControl className="formContent">
          <FormLabel className="label">テキストフィールド: </FormLabel>
          <OutlinedTextField 
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
        </FormControl>
      </Box>

      {/* ボタン */}
      <Box className="button">
        <OutlinedButton onClick={handleClear}>条件クリア</OutlinedButton>
        <OutlinedButton type="submit" onClick={handleSubmit}>検索</OutlinedButton>
      </Box>
    </Box>
  );
}