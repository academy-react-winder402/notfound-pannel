import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
} from "reactstrap";
import Earnings from "../component/Earnings";

const Home = () => {
  return (
    <div>
      <Row>
        <Col xs='4'>1</Col>
        <Col xs='4'>
          <Earnings/>        
        </Col>
      </Row>



 
    </div>
  );
};

export default Home;
