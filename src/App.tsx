import * as React from 'react';
import './App.css';
import './styles/Accordion.scss'
import './styles/Card.scss'
import { 
  Stack, 
  FormControl, 
  FormLabel, 
  FormGroup, 
  FormControlLabel, 
  RadioGroup, 
  InputLabel, 
  Box,
} from '@mui/material';

import { CustomButton } from './components/atoms/Button';
import { CustomCheckbox } from './components/atoms/Checkbox';
import { CustomRadio } from './components/atoms/Radio';
import { CustomSelect } from './components/atoms/Select';
import { CustomSwitch } from './components/atoms/Switch'
import { CustomTextField } from './components/atoms/TextField'
import { CustomTooltip } from './components/atoms/Tooltip'
import { CustomTable } from './components/atoms/Table'
import { CustomPagination } from './components/atoms/Pagination'
import { CustomModal } from './components/atoms/Modal'
import { CustomDialog } from './components/atoms/Dialog'
import { CustomAccordion } from './components/atoms/Accordion'
import { CustomCard } from './components/atoms/Card'
import { CustomCircularProgress } from './components/atoms/Progress'
import { CustomMenu } from './components/atoms/Menu'


//セレクトボックス
const options = [
  { label: "Ten", value: 10 },
  { label: "Twenty", value: 20 },
  { label: "Thirty", value: 30 },
];

//テーブル
const dessert = [
  { id:1 , name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0},
  { id:2 , name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3},
  { id:3 , name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
  { id:4 , name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
  { id:5 , name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9},
];

function App() {
  // セレクトボックス
  const [age, setAge] = React.useState('');

  const handleChange = (event: any) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div id='button'>
        <Stack spacing={2} direction="row">
          <CustomButton variant="text" size='small' color='primary'>Text</CustomButton>
          <CustomButton variant="contained" size='medium' color='secondary'>Text</CustomButton>
          <CustomButton variant="outlined" size='large' color='error'>Text</CustomButton>
        </Stack>
      </div>
      <br />
      <div id='checkbox'>
        <FormGroup>
          <FormControlLabel control={<CustomCheckbox defaultChecked size='small' color='primary' />} label="Label" />
          <FormControlLabel required control={<CustomCheckbox size='small' color='secondary' />} label="Required" />
          <FormControlLabel disabled control={<CustomCheckbox size='small' />} label="Disabled" />
        </FormGroup>
      </div>
      <br />
      <div id='radio'>
        <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel value="female" control={<CustomRadio size='small' color='secondary'/>} label="Female" />
              <FormControlLabel value="male" control={<CustomRadio size='small' color='success' />} label="Male" />
              <FormControlLabel value="other" control={<CustomRadio size='small' color='default' />} label="Other" />
              <FormControlLabel
                value="disabled"
                disabled
                control={<CustomRadio />}
                label="other"
              />
            </RadioGroup>
          </FormControl>
      </div>
      <br />
      <div id='select'>
        <FormControl sx={{ width: 100 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            options={options}
          />
        </FormControl>
      </div>
      <br />
      <div id='switch'>
        <FormGroup>
          <FormControlLabel control={<CustomSwitch defaultChecked size='small' color='secondary' />} label="Label" />
          <FormControlLabel required control={<CustomSwitch size='small' color='warning' />} label="Required" />
          <FormControlLabel disabled control={<CustomSwitch size='small' color='default'/>} label="Disabled" />
        </FormGroup>
      </div>
      <br />
      <div id='textfield'>
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '200px' } }}
        noValidate
        autoComplete="off"
        >
          <CustomTextField id="outlined-basic" label="Outlined" variant="outlined" size='small' color='secondary' />
          <CustomTextField id="filled-basic" label="Filled" variant="filled" size='small' color='success' />
          <CustomTextField id="standard-basic" label="Standard" variant="standard" size='small' color='warning' />
        </Box>
      </div>
      <br />
      <div id='tooltip'>
        <CustomTooltip  title="Delete"/>
      </div>
      <br />
      <div id='table'>
        <CustomTable checkbox={true} data={dessert} />
      </div>
      <br />
      <div id='pagination'>
        <Stack spacing={2}>
          <CustomPagination count={10} shape="rounded" />
        </Stack>
      </div>
      <br />
      <div id='modal'>
        <CustomModal 
          title='Text in a modal'
          text='Duis mollis, est non commodo luctus, nisi erat porttitor ligula.'
          buttonLabel='OPEN MODAL'
        />
      </div>
      <br />
      <div id='dialog'>
        <CustomDialog 
          title="Use Google's location service?"
          text='Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.'
          buttonLabel='OPEN ALERT DIALOG'
        />
      </div>
      <br />
      <div id='accordion-group' >
        <CustomAccordion title='Accordion 1' openButton='↓' closeButton='↑'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </CustomAccordion>
        <CustomAccordion title='Accordion 2' openButton='▼' closeButton='▲'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
        </CustomAccordion>
      </div>
      <br />
      <div id='card'>
        <CustomCard buttonLabel='Learn More'>
          <p>Word of the Day</p>
          <h5>be・nev・o・lent</h5>
          <p>adjective</p>
          <p>well meaning and kindly.</p>
        </CustomCard>
      </div>
      <br />
      <div id='progress'>
        <CustomCircularProgress />
      </div>
      <br />
      <div id='menu'>
        <CustomMenu buttonLabel='Dashboard' menu1='Profile' menu2='My account' menu3='Logout'/>
      </div>
      </header>
    </div>
  );
}

export default App;
