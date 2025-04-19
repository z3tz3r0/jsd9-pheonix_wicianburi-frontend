import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import TabPanel from '../components/TabPanel';


export default function TabPane({ children }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const childrenArray = React.Children.toArray(children);

    return (
        <Box sx={{ width: '100%' }}>

            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            bgcolor: "var(--color-gray-300)",
                        },
                    }}>
                    {childrenArray.map((child, index) => (
                        <Tab
                            key={index}
                            label={child.props?.headerlabel || `Tab ${index + 1}`}
                            sx={{
                                textTransform: 'none',
                                '&.MuiTab-root': {
                                    fontFamily: 'var(--font-main)'
                                },
                                '&.Mui-selected': {
                                    color: "var(--color-black)",
                                    fontWeight: 'bold',
                                }
                            }}
                        />
                    ))}
                </Tabs>
            </Box>

            {childrenArray.map((child, index) => (
                <TabPanel
                    key={index}
                    value={value}
                    index={index}
                >
                    {child}
                </TabPanel>
            ))}
        </Box>
    );
}