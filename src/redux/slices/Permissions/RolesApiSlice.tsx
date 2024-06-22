// Redux/Actions/rolesActions.ts

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRolesStart, fetchRolesSuccess, fetchRolesFailure } from './RolesSlice';
import { ApiError, RoleData } from '../../../interfaces/interface';
import { ApiEndpoint } from '../../../DataTypes/enums';
import request from '../../../Backend/axiosCall/apiCall';
import { ApiSuccess } from '../../../interfaces/interface';

export const fetchRoles = createAsyncThunk(
  'roles/fetchRoles',
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(fetchRolesStart());

    try {
      const response = await request({
        apiId: ApiEndpoint.GETROLES.apiId,
        url: ApiEndpoint.GETROLES.url,
        method: ApiEndpoint.GETROLES.method,
        headers: ApiEndpoint.GETROLES.headers,
        loadingMessage: ApiEndpoint.GETROLES.loadingMessage,
      });

      const rolesData: RoleData[] = response.data.data.map((role: any) => ({
        id: role.id,
        roleName: role.roleName,
        permissions: role.permissions,
      }));

      dispatch(fetchRolesSuccess(rolesData));

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Roles Info Fetched Successfully',
        data: response.data,
      };

      console.log(apiSuccess);
      return apiSuccess;
    } catch (error) {
      console.error('Failed To Load:', error);
      dispatch(fetchRolesFailure());
      return rejectWithValue((error as ApiError)?.error || 'Unknown Error');
    }
  }
);

export const addNewRole = createAsyncThunk(
  'roles/addRole',
  async ({roleData}:{roleData:any}, { rejectWithValue, dispatch }) => {
    dispatch(fetchRolesStart());

    try {
      const response = await request({
        apiId: ApiEndpoint.ADDROLE.apiId,
        url: ApiEndpoint.ADDROLE.url,
        data: roleData,
        method: ApiEndpoint.ADDROLE.method,
        headers: ApiEndpoint.ADDROLE.headers,
        loadingMessage: ApiEndpoint.ADDROLE.loadingMessage,
      });

      dispatch(fetchRoles());

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Roles Info Fetched Successfully',
        data: response.data,
      };

      console.log(apiSuccess);
      return apiSuccess;
    } catch (error) {
      console.error('Failed To Load:', error);
      dispatch(fetchRolesFailure());
      return rejectWithValue((error as ApiError)?.error || 'Unknown Error');
    }
  }
);
export const updateRole = createAsyncThunk(
  'roles/updateRole',
  async ({roleData}:{roleData:any}, { rejectWithValue, dispatch }) => {
    dispatch(fetchRolesStart());

    try {
      const response = await request({
        apiId: ApiEndpoint.UPDATEROLE.apiId,
        url: ApiEndpoint.UPDATEROLE.url,
        data: roleData,
        method: ApiEndpoint.UPDATEROLE.method,
        headers: ApiEndpoint.UPDATEROLE.headers,
        loadingMessage: ApiEndpoint.UPDATEROLE.loadingMessage,
      });

      dispatch(fetchRoles());

      const apiSuccess: ApiSuccess = {
        statusCode: response.status,
        message: 'Roles Info Fetched Successfully',
        data: response.data,
      };

      console.log(apiSuccess);
      return apiSuccess;
    } catch (error) {
      console.error('Failed To Load:', error);
      dispatch(fetchRolesFailure());
      return rejectWithValue((error as ApiError)?.error || 'Unknown Error');
    }
  }
);
