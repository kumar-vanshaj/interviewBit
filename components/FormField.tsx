/**
 * Component: FormField
 * Purpose: A reusable form field component that integrates react-hook-form's Controller
 * with a styled input field, label, and error message.
 * Supports types: text, email, password, and file.
 */

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

/**
 * FormFieldProps
 *
 * Props for the reusable FormField component, strongly typed to work with react-hook-form.
 *
 * @template T - The form data type extending FieldValues (provided by react-hook-form)
 * @property control - The control object from react-hook-form used to connect the field to form state
 * @property name - The name/path of the field in the form's schema
 * @property label - The label text to display above the input
 * @property placeholder - (Optional) Placeholder text inside the input
 * @property type - (Optional) Input type, supports text, email, password, or file (defaults to text)
 */
interface FormFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = ({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<any>) => (
  // Use react-hook-form's Controller to connect input to form state
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        {/* Render input label */}
        <FormLabel className="label">{label}</FormLabel>

        {/* Render the actual input field with binding */}
        <FormControl>
          <Input
            className="input"
            placeholder={placeholder}
            type={type}
            {...field}
          />
        </FormControl>

        {/* Display field validation error if any */}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
