import React from "react";

import filtericon from "../../images/filtericon.svg";
import Header from "../header";
import Moreicon from "../../images/moreicon.svg";
// import { BarchartChatjs } from "./barchart";
import graph from "../../images/graph1.png";
import Barcharts from "./chart";
const ticketdata = [
  {
    Recommendation: "AB0293747",
    Status: "In progress",
    impact: "50%",
    impactdesign: "digital-fabric-red",
    Description:
      "Resive virtual mashine SVR001, the rest of the filler text can be in this space.",
    IncidentID: "AB0194683",
  },
  {
    Recommendation: "AB0293747",
    Status: "In progress",
    impact: "50%",
    impactdesign: "digital-fabric-red",
    Description:
      "Resive virtual mashine SVR001, the rest of the filler text can be in this space.",
    IncidentID: "AB0194683",
  },
  {
    Recommendation: "AB0293747",
    Status: "In progress",
    impact: "50%",
    impactdesign: "digital-fabric-green",
    Description:
      "Resive virtual mashine SVR001, the rest of the filler text can be in this space.",
    IncidentID: "AB0194683",
  },
  {
    Recommendation: "AB0293747",
    Status: "In progress",
    impact: "50%",
    impactdesign: "digital-fabric-red",
    Description:
      "Resive virtual mashine SVR001, the rest of the filler text can be in this space.",
    IncidentID: "AB0194683",
  },
  {
    Recommendation: "AB0293747",
    Status: "In progress",
    impact: "50%",
    impactdesign: "digital-fabric-orange",
    Description:
      "Resive virtual mashine SVR001, the rest of the filler text can be in this space.",
    IncidentID: "AB0194683",
  },
];

const sublinks = [
  {
    text: "Overview",
    active: false,
  },
  {
    text: "Actions",
    active: true,
  },
  {
    text: "Analytics",
    active: false,
  },
];
const DigitalFabriAction = () => {
  return (
    <>
      <Header digitalfabric={true} />
      <div className="main-body mt-4 detailview">
        <div className="maintable">
          <div className={`bg-white rounded10`}>
            <div>
              <div className="d-flex justify-content-between align-items-end fabric-action-header">
                <div className="d-flex justify-content-between align-items-end">
                  <h1 className="font-30 font-weight-600 text-dark-blue pb-2">
                    Solarise Ltd
                  </h1>
                  {sublinks.map((linkdata, index) => {
                    return (
                      <p
                        key={index}
                        className={`link-style ${
                          linkdata.active ? "link-style-active" : ""
                        }`}
                      >
                        {linkdata.text}
                      </p>
                    );
                  })}
                </div>
                <div className="d-flex justify-content-between align-items-center pb-2">
                  <div class="dropdown">
                    <button
                      class="btn text-primary border dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      All architectures...
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn text-primary border dropdown-toggle ml-4"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Availability
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-5">
                  <div className="d-flex justify-content-between align-items-center pt-3 ">
                    <div className="data-item data-item-highlight">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                      <div className="data-desc-bottom">
                        Security Risks mitigated: 500
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                      <div className="data-desc-bottom">
                        Security Risks mitigated: 500
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center pt-3 ">
                    <div className="data-item">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                      <div className="data-desc-bottom">
                        Security Risks mitigated: 500
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                      <div className="data-desc-bottom">
                        Security Risks mitigated: 500
                      </div>
                    </div>
                    <div className="data-item">
                      <div className="data-metric">
                        <div className="data-number">50%</div>
                        <div className="data-desc">Availability</div>
                      </div>
                      <div className="data-desc-bottom">
                        Security Risks mitigated: 500
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-7">
                  <div className="shadow004 mt-3 px-4 py-4 rounded10  w-100 chart-parent">
                    <Barcharts />
                  </div>
                  {/* <BarchartChatjs/> */}
                </div>
              </div>
            </div>
            <div className="row pt-4 pb-4 m-0">
              <div className="col-12 ">
                <div className="fabric-actions ">
                  <div className="d-flex justify-content-end align-items-center pb-2">
                    <img src={filtericon} alt="" />
                    <p className="font-11 font-weight-400 font-light-grey pl-1">
                      Filter
                    </p>
                  </div>
                  <div className="rounded10    ">
                    <div className="fabricactiontable rounded10 shadow004">
                      <table className="">
                        <thead>
                          <tr>
                            <th className="pl-3">Recommendation</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Impact</th>
                            <th>Incident ID</th>
                            <th>View More...</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ticketdata.map((data, index) => {
                            return (
                              <tr key={index}>
                                <td className="pl-3 width15 ">
                                  <p className="text-mid-grey font-weight-600">
                                    {data.Recommendation}
                                  </p>
                                </td>
                                <td className="width33">{data.Description}</td>
                                <td className="width20">
                                  <p className="text-dark-blue font-weight-600">
                                    {data.Status}
                                  </p>
                                </td>
                                <td className="width8point3">
                                  <p
                                    className={`digital-fabric ${data.impactdesign}`}
                                  >
                                    {data.impact}
                                  </p>
                                </td>
                                <td className="width8point3">
                                  <p className="text-mid-grey">
                                    {data.IncidentID}
                                  </p>
                                </td>
                                <td className="text-center width8point3">
                                  <img
                                    src={Moreicon}
                                    alt=""
                                    className="moreicon"
                                  />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalFabriAction;
