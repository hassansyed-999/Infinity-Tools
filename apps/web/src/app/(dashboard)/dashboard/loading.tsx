import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Skeleton,
} from "../../../components/ui";

export default function Loading() {
  return (
    <div className="space-y-8">
      <Grid cols={4}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <CardContent>
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        ))}
      </Grid>

      <Card>
        <CardHeader>
          <Skeleton className="h-8 w-56" />
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}