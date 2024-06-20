import { Box, Button, Container, Grid, Typography } from "@mui/material";


import BreadCrumbs from "../../Components/elements/BreadCrumbs";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchedRoles } from "../../redux/slices/Permissions/RolesSlice";
import { useEffect, useState } from "react";
import { fetchRoles } from "../../redux/slices/Permissions/RolesApiSlice";
import { AppDispatch } from "../../redux/store";
import RoleCard from "../../Components/Card/RoleCard";
import CustomDialog from "../../Components/Dailog/Dailog";


const Permissions = () => {

    const allRoles = useSelector(fetchedRoles);
    const dispatch =useDispatch()
    useEffect(() => {
        (dispatch as AppDispatch)(fetchRoles());
      }, []);
           
  return (
    <Container >
      <Container>
        <BreadCrumbs currentPath={"/permissions"} />
        
        <Typography variant="h4">
            ROLES LIST
        </Typography>
        <Typography variant="body2">
            A role provided access to predefined menus and feature so that depending on assigned role an administrator can have access to what he need
        </Typography>
        {allRoles && 
        <RoleCard roles={allRoles.rolesData}/>
        }
      
      </Container>

    </Container>

  );
};

export default Permissions;