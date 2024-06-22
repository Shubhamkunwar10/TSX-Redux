import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import CustomDialog from '../Dailog/Dailog';
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import PermissionCard from './PermissionCard';

const RoleCard = ({ roles }) => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null); // Stores the selected role for editing

  const [isDialogOpenEditRole, setIsDialogOpenEditRole] = useState(false); // Declare state for edit dialog

  const handleOpenEditDialog = (roleId) => {
    setSelectedRole(roles.find((role) => role.id === roleId)); // Find role by id
    setIsDialogOpenEditRole(true);
  };

  const handleCloseEditDialog = () => {
    setSelectedRole(null);
    setIsDialogOpenEditRole(false);
  };

  return (
    <Grid container spacing={2}>
      {roles.map((role) => (
        <Grid item xs={12} sm={6} md={4} key={role.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {role.roleName}
              </Typography>
              <Button
                variant="outlined"
                onClick={() => handleOpenEditDialog(role.id)}
              >
                Edit Role
              </Button>
              {selectedRole && selectedRole.id && 
              <CustomDialog
              open={isDialogOpenEditRole && selectedRole?.id === role.id} 
              onClose={handleCloseEditDialog}
              title={""}
              description={""}
              buttonVariant="contained"
              buttonColor="primary"
              >
                <PermissionCard
                  initialPermissions={role.permissions}
                  roleName={role.roleName}
                  roleId={role.id}
                  />
              </CustomDialog>
          }
            </CardContent>
          </Card>
        </Grid>
      ))}
      {/* Add Role Button */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Add Role
            </Typography>
            <CustomDialog
              open={isDialogOpen}
              onClose={() => setDialogOpen(!isDialogOpen)}
              triggerButtonText={"Add Role"}
              title={""}
              description={""}
              buttonColor="secondary"
              buttonVariant="contained"
            >
              <PermissionCard
                  initialPermissions={[]}
                  roleName={""}
                  roleId={""}
                  type={"AddRole"}
                  />
            </CustomDialog>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default RoleCard;
