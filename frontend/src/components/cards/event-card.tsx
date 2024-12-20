"use client";

import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  type CardProps,
} from "@nextui-org/react";

interface EventCardProps extends CardProps {
  title?: string;
  location?: string;
  time?: Date;
}

const EventCardComponent: React.FC<EventCardProps> = ({
  title = "Meeting 1",
  location = "323 Corporate Drive",
  time = new Date(2024, 12, 24, 5, 30),
  ...props
}) => {
  return (
    <Card className="overflow-none relative w-44 border-none" {...props}>
      <CardHeader>
        <div className="flex items-center gap-3 p-0 mb-0">
          <p className="text-sm font-medium text-white">{title}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 pb-0 mb-0">
        <Link className="pb-2 cursor-pointer text-tiny overflow-scroll">
          {location}
        </Link>
        <div className="flex gap-5 px-2 pb-2 text-sm">
          {time.toDateString()}
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button
          fullWidth
          size="sm"
          variant="flat"
          className="border-small text-tiny border-white/20 bg-white/10 text-white border-none bg-green-950"
        >
          Manage Event
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(EventCardComponent);
