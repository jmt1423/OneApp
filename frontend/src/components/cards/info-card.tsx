"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Listbox,
  ListboxItem,
  Tooltip,
  type CardProps,
} from "@nextui-org/react";

interface InfoCardProps extends CardProps {
  title?: string;
  buttonText?: string;
  cardData?: { title: string, note: string }[];
}

const ListBoxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full mb-0 border-small rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export function InfoCard({
  title = "Default Title",
  buttonText = "Default Button Text",
  ...props
}: InfoCardProps) {
  return (
    <Card
      className="overflow-none relative w-full border-small border-foreground/10"
      {...props}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar
            className="border-small border-white/20 bg-transparent"
          />
          <p className="text-large font-medium text-white">{title}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3 pb-0 mb-0">
        <div className="flex gap-5 px-2 pb-2">
          <ListBoxWrapper>
            <Listbox
              isVirtualized
              className="max-w-full max-h-[175px]"
              virtualization={{
                maxListboxHeight: 175,
                itemHeight: 35,
              }}
            >
              {props.cardData
                ? props.cardData.map((item, index) => (
                  <ListboxItem key={index} value={item.title}>
                    <Tooltip content={item.note} placement="right" color="secondary">
                      <span>{item.title}</span>
                    </Tooltip>
                  </ListboxItem>
                ))
                : null}
            </Listbox>
          </ListBoxWrapper>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">
        <Button fullWidth className="border-small border-white/20 bg-white/10 text-white">
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
}

