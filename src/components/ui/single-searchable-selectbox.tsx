"use client";
import { useState, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react"; // Import the ChevronDown icon
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  useFormContext,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";
import { useDebounce } from "@/hooks/use-debounce";

interface Option {
  value: string | number; // Allow value to be either string or number
  label: string;
}

interface SelectBoxProps<T> {
  options?: Option[];
  placeholder?: string;
  fieldName?: Path<T>; // Specify the field name as a Path<T>
  onChange: (value: string | number) => void; // onChange accepts both string and number
  defaultValue?: string | number; // defaultValue can be either string or number
  className?: string; // New className prop
}

export const SingleSearchableSelectBox = <T extends FieldValues>({
  options,
  placeholder,
  fieldName,
  onChange,
  defaultValue,
  className, // Destructure className
}: SelectBoxProps<T>) => {
  const [open, setOpen] = useState(false);
  const [value, setOption] = useState<string | number>(defaultValue || ""); // value can be string or number
  const [searchTerm, setSearchTerm] = useState<string>("");

  const debouncedSearchTerm = useDebounce(searchTerm, 300); // 300ms delay

  const onValueChange = (currentValue: string | number) => {
    onChange(currentValue);
    setOption(currentValue);
    setOpen(false);
    setSearchTerm("");
  };

  const lowerCasedSearchTerm = debouncedSearchTerm.toLowerCase();

  const filteredOptions = lowerCasedSearchTerm
    ? options?.filter((option) => {
        const lowerCasedLabel = option.label.toLowerCase();
        return lowerCasedLabel.includes(lowerCasedSearchTerm);
      })
    : options;

  useEffect(() => {
    setOption(defaultValue || "");
  }, [defaultValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between pr-10 relative py-3",
            className
          )}
        >
          {value || value === 0
            ? options?.find((option) => option.value === value)?.label
            : `${placeholder}...`}
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 left-100">
        {/* <Command>
          <CommandInput
            placeholder="Search..."
            onValueChange={(val) => setSearchTerm(val)}
          />
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {filteredOptions?.map((option) => (
                <CommandItem
                  key={option.value} // Use `option.value` here for uniqueness
                  value={option.value.toString()} // Convert value to string for handling
                  onSelect={() => onValueChange(option.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command> */}
      </PopoverContent>
    </Popover>
  );
};
