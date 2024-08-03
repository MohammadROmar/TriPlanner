import { createSlice } from "@reduxjs/toolkit";

const initialServiceState = {
  service: JSON.parse(localStorage.getItem("service")),
  subservice: JSON.parse(localStorage.getItem("subservice")),
  serviceTypeId: JSON.parse(localStorage.getItem("serviceTypeId")),
  governorateId: JSON.parse(localStorage.getItem("governorateId")),
};

const serviceSlice = createSlice({
  name: "service",
  initialState: initialServiceState,
  reducers: {
    setService(state, data) {
      const service = data.payload;
      state.service = service;

      localStorage.setItem("service", JSON.stringify(service));
    },
    setSubservice(state, data) {
      const subservice = data.payload;
      state.subservice = subservice;

      localStorage.setItem("subservice", JSON.stringify(subservice));
    },
    setServiceTypeId(state, data) {
      const serviceTypeId = data.payload;
      state.serviceTypeId = serviceTypeId;

      localStorage.setItem("serviceTypeId", JSON.stringify(serviceTypeId));
    },
    setGovernorateId(state, data) {
      const governorateId = data.payload;
      state.governorateId = governorateId;

      localStorage.setItem("governorateId", JSON.stringify(governorateId));
    },
  },
});

export const { setService, setSubservice, setServiceTypeId, setGovernorateId } =
  serviceSlice.actions;

export default serviceSlice.reducer;
