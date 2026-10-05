import { process } from "@/lib/home";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";

export function Process() {
  return (
    <ProcessSteps
      eyebrow={process.eyebrow}
      title={process.title}
      steps={process.steps}
      note="After you share your documents, we take it from drafting to delivery and update you at every step."
    />
  );
}
