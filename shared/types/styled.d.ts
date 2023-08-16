import { TodoPriority } from "@/shared/types";
import { CSSProperties } from "react";
import { TodoPriority } from "../constants";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        500: CSSProperties["color"];
        400: CSSProperties["color"];
      };
      danger: {
        400: CSSProperties["color"];
        500: CSSProperties["color"];
      };
      todoPriority: Record<TodoPriority, CSSProperties["color"]>;
      background: CSSProperties["color"];
      text: CSSProperties["color"];
    };
  }
}
