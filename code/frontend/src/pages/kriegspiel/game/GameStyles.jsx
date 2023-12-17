const ChessGameStyles = {
    boxTimer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex",
        flexDirection: "row",
        marginBottom: "10px",
        width: "100%",
    },
    boxGameOver: {
        position: 'fixed', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '200px', 
        height: '300px', 
        bgcolor: 'background.paper', 
        border: '0',
        p: 4,
        borderRadius: '5px',
    },
    divChessBoard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50vh',
    },
    boxControlButtons: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        height: "10vh",
        width: "100%",
    },
    boxTurns: {
        display:"flex",
            justifyContent:"space-between",
            alignItems:"flex",
            flexDirection:"row",
            width: '100%',
    },
    boxWIP: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex",
        flexDirection: "column",
        height: "10vh",
    },
    everythingContainer: {
        display: "flex",
        height: "100vh",
        width: "50vh",
        marginTop: "0px",
        margin: "auto",
        flexDirection: "column",
        alignContent: "space-between",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundWrapper: {
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        padding: "30px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.35)",
    },
    boxUmpire: {
        padding: "10px",
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "10vh",
    },
}

export default ChessGameStyles;