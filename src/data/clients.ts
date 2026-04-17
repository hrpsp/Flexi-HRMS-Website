export type Client = {
  name: string;
  // Tag for later logo-asset swap. For Phase 2 we render text-name placeholders.
  category?: "telecom" | "bfsi" | "manufacturing" | "retail" | "healthcare" | "utilities" | "other";
};

export const clients: Client[] = [
  { name: "Jazz", category: "telecom" },
  { name: "JazzCash", category: "bfsi" },
  { name: "Ufone", category: "telecom" },
  { name: "PTCL", category: "telecom" },
  { name: "Zong", category: "telecom" },
  { name: "Mobilink Bank", category: "bfsi" },
  { name: "HBL", category: "bfsi" },
  { name: "JS Bank", category: "bfsi" },
  { name: "Zindigi", category: "bfsi" },
  { name: "Abhi", category: "bfsi" },
  { name: "U Bank", category: "bfsi" },
  { name: "Jubilee Life", category: "bfsi" },
  { name: "Descon", category: "manufacturing" },
  { name: "Engro", category: "manufacturing" },
  { name: "Tofflon", category: "manufacturing" },
  { name: "Sitara", category: "manufacturing" },
  { name: "Popular Group", category: "manufacturing" },
  { name: "Bata", category: "retail" },
  { name: "Servis", category: "retail" },
  { name: "Vivo Pakistan", category: "retail" },
  { name: "Rang Rasiya", category: "retail" },
  { name: "Noor Brands", category: "retail" },
  { name: "Chughtai Lab", category: "healthcare" },
  { name: "MEPCO", category: "utilities" },
  { name: "PSDF", category: "other" },
  { name: "Skyline", category: "other" },
  { name: "Union Developers", category: "other" },
  { name: "Blue World City", category: "other" },
  { name: "TRSChem", category: "manufacturing" },
  { name: "Airlink", category: "retail" },
];
