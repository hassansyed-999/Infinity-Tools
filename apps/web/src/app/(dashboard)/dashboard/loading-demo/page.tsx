import {
  Card,
  CardContent,
  CardHeader,
  Skeleton,
} from "../../../../components/ui";

export default function LoadingDemoPage() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-48" />
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-2/3" />

            <div className="pt-4">
              <Skeleton className="h-12 w-40 rounded-xl" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-28 w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}