import * as React from "react";
import List from "@mui/material/List";
import { useState, useEffect } from "react";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NavBar from "./NavBar";
import ColoredLinearProgress from "./LineProgress";
import axios from "axios";
import "./Load.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Cards from "./Cards";
import Bchart from "./Bchart";
import RealChart from "./RealChart";
import ReactHtmlParser from 'react-html-parser'; 

export default function Result() {
  const [open, setOpen] = React.useState(true);
  const [open1, setopen1] = React.useState(true);
  const [pos, setPos] = React.useState(null);
  const [neg, setNeg] = React.useState(null);
  const [possum,setPossum]=React.useState(null);
  const [negsum,setNegsum]=React.useState(null);
  const [poscnt,setPoscnt]=React.useState(null);
  const [negcnt,setNegcnt]=React.useState(null);
  const [tmp,setTmp]=React.useState(null);
  const [feasum,setFeasum]=React.useState({});
  const [data, setdata] = React.useState();
  const card1 = "Fake Reviews";
  const img1 =
    "https://image.cnbcfm.com/api/v1/image/106690299-1599176326678-review_w_fake.jpg?v=1599176374&w=1600&h=900";
  const img2 =
    "https://www.vizium.com/wp-content/uploads/2020/03/verifiedReview-1-e1583199687853.png";
  const card2 = "Non Fake Reviews";

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setopen1(!open1);
  };
  // axios ({
  //   method:'get',
  //   url: `http://127.0.0.1:5000/db?url=${url}`,
  //   headers: {
  //       "Content-Type": "application/json"
  //   }
  // }).then(result => {
  //   console.log(result.data);

  // })

  useEffect(() => {
    const url = window.location.pathname.substring(8);
    console.log(url);
    try {
      axios({
        method: "get",
        url: `http://127.0.0.1:5000/db?url=${url}`,
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async(result) => {
        function getHighlightedText(text, highlight) { // Split on highlight term and include term into parts, ignore case
          let parts = text.split(new RegExp(`(${highlight})`, 'gi'));
          return parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? `<b style="background-color:yellow">${part}</b>` : part).join('');
      }
      
      for (let feature in result.data['featureSummary']) {
          let temp = [];
          for (let review of result.data['featureSummary'][feature]['reviews']) {
              temp.push(getHighlightedText(getHighlightedText(review, feature.split(" ")[0]), feature.split(" ")[1]));
          }
          result.data['featureSummary'][feature]['reviews'] = temp;
      }
      setTmp(JSON.stringify(result.data))
        setPos(result.data.Real);
        setNeg(result.data.Fake);
        setPossum(result.data.PosSummary);
        setNegsum(result.data.NegSummary);
        setPoscnt(result.data.PosCount);
        setNegcnt(result.data.NegCount);
        setFeasum(result.data.featureSummary);
        console.log(result.data.Real, "real");
        console.log(result.data.Fake, "fake");
        
        console.log(pos,"gg");
        console.log(neg,"hh");
        setdata("j");
        console.log(data,setPos);
        
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <div style={{ background: "#3a6186" }}>
      <NavBar></NavBar>

      {!data ? (
        <div class="loader-container">
          <div class="loader"></div>
        </div>
      ) : (
        <div>
          <div style={{display:'inline-block',marginLeft:"20%",marginTop:'3%'}}>
          <Bchart pos={pos} neg={neg}></Bchart>
          </div>
          <div style={{display:'inline-block',marginLeft:"19%",marginTop:'3%'}}>
          <RealChart p1={poscnt} n1={negcnt}></RealChart></div>
          {/* <div> { ReactHtmlParser (tmp) } </div> */}
          <List
            sx={{
              width: "100%",
              maxWidth: "80%",
              bgcolor: "background.paper",
              margin: "auto",
              marginTop: "5%",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Positive" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open}
              timeout="auto"
              style={{
                backgroundColor: "#F0E68C	",
                paddingBottom: "2%",
                paddingTop: "2%",
              }}
              unmountOnExit
            >
              <div style={{ width: "85%", margin: "auto" }}>
                {possum}
              </div>
            </Collapse>

            <ListItemButton onClick={handleClick1}>
              <ListItemText primary="Negative" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open1}
              timeout="auto"
              style={{
                backgroundColor: "#F0E68C	",
                paddingBottom: "2%",
                paddingTop: "2%",
              }}
              unmountOnExit
            >
              <div style={{ width: "85%", margin: "auto" }}>
                {/* <TableContainer component={Paper}>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Pdtgd</StyledTableCell>
                        <StyledTableCell align="left">sdf</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          dfgdfg
                        </StyledTableCell>
                        <StyledTableCell align="left">cb</StyledTableCell>
                      </StyledTableRow>
                      <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                          dfgdfg
                        </StyledTableCell>
                        <StyledTableCell align="left">cb</StyledTableCell>
                      </StyledTableRow>
                    </TableBody>
                  </Table>
                </TableContainer> */}
                {negsum}
              </div>
            </Collapse>
            {/* <ListItemButton>
              <ListItemText primary="Summarizer" />
            </ListItemButton> */}

            <ListItemButton onClick={handleClick}>
              <ListItemText primary="Feature Summary" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={open}
              timeout="auto"
              style={{
                backgroundColor: "#F0E68C	",
                paddingBottom: "2%",
                paddingTop: "2%",
              }}
              unmountOnExit
            >
              <div style={{ width: "85%", margin: "auto" }}>
                       {/* <div> { ReactHtmlParser (tmp) } </div>
                        */}
                        <h1>
                         {
                           
                  Object.keys(feasum).map((e, i) => (
                    
                    <h3>{e}</h3>
                    
      ))
}
</h1>
                        


              </div>
            </Collapse>
          </List>
        </div>
      )}
    </div>
  );
}
