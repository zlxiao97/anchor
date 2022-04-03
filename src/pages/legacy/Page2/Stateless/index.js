import PageLayout from "@/components/PageLayout";
import ModuleContainer from "../../../../components/ModuleContainer";
import layout from "./config/layout";
import { Button, Col, List, Row, Statistic } from "antd";
import styles from "./index.module.css";

const data = [
  "1. Racing car sprays burning fuel into crowd.",
  "2. Japanese princess to wed commoner.",
  "3. Australian walks 100km after outback crash.",
  "4. Man charged over missing wedding girl.",
  "5. Los Angeles battles huge wildfires."
];

export default () => {
  return (
    <PageLayout layout={layout}>
      <div key="l1" className={styles.l1}>
        <ModuleContainer>
          <section>
            <h2 className={styles.title}>当前收益：</h2>
            <Statistic
              title="数量"
              value={100}
              valueStyle={{
                fontSize: 32,
                fontWeight: 500
              }}
            />
            <Statistic
              title="APY"
              value={1000}
              precision={2}
              valueStyle={{
                fontSize: 32,
                fontWeight: 500
              }}
            />
          </section>
          <hr />
          <Row>
            <Col span={12}>
              <Button>button1</Button>
            </Col>
            <Col span={12}>
              <Button>button2</Button>
            </Col>
          </Row>
        </ModuleContainer>
      </div>
      <div key="r1" className={styles.l2}>
        <ModuleContainer className={styles.module}>
          <List
            bordered
            dataSource={data}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </ModuleContainer>
      </div>
    </PageLayout>
  );
};
