import { Spinner } from "@/components/ui/spinner";

const Loading = () => (
  <div className="flex items-center gap-4">
    <Spinner className="size-10" />
    <h2 className="text-xl">Loading</h2>
  </div>
);

export default Loading;
