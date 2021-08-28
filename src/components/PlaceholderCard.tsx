import * as React from "react";
import { Card, Skeleton } from "antd";

interface PlaceholderCardProps {
  rows?: number;
}

const PlaceholderCard: React.FunctionComponent<PlaceholderCardProps> = (
  props: PlaceholderCardProps
) => {
  const { rows } = props;
  return (
    <Card>
      <Skeleton paragraph={{ rows }} />
    </Card>
  );
};

export default PlaceholderCard;
