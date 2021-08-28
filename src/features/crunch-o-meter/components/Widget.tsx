import * as React from "react";
import { Card, Progress } from "antd";
import { differenceInMinutes } from "date-fns";
import crunchOMeter from "crunch-o-meter";
import useInterval from "../../../hooks/useInterval";
import useLocalStorage from "../../../hooks/useLocalstorage";

const Widget: React.FunctionComponent = () => {
  const [updatedAt, setUpdatedAt] = useLocalStorage<string | null>(
    "crunchOMeter-updatedAt",
    null
  );
  const [occupancy, setOccupancy] = useLocalStorage<number | null>(
    "crunchOMeter-value",
    null
  );

  useInterval(async () => {
    const occupancy = await crunchOMeter({
      corsProxy: true,
      location: "oceanside",
    });

    if (occupancy) {
      const newUpdatedAt = new Date().toString();
      setOccupancy(occupancy);
      setUpdatedAt(newUpdatedAt);
    }
  }, 20 * 60 * 1000);

  React.useEffect(() => {
    const statusTime =
      updatedAt && differenceInMinutes(Date.now(), new Date(updatedAt));

    // If the status has not been checked, or is older than 20 min old, check it
    if (statusTime === null || statusTime > 20) {
      crunchOMeter({ corsProxy: true, location: "oceanside" })
        .then((newOccupancy) => {
          if (newOccupancy) {
            setOccupancy(newOccupancy);
            const newUpdatedAt = new Date().toString();
            setUpdatedAt(newUpdatedAt);
          }
        })
        .catch((error) => {
          console.error("Error while setting the Crunch-o-Meter");
          console.error(error);
        });
    }
  }, [updatedAt]);

  return (
    <Card title="Crunch-O-Meter (Oceanside)">
      <Progress
        percent={occupancy ? occupancy * 100 : undefined}
        type="dashboard"
      />
    </Card>
  );
};

export default Widget;
