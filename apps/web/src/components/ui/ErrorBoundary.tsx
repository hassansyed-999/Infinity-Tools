"use client";

import React, { ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="rounded-3xl border border-red-200 bg-red-50 p-8 text-center">
            <h2 className="text-2xl font-bold text-red-700">
              Something went wrong
            </h2>

            <p className="mt-3 text-slate-600">
              Please refresh the page or try again later.
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}