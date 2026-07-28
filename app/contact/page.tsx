import { permanentRedirect } from "next/navigation";

export default function LegacyContactPage() {
  permanentRedirect("/about");
}
