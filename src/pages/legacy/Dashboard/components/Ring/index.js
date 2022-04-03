import { Chart } from "@antv/g2";
import { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";
export default () => {
  const containerId = uuidV4();
  useEffect(() => {
    const data = [
      { item: "事例一", count: 40, percent: 0.4 },
      { item: "事例二", count: 21, percent: 0.6 }
    ];
    const chart = new Chart({
      container: containerId,
      autoFit: true,
      height: 152
    });
    chart.data(data);
    chart.scale("percent", {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      }
    });
    chart.coordinate("theta", {
      radius: 0.9,
      innerRadius: 0.79
    });

    chart.legend(false);
    chart.tooltip(false);

    const interval = chart
      .interval()
      .adjust("stack")
      .position("percent")
      .color("item", ["#1f1f1f", "#3be43b"]);

    chart.interaction("element-active");

    interval.state({
      active: {
        style: (element) => {
          const shape = element.shape;
          return {
            stroke: shape.attr("fill"),
            strokeOpacity: shape.attr("fillOpacity")
          };
        }
      }
    });

    chart.render();
  }, []);
  return (
    <div style={{ width: 152 }}>
      <div id={containerId}></div>
    </div>
  );
};
