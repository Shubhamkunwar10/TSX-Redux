import React, { ReactNode, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@mui/material';
import { getColors } from '../../layout/Theme/themes';
import "./index.css"
interface MobileTabNavigationProps {
  tabs: { value: ReactNode; content: ReactNode; label: string }[];
  position?: string;
  showOutlet?: boolean;
}

const MobileTabNavigation: React.FC<MobileTabNavigationProps> = ({ tabs, position, showOutlet }) => {
  useEffect(() => {
    if (showOutlet) {
      setValue(0);
    }
  }, [showOutlet, tabs]);
  
  const [value, setValue] = React.useState(0);
  const isNonMobile = useMediaQuery("(min-width: 766px)");
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="mobile tabs example"
        variant="fullWidth"
        sx={{
          backgroundColor: getColors().blueAccent[900],
          color: getColors().redAccent[500],
        }}
        className={` ${position === "top" ? " mt-2" : "fixed bottom-0 left-0"} w-full flex flex-row  z-20`}
      >
        {tabs.map(({ value }, index) => (
          <Tab 
            key={index} 
            icon={React.createElement('div', null, value)} 
            {...a11yProps(index)} 
            sx={{
              height:"40px",
              '&.Mui-selected': {
                backgroundColor: getColors().greenAccent[800],
                color: getColors().blueAccent[100],
                borderTopLeftRadius: "10px", 
                
                borderTopRightRadius: "10px", 
                borderRight: "2px solid",
                borderLeft: "2px solid",
                '& .MuiSvgIcon-root': {
                  fontSize: "2rem", 
              color: getColors().blueAccent[500],
                },
              },
              color: getColors().secondary[100],
            }}
          />
        ))}
              <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5" >
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
          </clipPath>
        </svg>
      </div>
      </Tabs>
      {tabs.map(({ content }, index) => (
        <CustomTabPanel isNonMobile={isNonMobile} key={index} value={value} position={position} index={index}>
          {content}
        </CustomTabPanel>
      ))}
    </Box>
  );
};

interface CustomTabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
  isNonMobile: boolean;
  position?: string;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ isNonMobile, children, value, index, position }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    style={{
      paddingBottom: "50px",
      marginBottom: "50px",
    }}
  >
    {value === index && <Box className={` ${position === "top" ? "pt-2" : ""}`} sx={{ pl: isNonMobile ? 3 : 0 }}>{children}</Box>}
  </div>
);

export default MobileTabNavigation;
