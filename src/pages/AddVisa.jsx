import { Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

const AddVisa = () => {
  const { register } = useForm();

  return (
    <main>
      <div className="container">
        <form action="">
          <div>
            <Label>Country Image</Label>
            <TextInput
              {...register("country_image")}
              type="text"
              placeholder="Image URL"
              required
            />
          </div>

          <div>
            <Label>Country Name</Label>
            <TextInput
              {...register("country_name")}
              type="text"
              placeholder="Country Name"
              required
            />
          </div>

          <div>
            <Label>Visa Type</Label>
            <Select {...register("visa_type")} required>
              <option value="Work Visa">Work Visa</option>
              <option value="Student Visa">Student Visa</option>
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Immigrant Visa">Immigrant Visa</option>
            </Select>
          </div>

          <div>
            <Label>Proccessing Time</Label>
            <TextInput
              {...register("proccessing_time")}
              type="text"
              placeholder="Proccessing Time"
              required
            />
          </div>

          <div>
            <Label>Required Documents</Label>
            <div className="flex items-center gap-2">
              <Checkbox id="accept"  />
              <Label htmlFor="accept">
                
              </Label>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default AddVisa;
