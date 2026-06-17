"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
  section?: string;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (process.env.NODE_ENV === "development") {
      console.error(`[ErrorBoundary${this.props.section ? `: ${this.props.section}` : ""}]`, error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div
          role="alert"
          className="rounded-xl border border-navy/10 bg-white p-6 text-center shadow-sm"
        >
          <p className="font-heading text-lg font-semibold text-navy">Something went wrong</p>
          <p className="mt-2 text-sm text-muted">
            This section could not load. The rest of the website is still available.
          </p>
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
            className="mt-4 rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-gold-light"
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
