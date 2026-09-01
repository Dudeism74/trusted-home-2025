"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function PrintChecklistButton({ className }: { className?: string }) {
  function printChecklist() {
    window.gtag?.("event", "print_home_maintenance_checklist", {
      event_category: "engagement",
      event_label: "home-maintenance-checklist",
    });
    window.print();
  }

  return (
    <button className={className} type="button" onClick={printChecklist}>
      Print or save as PDF
    </button>
  );
}
