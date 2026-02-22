import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { INTRO_MESSAGES } from "./Message";
import AssistantBubble from "./AssistantBubble";
import AssistantPanel from "./AssistantPanel";

export default function SmartAssistant() {
  const location = useLocation();

  const [expanded, setExpanded] = useState(true);
  const [open, setOpen] = useState(false);

  const message =
    INTRO_MESSAGES[location.pathname] ||
    "👋 Welcome! Explore around 🙂";

  useEffect(() => {
    setExpanded(true);

    const timer = setTimeout(() => {
      setExpanded(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AssistantBubble
        expanded={expanded}
        message={message}
        onClick={() => setOpen((p) => !p)}
      />

      {open && <AssistantPanel onClose={() => setOpen(false)} />}
    </>
  );
}