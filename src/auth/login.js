// Synthetic demo file used only for GitHub UI screenshots.
// No real credentials or production code.

export function validateLogin(input) {
  if (!input || !input.email || !input.password) {
    return { ok: false, reason: "missing_fields" };
  }
  return { ok: true };
}

// demo: tighten boundary validation
