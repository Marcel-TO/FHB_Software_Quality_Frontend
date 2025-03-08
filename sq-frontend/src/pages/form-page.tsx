import { MovingForm } from "@/components/custom/moving-form";

export default function FormPage() {
  return (
    <div
      className="
        flex min-h-svh w-full items-center justify-center p-6 md:p-10
        bg-linear-300 from-[#360033] to-[#0b8793]"
    >
      <div className="w-full max-w-sm">
        <MovingForm />
      </div>
    </div>
  );
}
