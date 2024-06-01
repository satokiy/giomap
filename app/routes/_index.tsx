import type { MetaFunction } from "@remix-run/cloudflare";
import * as GIO from "giojs";
import { useEffect, useRef } from "react";

const initCountry = "JP";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

export default function Index() {
  const ref = useRef(null);

  useEffect(() => {
    const controller = new GIO.Controller(ref.current, {
      control: {
        initCountry,
      },
    });

    controller.init();
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ width: 1440, height: 800 }} ref={ref} />;
    </div>
  );
}
