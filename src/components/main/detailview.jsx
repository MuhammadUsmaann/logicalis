import React, { useState } from "react";
import accordianicon from "../../images/accordianicon.svg";
import data from "../../clientlisttable.json";
import iconup from "../../images/iconup.svg";
import icondown from "../../images/icondown.svg";
import theadiconup from "../../images/theadiconup.svg";
import theadicondown from "../../images/theadicondown.svg";
import detailviewperson from "../../images/detailviewperson.svg";
import phoneicon from "../../images/phoneicon.svg";
import activeicon from "../../images/activeicon.svg";
import filtericon from "../../images/filtericon.svg";
import Header from "../header";

const ticketdata = [
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
  {
    TicketID: "AB0293747",
    Status: "Waiting on Client",
    Date: "01/01/2022",
    Time: "11:03AM",
    Description:
      "The description can go here ...The description can go here ... The description can go here ..... The description can go here ...",
    RaisedBy: "Gordon B",
  },
];

const Detailview = () => {
  const [showdetail, setshowdetail] = useState(true);
  return (
    <>
      <Header />
      <div className="main-body mt-4 detailview">
        <div className="maintable">
          <table
            className={`${!showdetail ? "rounded10" : " detailviewtable"}`}
          >
            <thead>
              <tr>
                <th className="pl-4 ">
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Company Name </p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Digital Fabric</p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Availability</p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Compliance</p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Economic</p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <p>Enivronment</p>
                    <div className="d-flex flex-column pr-1">
                      <img src={theadiconup} alt="" className="theadicon" />
                      <img src={theadicondown} alt="" className="theadicon" />
                    </div>
                  </div>
                </th>
                <th className="">User Experience</th>
                <th className="pr-4 text-center">More...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-4 company-name">{data[1].CopmanyName}</td>
                <td>
                  <p className={`digital-fabric digital-fabric-green`}>
                    {data[1].DigitalFabric}%
                  </p>
                </td>
                <td>{data[1].Availability}%</td>
                <td className="position-relative">
                  <div className="d-flex justify-between align-items-center ">
                    <p>{data[1].Compliance}%</p>
                    <img src={icondown} className="pl-1 updownicon" alt="" />
                  </div>
                </td>

                <td className="position-relative">
                  <div className="d-flex justify-content-between align-items-center ">
                    <p>{data[1].Economic}%</p>
                    <img src={iconup} className="pl-1 updownicon" alt="" />
                  </div>
                </td>
                <td>{data[1].Environment}%</td>
                <td className="pl-3 ">{data[1].UserExperience}%</td>
                <td className="text-center">
                  <img
                    src={accordianicon}
                    alt=""
                    className={`moreicon ${
                      !showdetail ? " moreiconcheck" : " "
                    }`}
                    onClick={() => setshowdetail(!showdetail)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          {showdetail ? (
            <div
              className={`detailoflist ${showdetail ? "rounded10bottom " : ""}`}
            >
              <div className="row pt-4 pb-4">
                <div className="col-5">
                  <div className="row ">
                    <div className="col-4 text-right p-0 pr-3">
                      <div className="personimagediv">
                        <img
                          src={detailviewperson}
                          alt=""
                          className="profileimg"
                        />
                        <img src={activeicon} alt="" className="activestatusprofile"/>
                      </div>
                    </div>
                    <div className="col-8 py-4 px-0 border rounded10 shadow004">
                      <div className="border-bottom mx-3">
                        <p className="font-10 font-weight-600 font-light-grey">
                          PRIMARY CLIENT:
                        </p>
                        <p className="font-16 font-weight-600 default-text-color ">
                          Marie J Shaw
                        </p>
                      </div>
                      <div className="mx-3  pt-3 ">
                        <p className="font-10 font-weight-600 font-light-grey">
                          Telephone:
                        </p>
                        <div className="d-flex justify-content-left align-items-center pt-1">
                          <img src={phoneicon} alt="" />
                          <p className="pl-2 font-16 font-weight-600 default-text-color ">
                            00000000000
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2 pl-5">
                    <div className="col-8 p-0 pr-3 height150">
                      <div className="border py-3 px-3 shadow004 rounded10 position-relative w-100 h-100">
                        <p className=" font-10 font-weight-600 font-light-grey ">
                          CONTRACT STATUS:
                        </p>
                        <p className=" font-10 font-weight-600 font-light-grey enddate">
                          END DATE: 12/01/2022
                        </p>
                      </div>
                    </div>
                    <div className="col-4 height150 px-3 py-3 px-0 border rounded10 shadow004 position-relative">
                      <p className=" font-10 font-weight-600 font-light-grey box-min-heading">
                        NPS:
                      </p>
                      <div className="m-auto h-100 d-flex justify-content-center align-items-center">
                        <p className="font-40 font-weight-600 default-text-color">
                          50%
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row pt-2 pl-5">
                    <div className="col-4 height150   px-0 ">
                      <div className="border p-3 rounded10 mr-3 shadow004 h-100">
                        <p className=" font-10 font-weight-600 font-light-grey">
                          Online status
                        </p>
                        <div className=" d-flex pt-1 align-items-center">
                          <p className="font-12 font-weight-400 default-text-color">
                            Currently Online
                          </p>
                          <img src={activeicon} alt="" />
                        </div>
                        <p className="pt-5 font-10 font-weight-600 font-light-grey">
                          Online status
                        </p>
                        <p className="font-12 font-weight-400 default-text-color">
                          2:20pm 11/02/22
                        </p>
                      </div>
                    </div>
                    <div className="col-4 height150   px-0 ">
                      <div className="border rounded10 p-3 mr-3 shadow004 h-100">
                        <p className=" font-10 font-weight-600 font-light-grey box-min-heading">
                          CURRENT TICKETS:
                        </p>
                        <div className="m-auto h-100 d-flex justify-content-center align-items-center">
                          <p className="font-40 font-weight-600 default-text-color">
                            04
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 height150 px-3 py-3 px-0 border rounded10 shadow004">
                      <p className=" font-10 font-weight-600 font-light-grey box-min-heading">
                        PREVIOUS TICKETS
                      </p>
                      <div className="m-auto h-100 d-flex justify-content-center align-items-center">
                        <p className="font-40 font-weight-600 default-text-color">
                          10
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-7 pl-0">
                  <div className="ticketdetailtable px-3">
                    <div className="d-flex justify-content-end align-items-center pb-2">
                      <img src={filtericon} alt="" />
                      <p className="font-11 font-weight-400 font-light-grey pl-1">
                        Filter
                      </p>
                    </div>
                    <div className="rounded10 overflow-hidden border shadow004 ">
                      <div className="tickettableheight2 shadow004">
                        <table className="">
                          <thead>
                            <tr>
                              <th className="pl-3">Ticket ID</th>
                              <th>Status</th>
                              <th>Date/Time</th>
                              <th>Description</th>
                              <th>Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ticketdata.map((data, index) => {
                              return (
                                <tr key={index}>
                                  <td className="pl-3 width15">
                                    {data.TicketID}
                                  </td>
                                  <td className="width15">{data.Status}</td>
                                  <td className="width15">
                                    <p>{data.data}</p>
                                    <p>{data.Time}</p>
                                  </td>
                                  <td className="width40">
                                    <p>{data.Description}</p>
                                  </td>
                                  <td className="width15">{data.RaisedBy}</td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                        <div className="w-100 text-right p-2">
                          <button className="btn btn-primary">
                            Go to overview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Detailview;
