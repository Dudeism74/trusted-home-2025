import assert from "node:assert/strict";
import test from "node:test";
import { isValidEmailAddress } from "../app/lib/email-address.ts";

test("email validation preserves accepted addresses and rejects malformed input", () => {
  for (const address of ["reader@example.com", "reader+news@sub.example.com"]) {
    assert.equal(isValidEmailAddress(address), true);
  }
  for (const address of ["", "reader", "reader@@example.com", "reader @example.com"]) {
    assert.equal(isValidEmailAddress(address), false);
  }
});

test("overlong adversarial email input is rejected before pattern evaluation", () => {
  assert.equal(isValidEmailAddress("!@!." + "!.".repeat(500_000) + " "), false);
  assert.equal(isValidEmailAddress("x".repeat(243) + "@example.com"), false);
  assert.equal(isValidEmailAddress("x".repeat(242) + "@example.com"), true);
});
