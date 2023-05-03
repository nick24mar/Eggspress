import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card borderRadius={8} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default GameCardSkeleton;
