import React, { useState } from "react";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
} from "reactstrap";
import FeatherIcon from "feather-icons-react";

import {
  // GradientCircleRadialbar,
  BrushChart1,
  DashedLine,
} from "../Charts/ApexCharts/LineCharts/LineCharts";
import { GradientCircleRadialbar } from "../Charts/ApexCharts/RadialbarCharts/RadialbarCharts";
import { PaginationExample2 } from "../Tables/GridTables/GridTablesData";

const SatMonitors = () => {
  document.title = "Sat Monitors | Velzon - React Admin & Dashboard Template";

  return (
    <div className="page-content">
      <Container fluid>
        <BreadCrumb title="" pageTitle="Sat Monitors" />
        <Row className="mb-4">
          <Col xl={8}>
            <Card className="h-100 mb-1">
              <CardHeader>
                <h4 className="card-title mb-0">Electrical Power Subsystem</h4>
              </CardHeader>
              <div className="card-body">
                <DashedLine dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
              </div>
            </Card>
          </Col>
          <Col xl={4} className=" mt-4 mt-xl-0">
            <Card className="h-100 mb-1">
              <CardHeader>
                <h4 className="card-title mb-0">Battery Temperature</h4>
              </CardHeader>
              <CardBody>
                <div
                  style={{
                    marginLeft: "0px",
                    marginRight: "0px",
                    // marginBottom: "40px",
                    // marginTop: "-10px",
                  }}
                >
                  <GradientCircleRadialbar
                    seriesData={11}
                    label="TEMP"
                    id='battery-temp'
                    dataColors='["--vz-success"]'
                  />
                  <BrushChart1 dataColors='["--vz-danger"]' />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <Card>
              <CardHeader>
                <h4 className="card-title mb-0">Data Table</h4>
              </CardHeader>

              <CardBody>
                <div id="table-pagination">
                  <PaginationExample2 />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SatMonitors;
