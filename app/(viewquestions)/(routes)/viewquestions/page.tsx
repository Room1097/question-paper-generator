import ViewQuestions from "@/components/ViewQuestions/viewQuestions";
import { Separator } from "@/components/ui/separator";
export default function Admin() {
  return (
    <div className="flex gap-8 pl-16 flex-col items-center pt-12 w-full h-screen">
      <h1 className="text-3xl w-full text-left pl-[20rem]">
        View Questions Page
      </h1>
      <Separator />
      <ViewQuestions />
    </div>
  );
}
