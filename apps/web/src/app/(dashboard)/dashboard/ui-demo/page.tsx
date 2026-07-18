"use client";

import { useState } from "react";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  EmptyState,
  FormField,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  PageHeader,
  PageSection,
  SectionHeader,
  Skeleton,
  Stack,
  Textarea,
} from "../../../../components/ui";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "../../../../components/dashboard/breadcrumb";

import { useToast } from "../../../../components/ui/toast";

export default function UIDemoPage() {
  const [open, setOpen] = useState(false);

  const { success, error, info, warning } = useToast();

  return (
    <Container className="py-10">
      <Stack gap="lg">
        <Breadcrumb>
          <BreadcrumbItem href="/dashboard">
            Dashboard
          </BreadcrumbItem>

          <span className="text-slate-400">/</span>

          <BreadcrumbItem current>
            UI Demo
          </BreadcrumbItem>
        </Breadcrumb>

        <PageHeader
          title="UI Components"
          description="Preview of the Infinity Tools design system."
        />

        <Divider />

        {/* Cards */}

        <PageSection>
          <SectionHeader
            title="Cards"
            description="Available card variants."
          />

          <Grid cols={2}>
            <Card>
              <CardHeader>
                Default Card
              </CardHeader>

              <CardContent>
                Basic card component.
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardHeader>
                Outlined Card
              </CardHeader>

              <CardContent>
                Outlined style.
              </CardContent>
            </Card>

            <Card variant="glass">
              <CardHeader>
                Glass Card
              </CardHeader>

              <CardContent>
                Glassmorphism effect.
              </CardContent>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                Elevated Card
              </CardHeader>

              <CardContent>
                Elevated shadow style.
              </CardContent>
            </Card>
          </Grid>
        </PageSection>

        {/* Badges */}

        <PageSection>
          <SectionHeader
            title="Badges"
            description="Status indicators."
          />

          <div className="flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </PageSection>

        {/* Forms */}

        <PageSection>
          <SectionHeader
            title="Forms"
            description="Shared form components."
          />

          <Card>
            <CardContent className="space-y-6 pt-6">
              <FormField
                label="Full Name"
                htmlFor="name"
                required
              >
                <Input
                  id="name"
                  placeholder="John Doe"
                />
              </FormField>

              <FormField
                label="Email"
                htmlFor="email"
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                />
              </FormField>

              <FormField
                label="About"
                htmlFor="about"
              >
                <Textarea
                  id="about"
                  placeholder="Tell us something..."
                />
              </FormField>

              <Button>Submit</Button>
            </CardContent>
          </Card>
        </PageSection>

        {/* Modal */}

        <PageSection>
          <SectionHeader
            title="Modal"
            description="Production-ready modal component."
          />

          <Button onClick={() => setOpen(true)}>
            Open Modal
          </Button>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
          >
            <ModalHeader>
              <h2 className="text-xl font-bold">
                Demo Modal
              </h2>

              <ModalCloseButton
                onClick={() => setOpen(false)}
              />
            </ModalHeader>

            <ModalBody>
              This modal demonstrates the production-ready modal
              component built for Infinity Tools.
            </ModalBody>

            <ModalFooter>
              <Button
                variant="ghost"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                onClick={() => setOpen(false)}
              >
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        </PageSection>

        {/* Toast */}

        <PageSection>
          <SectionHeader
            title="Toast Notifications"
            description="Notification system."
          />

          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                success("Success!", "Everything worked.")
              }
            >
              Success
            </Button>

            <Button
              variant="danger"
              onClick={() =>
                error("Error!", "Something went wrong.")
              }
            >
              Error
            </Button>

            <Button
              variant="secondary"
              onClick={() =>
                info("Info", "Just letting you know.")
              }
            >
              Info
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                warning("Warning", "Please check your input.")
              }
            >
              Warning
            </Button>
          </div>
        </PageSection>

        {/* Skeleton */}

        <PageSection>
          <SectionHeader
            title="Skeleton"
            description="Loading placeholder."
          />

          <Skeleton className="h-24 w-full rounded-xl" />
        </PageSection>

        {/* Empty State */}

        <PageSection>
          <SectionHeader
            title="Empty State"
            description="Placeholder when no data exists."
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