import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  EmptyState,
  Grid,
  PageHeader,
  PageSection,
  SectionHeader,
  Skeleton,
  Stack,
} from "../../../../components/ui";

export default function UIDemoPage() {
  return (
    <Container className="py-10">
      <Stack gap="lg">
        <PageHeader
          title="UI Components"
          description="Preview of the shared UI component library."
        />

        <Divider />

        <PageSection>
          <SectionHeader
            title="Cards"
            description="Reusable card components."
          />

          <Grid cols={3}>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-slate-900">
                  Card One
                </h3>
              </CardHeader>

              <CardContent>
                This is the first card.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-slate-900">
                  Card Two
                </h3>
              </CardHeader>

              <CardContent>
                This is the second card.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold text-slate-900">
                  Card Three
                </h3>
              </CardHeader>

              <CardContent>
                This is the third card.
              </CardContent>
            </Card>
          </Grid>
        </PageSection>

        <PageSection>
          <SectionHeader
            title="Badges"
            description="Badge examples."
          />

          <div className="flex flex-wrap gap-3">
            <Badge>AI</Badge>
            <Badge>New</Badge>
            <Badge>Featured</Badge>
          </div>
        </PageSection>

        <PageSection>
          <SectionHeader
            title="Skeleton"
            description="Loading placeholder."
          />

          <Skeleton className="h-24 w-full" />
        </PageSection>

        <PageSection>
          <SectionHeader
            title="Empty State"
            description="Placeholder component."
          />

          <EmptyState
            title="No Projects"
            description="Create your first project to get started."
          />
        </PageSection>
      </Stack>
    </Container>
  );
}