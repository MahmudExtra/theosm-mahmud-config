import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Container,
  Row,
  Table,
  Card,
  CardBody,
  CardHeader,
} from "reactstrap";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { loadAllBuoy, loadInitialBuoy } from "../../store/buoy-netowork/actions";
import { BasicLineCharts } from "../Charts/ApexCharts/LineCharts/LineCharts";
import { GradientCircleRadialbar, SimpleRadialbar } from "../Charts/ApexCharts/RadialbarCharts/RadialbarCharts";
import MarketplaceChart from "../DashboardNFT/MarketplaceChart";
import MapMarkerCustomIcons from "../Maps/LeafletMaps/MapsLeaflet/MapMarkerCustomIcons";

const TestPage = () => {
  document.title = "Buoy Network | Velzon - React Admin & Dashboard Template";
  const Buoys = useSelector((state) => state?.Buoys);
  console.log(Buoys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialBuoy());
    dispatch(loadAllBuoy());
  }, [dispatch]);
  


  return (
    <React.Fragment>
      <div className="page-content">
        {Buoys.initialBuoyLoading && Buoys.allBuoysLoading && (
          <Container fluid>
            <BreadCrumb title="" pageTitle="Buoy Network" />
            <Row className="">
              <Col xs={12} sm={12} lg={4} className="">
                <Card className="pb-4">
                  <CardHeader className="align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">
                      Summary of {Buoys?.initalBuoy?.name}
                    </h4>
                  </CardHeader>
                  <CardBody>
                    <Table className="table-striped table-nowrap align-middle mb-0 ">
                      <tbody>
                        {Buoys?.initalBuoy?.data?.map((data, key) => (
                          <tr key={data?.id}>
                            <td>{data?.name}</td>
                            <td>{data?.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
              <Col xs={12} sm={12} lg={8} className="">
                <div className=" pb-4 rounded">
                  <MapMarkerCustomIcons getBuoys={Buoys?.allBuoys} />
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col
                xs={12}
                sm={12}
                lg={12}
                xl={8}
                className="shadow-lg mb-2 pb-3 "
              >
                <Card className="  pt-3 ps-1 h-100">
                  <BasicLineCharts
                    dataColors='["--vz-primary"]'
                    value={Buoys?.initalBuoy?.CO2}
                  />
                </Card>
              </Col>
              <Col xs={12} sm={12} lg={12} xl={4} className=" mb-2 pb-3">
                <Card className="h-100">
                  <CardHeader>
                    <h4 className="card-title mb-0">Wind Direction</h4>
                  </CardHeader>
                  <GradientCircleRadialbar
                    seriesData={Buoys?.initalBuoy?.wind}
                    label="wind_direction"
                    id="wind_direction"
                    dataColors='["--vz-primary"]'
                  />
                  {/* <SimpleRadialbar
                    dataColors='["--vz-primary"]'
                    value={Buoys?.initalBuoy?.wind}
                  /> */}
                </Card>
              </Col>
            </Row>
            <Row className="shadow-lg">
              <Col className="">
                <Card className="py-3 ps-1">
                  <MarketplaceChart
                    dataColors='["--vz-primary"]'
                    value={Buoys?.initalBuoy?.Tide}
                  />
                </Card>
              </Col>
            </Row>
          </Container>
        )}
      </div>
    </React.Fragment>
  );
};

export default TestPage;
