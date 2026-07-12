import {
  Card,
  CardContent,
  Grid,
} from "../../../../components/ui";

export default function GridDemoPage() {
  return (
    <Grid cols={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Card key={item}>
          <CardContent>
            <div className="flex h-24 items-center justify-center rounded-xl bg-slate-100 text-lg font-bold text-slate-700">
              Card {item}
            </div>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}