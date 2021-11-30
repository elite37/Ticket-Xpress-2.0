import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";
import "./AddBus.css";

function AddBus() {
  const BASE_URL = "https://ticketxpressapp.herokuapp.com/api/bus";
  const [company, setCompany] = useState("");
  const [apiRes, setApiRes] = useState("");
  const [ticketDetails, setTicketDetails] = useState({
    busId: "",
    to: "",
    from: "",
    timeOfDepature: "",
    busPrice: "",
  });
  const [busCompany, setBusCompany] = useState([]);
  const [buses, setBuses] = useState([]);
  const [terminals, setTerminals] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/getBusCompany`)
      .then((res) => res.json())
      .then((data) => {
        setBusCompany(data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/getCompanyBuses?busCompanyId=${company}`)
      .then((res) => res.json())
      .then((data) => {
        setBuses(data);
      })
      .catch((err) => console.error(err.message));
  }, [company]);

  useEffect(() => {
    fetch(`${BASE_URL}/getBusTerminal?busCompanyId=${company}`)
      .then((res) => res.json())
      .then((data) => {
        setTerminals(data);
      })
      .catch((err) => console.error(err.message));
  }, [company]);

  const handleSubmit = (e) => {
    e.preventDefault();

    instance
      .post("/bus/busticketpopulation", {
        ...ticketDetails,
        busCompanyId: company,
      })
      .then((res) => {
        if (res.status === 201) {
          setApiRes(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  return (
    <div className={"businput__container"}>
      {apiRes && <p>{apiRes}</p>}
      <form className={"businput__form"}>
        <div className='businput__row'>
          <FormControl fullWidth className={"businput"}>
            <InputLabel> Bus Company </InputLabel>
            <Select
              label='Bus Company'
              value={company}
              onChange={handleCompanyChange}
            >
              {busCompany.length > 0 &&
                busCompany.map((company) => (
                  <MenuItem key={company.id} value={company.id}>
                    {company.companyName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className={"businput"}>
            <InputLabel> Bus Type </InputLabel>
            <Select
              label='Bus Type'
              value={ticketDetails.busId}
              onChange={(e) => {
                setTicketDetails({
                  ...ticketDetails,
                  busId: e.target.value,
                });
              }}
            >
              {buses.length > 0 &&
                buses.map((bus) => (
                  <MenuItem key={bus.id} value={bus.id}>
                    {bus.busName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
        <div className='businput__row'>
          <FormControl fullWidth className={"businput"}>
            <InputLabel> From </InputLabel>
            <Select
              label='From'
              value={ticketDetails.from}
              onChange={(e) => {
                setTicketDetails({
                  ...ticketDetails,
                  from: e.target.value,
                });
              }}
            >
              {terminals.length > 0 &&
                terminals.map((terminal) => (
                  <MenuItem key={terminal.id} value={terminal.terminalName}>
                    {terminal.terminalName}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className={"businput"}>
            <InputLabel> To </InputLabel>
            <Select
              label='To'
              value={ticketDetails.to}
              onChange={(e) => {
                setTicketDetails({
                  ...ticketDetails,
                  to: e.target.value,
                });
              }}
            >
              {terminals.length > 0 &&
                terminals
                  .filter((term) => term.terminalName !== ticketDetails.from)
                  .map((terminal) => (
                    <MenuItem key={terminal.id} value={terminal.terminalName}>
                      {terminal.terminalName}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </div>
        <div className='businput__row'>
          <FormControl fullWidth className={"businput"}>
            <TextField
              label=' Time Of Depature'
              variant='outlined'
              value={ticketDetails.timeOfDepature}
              onChange={(e) => {
                setTicketDetails({
                  ...ticketDetails,
                  timeOfDepature: e.target.value,
                });
              }}
            />
          </FormControl>
          <FormControl fullWidth className={"businput"}>
            <TextField
              label='Price'
              variant='outlined'
              value={ticketDetails.busPrice}
              onChange={(e) => {
                setTicketDetails({
                  ...ticketDetails,
                  busPrice: e.target.value,
                });
              }}
            />
          </FormControl>
        </div>
        <Button
          variant='contained'
          className={"busButton"}
          size='large'
          type='submit'
          onClick={handleSubmit}
        >
          {" "}
          Submit{" "}
        </Button>
      </form>
    </div>
  );
}

export default AddBus;
