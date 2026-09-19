import * as React from "react";

/* Thin React wrappers over the .mx-* classes in src/winmx.css.
   No styles are duplicated here — the stylesheet remains the source of truth.
   Requires the core stylesheet to be loaded and a `.mx-app` ancestor
   (use <WinMXApp>). Build: this file is TSX source; see README for bundlers. */

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export { cn };

/* Root scope: sets black background, white text, selection + scrollbars. */
export function WinMXApp({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("mx-app", className)} {...props} />;
}

/* ---------------------------------------------------------------- Button */

export type ButtonTone = "neutral" | "primary" | "danger";
export type ButtonVariant = "solid" | "ghost";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends React.ComponentProps<"button"> {
  tone?: ButtonTone;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  tone = "neutral",
  variant = "solid",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      type={type}
      className={cn(
        "mx-btn",
        tone !== "neutral" && `mx-btn--${tone}`,
        variant === "ghost" && "mx-btn--ghost",
        size === "sm" && "mx-btn--sm",
        className,
      )}
      {...props}
    />
  );
}

/* ----------------------------------------------------------------- Inputs */

export function Input({
  className,
  ...props
}: React.ComponentProps<"input">): React.ReactElement {
  return <input className={cn("mx-input", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">): React.ReactElement {
  return <textarea className={cn("mx-textarea", className)} {...props} />;
}

export function Select({
  className,
  ...props
}: React.ComponentProps<"select">): React.ReactElement {
  return <select className={cn("mx-select", className)} {...props} />;
}

export function Label({
  className,
  ...props
}: React.ComponentProps<"label">): React.ReactElement {
  return <label className={cn("mx-label", className)} {...props} />;
}

/* Accent colour comes from the .mx-app scope. */
export function Checkbox({
  className,
  ...props
}: React.ComponentProps<"input">): React.ReactElement {
  return <input type="checkbox" className={className} {...props} />;
}

/* ----------------------------------------------------------------- Panels */

export function Panel({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("mx-panel", className)} {...props} />;
}

export function PanelHeader({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("mx-panel__header", className)} {...props} />;
}

export function PanelBody({
  className,
  ...props
}: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("mx-panel__body", className)} {...props} />;
}

/* --------------------------------------------------------------- Progress */

export type ProgressTone = "green" | "cyan" | "yellow" | "red";

export interface ProgressProps extends React.ComponentProps<"div"> {
  value?: number;
  max?: number;
  tone?: ProgressTone;
  indeterminate?: boolean;
}

export function Progress({
  value = 0,
  max = 100,
  tone = "green",
  indeterminate = false,
  className,
  ...props
}: ProgressProps): React.ReactElement {
  const pct = max > 0 ? Math.min(100, Math.max(0, (value / max) * 100)) : 0;
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={indeterminate ? undefined : value}
      className={cn(
        "mx-progress",
        tone !== "green" && `mx-progress--${tone}`,
        indeterminate && "mx-progress--indeterminate",
        className,
      )}
      {...props}
    >
      <div className="mx-progress__fill" style={indeterminate ? undefined : { width: `${pct}%` }} />
    </div>
  );
}

/* ------------------------------------------------------------- Badge/Alert */

export type BadgeTone =
  | "gray" | "green" | "cyan" | "blue" | "yellow"
  | "orange" | "red" | "magenta" | "purple" | "olive";

export interface BadgeProps extends React.ComponentProps<"span"> {
  tone?: BadgeTone;
}

export function Badge({
  tone = "gray",
  className,
  ...props
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn("mx-badge", tone !== "gray" && `mx-badge--${tone}`, className)}
      {...props}
    />
  );
}

export type AlertTone = "success" | "info" | "warning" | "notice" | "danger";

export interface AlertProps extends React.ComponentProps<"div"> {
  tone?: AlertTone;
}

export function Alert({
  tone = "info",
  className,
  ...props
}: AlertProps): React.ReactElement {
  return (
    <div
      role="alert"
      className={cn("mx-alert", `mx-alert--${tone}`, className)}
      {...props}
    />
  );
}

/* ------------------------------------------------------------- Status/Chat */

export type StatusState =
  | "connected" | "connecting" | "secondary"
  | "primary" | "disconnected" | "unknown";

export interface StatusProps extends React.ComponentProps<"span"> {
  state?: StatusState;
}

export function Status({
  state = "unknown",
  className,
  ...props
}: StatusProps): React.ReactElement {
  return (
    <span className={cn("mx-status", `mx-status--${state}`, className)} {...props} />
  );
}

export function Divider({
  className,
  ...props
}: React.ComponentProps<"hr">): React.ReactElement {
  return <hr className={cn("mx-divider", className)} {...props} />;
}

/* ------------------------------------------------------------------- Table */

export function Table({ className, ...props }: React.ComponentProps<"table">) {
  return <table className={cn("mx-table", className)} {...props} />;
}
export function THead(props: React.ComponentProps<"thead">) {
  return <thead {...props} />;
}
export function TBody(props: React.ComponentProps<"tbody">) {
  return <tbody {...props} />;
}
export function Tr(props: React.ComponentProps<"tr">) {
  return <tr {...props} />;
}
export interface ThProps extends React.ComponentProps<"th"> {
  numeric?: boolean;
}
export function Th({ numeric, className, ...props }: ThProps) {
  return <th className={cn(numeric && "mx-num", className)} {...props} />;
}
export interface TdProps extends React.ComponentProps<"td"> {
  numeric?: boolean;
}
export function Td({ numeric, className, ...props }: TdProps) {
  return <td className={cn(numeric && "mx-num", className)} {...props} />;
}

/* -------------------------------------------------------------------- Chat */

export type ChatMessageKind =
  | "user" | "system" | "join" | "warning" | "error"
  | "link" | "mention" | "time" | "topic" | "bot" | "admin";

export interface ChatProps extends React.ComponentProps<"div"> {
  mono?: boolean;
}

export function Chat({ mono, className, ...props }: ChatProps): React.ReactElement {
  return <div className={cn("mx-chat", mono && "mx-chat--mono", className)} {...props} />;
}

export interface ChatMessageProps extends React.ComponentProps<"p"> {
  kind?: ChatMessageKind;
}

export function ChatMessage({
  kind,
  className,
  ...props
}: ChatMessageProps): React.ReactElement {
  return <p className={cn("mx-msg", kind && `mx-msg--${kind}`, className)} {...props} />;
}
