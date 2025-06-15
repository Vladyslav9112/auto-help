import { Suspense } from "react";
import Form from "./Form";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <Form />
    </Suspense>
  );
}
