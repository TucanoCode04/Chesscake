import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import styles from './LeaderBoardStyles.jsx';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ELOLeaderBoard from './ELOLeaderBoard.jsx';
import RankLeaderBoard from './RankLeaderBoard.jsx';
import DailyLeaderBoard from './DailyLeaderBoard.jsx';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            style={{
                width: "100%",
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ 
                    width: "100%"
                 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function LeaderBoardPage() {
    const [currentLeaderboard, setCurrentLeaderboard] = React.useState(0);

    const handleChange = (event, newValue) => {
        setCurrentLeaderboard(newValue);
    }

    // Renderizza nulla, perché il redirect viene fatto in useEffect
    return (
        // Div che contiene tutto lo stile
        <Box style={{
            textAlign: 'center',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
        }}>
            <Box sx={styles.BoxGeneral}>
                {/* Parte del titolo dove dico che si tratta di "Ultime partite" */}
                <Box sx={styles.BoxTitle}>
                    <Typography variant="h4" sx={styles.Title}>
                        Leaderboard
                    </Typography>
                </Box>

                <Tabs value={currentLeaderboard} onChange={handleChange} aria-label="basic tabs example" sx={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                    "& .MuiTabs-flexContainer": {
                        flexDirection: "row",
                        justifyContent: "space-around",
                    }
                }}>
                    <Tab label="ELO" {...a11yProps(0)} />
                    <Tab label="Rank" {...a11yProps(1)} />
                    <Tab label="Daily" {...a11yProps(2)} />
                </Tabs>
                <CustomTabPanel value={currentLeaderboard} index={0} >
                    <ELOLeaderBoard />
                </CustomTabPanel >
                <CustomTabPanel value={currentLeaderboard} index={1} >
                    <RankLeaderBoard />
                </CustomTabPanel >
                <CustomTabPanel value={currentLeaderboard} index={2}>
                    <DailyLeaderBoard />
                </CustomTabPanel >
                <CustomTabPanel value={currentLeaderboard} index={3}>
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                    <Skeleton variant="text" width={700} height={30} />
                </CustomTabPanel >
            </Box>
        </Box>
    );
}

export default LeaderBoardPage;