export const getAIMessage = async (userQuery) => {
  const q = userQuery.toLowerCase();

  let content = "I'm not sure about that. Can you provide more details?";

  if (q.includes("ps11752778")) {
    content =
      "To install part number PS11752778, first unplug the appliance for safety. Remove the access panel or component covering the old part, disconnect the wiring harness, and remove any mounting screws. Install the new part by reversing these steps, reconnect the wiring, secure it in place, and restore power. Refer to your appliance’s service manual for model-specific instructions.";
  } 
  else if (q.includes("wdt780saem1") || q.includes("compatible")) {
    content =
      "Yes, part number PS11752778 is compatible with the Whirlpool WDT780SAEM1 model. Always double-check compatibility using your appliance’s full model number before purchasing.";
  } 
  else if (q.includes("ice maker") || q.includes("not working")) {
    content =
      "If the ice maker on your Whirlpool refrigerator is not working, check that the freezer temperature is set between 0–5°F, ensure the water supply line is connected and not frozen, and confirm the ice maker is turned on. Inspect the water inlet valve and replace the ice maker assembly if necessary.";
  }

  return {
    role: "assistant",
    content : content
  };
};