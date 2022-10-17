import React from "react";
import Moreicon from "../../images/moreicon.svg";
import data from "../../clientlisttable.json";
import iconup from "../../images/iconup.svg";
import icondown from "../../images/icondown.svg";
import theadiconup from "../../images/theadiconup.svg";
import theadicondown from "../../images/theadicondown.svg";
import searchicon from "../../images/searchicon.svg";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import Header from "../header";
// const tablerow = [
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
//   {
//     CompanyName: "Brandname01",
//     DigitalFabric: "50%",
//     DigitalFabriDesign: "digital-fabric-green",
//     Availability: "50%",
//     Compliance: "50%",
//     Economic: "50%",
//     Enivronment: "50%",
//     UserExperience: "50%",
//     More: <Moreicon />,
//   },
// ];

const MainBody = () => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate("/detail-view");
  };
  return (
    <>
      <Header />

      <div className="main-body">
        <div className="d-flex justify-content-end align-items-center my-1">
          <div className="customer-search-main d-flex  align-items-center">
            <img src={searchicon} alt="" className="pl-2" />
            <input
              type="text"
              placeholder="Customer Search..."
              className="ml-2 customer-search"
            />
          </div>
          <label htmlFor="quantity" className="pl-2 font-13 font-weight-400 ">
            Show
          </label>
          <input
            className="numberinput font-13 ml-1"
            type="number"
            id="quantity"
            name="quantity"
            placeholder="10"
          />
        </div>
        <table>
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
            {data.map((rowdata, index) => {
              return (
                <tr key={index} onClick={() => navigateTo()}>
                  <td className="pl-4 company-name">{rowdata.CopmanyName}</td>
                  <td>
                    <p className={`digital-fabric digital-fabric-red`}>
                      {rowdata.DigitalFabric}%
                    </p>
                  </td>
                  <td>{rowdata.Availability}%</td>
                  <td className="position-relative">
                    <div className="d-flex justify-between align-items-center ">
                      <p>{rowdata.Compliance}%</p>
                      <img src={icondown} className="pl-1 updownicon" alt="" />
                    </div>
                  </td>

                  <td className="position-relative">
                    <div className="d-flex justify-between align-items-center ">
                      <p>{rowdata.Economic}%</p>
                      <img src={iconup} className="pl-1 updownicon" alt="" />
                    </div>
                  </td>
                  <td>{rowdata.Environment}%</td>
                  <td className="pl-3 ">{rowdata.UserExperience}%</td>
                  <td className="text-center">
                    <img src={Moreicon} alt="" className="moreicon" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="foot text-right mt-1 d-flex justify-content-end align-items-center">
          <p className="font-12 font-weight-400 default-text-color pr-4">
            Showing 10/140 Results
          </p>
          <div className="bg-white d-inline-block p-2 border rounded8">
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBody;
