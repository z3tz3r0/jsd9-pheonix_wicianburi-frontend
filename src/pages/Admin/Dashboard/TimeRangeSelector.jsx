import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from 'react';

const TimeRangeSelector = ({ options, currentTimeRange, onTimeRangeChange }) => {
  return (
    <div className="**:cursor-pointer px-4 lg:px-6">
      <ToggleGroup
        type="single"
        value={currentTimeRange}
        onValueChange={(value) => value && onTimeRangeChange(value)}
        variant="outline"
        className="@[767px]:flex hidden"
      >
        {options.map((option) => (
          <ToggleGroupItem key={option.value} value={option.value} className="h-8 px-4">
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
      <Select value={currentTimeRange} onValueChange={onTimeRangeChange}>
        <SelectTrigger
          className="@[767px]:hidden flex w-40"
          aria-label="Select time range"
        >
          <SelectValue placeholder="Select time range" />
        </SelectTrigger>

        {/* The dropdown that handles the timeframe selections */}
        <SelectContent className="cursor-pointer rounded-xl">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} className="rounded-lg">
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>

      </Select>
    </div>
  )
}

export default TimeRangeSelector