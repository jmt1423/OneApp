import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";
import { Link, useLocation } from "react-router";

export const Sidebar = React.memo(({ items, className, isCompact }: any) => {

  const location = useLocation();

  return (
    <div
      className={cn(
        "fixed left-4 top-1/2 transform -translate-y-1/2 h-[90vh] bg-zinc-900 text-white shadow-lg rounded-lg flex flex-col items-center justify-center",
        isCompact ? "w-16" : "w-72",
        className
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 py-4 h-full w-full">
        {items.map((item: any) => {
          const isActive = location.pathname === item.href;
          return (
            <div
              key={item.key}
              className={cn(
                "w-full flex items-center justify-center",
                isCompact ? "h-12" : "px-3"
              )}
            >
              {isCompact ? (
                <Tooltip
                  content={item.title}
                  placement="right"
                  className="z-50 text-black"
                >
                  <Link to={item.href} viewTransition>
                    <Icon
                      className={cn(
                        "text-default-500",
                        isActive && "text-primary"
                      )}
                      icon={item.icon}
                      width={24}
                    />
                  </Link>
                </Tooltip>
              ) : (
                <Icon
                  className={cn("text-default-500", isActive && "text-primary")}
                  icon={item.icon}
                  width={24}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
});

