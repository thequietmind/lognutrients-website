import { lazy } from "react";

const HomeMDX = lazy(() => import("@pages/index.mdx"));
const PrivacyPolicyMDX = lazy(() => import("@pages/privacy-policy.mdx"));

export const pages = [
  {
    name: "Home",
    route: "/",
    component: HomeMDX,
    isDefault: true,
  },
  {
    name: "Privacy Policy",
    route: "/privacy-policy",
    component: PrivacyPolicyMDX,
  },
];
