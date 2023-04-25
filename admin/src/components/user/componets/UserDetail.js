import React, { useState } from "react";
import _ from "lodash";
// import React components
import { UserFormDataText, UserFormDataDate } from "../../../styled/formInput";

// import Redux components
import { useSelector, useDispatch } from "react-redux";
import userSlice from "../../../redux/slices/userSlice";

// import MUI components
import { Stack } from "@mui/material";

function UserDetail() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.data);
  const mode = useSelector((state) => state.user.mode);
  const getInputData = (e) => {
    const { id, name, value } = e.target;
    const dataClone = _.cloneDeep(data);
    dataClone[name] = value;
    dispatch(userSlice.actions.updateUserData(dataClone));
  };
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Stack direction="column" spacing="20px">
        {!mode.adding ? (
          <UserFormDataText
            title="ID"
            name="_id"
            data={data._id}
            isEditting={false}
          />
        ) : null}

        <UserFormDataText
          title="Username"
          name="username"
          data={data.username}
          callback={getInputData}
          isEditting={mode.editting}
        />
        {!mode.adding ? (
          <UserFormDataText
            title="Full Name"
            name="fullName"
            data={data.fullName}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}

        <UserFormDataText
          title="Password"
          name="password"
          data={data.password}
          callback={getInputData}
          isEditting={mode.adding}
        />
        {!mode.adding ? (
          <UserFormDataDate
            title="Birthday"
            name="birthday"
            data={data.birthday}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}

        <UserFormDataText
          title="Primary Language"
          name="primaryLanguage"
          data={data.primaryLanguage}
          callback={getInputData}
          isEditting={mode.editting}
        />
        {!mode.adding ? (
          <UserFormDataText
            title="About"
            name="about"
            data={data.about}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}

        <UserFormDataText
          title="Email"
          name="email"
          data={data.email}
          callback={getInputData}
          isEditting={mode.editting}
        />
        {!mode.adding ? (
          <UserFormDataText
            title="Profession"
            name="profession"
            data={data.profession}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}

        {!mode.adding ? (
          <UserFormDataText
            title="Country"
            name="country"
            data={data.country}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}

        {!mode.adding ? (
          <UserFormDataDate
            title="Create At"
            name="createAt"
            data={data.createAt}
            callback={getInputData}
            isEditting={mode.editting}
          />
        ) : null}
      </Stack>
    </Stack>
  );
}

export default UserDetail;
