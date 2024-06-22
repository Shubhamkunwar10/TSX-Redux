import React, { useState } from 'react';
import { Button, Card, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { addNewRole, updateRole } from '../../redux/slices/Permissions/RolesApiSlice';

// Sample list of permissions with identifiers matching the string keys in the permissions array
const getAllPermission = [
  { id: 'can_verify_credential', name: 'Verify Credential' },
  { id: 'can_read_identifiers', name: 'Read Identifiers' },
  { id: 'can_read_profile', name: 'Read Profile' },
  { id: 'can_edit_profile', name: 'Edit Profile' },
];

function PermissionCard({ initialPermissions, roleName: initialRoleName, roleId, type }:any) {
  const [permissions, setPermissions] = useState(initialPermissions);
  const [roleName, setRoleName] = useState(initialRoleName);
  const dispatch=useDispatch()
  // Function to handle checkbox changes
  const handlePermissionChange = (permissionId: string) => (event: { target: { checked: any; }; }) => {
    const updatedPermissions = event.target.checked
      ? [...permissions, permissionId]
      : permissions.filter((id: string) => id !== permissionId);

    setPermissions(updatedPermissions);
  };

  // Function to handle role name change
  const handleRoleNameChange = (event: { target: { value: any; }; }) => {
    setRoleName(event.target.value);
  };

  // Function to handle form submit
// Function to handle form submit
const handleSubmit = () => {
  if (type=="AddRole") {

    const roleData= {
      roleName: roleName,
      permissions: permissions
    };

    (dispatch as AppDispatch)(addNewRole({
      roleData
    }));
  } else {
    const roleData = {
      id: roleId,
      roleName: roleName,
      permissions: permissions,
    };
console.log(roleData);

    (dispatch as AppDispatch)(updateRole({roleData}));
  }
};


  return (
    <Card>
      <CardContent>
        {!type && <Typography variant='h3'>Permissions for {roleName}</Typography>}

        {type && (
          <TextField
            id="outlined-basic"
            label="Role Name"
            variant="outlined"
            value={roleName}
            onChange={handleRoleNameChange}
          />
        )}

        <FormGroup>
          {getAllPermission.map((permission) => (
            <FormControlLabel
              key={permission.id}
              control={
                <Checkbox
                  checked={permissions.includes(permission.id)}
                  onChange={handlePermissionChange(permission.id)}
                />
              }
              label={permission.name}
            />
          ))}

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </FormGroup>
      </CardContent>
    </Card>
  );
}

export default PermissionCard;
