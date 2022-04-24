import { Statistic, Col, Row } from "antd";
import Legends from "../../../../../components/Legends";
import Ring from "../Ring";

const lengendData = [
  {
    title: "TOTAL VALUE LOCKED",
    color: "rgb(75, 219, 75)",
    value: 9988925885,
    prefix: "$"
  },
  {
    title: "Total Collateral",
    color: "rgb(31, 31, 31)",
    value: 5167098583,
    prefix: "$"
  }
];

export default () => {
  return (
    <>
      <section>
        <Statistic
          title="TOTAL VALUE LOCKED"
          value={15168343055}
          suffix="UST"
          valueStyle={{
            fontSize: 32,
            fontWeight: 500
          }}
        />
      </section>{" "}
      <section style={{ marginTop: 39 }}>
        <Row gutter={{ lg: 44 }}>
          <Col
            lg={{
              span: 11
            }}
          >
            <Ring />
          </Col>
          <Col
            lg={{
              span: 13
            }}
          >
            <Legends data={lengendData} />
          </Col>
        </Row>
      </section>
      <hr></hr>
      <section>
        <Statistic
          title="YIELD RESERVE"
          value={440398971}
          suffix="UST"
          valueStyle={{
            fontSize: 32,
            fontWeight: 500
          }}
        />
      </section>
    </>
  );
};
