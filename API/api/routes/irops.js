const express = require("express");
const router = express.Router();

let AgentsInfo = [
  {
    SN: 1,
    Name: "Ashley Briggs",
    PhoneNumber: "857-526-149",
    Email: "ashley.briggs@gmail.co",
  },
  {
    SN: 2,
    Name: "Carl Jenkins",
    PhoneNumber: "586-526-149",
    Email: "carl.jenkins@gmail.com",
  },
  {
    SN: 3,
    Name: "Bertha Martin",
    PhoneNumber: "263-526-149",
    Email: "bertha.martin@gmail.com",
  },
  {
    SN: 4,
    Name: "Stacie Hall",
    PhoneNumber: "456-526-149",
    Email: "stacie.hall@gmail.com",
  },
  {
    SN: 5,
    Name: "Amanda Jones",
    PhoneNumber: "678-526-149",
    Email: "amanda.jones@gmail.com",
  },
  {
    SN: 6,
    Name: "Ashley Jones",
    PhoneNumber: "678-526-149",
    Email: "ashley.jones.com",
  },
];

const checkAgentDetail = (Agent) => {
  for(let i=0; i<AgentsInfo.length; i++) {
    if(AgentsInfo[i].SN === Agent.SN) {
      return false;
    }
  }
  return true;
};

router.get("/agentsDetail", (req, res, next) => {
  res.status(200).json(AgentsInfo);
});

router.post("/agentsDetail", (req, res, next) => {
  if(checkAgentDetail(req.body)) {
    AgentsInfo.push(req.body);
    res.status(201).json({
      status: true
    });
  } else {
    res.status(201).json({
      status: false
    });
  }
});

router.post("/updateDetail", (req, res, next) => {
  AgentsInfo = req.body;
  res.status(201).json(req.body);
});
module.exports = router;
