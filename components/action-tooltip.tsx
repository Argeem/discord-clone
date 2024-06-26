"use client"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

interface ActionTooltipProp {
    label: string;
    children: React.ReactNode;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}

export const ActionTooltip = ({
    label,
    children,
    side,
    align
}:ActionTooltipProp) => {
    return(
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align}>
                    {label.toLowerCase()}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}