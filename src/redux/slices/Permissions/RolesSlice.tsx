// Redux/RolesSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoleData } from '../../../interfaces/interface';

interface RolesState {
  rolesData: RoleData[];
  loading: boolean;
}

const initialState: RolesState = {
  rolesData: [],
  loading: false,
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    fetchRolesStart(state) {
      state.loading = true;
    },
    fetchRolesSuccess(state, action: PayloadAction<RoleData[]>) {
      state.rolesData = action.payload;
      state.loading = false;
    },
    fetchRolesFailure(state) {
      state.loading = false;
      // Handle failure if needed
    },
  },
});

export const { fetchRolesStart, fetchRolesSuccess, fetchRolesFailure } = rolesSlice.actions;

export default rolesSlice.reducer;

export const fetchedRoles = (state: { roles: RolesState }) =>
  state.roles;