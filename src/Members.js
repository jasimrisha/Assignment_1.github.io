import React from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";


import { Tab } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ModalComponent from "./commonComponents/ModalComponent"


export default function Members() {
    const [membersInformation, setMembersInformation] = React.useState();
    const [showList, setShowList] = React.useState(true);
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [selectedUserName, setSelectedUserName] = React.useState(null);

    const [showModal, setShowModal] = React.useState(false);

    const handleClose = () => {
        setSelectedUser(null);
        setShowModal(false)

    };
    React.useEffect(() => {
        callMembersInformation()
    }, [])

    const callMembersInformation = () => {
        setShowList(true)
        axios.get("./data.json").then(response => {
            setMembersInformation(response.data.members)
        })
    }

    const hideMembersInformation = () => {
        setShowList(false)

    }

    const openModal = (activity_periods, userName) => {
        setSelectedUser(activity_periods)
        setSelectedUserName(userName)
        setShowModal(true)
    }


    return (
        <>
            <Grid container direction="row" className="bg">
<Grid xs={12} justify="center">Users Activity Status</Grid>
                {membersInformation && membersInformation.map((aMember, index) => {
                    return (
                        <Grid xs={4}>
                            <Card key={aMember.id} className="cardMember" style={{backgroundColor:'#d22f57'}}>
                                <Box style={{display:'flex',justifyContent:'center',marginBottom:'20px'}}>
                                    <Avatar
                                        alt={aMember.real_name}
                                        src={
                                            "https://ui-avatars.com/api/?background=4caf50&color=fff&size=128&&rounded=true&name=" +
                                            encodeURI(aMember.real_name)
                                        }
                                    />

                                    <Typography
                                        variant="body1"
                                        component="span"
                                        style={{ alignSelf: "center", marginLeft: 0 }}
                                    >
                                    </Typography>
                                </Box>
                                <Box display="flex" justify="center">
                                    <Grid xs={12}>
                                       <a href="#" onClick={() => openModal(aMember.activity_periods, aMember.real_name)} style={{color:'white'}}>{aMember.real_name}</a> 
                                    </Grid>
                                </Box>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
            {showModal && <ModalComponent
                index={selectedUser} userName={selectedUserName}
                handleClose={handleClose}
            />}
        </>
    )
}